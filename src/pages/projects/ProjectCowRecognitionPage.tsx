import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Brain, Zap, Target, TrendingUp, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCowRecognitionPage: React.FC = () => {
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
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-text-light">Cow Muzzle Recognition System</h1>
                <p className="text-text-gray">Computer vision system for cattle identification and tracking</p>
              </div>
            </div>
            
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-text-light mb-4">Project Overview</h2>
              <p className="text-text-gray leading-relaxed">
                Our cow muzzle recognition system uses advanced computer vision and machine learning to identify 
                individual cattle by their unique muzzle patterns. This technology helps prevent cattle rustling, 
                improves vaccination tracking, and enhances rangeland management for pastoralist communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
