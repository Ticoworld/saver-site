import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  PlayCircleIcon 
} from '@heroicons/react/24/outline';

const Roadmap = () => {
  const phases = [
    {
      title: 'Q3 2025',
      subtitle: 'Foundation & Launch',
      items: [
        'Platform launch on Solana mainnet',
        'Professional brand identity deployment',
        'Strategic marketing campaign initiation',
        'DEX listing and analytics integration'
      ],
      status: 'current',
      icon: PlayCircleIcon
    },
    {
      title: 'Q4 2025',
      subtitle: 'Growth & Expansion',
      items: [
        'Liquidity enhancement partnerships',
        'Premium NFT collection release',
        'Community merchandise platform',
        'Treasury governance implementation'
      ],
      status: 'upcoming',
      icon: ClockIcon
    },
    {
      title: 'Q1 2026',
      subtitle: 'Ecosystem & Innovation',
      items: [
        'DAO governance infrastructure',
        'Advanced utility suite deployment',
        'Cross-chain integration capabilities',
        'Strategic ecosystem partnerships'
      ],
      status: 'upcoming',
      icon: ClockIcon
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-br from-neutral-50 via-emerald-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            Development Roadmap
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-neutral-900">
            Strategic <span className="text-emerald-600">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-600 leading-relaxed">
            Our systematic approach to building sustainable value and ecosystem growth
          </p>
        </Motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-300 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
              >
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-emerald-500 flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg">
                  <phase.icon className={`w-6 h-6 ${phase.status === 'current' ? 'text-emerald-600' : 'text-neutral-500'}`} />
                </div>
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-neutral-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                      phase.status === 'current' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {phase.title}
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-neutral-900">{phase.subtitle}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <Motion.li 
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * itemIndex }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full mt-2.5 ${
                            phase.status === 'current' ? 'bg-emerald-500' : 'bg-neutral-400'
                          }`}></div>
                          <span className="text-neutral-700 leading-relaxed">{item}</span>
                        </Motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="md:w-5/12 hidden md:block"></div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;