import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  UsersIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

const Story = () => {
  const values = [
    { 
      title: 'Security First', 
      description: 'Multi-layered protection protocols and institutional-grade security measures.',
      icon: ShieldCheckIcon,
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      title: 'Community Driven', 
      description: 'Collaborative governance model where every voice contributes to ecosystem growth.',
      icon: UsersIcon,
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Innovation Focus', 
      description: 'Cutting-edge DeFi solutions designed for sustainable long-term value creation.',
      icon: RocketLaunchIcon,
      gradient: 'from-purple-500 to-violet-500'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="story" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating elements */}
      <Motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full blur-xl"
      ></Motion.div>

      <Motion.div
        animate={{ 
          y: [0, 25, 0],
          x: [0, -15, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-32 w-36 h-36 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
      ></Motion.div>

      <div className="container mx-auto px-4 relative">
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <Motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6"
          >
            Our Foundation
          </Motion.div>
          <Motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-display font-bold mb-8 text-neutral-900"
          >
            Built on <span className="text-emerald-600">Excellence</span>
          </Motion.h2>
          <Motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-8 rounded-full"
          ></Motion.div>
          <Motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-neutral-600"
          >
            SAVER ON SOL represents a paradigm shift in community-driven tokenomics. 
            We combine institutional-grade infrastructure with transparent governance 
            to create sustainable value for our ecosystem.
          </Motion.p>
        </Motion.div>

        {/* Enhanced Image Section with better positioning */}
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <Motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="group relative"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-neutral-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="relative bg-gradient-to-br from-neutral-100 to-emerald-100 rounded-2xl overflow-hidden">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src="/beach2.jpg" 
                  alt="Professional Excellence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: '50% 30%' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent group-hover:from-neutral-900/80 transition-all duration-500"></div>
                <Motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-8 left-8 right-8"
                >
                  <h3 className="text-white text-2xl md:text-3xl font-display font-bold mb-4">
                    Professional Infrastructure
                  </h3>
                  <p className="text-neutral-200 text-lg max-w-2xl">
                    Our platform combines enterprise-level security with innovative 
                    DeFi mechanisms, creating a foundation for sustainable growth.
                  </p>
                </Motion.div>
              </div>
            </div>
          </Motion.div>
        </Motion.div>

        {/* Enhanced Values Grid */}
        <Motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <Motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 group-hover:shadow-2xl transition-all duration-500 h-full">
                <Motion.div 
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 shadow-lg relative`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Motion.div>
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Story;
