from flask import Blueprint, request, jsonify
import os
import logging
import hashlib
import hmac
import base64
import requests
import json
from datetime import datetime, timedelta
from typing import Dict, Any, Optional

logger = logging.getLogger(__name__)
payment_bp = Blueprint('payment_bp', __name__)

# M-Pesa API Configuration
MPESA_CONFIG = {
    'consumer_key': os.environ.get('MPESA_CONSUMER_KEY', ''),
    'consumer_secret': os.environ.get('MPESA_CONSUMER_SECRET', ''),
    'business_short_code': os.environ.get('MPESA_BUSINESS_SHORT_CODE', '174379'),
    'passkey': os.environ.get('MPESA_PASSKEY', ''),
    'callback_url': os.environ.get('MPESA_CALLBACK_URL', 'https://aura-api.com/api/payment/callback'),
    'base_url': os.environ.get('MPESA_BASE_URL', 'https://sandbox.safaricom.co.ke')
}

# Payment status tracking (in production, use a proper database)
payment_transactions: Dict[str, Dict[str, Any]] = {}

class MPesaAPI:
    """M-Pesa API integration class"""
    
    def __init__(self):
        self.access_token = None
        self.token_expires = None
    
    def get_access_token(self) -> Optional[str]:
        """Get M-Pesa API access token"""
        try:
            # Check if token is still valid
            if self.access_token and self.token_expires and datetime.now() < self.token_expires:
                return self.access_token
            
            # Request new token
            url = f"{MPESA_CONFIG['base_url']}/oauth/v1/generate?grant_type=client_credentials"
            
            auth_string = f"{MPESA_CONFIG['consumer_key']}:{MPESA_CONFIG['consumer_secret']}"
            encoded_auth = base64.b64encode(auth_string.encode()).decode()
            
            headers = {
                'Authorization': f'Basic {encoded_auth}',
                'Content-Type': 'application/json'
            }
            
            response = requests.get(url, headers=headers)
            
            if response.status_code == 200:
                data = response.json()
                self.access_token = data.get('access_token')
                expires_in = data.get('expires_in', 3600)
                self.token_expires = datetime.now() + timedelta(seconds=expires_in - 60)
                
                logger.info("M-Pesa access token obtained successfully")
                return self.access_token
            else:
                logger.error(f"Failed to get M-Pesa access token: {response.status_code}")
                return None
                
        except Exception as e:
            logger.error(f"Error getting M-Pesa access token: {e}")
            return None
    
    def generate_timestamp(self) -> str:
        """Generate M-Pesa API timestamp"""
        return datetime.now().strftime('%Y%m%d%H%M%S')
    
    def generate_password(self, timestamp: str) -> str:
        """Generate M-Pesa API password"""
        data_to_encode = f"{MPESA_CONFIG['business_short_code']}{MPESA_CONFIG['passkey']}{timestamp}"
        encoded = base64.b64encode(data_to_encode.encode()).decode()
        return encoded
    
    def stk_push(self, phone_number: str, amount: int, account_reference: str, transaction_desc: str) -> Dict[str, Any]:
        """Initiate STK Push payment"""
        try:
            access_token = self.get_access_token()
            if not access_token:
                return {'success': False, 'error': 'Failed to get access token'}
            
            timestamp = self.generate_timestamp()
            password = self.generate_password(timestamp)
            
            # Format phone number (remove + and ensure it starts with 254)
            formatted_phone = phone_number.replace('+', '').replace(' ', '')
            if formatted_phone.startswith('0'):
                formatted_phone = '254' + formatted_phone[1:]
            elif not formatted_phone.startswith('254'):
                formatted_phone = '254' + formatted_phone
            
            url = f"{MPESA_CONFIG['base_url']}/mpesa/stkpush/v1/processrequest"
            
            headers = {
                'Authorization': f'Bearer {access_token}',
                'Content-Type': 'application/json'
            }
            
            payload = {
                'BusinessShortCode': MPESA_CONFIG['business_short_code'],
                'Password': password,
                'Timestamp': timestamp,
                'TransactionType': 'CustomerPayBillOnline',
                'Amount': amount,
                'PartyA': formatted_phone,
                'PartyB': MPESA_CONFIG['business_short_code'],
                'PhoneNumber': formatted_phone,
                'CallBackURL': MPESA_CONFIG['callback_url'],
                'AccountReference': account_reference,
                'TransactionDesc': transaction_desc
            }
            
            response = requests.post(url, headers=headers, json=payload)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('ResponseCode') == '0':
                    # Store transaction details
                    checkout_request_id = data.get('CheckoutRequestID')
                    payment_transactions[checkout_request_id] = {
                        'phone_number': formatted_phone,
                        'amount': amount,
                        'account_reference': account_reference,
                        'transaction_desc': transaction_desc,
                        'status': 'pending',
                        'created_at': datetime.now().isoformat(),
                        'merchant_request_id': data.get('MerchantRequestID'),
                        'customer_message': data.get('CustomerMessage')
                    }
                    
                    logger.info(f"STK Push initiated successfully: {checkout_request_id}")
                    return {
                        'success': True,
                        'checkout_request_id': checkout_request_id,
                        'customer_message': data.get('CustomerMessage'),
                        'merchant_request_id': data.get('MerchantRequestID')
                    }
                else:
                    logger.error(f"STK Push failed: {data.get('ResponseDescription')}")
                    return {
                        'success': False,
                        'error': data.get('ResponseDescription', 'STK Push failed')
                    }
            else:
                logger.error(f"STK Push request failed: {response.status_code}")
                return {
                    'success': False,
                    'error': f'HTTP {response.status_code}: {response.text}'
                }
                
        except Exception as e:
            logger.error(f"Error initiating STK Push: {e}")
            return {'success': False, 'error': str(e)}

# Initialize M-Pesa API
mpesa_api = MPesaAPI()

@payment_bp.route('/stk-push', methods=['POST'])
def initiate_stk_push():
    """Initiate M-Pesa STK Push payment"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['phone_number', 'amount', 'account_reference', 'transaction_desc']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}',
                    'timestamp': datetime.utcnow().isoformat()
                }), 400
        
        phone_number = data['phone_number']
        amount = int(data['amount'])
        account_reference = data['account_reference']
        transaction_desc = data['transaction_desc']
        
        # Validate amount (minimum 1 KES, maximum 150,000 KES)
        if amount < 1 or amount > 150000:
            return jsonify({
                'success': False,
                'error': 'Amount must be between 1 and 150,000 KES',
                'timestamp': datetime.utcnow().isoformat()
            }), 400
        
        # Initiate STK Push
        result = mpesa_api.stk_push(phone_number, amount, account_reference, transaction_desc)
        
        if result['success']:
            return jsonify({
                'success': True,
                'message': 'Payment initiated successfully',
                'data': {
                    'checkout_request_id': result['checkout_request_id'],
                    'customer_message': result['customer_message'],
                    'amount': amount,
                    'phone_number': phone_number
                },
                'timestamp': datetime.utcnow().isoformat()
            })
        else:
            return jsonify({
                'success': False,
                'error': result['error'],
                'timestamp': datetime.utcnow().isoformat()
            }), 400
            
    except Exception as e:
        logger.error(f"Error in STK Push endpoint: {e}")
        return jsonify({
            'success': False,
            'error': 'Internal server error',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@payment_bp.route('/callback', methods=['POST'])
def payment_callback():
    """Handle M-Pesa payment callback"""
    try:
        data = request.get_json()
        
        # Log the callback data
        logger.info(f"M-Pesa callback received: {json.dumps(data, indent=2)}")
        
        # Extract transaction details
        body = data.get('Body', {})
        stk_callback = body.get('stkCallback', {})
        checkout_request_id = stk_callback.get('CheckoutRequestID')
        
        if not checkout_request_id:
            logger.error("No CheckoutRequestID in callback")
            return jsonify({'success': False, 'error': 'Invalid callback data'}), 400
        
        # Update transaction status
        if checkout_request_id in payment_transactions:
            callback_metadata = stk_callback.get('CallbackMetadata', {})
            items = callback_metadata.get('Item', [])
            
            # Extract payment details
            payment_details = {}
            for item in items:
                payment_details[item['Name']] = item['Value']
            
            # Update transaction record
            payment_transactions[checkout_request_id].update({
                'status': 'completed' if stk_callback.get('ResultCode') == 0 else 'failed',
                'result_code': stk_callback.get('ResultCode'),
                'result_desc': stk_callback.get('ResultDesc'),
                'mpesa_receipt_number': payment_details.get('MpesaReceiptNumber'),
                'transaction_date': payment_details.get('TransactionDate'),
                'callback_received_at': datetime.utcnow().isoformat()
            })
            
            logger.info(f"Payment callback processed: {checkout_request_id}")
            
            # Here you would typically:
            # 1. Update your database
            # 2. Send confirmation email
            # 3. Trigger any post-payment actions
            # 4. Update project status, etc.
            
            return jsonify({
                'success': True,
                'message': 'Callback processed successfully',
                'checkout_request_id': checkout_request_id
            })
        else:
            logger.warning(f"Unknown checkout request ID: {checkout_request_id}")
            return jsonify({
                'success': False,
                'error': 'Transaction not found'
            }), 404
            
    except Exception as e:
        logger.error(f"Error processing payment callback: {e}")
        return jsonify({
            'success': False,
            'error': 'Callback processing failed'
        }), 500

@payment_bp.route('/transaction/<checkout_request_id>', methods=['GET'])
def get_transaction_status(checkout_request_id: str):
    """Get transaction status"""
    try:
        if checkout_request_id in payment_transactions:
            transaction = payment_transactions[checkout_request_id]
            return jsonify({
                'success': True,
                'transaction': transaction,
                'timestamp': datetime.utcnow().isoformat()
            })
        else:
            return jsonify({
                'success': False,
                'error': 'Transaction not found',
                'timestamp': datetime.utcnow().isoformat()
            }), 404
            
    except Exception as e:
        logger.error(f"Error retrieving transaction: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve transaction',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@payment_bp.route('/transactions', methods=['GET'])
def list_transactions():
    """List all transactions"""
    try:
        # In production, implement pagination and filtering
        transactions = list(payment_transactions.values())
        
        return jsonify({
            'success': True,
            'transactions': transactions,
            'total_count': len(transactions),
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error listing transactions: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to list transactions',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@payment_bp.route('/quote', methods=['POST'])
def generate_quote():
    """Generate project quote for payment"""
    try:
        data = request.get_json()
        
        # Extract project details
        project_type = data.get('project_type', 'consultation')
        duration = data.get('duration', '1 month')
        complexity = data.get('complexity', 'medium')
        
        # Calculate quote based on project parameters
        base_prices = {
            'consultation': 50000,
            'geoai_analysis': 150000,
            'custom_ai_agent': 200000,
            'full_ecosystem': 500000,
            'training': 100000
        }
        
        complexity_multipliers = {
            'low': 0.8,
            'medium': 1.0,
            'high': 1.5,
            'enterprise': 2.0
        }
        
        base_price = base_prices.get(project_type, 50000)
        complexity_multiplier = complexity_multipliers.get(complexity, 1.0)
        
        # Apply duration multiplier
        duration_multipliers = {
            '1 week': 0.3,
            '2 weeks': 0.5,
            '1 month': 1.0,
            '2 months': 1.8,
            '3 months': 2.5,
            '6 months': 4.0
        }
        
        duration_multiplier = duration_multipliers.get(duration, 1.0)
        
        total_amount = int(base_price * complexity_multiplier * duration_multiplier)
        
        # Generate quote details
        quote = {
            'quote_id': f"QUO-{datetime.now().strftime('%Y%m%d%H%M%S')}",
            'project_type': project_type,
            'duration': duration,
            'complexity': complexity,
            'base_price': base_price,
            'total_amount': total_amount,
            'breakdown': {
                'base_service': base_price,
                'complexity_adjustment': int((complexity_multiplier - 1) * base_price),
                'duration_adjustment': int((duration_multiplier - 1) * base_price * complexity_multiplier)
            },
            'created_at': datetime.utcnow().isoformat(),
            'valid_until': (datetime.now() + timedelta(days=30)).isoformat()
        }
        
        return jsonify({
            'success': True,
            'quote': quote,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error generating quote: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to generate quote',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@payment_bp.route('/health', methods=['GET'])
def payment_health():
    """Health check for payment service"""
    return jsonify({
        'success': True,
        'service': 'payment',
        'status': 'healthy',
        'mpesa_configured': bool(MPESA_CONFIG['consumer_key'] and MPESA_CONFIG['consumer_secret']),
        'active_transactions': len(payment_transactions),
        'timestamp': datetime.utcnow().isoformat()
    })
