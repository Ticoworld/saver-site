import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  UsersIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'Multi-signature wallet protection and audited smart contracts'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Zero Tax',
      description: 'No transaction fees to maximize holder value and trading efficiency'
    },
    {
      icon: UsersIcon,
      title: 'Community Driven',
      description: 'Governance and development decisions made collectively'
    },
    {
      icon: ChartBarIcon,
      title: 'Transparent',
      description: 'Open treasury management and public development roadmap'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-neutral-50/30"></div>
      
      {/* Floating background elements */}
      <Motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-full blur-xl"
      ></Motion.div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <Motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6"
            >
              About $SOS
            </Motion.div>
            
            <Motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-8 text-neutral-900"
            >
              Professional <span className="text-emerald-600">DeFi Infrastructure</span>
            </Motion.h2>
            
            <Motion.div 
              variants={itemVariants}
              className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-12"
            >
              <p>
                SAVER ON SOL represents the evolution of community-driven tokenomics on Solana. 
                Built with institutional-grade security and transparency, $SOS combines sustainable 
                economic models with innovative governance structures.
              </p>
              <p>
                Our ecosystem prioritizes long-term value creation through strategic treasury management, 
                community incentives, and utility-driven token mechanics that scale with network adoption.
              </p>
            </Motion.div>

            {/* Mission Card */}
            <Motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-emerald-50 to-neutral-50 rounded-2xl p-8 border border-emerald-100 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Our Mission</h3>
              <p className="text-neutral-700 leading-relaxed">
                Building sustainable value through innovation and transparency. $SOS blends professional 
                DeFi infrastructure with community governance, creating an ecosystem where technology 
                meets sustainable growth.
              </p>
            </Motion.div>
          </Motion.div>

          {/* Image & Features Section */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Enhanced image container with better positioning */}
            <Motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-neutral-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-neutral-100 to-emerald-100 rounded-2xl overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/bullish.jpg" 
                    alt="Professional Growth" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: '50% 20%' }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent group-hover:from-neutral-900/60 transition-all duration-500"></div>
                  <Motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <h4 className="text-white text-xl font-display font-bold mb-2">
                      Sustainable Growth Strategy
                    </h4>
                    <p className="text-neutral-200 text-sm">
                      Professional infrastructure designed for long-term ecosystem development
                    </p>
                  </Motion.div>
                </div>
              </div>
            </Motion.div>

            {/* Feature Grid with enhanced animations */}
            <Motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <Motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100 cursor-pointer group"
                >
                  <Motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-emerald-600 mb-4 group-hover:text-emerald-500 transition-colors duration-300" />
                  </Motion.div>
                  <h4 className="font-bold text-neutral-900 mb-2 text-sm group-hover:text-emerald-800 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-neutral-600 text-xs leading-relaxed">{feature.description}</p>
                </Motion.div>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;