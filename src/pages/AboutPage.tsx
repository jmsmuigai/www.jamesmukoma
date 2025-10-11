import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  Users, 
  Globe, 
  Shield, 
  Heart,
  Award,
  BookOpen,
  Lightbulb,
  Code,
  Database,
  Cloud
} from 'lucide-react';
import { ProfileWatermark } from '../components/ui/WatermarkedImage';

export const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Founding Vision',
      description: 'Started with a vision to solve environmental challenges using AI and geospatial technology.',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'First GeoAI Project',
      description: 'Developed the first automated environmental monitoring system for Garissa County.',
      icon: Globe
    },
    {
      year: '2022',
      title: 'Google Partnership',
      description: 'Became a certified Google Cloud partner and integrated Google AI services.',
      icon: Cloud
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across multiple continents.',
      icon: Users
    },
    {
      year: '2024',
      title: 'AI Innovation',
      description: 'Launched advanced AI models for predictive environmental monitoring.',
      icon: Brain
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built on Google\'s secure infrastructure with enterprise-grade privacy protection.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Solutions designed to serve local communities and address real-world challenges.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Ethical AI',
      description: 'Committed to responsible AI development aligned with global sustainability goals.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'Every solution is designed to create measurable positive impact.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const skills = [
    { name: 'Google Cloud Platform', level: 95, icon: Cloud },
    { name: 'AI & Machine Learning', level: 90, icon: Brain },
    { name: 'Geospatial Analysis', level: 88, icon: Globe },
    { name: 'Python Development', level: 92, icon: Code },
    { name: 'Data Engineering', level: 85, icon: Database },
    { name: 'Environmental Science', level: 87, icon: BookOpen }
  ];

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
              About <span className="aura-gradient">AURA Intelligence</span>
            </h1>
            <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              We are pioneers in GeoAI technology, creating intelligent solutions that transform 
              environmental and humanitarian challenges into opportunities for sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-orange rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-deep-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-light">Our Mission</h2>
                </div>
                <p className="text-lg text-text-gray leading-relaxed">
                  To democratize AI technology by creating accessible, secure, and impactful solutions 
                  that address the world's most pressing environmental and humanitarian challenges.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-orange to-accent-teal rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-deep-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-light">Our Vision</h2>
                </div>
                <p className="text-lg text-text-gray leading-relaxed">
                  A world where AI-powered solutions enable every community to monitor, predict, 
                  and respond to environmental changes in real-time, creating a sustainable future for all.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="card p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative group">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-accent-teal ring-opacity-30 shadow-lg transition-all duration-300 group-hover:ring-opacity-60 group-hover:shadow-xl">
                        <ProfileWatermark 
                          src="/www.jamesmukoma/profile-photo.jpg" 
                          alt="James Mukoma - Founder & Lead AI Architect"
                          className="w-full h-full transition-all duration-300 group-hover:scale-105"
                          loading="lazy"
                          showWatermark={false}
                          onLoad={(e) => {
                            // Hide loading state when image loads
                            const target = e.target as HTMLImageElement;
                            target.style.opacity = '1';
                          }}
                          onError={(e) => {
                            // Fallback to gradient background with icon if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.parentElement?.querySelector('.fallback-icon') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                          style={{ opacity: 0 }}
                        />
                        {/* Loading skeleton */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-orange animate-pulse rounded-2xl"></div>
                        {/* Fallback icon */}
                        <div className="fallback-icon hidden w-full h-full bg-gradient-to-r from-accent-teal to-accent-orange rounded-2xl items-center justify-center">
                          <Brain className="w-8 h-8 text-deep-blue" />
                        </div>
                      </div>
                      {/* Enhanced glow effect */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent-teal to-accent-orange rounded-2xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-300 -z-10"></div>
                      {/* Status indicator */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-deep-blue flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-light group-hover:text-accent-teal transition-colors duration-300">James Mukoma</h3>
                      <p className="text-text-gray">Founder & Lead AI Architect</p>
                      <div className="flex items-center mt-1 space-x-2">
                        <div className="flex items-center text-xs text-accent-teal">
                          <div className="w-2 h-2 bg-accent-teal rounded-full mr-1 animate-pulse"></div>
                          Available for projects
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-gray leading-relaxed">
                    A passionate GeoAI consultant with over 5 years of experience in developing 
                    intelligent systems for environmental monitoring and humanitarian aid. 
                    Specialized in Google Cloud technologies and ethical AI implementation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['GeoAI Expert', 'Google Cloud', 'Python', 'Machine Learning', 'Environmental Science'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-accent-teal bg-opacity-20 text-accent-teal rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Our <span className="aura-gradient">Journey</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              From a small vision to a global AI platform, here's how we've grown and evolved.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent-teal to-accent-orange"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="card p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon className="w-6 h-6 text-accent-teal" />
                          <span className="text-sm font-semibold text-accent-orange">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-text-light mb-2">{item.title}</h3>
                        <p className="text-text-gray">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-teal rounded-full border-4 border-deep-blue"></div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Our <span className="aura-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-light mb-4">{value.title}</h3>
                  <p className="text-text-gray leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Technical <span className="aura-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Our team combines deep technical knowledge with practical experience in AI and environmental science.
            </p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-accent-teal" />
                      <span className="text-lg font-semibold text-text-light">{skill.name}</span>
                    </div>
                    <span className="text-accent-orange font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-gray rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-accent-teal to-accent-orange rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
