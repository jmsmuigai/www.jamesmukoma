import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Brain, 
  Globe, 
  Heart 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jmsmuigai',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/james-mukoma-86534438/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:jmsmuigai@gmail.com',
      icon: Mail,
      color: 'hover:text-accent-teal'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Contact', path: '/contact' }
  ];

  const projectLinks = [
    { name: 'ASAL Platform', path: '/projects/asal-integrated-platform' },
    { name: 'Mathenge Detection', path: '/projects/mathenge-detection' },
    { name: 'Flood Warning', path: '/projects/flood-early-warning' },
    { name: 'Cow Recognition', path: '/projects/cow-recognition' }
  ];

  return (
    <footer className="relative bg-dark-gray bg-opacity-50 backdrop-blur-lg border-t border-white border-opacity-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-orange"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 tech-gradient rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-deep-blue" />
                </div>
                <span className="text-2xl font-bold aura-gradient">AURA Intelligence</span>
              </div>
              
              <p className="text-text-gray text-sm leading-relaxed">
                Global AI Solutions Platform transforming environmental and humanitarian challenges 
                through intelligent automation and GeoAI technologies.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg glass-effect text-text-gray transition-colors duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-text-light mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-text-gray hover:text-accent-teal transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Projects */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-text-light mb-4">Featured Projects</h3>
              <ul className="space-y-2">
                {projectLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-text-gray hover:text-accent-orange transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-text-light mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-text-gray text-sm">
                  <Mail className="w-4 h-4 text-accent-teal" />
                  <span>jmsmuigai@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-text-gray text-sm">
                  <MapPin className="w-4 h-4 text-accent-orange" />
                  <span>Global Solutions, Local Impact</span>
                </div>
                <div className="flex items-center space-x-3 text-text-gray text-sm">
                  <Globe className="w-4 h-4 text-accent-teal" />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-white border-opacity-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-text-gray text-sm">
              <span>© {currentYear} AURA Intelligence. Built with</span>
              <Heart className="w-4 h-4 text-accent-orange" />
              <span>by James Mukoma</span>
            </div>
            
            <div className="flex items-center space-x-6 text-text-gray text-sm">
              <span>Powered by Google Cloud & AI</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-accent-teal rounded-full animate-pulse"></div>
                <span>AI Active</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
