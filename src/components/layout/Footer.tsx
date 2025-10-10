import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Globe } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="border-t border-gray-800 py-8 bg-deep-blue"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold ai-gradient-text mb-4">AURA Intelligence</h3>
            <p className="text-light-gray mb-4 max-w-md">
              Transforming data into intelligent ecosystems. Building the future of GeoAI and automated systems.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:jmsmuigai@gmail.com" className="text-light-gray hover:text-accent-orange transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://github.com/jmsmuigai" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent-orange transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/james-mukoma-86534438/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent-orange transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.jamesmukoma.com" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-accent-orange transition-colors">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-light-gray hover:text-accent-orange transition-colors">Home</a></li>
              <li><a href="/about" className="text-light-gray hover:text-accent-orange transition-colors">About</a></li>
              <li><a href="/experience" className="text-light-gray hover:text-accent-orange transition-colors">Experience</a></li>
              <li><a href="/services" className="text-light-gray hover:text-accent-orange transition-colors">Services</a></li>
              <li><a href="/contact" className="text-light-gray hover:text-accent-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-text-light mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services#geoai" className="text-light-gray hover:text-accent-orange transition-colors">GeoAI Solutions</a></li>
              <li><a href="/services#automation" className="text-light-gray hover:text-accent-orange transition-colors">AI Automation</a></li>
              <li><a href="/services#consulting" className="text-light-gray hover:text-accent-orange transition-colors">Consulting</a></li>
              <li><a href="/services#training" className="text-light-gray hover:text-accent-orange transition-colors">Training</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-light-gray">
            &copy; {new Date().getFullYear()} AURA Intelligence by James Mukoma. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, TypeScript, Three.js, and powered by AI
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer