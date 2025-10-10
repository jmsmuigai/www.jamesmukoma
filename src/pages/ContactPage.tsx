import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  MessageCircle,
  Calendar,
  Zap
} from 'lucide-react';
import { toast } from 'react-hot-toast';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Custom AI Agent Development',
    'GeoAI Solutions',
    'Google Workspace Automation',
    'IoT & Smart Infrastructure',
    'Training & Consulting',
    'Data Analytics & Insights'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    'Over $50,000',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message about your project',
      value: 'jmsmuigai@gmail.com',
      action: 'mailto:jmsmuigai@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our AI assistant for instant help',
      value: 'Available 24/7',
      action: '#chat',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation call with our team',
      value: '30 min consultation',
      action: '#calendar',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: 'We serve clients worldwide',
      value: 'All time zones',
      action: '#global',
      color: 'from-orange-500 to-red-500'
    }
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
              Get In <span className="aura-gradient">Touch</span>
            </h1>
            <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              Ready to transform your organization with AI? Let's discuss how AURA Intelligence 
              can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Choose Your <span className="aura-gradient">Preferred Method</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Multiple ways to connect with our team and start your AI transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-light mb-3">{method.title}</h3>
                  <p className="text-text-gray mb-4 leading-relaxed">{method.description}</p>
                  <div className="text-accent-teal font-semibold mb-4">{method.value}</div>
                  <button className="btn-primary w-full">
                    Get Started
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-light mb-4">Start Your Project</h2>
                <p className="text-text-gray leading-relaxed">
                  Tell us about your project and we'll get back to you with a customized proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="input-primary"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">
                      Service Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="input-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="input-primary"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="input-primary"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="input-primary"
                    placeholder="Describe your project requirements, goals, and any specific challenges you're facing..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-deep-blue border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-text-light mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-light">Email</h4>
                      <p className="text-text-gray">jmsmuigai@gmail.com</p>
                      <p className="text-sm text-text-gray">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Globe className="w-6 h-6 text-accent-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-light">Global Reach</h4>
                      <p className="text-text-gray">Serving clients worldwide</p>
                      <p className="text-sm text-text-gray">All time zones supported</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-text-light">Response Time</h4>
                      <p className="text-text-gray">24 hours or less</p>
                      <p className="text-sm text-text-gray">Emergency support available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold text-text-light mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-gray">Google Cloud Certified Partners</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-gray">5+ years of AI expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-gray">Global client satisfaction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-gray">Ethical AI implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-text-gray">Ongoing support & maintenance</span>
                  </div>
                </div>
              </div>

              <div className="card p-8 bg-gradient-to-r from-accent-orange to-accent-teal bg-opacity-10">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-accent-orange" />
                  <h3 className="text-xl font-bold text-text-light">Quick Start</h3>
                </div>
                <p className="text-text-gray mb-4">
                  Ready to get started immediately? Our AI assistant can help you outline your project requirements in minutes.
                </p>
                <button className="btn-secondary w-full">
                  Start AI Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
