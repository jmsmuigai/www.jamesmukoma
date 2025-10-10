from flask import Blueprint, request, jsonify
import logging
from datetime import datetime, timedelta
from typing import Dict, List, Any
import random

logger = logging.getLogger(__name__)
analytics_bp = Blueprint('analytics_bp', __name__)

# Sample analytics data (in production, use a proper analytics service)
ANALYTICS_DATA = {
    'page_views': {
        'total': 15420,
        'unique': 8930,
        'today': 245,
        'this_week': 1680,
        'this_month': 6540
    },
    'traffic_sources': [
        {'source': 'Direct', 'visits': 4200, 'percentage': 27.2},
        {'source': 'Google Search', 'visits': 3800, 'percentage': 24.6},
        {'source': 'LinkedIn', 'visits': 2100, 'percentage': 13.6},
        {'source': 'GitHub', 'visits': 1800, 'percentage': 11.7},
        {'source': 'Twitter', 'visits': 1200, 'percentage': 7.8},
        {'source': 'Referral', 'visits': 2320, 'percentage': 15.1}
    ],
    'top_pages': [
        {'path': '/', 'views': 3200, 'unique_views': 2100, 'avg_time': 145},
        {'path': '/about', 'views': 2100, 'unique_views': 1800, 'avg_time': 98},
        {'path': '/experience', 'views': 1800, 'unique_views': 1500, 'avg_time': 234},
        {'path': '/services', 'views': 1500, 'unique_views': 1200, 'avg_time': 187},
        {'path': '/contact', 'views': 1200, 'unique_views': 1100, 'avg_time': 156}
    ],
    'device_types': [
        {'type': 'Desktop', 'count': 8900, 'percentage': 57.7},
        {'type': 'Mobile', 'count': 5200, 'percentage': 33.7},
        {'type': 'Tablet', 'count': 1320, 'percentage': 8.6}
    ],
    'geographic_data': [
        {'country': 'Kenya', 'visits': 4200, 'percentage': 27.2},
        {'country': 'United States', 'visits': 3200, 'percentage': 20.7},
        {'country': 'United Kingdom', 'visits': 1800, 'percentage': 11.7},
        {'country': 'Canada', 'visits': 1200, 'percentage': 7.8},
        {'country': 'Germany', 'visits': 900, 'percentage': 5.8},
        {'country': 'Other', 'visits': 4120, 'percentage': 26.8}
    ],
    'chat_interactions': {
        'total_messages': 1250,
        'sessions': 340,
        'avg_messages_per_session': 3.7,
        'top_questions': [
            'What is GeoAI?',
            'How can AURA help my organization?',
            'What projects are you working on?',
            'How much do your services cost?',
            'Can you help with flood prediction?'
        ]
    }
}

@analytics_bp.route('/overview', methods=['GET'])
def get_analytics_overview():
    """Get analytics overview"""
    try:
        return jsonify({
            'success': True,
            'analytics': ANALYTICS_DATA,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving analytics overview: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve analytics overview',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/page-views', methods=['GET'])
def get_page_views():
    """Get page views data"""
    try:
        period = request.args.get('period', '30d')
        
        # Generate sample time series data
        days = 30 if period == '30d' else 7 if period == '7d' else 1
        
        page_views_data = []
        for i in range(days):
            date = datetime.now() - timedelta(days=days-1-i)
            views = random.randint(50, 200)
            unique_views = int(views * 0.7)
            
            page_views_data.append({
                'date': date.strftime('%Y-%m-%d'),
                'views': views,
                'unique_views': unique_views
            })
        
        return jsonify({
            'success': True,
            'data': page_views_data,
            'period': period,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving page views: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve page views data',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/traffic-sources', methods=['GET'])
def get_traffic_sources():
    """Get traffic sources data"""
    try:
        return jsonify({
            'success': True,
            'traffic_sources': ANALYTICS_DATA['traffic_sources'],
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving traffic sources: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve traffic sources',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/top-pages', methods=['GET'])
def get_top_pages():
    """Get top pages data"""
    try:
        limit = int(request.args.get('limit', 10))
        pages = ANALYTICS_DATA['top_pages'][:limit]
        
        return jsonify({
            'success': True,
            'top_pages': pages,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving top pages: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve top pages data',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/device-types', methods=['GET'])
def get_device_types():
    """Get device types data"""
    try:
        return jsonify({
            'success': True,
            'device_types': ANALYTICS_DATA['device_types'],
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving device types: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve device types data',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/geographic', methods=['GET'])
def get_geographic_data():
    """Get geographic data"""
    try:
        return jsonify({
            'success': True,
            'geographic_data': ANALYTICS_DATA['geographic_data'],
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving geographic data: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve geographic data',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/chat-analytics', methods=['GET'])
def get_chat_analytics():
    """Get chat analytics data"""
    try:
        return jsonify({
            'success': True,
            'chat_analytics': ANALYTICS_DATA['chat_interactions'],
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving chat analytics: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve chat analytics',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/track', methods=['POST'])
def track_event():
    """Track analytics event"""
    try:
        data = request.get_json()
        
        # Validate required fields
        event_type = data.get('event_type')
        page_path = data.get('page_path')
        
        if not event_type or not page_path:
            return jsonify({
                'success': False,
                'error': 'Missing required fields: event_type, page_path',
                'timestamp': datetime.utcnow().isoformat()
            }), 400
        
        # In production, this would store the event in a database
        # For now, we'll just log it
        logger.info(f"Analytics event tracked: {event_type} on {page_path}")
        
        return jsonify({
            'success': True,
            'message': 'Event tracked successfully',
            'event_type': event_type,
            'page_path': page_path,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error tracking event: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to track event',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/real-time', methods=['GET'])
def get_real_time_data():
    """Get real-time analytics data"""
    try:
        # Generate real-time data
        current_time = datetime.utcnow()
        
        real_time_data = {
            'active_users': random.randint(5, 25),
            'page_views_last_hour': random.randint(20, 80),
            'chat_messages_last_hour': random.randint(0, 10),
            'top_current_pages': [
                {'path': '/', 'active_users': random.randint(2, 8)},
                {'path': '/about', 'active_users': random.randint(1, 5)},
                {'path': '/experience', 'active_users': random.randint(1, 4)},
                {'path': '/services', 'active_users': random.randint(0, 3)},
                {'path': '/contact', 'active_users': random.randint(0, 2)}
            ],
            'current_events': [
                {'type': 'page_view', 'path': '/', 'timestamp': current_time.isoformat()},
                {'type': 'chat_message', 'content': 'What is GeoAI?', 'timestamp': (current_time - timedelta(minutes=5)).isoformat()},
                {'type': 'download', 'file': 'resume.pdf', 'timestamp': (current_time - timedelta(minutes=10)).isoformat()}
            ]
        }
        
        return jsonify({
            'success': True,
            'real_time_data': real_time_data,
            'timestamp': current_time.isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving real-time data: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve real-time data',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@analytics_bp.route('/health', methods=['GET'])
def analytics_health():
    """Health check for analytics service"""
    return jsonify({
        'success': True,
        'service': 'analytics',
        'status': 'healthy',
        'data_points': sum(len(v) if isinstance(v, list) else 1 for v in ANALYTICS_DATA.values()),
        'timestamp': datetime.utcnow().isoformat()
    })
