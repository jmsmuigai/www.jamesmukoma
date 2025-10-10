import React from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ui/ParticleBackground'
import { ArrowRight, Zap, Globe, Brain } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20 overflow-hidden">
      <ParticleBackground enabled={true} />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
            Your World, <span className="ai-gradient-text">Reimagined.</span><br />
            Your Data, <span className="ai-gradient-text">Unleashed.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-light-gray mb-8"
        >
          I'm James Mukoma, a GeoAI architect. I don't just build systems; I forge intelligent ecosystems within your Google environment, transforming your data from a dormant asset into a predictive, automated force for sustainable impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#about"
            className="btn-primary inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore the AURA Ecosystem
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.a>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div
            className="card-bg p-6 rounded-xl text-center"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-accent-orange/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8 text-accent-orange" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Automation</h3>
            <p className="text-light-gray">Transform your workflows with intelligent automation systems</p>
          </motion.div>

          <motion.div
            className="card-bg p-6 rounded-xl text-center"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-accent-teal/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-accent-teal" />
            </div>
            <h3 className="text-xl font-bold mb-2">GeoAI Solutions</h3>
            <p className="text-light-gray">Leverage geospatial intelligence for environmental monitoring</p>
          </motion.div>

          <motion.div
            className="card-bg p-6 rounded-xl text-center"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Brain className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Intelligent Ecosystems</h3>
            <p className="text-light-gray">Build comprehensive AI ecosystems within your Google environment</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="marquee">
          <div className="marquee-content">
            <span>GEOAI</span>
            <span>AURA INTELLIGENCE</span>
            <span>SUSTAINABLE IMPACT</span>
            <span>AUTOMATED ECOSYSTEMS</span>
            <span>PREDICTIVE POWERHOUSE</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage