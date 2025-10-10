import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Globe, 
  Brain, 
  Zap, 
  Target,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Database,
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectASALPage: React.FC = () => {
  const features = [
    {
      title: 'Real-time Rangeland Monitoring',
      description: 'Continuous monitoring of pasture availability and degradation rates',
      icon: Globe,
      status: 'Active',
      progress: 85
    },
    {
      title: 'Water Resource Management',
      description: 'Aquifer level monitoring and seasonal availability prediction',
      icon: Database,
      status: 'Active',
      progress: 75
    },
    {
      title: 'Early Warning Systems',
      description: 'AI-powered flood and drought prediction using meteorological data',
      icon: AlertTriangle,
      status: 'Development',
      progress: 60
    },
    {
      title: 'Community Health Tracking',
      description: 'Monitoring mobile pastoralist migration and health service access',
      icon: Users,
      status: 'Planning',
      progress: 30
    }
  ];

  const metrics = [
    {
      label: 'Hectares Monitored',
      value: '50,000+',
      change: '+15%',
      changeType: 'positive',
      icon: Target
    },
    {
      label: 'Communities Served',
      value: '25',
      change: '+3',
      changeType: 'positive',
      icon: Users
    },
    {
      label: 'Data Points Processed',
      value: '2.4M',
      change: '+25%',
      changeType: 'positive',
      icon: Database
    },
    {
      label: 'Accuracy Rate',
      value: '94%',
      change: '+2%',
      changeType: 'positive',
      icon: TrendingUp
    }
  ];

  const technologies = [
    'Google Earth Engine',
    'Python & TensorFlow',
    'React & TypeScript',
    'Firebase & Firestore',
    'Google Cloud Functions',
    'Sentinel-2 Satellite Data',
    'Machine Learning Models',
    'Real-time APIs'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-12 border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link 
              to="/experience" 
              className="inline-flex items-center space-x-2 text-accent-teal hover:text-accent-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Projects</span>
            </Link>
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-text-light">
                  ASAL Integrated Resource Management Platform
                </h1>
                <p className="text-text-gray mt-2">Comprehensive AI-powered environmental monitoring system</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-text-light mb-6">Project Overview</h2>
                <div className="card p-8">
                  <p className="text-lg text-text-gray leading-relaxed mb-6">
                    The ASAL Integrated Resource Management Platform is a comprehensive AI-powered system designed 
                    to tackle the unique challenges of Arid and Semi-Arid Lands. This unified platform leverages 
                    advanced GeoAI to provide a holistic view of environmental resources and dynamics.
                  </p>
                  <p className="text-text-gray leading-relaxed">
                    Built on Google Cloud infrastructure, the platform integrates satellite imagery, IoT sensors, 
                    and machine learning models to deliver real-time insights for sustainable resource management 
                    and community resilience.
                  </p>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-text-light mb-6">Platform Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.title} className="card p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-bold text-text-light">{feature.title}</h3>
                              <span className={`px-2 py-1 rounded text-xs ${
                                feature.status === 'Active' 
                                  ? 'bg-success bg-opacity-20 text-success' 
                                  : feature.status === 'Development'
                                  ? 'bg-warning bg-opacity-20 text-warning'
                                  : 'bg-info bg-opacity-20 text-info'
                              }`}>
                                {feature.status}
                              </span>
                            </div>
                            <p className="text-text-gray text-sm mb-3">{feature.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-text-gray">Progress</span>
                              <span className="text-xs text-text-light">{feature.progress}%</span>
                            </div>
                            <div className="w-full bg-dark-gray rounded-full h-2 mt-1">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${feature.progress}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="h-2 bg-gradient-to-r from-accent-teal to-accent-orange rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-text-light mb-6">Technology Stack</h2>
                <div className="card p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="p-3 bg-accent-teal bg-opacity-10 border border-accent-teal border-opacity-20 rounded-lg text-center"
                      >
                        <span className="text-sm text-accent-teal font-medium">{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-text-light mb-6">Project Metrics</h3>
                <div className="space-y-4">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div key={metric.label} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon className="w-5 h-5 text-accent-teal" />
                          <span className="text-sm text-text-gray">{metric.label}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-text-light">{metric.value}</div>
                          <div className={`text-xs ${metric.changeType === 'positive' ? 'text-success' : 'text-error'}`}>
                            {metric.change}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <h3 className="text-xl font-bold text-text-light mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-accent-orange" />
                    <div>
                      <div className="text-sm text-text-gray">Location</div>
                      <div className="text-text-light font-medium">Garissa County, Kenya</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-accent-teal" />
                    <div>
                      <div className="text-sm text-text-gray">Duration</div>
                      <div className="text-text-light font-medium">Ongoing (2021-Present)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-accent-orange" />
                    <div>
                      <div className="text-sm text-text-gray">Team Size</div>
                      <div className="text-text-light font-medium">8 Specialists</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cloud className="w-5 h-5 text-accent-teal" />
                    <div>
                      <div className="text-sm text-text-gray">Infrastructure</div>
                      <div className="text-text-light font-medium">Google Cloud Platform</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-6 bg-gradient-to-r from-accent-orange to-accent-teal bg-opacity-10"
              >
                <h3 className="text-xl font-bold text-text-light mb-4">Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-text-gray">25 communities actively monitored</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-text-gray">50,000+ hectares under surveillance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-text-gray">94% prediction accuracy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-text-gray">Real-time data processing</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-text-light">
              Interested in Similar Solutions?
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Let's discuss how we can adapt this platform for your specific environmental monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Start a Project</span>
                <Zap className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary flex items-center space-x-2">
                <span>View Services</span>
                <BarChart3 className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
