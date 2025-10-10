from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv
import logging
from datetime import datetime
import json

# Import blueprints
from blueprints.chat_blueprint import chat_bp
from blueprints.gee_blueprint import gee_bp
from blueprints.projects_blueprint import projects_bp
from blueprints.analytics_blueprint import analytics_bp
from blueprints.payment_blueprint import payment_bp

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('logs/aura_api.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def create_app():
    """Application factory pattern"""
    app = Flask(__name__)
    
    # Configuration
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'aura-secret-key-2024')
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size
    
    # Configure CORS
    CORS(app, resources={
        r"/api/*": {
            "origins": [
                "http://localhost:3000",
                "http://localhost:5173",
                "http://127.0.0.1:3000",
                "http://127.0.0.1:5173",
                "https://jmsmuigai.github.io",
                "https://www.aura.com",
                "https://aura.com"
            ],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization", "X-Requested-With"]
        }
    })
    
    # Register blueprints
    app.register_blueprint(chat_bp, url_prefix='/api/chat')
    app.register_blueprint(gee_bp, url_prefix='/api/gee')
    app.register_blueprint(projects_bp, url_prefix='/api/projects')
    app.register_blueprint(analytics_bp, url_prefix='/api/analytics')
    app.register_blueprint(payment_bp, url_prefix='/api/payment')
    
    # Health check endpoint
    @app.route('/')
    def index():
        return jsonify({
            "message": "AURA Intelligence API v2.0",
            "status": "healthy",
            "timestamp": datetime.utcnow().isoformat(),
            "version": "2.0.0"
        })
    
    @app.route('/api/health')
    def health_check():
        return jsonify({
            "status": "healthy",
            "timestamp": datetime.utcnow().isoformat(),
            "services": {
                "database": "connected",
                "gemini": "connected",
                "gee": "connected",
                "payment": "connected"
            }
        })
    
    # API documentation endpoint
    @app.route('/api/docs')
    def api_docs():
        return jsonify({
            "title": "AURA Intelligence API",
            "version": "2.0.0",
            "description": "RESTful API for AURA Intelligence portfolio and services",
            "endpoints": {
                "chat": "/api/chat - AI chatbot powered by Gemini",
                "gee": "/api/gee - Google Earth Engine data processing",
                "projects": "/api/projects - Project management and data",
                "analytics": "/api/analytics - Website analytics and metrics",
                "payment": "/api/payment - Payment processing (M-Pesa integration)"
            },
            "authentication": "API Key required for certain endpoints",
            "rate_limits": {
                "chat": "100 requests per hour",
                "gee": "50 requests per hour",
                "analytics": "1000 requests per hour"
            }
        })
    
    # Error handlers
    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            "error": "Bad Request",
            "message": "The request could not be understood by the server",
            "status_code": 400
        }), 400
    
    @app.errorhandler(401)
    def unauthorized(error):
        return jsonify({
            "error": "Unauthorized",
            "message": "Authentication required",
            "status_code": 401
        }), 401
    
    @app.errorhandler(403)
    def forbidden(error):
        return jsonify({
            "error": "Forbidden",
            "message": "Access denied",
            "status_code": 403
        }), 403
    
    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            "error": "Not Found",
            "message": "The requested resource was not found",
            "status_code": 404
        }), 404
    
    @app.errorhandler(429)
    def rate_limit_exceeded(error):
        return jsonify({
            "error": "Rate Limit Exceeded",
            "message": "Too many requests. Please try again later.",
            "status_code": 429
        }), 429
    
    @app.errorhandler(500)
    def internal_error(error):
        logger.error(f"Internal server error: {error}")
        return jsonify({
            "error": "Internal Server Error",
            "message": "An unexpected error occurred",
            "status_code": 500
        }), 500
    
    # Request logging middleware
    @app.before_request
    def log_request_info():
        logger.info(f"Request: {request.method} {request.path} from {request.remote_addr}")
    
    @app.after_request
    def log_response_info(response):
        logger.info(f"Response: {response.status_code} for {request.method} {request.path}")
        return response
    
    return app

# Create the app instance
app = create_app()

if __name__ == '__main__':
    # Create logs directory if it doesn't exist
    os.makedirs('logs', exist_ok=True)
    
    # Get configuration from environment
    debug = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    port = int(os.environ.get('PORT', 5000))
    host = os.environ.get('HOST', '0.0.0.0')
    
    logger.info(f"Starting AURA Intelligence API on {host}:{port}")
    logger.info(f"Debug mode: {debug}")
    
    app.run(host=host, port=port, debug=debug)
