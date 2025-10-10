import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Target,
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';
import { ParticleBackground } from '../components/ui/ParticleBackground';

export const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Custom AI agents and automated workflows built on Google Cloud infrastructure',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global GeoAI Platform',
      description: 'Advanced geospatial analysis and environmental monitoring systems worldwide',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built on Google\'s secure infrastructure with advanced privacy protection',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Automation',
      description: 'Instant data processing and automated decision-making systems',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Target },
    { label: 'Countries Served', value: '25+', icon: Globe },
    { label: 'AI Models Deployed', value: '100+', icon: Brain },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ];

  const testimonials = [
    {
      quote: "AURA Intelligence transformed our environmental monitoring with cutting-edge AI solutions.",
      author: "Dr. Sarah Kim",
      role: "Environmental Scientist",
      rating: 5
    },
    {
      quote: "The GeoAI platform revolutionized how we track and predict environmental changes.",
      author: "Prof. Michael Chen",
      role: "Climate Researcher",
      rating: 5
    },
    {
      quote: "Outstanding technical expertise and innovative approach to solving complex challenges.",
      author: "Dr. Amina Hassan",
      role: "Development Partner",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-dark-gray to-deep-blue opacity-90"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                <span className="block text-text-light">Welcome to</span>
                <span className="block aura-gradient">AURA Intelligence</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-text-gray max-w-4xl mx-auto leading-relaxed"
              >
                Global AI Solutions Platform transforming environmental and humanitarian challenges 
                through intelligent automation and GeoAI technologies.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/services" className="btn-primary flex items-center space-x-2">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center space-x-2">
                <span>Start Your Project</span>
                <Users className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="w-8 h-8 text-accent-teal" />
                    </div>
                    <div className="text-3xl font-bold text-text-light">{stat.value}</div>
                    <div className="text-sm text-text-gray">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Why Choose <span className="aura-gradient">AURA Intelligence</span>?
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep domain expertise to deliver 
              solutions that make a real difference in the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card card-hover text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-light mb-4">{feature.title}</h3>
                  <p className="text-text-gray leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              What Our <span className="aura-gradient">Partners Say</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Trusted by leading organizations worldwide for innovative AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-orange fill-current" />
                  ))}
                </div>
                <blockquote className="text-text-gray italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-text-light">{testimonial.author}</div>
                  <div className="text-sm text-text-gray">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
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
              Ready to Transform Your <span className="aura-gradient">Organization</span>?
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Join the AI revolution with AURA Intelligence. Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="btn-primary flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/dashboard" className="btn-secondary flex items-center space-x-2">
                <span>View Live Demo</span>
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
