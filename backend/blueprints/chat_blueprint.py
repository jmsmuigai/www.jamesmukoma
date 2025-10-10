from flask import Blueprint, request, jsonify
import google.generativeai as genai
import os
import logging
from datetime import datetime
import json
from typing import List, Dict, Any

logger = logging.getLogger(__name__)
chat_bp = Blueprint('chat_bp', __name__)

# Initialize Gemini AI
try:
    gemini_api_key = os.environ.get("GEMINI_API_KEY")
    if not gemini_api_key:
        raise ValueError("GEMINI_API_KEY not found in environment variables.")
    
    genai.configure(api_key=gemini_api_key)
    model = genai.GenerativeModel('gemini-pro')
    logger.info("Gemini Pro Model Initialized Successfully.")
except Exception as e:
    logger.error(f"Error initializing Gemini Pro: {e}")
    model = None

# Enhanced system instruction for AURA Intelligence
SYSTEM_INSTRUCTION = '''
You are AURA, the advanced AI assistant for James Mukoma's AURA Intelligence portfolio. You represent a state-of-the-art GeoAI consultancy specializing in intelligent automation and sustainable impact solutions.

**About James Mukoma & AURA Intelligence:**
- James is a GeoAI Consultant & Applied AI Specialist based in Nairobi, Kenya
- Founder of AURA Intelligence (Automated Unified Resource Architecture)
- Expert in Google Earth Engine, AI automation, and sustainable development
- Works with development partners (WFP, UNHCR, USAID) and businesses globally
- Focuses on ASAL regions like Garissa County for community-centric solutions

**Core Expertise:**
- Google Earth Engine (GEE) mastery for environmental monitoring
- Custom AI agent development using Gemini and Google Cloud
- Real-time data processing and predictive analytics
- Ethical AI implementation and responsible technology deployment
- Community-driven solutions for humanitarian and environmental challenges

**Active Projects in Garissa County:**
1. **Project Sentinel** - Flood & Drought Early Warning System using Sentinel data
2. **Project Verdant** - Rangeland & Livestock AI for cattle identification and management
3. **Project TerraForm** - Invasive Species AI for Mathenge plant monitoring and water aquifer impact
4. **Project Harvest** - AI for Soil & Crop Yield prediction using attention-based CNN models
5. **Project Shirika** - Refugee Integration AI for resource allocation and social integration modeling
6. **Project Atlas** - Garissa Living Atlas for ecosystem health monitoring

**Services Offered:**
- AURA Ecosystem Setup (complete automated data ecosystems)
- GeoAI Impact Analysis (flood risk, rangeland health, environmental monitoring)
- Custom AI Agent Development (Gemini-powered specialized agents)
- Responsible AI & Ethics consulting for organizations
- AI Hackathons & Training (Zindi-style challenges, corporate training)
- Smart IoT & CCTV Integration for real-time monitoring systems

**Your Role & Guidelines:**
- Be professional, knowledgeable, and enthusiastic about James's work
- Answer in the language the user asks in (English or Kiswahili)
- When discussing projects, explain the problem, AI solution, and community impact
- When discussing services, emphasize value, automation benefits, and sustainable outcomes
- Guide serious inquiries to the Contact page for formal proposals and pricing
- Keep responses concise but informative (under 120 words unless detailed explanation needed)
- If uncertain about specific details, offer to connect them with James directly
- Always maintain the AURA Intelligence brand voice: innovative, ethical, community-focused

**Contact Information:**
- Email: jmsmuigai@gmail.com
- Location: Nairobi, Kenya
- Specialization: GeoAI, AI Automation, Sustainable Development

Remember: You're representing a real expert with genuine impact in communities. Be authentic, helpful, and focused on sustainable solutions.
'''

# Chat history storage (in production, use a proper database)
chat_history: Dict[str, List[Dict[str, Any]]] = {}

@chat_bp.route('/', methods=['POST'])
def handle_chat():
    """Enhanced chat endpoint with conversation history and context"""
    if not model:
        return jsonify({
            'success': False,
            'error': 'AI service is currently unavailable',
            'timestamp': datetime.utcnow().isoformat()
        }), 503

    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({
                'success': False,
                'error': 'Invalid request format. Message field is required.',
                'timestamp': datetime.utcnow().isoformat()
            }), 400

        user_message = data.get('message', '').strip()
        session_id = data.get('session_id', 'default')
        user_language = data.get('language', 'en')
        
        # Get conversation history for context
        history = chat_history.get(session_id, [])
        
        # Add user message to history
        history.append({
            'role': 'user',
            'content': user_message,
            'timestamp': datetime.utcnow().isoformat()
        })

        # Prepare conversation context
        formatted_history = []
        for msg in history[-10:]:  # Keep last 10 messages for context
            if msg['role'] == 'user':
                formatted_history.append({
                    'parts': [{'text': msg['content']}],
                    'role': 'user'
                })
            else:
                formatted_history.append({
                    'parts': [{'text': msg['content']}],
                    'role': 'model'
                })

        # Create conversation with history
        convo = model.start_chat(history=formatted_history)
        
        # Send system instruction first (if no history)
        if len(formatted_history) <= 1:
            convo.send_message(SYSTEM_INSTRUCTION)
        
        # Get AI response
        response = convo.send_message(user_message)
        ai_response = response.text

        # Add AI response to history
        history.append({
            'role': 'assistant',
            'content': ai_response,
            'timestamp': datetime.utcnow().isoformat()
        })

        # Update chat history
        chat_history[session_id] = history[-20:]  # Keep last 20 messages

        # Log interaction
        logger.info(f"Chat interaction - Session: {session_id}, User: {user_message[:50]}...")

        return jsonify({
            'success': True,
            'reply': ai_response,
            'session_id': session_id,
            'timestamp': datetime.utcnow().isoformat(),
            'context': {
                'message_count': len(history),
                'language': user_language
            }
        })

    except Exception as e:
        logger.error(f"Error during chat processing: {e}")
        return jsonify({
            'success': False,
            'error': 'An error occurred while processing your request. Please try again.',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@chat_bp.route('/history/<session_id>', methods=['GET'])
def get_chat_history(session_id: str):
    """Get chat history for a specific session"""
    try:
        history = chat_history.get(session_id, [])
        return jsonify({
            'success': True,
            'session_id': session_id,
            'history': history,
            'message_count': len(history),
            'timestamp': datetime.utcnow().isoformat()
        })
    except Exception as e:
        logger.error(f"Error retrieving chat history: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve chat history',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@chat_bp.route('/history/<session_id>', methods=['DELETE'])
def clear_chat_history(session_id: str):
    """Clear chat history for a specific session"""
    try:
        if session_id in chat_history:
            del chat_history[session_id]
        
        return jsonify({
            'success': True,
            'message': 'Chat history cleared successfully',
            'session_id': session_id,
            'timestamp': datetime.utcnow().isoformat()
        })
    except Exception as e:
        logger.error(f"Error clearing chat history: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to clear chat history',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@chat_bp.route('/sessions', methods=['GET'])
def get_active_sessions():
    """Get list of active chat sessions"""
    try:
        sessions = [
            {
                'session_id': session_id,
                'message_count': len(history),
                'last_activity': max([msg['timestamp'] for msg in history]) if history else None
            }
            for session_id, history in chat_history.items()
        ]
        
        return jsonify({
            'success': True,
            'sessions': sessions,
            'total_sessions': len(sessions),
            'timestamp': datetime.utcnow().isoformat()
        })
    except Exception as e:
        logger.error(f"Error retrieving sessions: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve sessions',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@chat_bp.route('/analytics', methods=['GET'])
def get_chat_analytics():
    """Get chat analytics and usage statistics"""
    try:
        total_messages = sum(len(history) for history in chat_history.values())
        total_sessions = len(chat_history)
        
        # Calculate daily message counts (simplified)
        today_messages = sum(
            len([msg for msg in history if msg['timestamp'].startswith(datetime.utcnow().strftime('%Y-%m-%d'))])
            for history in chat_history.values()
        )
        
        return jsonify({
            'success': True,
            'analytics': {
                'total_sessions': total_sessions,
                'total_messages': total_messages,
                'messages_today': today_messages,
                'average_messages_per_session': total_messages / total_sessions if total_sessions > 0 else 0
            },
            'timestamp': datetime.utcnow().isoformat()
        })
    except Exception as e:
        logger.error(f"Error retrieving chat analytics: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve analytics',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@chat_bp.route('/health', methods=['GET'])
def chat_health():
    """Health check for chat service"""
    return jsonify({
        'success': True,
        'service': 'chat',
        'status': 'healthy',
        'model_available': model is not None,
        'active_sessions': len(chat_history),
        'timestamp': datetime.utcnow().isoformat()
    })
