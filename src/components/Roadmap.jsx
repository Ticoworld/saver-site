// src/components/Roadmap.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1",
      subtitle: "Launch & Foundation",
      items: [
        "Launch on four.meme",
        "Organic Telegram & Twitter/X growth",
        "Brand, Logo, contract & docs live"
      ],
      status: "completed"
    },
    {
      title: "Phase 2",
      subtitle: "Growth Milestone",
      items: [
        "Hit $30K market cap",
        "Launch on PancakeSwap",
        "First exchange listing research",
        "Partnerships & exposure"
      ],
      status: "current"
    },
    {
      title: "Phase 3",
      subtitle: "Expansion",
      items: [
        "CEX listings",
        "Community initiatives",
        "SAVER utility development",
        "Global outreach"
      ],
      status: "upcoming"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-saver-green/5 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-saver-green/3 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-saver-green/5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-saver-green">Roadmap</span></h2>
          <div className="w-20 h-1 bg-saver-green mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            The journey of SAVER - built on transparency and community growth
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-saver-green/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
              >
                {/* Timeline point */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-saver-green border-4 border-white transform -translate-x-1/2 z-10"></div>
                
                {/* Phase card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mt-8 md:mt-0`}>
                  <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                    phase.status === 'completed' ? 'border-emerald-500' : 
                    phase.status === 'current' ? 'border-saver-green' : 'border-gray-300'
                  }`}>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                      phase.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 
                      phase.status === 'current' ? 'bg-saver-green/10 text-saver-green' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {phase.title}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{phase.subtitle}</h3>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          {phase.status === 'completed' ? (
                            <span className="text-emerald-500 mr-2">✓</span>
                          ) : (
                            <span className="text-saver-green mr-2">•</span>
                          )}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space on the other side */}
                <div className="md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;