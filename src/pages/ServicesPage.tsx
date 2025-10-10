import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Award
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Custom AI Agent Development',
      description: 'Build intelligent AI agents tailored to your specific business needs and workflows.',
      features: [
        'Natural language processing',
        'Automated decision making',
        '24/7 intelligent assistance',
        'Custom training on your data'
      ],
      price: 'Starting at $5,000',
      duration: '4-8 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'GeoAI Solutions',
      description: 'Advanced geospatial analysis and environmental monitoring using satellite imagery and AI.',
      features: [
        'Satellite image analysis',
        'Environmental monitoring',
        'Predictive modeling',
        'Real-time data visualization'
      ],
      price: 'Starting at $10,000',
      duration: '6-12 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Google Workspace Automation',
      description: 'Transform your Google Workspace into an intelligent, automated environment.',
      features: [
        'Automated document processing',
        'Smart form creation',
        'Data pipeline automation',
        'Custom dashboard development'
      ],
      price: 'Starting at $3,000',
      duration: '2-6 weeks',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Zap,
      title: 'IoT & Smart Infrastructure',
      description: 'Connect and automate your physical infrastructure with intelligent monitoring systems.',
      features: [
        'Sensor network setup',
        'Real-time monitoring',
        'Predictive maintenance',
        'Smart alert systems'
      ],
      price: 'Starting at $8,000',
      duration: '8-16 weeks',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Training & Consulting',
      description: 'Comprehensive training programs and strategic consulting for AI implementation.',
      features: [
        'Team training programs',
        'Strategic AI planning',
        'Best practices guidance',
        'Ongoing support'
      ],
      price: 'Starting at $150/hour',
      duration: 'Flexible',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Target,
      title: 'Data Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: [
        'Custom dashboard development',
        'Predictive analytics',
        'Data visualization',
        'Business intelligence'
      ],
      price: 'Starting at $2,000',
      duration: '2-4 weeks',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.',
      icon: Target
    },
    {
      step: 2,
      title: 'Development & Testing',
      description: 'Our team builds and rigorously tests your AI solution.',
      icon: Zap
    },
    {
      step: 3,
      title: 'Deployment & Training',
      description: 'We deploy your solution and train your team on how to use it.',
      icon: Globe
    },
    {
      step: 4,
      title: 'Support & Optimization',
      description: 'Ongoing support and continuous optimization of your AI system.',
      icon: Award
    }
  ];

  const testimonials = [
    {
      quote: "AURA Intelligence transformed our environmental monitoring with their GeoAI solutions. The results exceeded our expectations.",
      author: "Dr. Sarah Johnson",
      role: "Environmental Director",
      company: "Global Conservation Org",
      rating: 5
    },
    {
      quote: "The Google Workspace automation they built has saved us countless hours and improved our team's productivity significantly.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Tech Solutions Inc",
      rating: 5
    },
    {
      quote: "Their AI agent development service was exceptional. The custom solution perfectly fits our business needs.",
      author: "Dr. Amina Hassan",
      role: "Research Director",
      company: "Climate Research Institute",
      rating: 5
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
              Our <span className="aura-gradient">Services</span>
            </h1>
            <p className="text-xl text-text-gray max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to transform your organization. 
              From custom AI agents to environmental monitoring systems, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              What We <span className="aura-gradient">Offer</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Cutting-edge AI services that deliver real value and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group hover:scale-105 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-light mb-2">{service.title}</h3>
                    <p className="text-text-gray leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                        <span className="text-sm text-text-gray">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Duration */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-accent-orange" />
                      <span className="text-text-light font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-accent-teal" />
                      <span className="text-text-gray">{service.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="btn-primary w-full flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-gray bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Our <span className="aura-gradient">Process</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative">
                    {/* Step Number */}
                    <div className="w-16 h-16 mx-auto mb-6 tech-gradient rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-deep-blue">{step.step}</span>
                    </div>
                    
                    {/* Connector Line */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent-teal to-accent-orange transform translate-x-8"></div>
                    )}
                  </div>
                  
                  <Icon className="w-8 h-8 text-accent-teal mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-text-light mb-3">{step.title}</h3>
                  <p className="text-text-gray leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
              Client <span className="aura-gradient">Testimonials</span>
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Hear from organizations that have transformed their operations with our AI solutions.
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
                  <div className="text-sm text-accent-teal">{testimonial.company}</div>
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
              Let's discuss how our AI solutions can drive innovation and growth in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <span>Download Brochure</span>
                <Star className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
