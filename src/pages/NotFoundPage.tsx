import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  Brain, 
  Globe,
  Zap
} from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Brain },
    { name: 'Dashboard', path: '/dashboard', icon: Globe },
    { name: 'Contact', path: '/contact', icon: Zap }
  ];

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="text-8xl md:text-9xl font-bold aura-gradient mb-4">
              404
            </div>
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent-teal to-accent-orange rounded-full flex items-center justify-center"
            >
              <Brain className="w-8 h-8 text-deep-blue" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-text-light">
              Page Not Found
            </h1>
            <p className="text-xl text-text-gray max-w-2xl mx-auto leading-relaxed">
              Looks like our AI got a bit confused! The page you're looking for doesn't exist, 
              but don't worry - we've got plenty of amazing content to explore.
            </p>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Search className="w-6 h-6 text-accent-teal" />
              <span className="font-semibold text-text-light">AI Fun Fact</span>
            </div>
            <p className="text-text-gray">
              Even the most advanced AI systems occasionally encounter "404 errors" in their neural networks. 
              It's a reminder that continuous learning and adaptation are key to intelligence - both artificial and human!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/" className="btn-primary flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-secondary flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="pt-8"
          >
            <h3 className="text-lg font-semibold text-text-light mb-6">
              Popular Pages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="card p-4 text-center group hover:scale-105 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-accent-teal mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-text-light">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="card p-6 max-w-2xl mx-auto"
          >
            <h3 className="text-lg font-semibold text-text-light mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-text-gray mb-4">
              Our AI assistant is always ready to help you navigate our platform and find exactly what you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary flex-1 flex items-center justify-center space-x-2">
                <span>Contact Support</span>
              </Link>
              <Link to="/dashboard" className="btn-secondary flex-1 flex items-center justify-center space-x-2">
                <span>View Dashboard</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
