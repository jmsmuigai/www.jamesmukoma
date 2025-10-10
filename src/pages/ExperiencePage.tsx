import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Brain, 
  Zap, 
  Target,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ExternalLink,
  MapPin,
  Calendar
} from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const projects = [
    {
      id: 'asal-platform',
      title: 'ASAL Integrated Resource Management Platform',
      description: 'A comprehensive AI-powered system for monitoring and managing resources in Arid and Semi-Arid Lands.',
      status: 'In Development',
      progress: 75,
      technologies: ['Google Earth Engine', 'Python', 'React', 'Firebase'],
      location: 'Garissa County, Kenya',
      impact: 'Monitoring 50,000+ hectares of rangeland',
      link: '/projects/asal-integrated-platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mathenge-detection',
      title: 'Mathenge Invasive Species Detection',
      description: 'AI-powered satellite imagery analysis to detect and monitor the spread of invasive Mathenge plants.',
      status: 'In Development',
      progress: 60,
      technologies: ['TensorFlow', 'Google Earth Engine', 'Computer Vision'],
      location: 'Garissa County, Kenya',
      impact: 'Tracking 15,000+ hectares of affected land',
      link: '/projects/mathenge-detection',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'flood-warning',
      title: 'Flood Early Warning System',
      description: 'Real-time flood prediction system using satellite data and machine learning algorithms.',
      status: 'In Development',
      progress: 80,
      technologies: ['Sentinel-2', 'Machine Learning', 'Google Cloud'],
      location: 'Tana River Basin, Kenya',
      impact: 'Protecting 100,000+ residents',
      link: '/projects/flood-early-warning',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'cow-recognition',
      title: 'Cow Muzzle Recognition System',
      description: 'Computer vision system for cattle identification and tracking to prevent rustling.',
      status: 'In Development',
      progress: 45,
      technologies: ['Computer Vision', 'TensorFlow', 'IoT'],
      location: 'Garissa County, Kenya',
      impact: 'Monitoring 5,000+ cattle',
      link: '/projects/cow-recognition',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Google Cloud Partner',
      description: 'Certified Google Cloud Professional with expertise in AI/ML services',
      year: '2023'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Serving over 100,000 people through environmental monitoring solutions',
      year: '2024'
    },
    {
      icon: TrendingUp,
      title: 'AI Innovation',
      description: 'Deployed 50+ AI models for environmental and humanitarian applications',
      year: '2024'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Solutions implemented across 5 continents',
      year: '2024'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-success';
      case 'In Development': return 'text-warning';
      case 'Planning': return 'text-info';
      default: return 'text-text-gray';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'from-success to-emerald-500';
    if (progress >= 60) return 'from-warning to-yellow-500';
    if (progress >= 40) return 'from-info to-blue-500';
    return 'from-error to-red-500';
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-text-light">
              Our <span className="aura-gradient">Experience</span>
            </h1>
            <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              Transforming environmental and humanitarian challenges through innovative AI solutions. 
              Explore our ongoing projects and see how we're making a global impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Featured <span className="aura-gradient">Projects</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Real-world applications of AI technology solving critical environmental and humanitarian challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:scale-105 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-light group-hover:text-accent-teal transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-text-gray">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)} bg-opacity-20`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-text-gray mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-text-light">Progress</span>
                    <span className="text-sm text-text-gray">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-dark-gray rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-2 bg-gradient-to-r ${getProgressColor(project.progress)} rounded-full`}
                    ></motion.div>
                  </div>
                </div>

                {/* Impact & Technologies */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-accent-orange" />
                    <span className="text-sm text-text-gray">Impact: <span className="text-text-light">{project.impact}</span></span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent-teal bg-opacity-20 text-accent-teal rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  to={project.link}
                  className="btn-primary w-full flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Key <span className="aura-gradient">Achievements</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 tech-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-deep-blue" />
                  </div>
                  <div className="text-sm font-semibold text-accent-orange mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-bold text-text-light mb-3">{achievement.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-teal opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light">
              Ready to Start Your <span className="aura-gradient">AI Journey</span>?
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Join us in creating innovative AI solutions that make a real difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary flex items-center space-x-2">
                <span>Explore Services</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
