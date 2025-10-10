from flask import Blueprint, request, jsonify
import logging
from datetime import datetime
from typing import Dict, List, Any

logger = logging.getLogger(__name__)
projects_bp = Blueprint('projects_bp', __name__)

# Sample project data (in production, use a proper database)
PROJECTS_DATA = {
    'sentinel': {
        'id': 'sentinel',
        'title': 'Project Sentinel: Flood & Drought Early Warning System',
        'description': 'Predictive AI using Sentinel data to create an early warning system for communities along the Tana River.',
        'category': 'environmental',
        'status': 'active',
        'progress': 85,
        'start_date': '2023-06-01',
        'technologies': ['GEE', 'Gemini', 'Cloud Functions', 'Google Colab'],
        'impact': {
            'communities_reached': 25,
            'area_covered': '500 km²',
            'accuracy': '92%'
        },
        'features': [
            'Real-time flood monitoring',
            'Drought prediction models',
            'Community alert system',
            'Mobile app integration'
        ],
        'challenges': [
            'Limited historical data',
            'Network connectivity in remote areas',
            'Community adoption'
        ],
        'solutions': [
            'Satellite data augmentation',
            'Offline-first mobile app',
            'Community training programs'
        ]
    },
    'verdant': {
        'id': 'verdant',
        'title': 'Project Verdant: Rangeland & Livestock AI',
        'description': 'Mapping rangeland health and developing an AI model to identify cattle by muzzle prints for enhanced management.',
        'category': 'agriculture',
        'status': 'active',
        'progress': 70,
        'start_date': '2023-08-15',
        'technologies': ['GEE', 'Vertex AI', 'Google Cloud Storage'],
        'impact': {
            'cattle_tracked': 500,
            'farmers_benefited': 50,
            'accuracy': '88%'
        },
        'features': [
            'Cattle identification system',
            'Rangeland health mapping',
            'Grazing optimization',
            'Health monitoring'
        ],
        'challenges': [
            'Image quality variations',
            'Cattle movement patterns',
            'Data synchronization'
        ],
        'solutions': [
            'Multi-angle image capture',
            'GPS tracking integration',
            'Real-time data sync'
        ]
    },
    'terraform': {
        'id': 'terraform',
        'title': 'Project TerraForm: Invasive Species AI',
        'description': 'A GeoAI system to detect and monitor the invasive Mathenge plant and analyze its impact on water aquifers.',
        'category': 'environmental',
        'status': 'active',
        'progress': 60,
        'start_date': '2023-09-01',
        'technologies': ['GEE', 'BigQuery', 'Looker Studio'],
        'impact': {
            'area_monitored': '1000 km²',
            'aquifer_protection': '15 aquifers',
            'detection_accuracy': '95%'
        },
        'features': [
            'Invasive species detection',
            'Aquifer impact analysis',
            'Eradication planning',
            'Environmental monitoring'
        ],
        'challenges': [
            'Seasonal variations',
            'Similar plant species',
            'Large area coverage'
        ],
        'solutions': [
            'Multi-temporal analysis',
            'Machine learning classification',
            'Distributed monitoring'
        ]
    },
    'harvest': {
        'id': 'harvest',
        'title': 'Project Harvest: AI for Soil & Crop Yield',
        'description': 'An attention-based CNN model that predicts soil nutrient gaps and crop productivity for farmers.',
        'category': 'agriculture',
        'status': 'development',
        'progress': 45,
        'start_date': '2023-10-01',
        'technologies': ['TensorFlow', 'Vertex AI', 'Colab'],
        'impact': {
            'farmers_reached': 100,
            'yield_improvement': '25%',
            'soil_samples': 500
        },
        'features': [
            'Soil analysis AI',
            'Crop yield prediction',
            'Nutrient recommendations',
            'Weather integration'
        ],
        'challenges': [
            'Soil variability',
            'Weather unpredictability',
            'Farmer adoption'
        ],
        'solutions': [
            'Localized models',
            'Ensemble predictions',
            'Training programs'
        ]
    },
    'shirika': {
        'id': 'shirika',
        'title': 'Project Shirika: Refugee Integration AI',
        'description': 'Analyzing the Shirika plan with GeoAI to model resource allocation and social integration patterns for refugees.',
        'category': 'social',
        'status': 'active',
        'progress': 75,
        'start_date': '2023-07-01',
        'technologies': ['GEE', 'BigQuery', 'Gemini', 'Looker Studio'],
        'impact': {
            'refugees_analyzed': 10000,
            'communities_studied': 5,
            'integration_success': '78%'
        },
        'features': [
            'Resource allocation modeling',
            'Social integration analysis',
            'Community impact assessment',
            'Policy recommendations'
        ],
        'challenges': [
            'Data privacy concerns',
            'Cultural sensitivity',
            'Dynamic populations'
        ],
        'solutions': [
            'Privacy-preserving analytics',
            'Community engagement',
            'Real-time updates'
        ]
    },
    'atlas': {
        'id': 'atlas',
        'title': 'Project Atlas: Garissa Living Atlas',
        'description': 'Mapping Garissa County\'s living atlas layers to monitor rangeland degradation and ecosystem health over time.',
        'category': 'research',
        'status': 'active',
        'progress': 90,
        'start_date': '2023-05-01',
        'technologies': ['GEE', 'Google Workspace', 'Looker Studio'],
        'impact': {
            'ecosystems_monitored': 20,
            'degradation_reduced': '30%',
            'data_points': 10000
        },
        'features': [
            'Ecosystem monitoring',
            'Degradation tracking',
            'Trend analysis',
            'Interactive dashboards'
        ],
        'challenges': [
            'Long-term data collection',
            'Ecosystem complexity',
            'Stakeholder coordination'
        ],
        'solutions': [
            'Automated monitoring',
            'Multi-scale analysis',
            'Collaborative platform'
        ]
    }
}

@projects_bp.route('/', methods=['GET'])
def get_all_projects():
    """Get all projects with optional filtering"""
    try:
        category = request.args.get('category')
        status = request.args.get('status')
        limit = int(request.args.get('limit', 10))
        
        projects = list(PROJECTS_DATA.values())
        
        # Apply filters
        if category:
            projects = [p for p in projects if p['category'] == category]
        
        if status:
            projects = [p for p in projects if p['status'] == status]
        
        # Apply limit
        projects = projects[:limit]
        
        return jsonify({
            'success': True,
            'projects': projects,
            'total_count': len(projects),
            'filters': {
                'category': category,
                'status': status,
                'limit': limit
            },
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving projects: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve projects',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@projects_bp.route('/<project_id>', methods=['GET'])
def get_project(project_id: str):
    """Get specific project details"""
    try:
        if project_id not in PROJECTS_DATA:
            return jsonify({
                'success': False,
                'error': 'Project not found',
                'timestamp': datetime.utcnow().isoformat()
            }), 404
        
        project = PROJECTS_DATA[project_id]
        
        return jsonify({
            'success': True,
            'project': project,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving project {project_id}: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve project',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@projects_bp.route('/categories', methods=['GET'])
def get_project_categories():
    """Get available project categories"""
    try:
        categories = list(set(project['category'] for project in PROJECTS_DATA.values()))
        
        return jsonify({
            'success': True,
            'categories': categories,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving categories: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve categories',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@projects_bp.route('/stats', methods=['GET'])
def get_project_stats():
    """Get project statistics"""
    try:
        total_projects = len(PROJECTS_DATA)
        active_projects = len([p for p in PROJECTS_DATA.values() if p['status'] == 'active'])
        completed_projects = len([p for p in PROJECTS_DATA.values() if p['status'] == 'completed'])
        
        category_counts = {}
        for project in PROJECTS_DATA.values():
            category = project['category']
            category_counts[category] = category_counts.get(category, 0) + 1
        
        avg_progress = sum(p['progress'] for p in PROJECTS_DATA.values()) / total_projects
        
        stats = {
            'total_projects': total_projects,
            'active_projects': active_projects,
            'completed_projects': completed_projects,
            'average_progress': round(avg_progress, 1),
            'category_distribution': category_counts,
            'technologies_used': list(set(
                tech for project in PROJECTS_DATA.values() 
                for tech in project['technologies']
            ))
        }
        
        return jsonify({
            'success': True,
            'stats': stats,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error retrieving project stats: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to retrieve project statistics',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@projects_bp.route('/<project_id>/update-progress', methods=['PUT'])
def update_project_progress(project_id: str):
    """Update project progress"""
    try:
        if project_id not in PROJECTS_DATA:
            return jsonify({
                'success': False,
                'error': 'Project not found',
                'timestamp': datetime.utcnow().isoformat()
            }), 404
        
        data = request.get_json()
        new_progress = data.get('progress')
        
        if new_progress is None or not isinstance(new_progress, (int, float)):
            return jsonify({
                'success': False,
                'error': 'Invalid progress value',
                'timestamp': datetime.utcnow().isoformat()
            }), 400
        
        if new_progress < 0 or new_progress > 100:
            return jsonify({
                'success': False,
                'error': 'Progress must be between 0 and 100',
                'timestamp': datetime.utcnow().isoformat()
            }), 400
        
        # Update progress
        PROJECTS_DATA[project_id]['progress'] = new_progress
        
        # Update status based on progress
        if new_progress >= 100:
            PROJECTS_DATA[project_id]['status'] = 'completed'
        elif new_progress > 0:
            PROJECTS_DATA[project_id]['status'] = 'active'
        
        logger.info(f"Updated progress for project {project_id} to {new_progress}%")
        
        return jsonify({
            'success': True,
            'message': 'Project progress updated successfully',
            'project_id': project_id,
            'new_progress': new_progress,
            'timestamp': datetime.utcnow().isoformat()
        })
        
    except Exception as e:
        logger.error(f"Error updating project progress: {e}")
        return jsonify({
            'success': False,
            'error': 'Failed to update project progress',
            'timestamp': datetime.utcnow().isoformat()
        }), 500

@projects_bp.route('/health', methods=['GET'])
def projects_health():
    """Health check for projects service"""
    return jsonify({
        'success': True,
        'service': 'projects',
        'status': 'healthy',
        'total_projects': len(PROJECTS_DATA),
        'timestamp': datetime.utcnow().isoformat()
    })
