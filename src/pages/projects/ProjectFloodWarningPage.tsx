import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Droplets, Brain, Zap, AlertTriangle, TrendingUp, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectFloodWarningPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/experience" className="inline-flex items-center space-x-2 text-accent-teal hover:text-accent-orange transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-text-light">Flood Early Warning System</h1>
                <p className="text-text-gray">Real-time flood prediction using satellite data and machine learning</p>
              </div>
            </div>
            
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-text-light mb-4">Project Overview</h2>
              <p className="text-text-gray leading-relaxed">
                Our flood early warning system uses Sentinel-2 satellite data and advanced machine learning algorithms 
                to predict flood events in real-time. The system monitors water levels, precipitation patterns, and 
                terrain conditions to provide early warnings to communities along the Tana River Basin.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
