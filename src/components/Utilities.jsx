import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  CubeIcon, 
  RocketLaunchIcon,
  BuildingLibraryIcon 
} from '@heroicons/react/24/outline';

const Utilities = () => {
  const utilities = [
    { 
      title: 'Community Governance', 
      description: 'Decentralized decision-making platform for ecosystem development.',
      icon: UserGroupIcon,
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      title: 'Yield Generation', 
      description: 'Sustainable reward mechanisms and liquidity pool incentives.',
      icon: ChartBarIcon,
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Treasury Management', 
      description: 'Transparent fund allocation for marketing and development.',
      icon: BuildingLibraryIcon,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Security Protocol', 
      description: 'Multi-signature wallet and audited smart contract systems.',
      icon: ShieldCheckIcon,
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      title: 'NFT Ecosystem', 
      description: 'Premium digital collectibles and utility-based NFT drops.',
      icon: CubeIcon,
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      title: 'Future Expansion', 
      description: 'Cross-chain integration and advanced DeFi product suite.',
      icon: RocketLaunchIcon,
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="utilities" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Professional background pattern */}
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
            Ecosystem Utilities
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-neutral-900">
            Built for <span className="text-emerald-600">Value</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-600 leading-relaxed">
            Professional-grade infrastructure designed to deliver sustainable value and growth 
            for the entire SAVER community ecosystem.
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {utilities.map((util, index) => (
            <Motion.div
              key={util.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 group-hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${util.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <util.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{util.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{util.description}</p>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Professional feature highlight */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-neutral-900 to-emerald-900 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
              <img 
                src="/strong.jpg" 
                alt="Professional Excellence" 
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6">
                Professional Infrastructure
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Enterprise-Grade <span className="text-emerald-400">Solutions</span>
              </h3>
              <p className="text-xl leading-relaxed mb-10 text-neutral-300">
                Our platform combines institutional-level security with innovative DeFi mechanisms, 
                creating sustainable value propositions that scale with community growth and market evolution.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Audited Security</h4>
                  <p className="text-neutral-300 text-sm">Multi-layer security protocols</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Scalable Design</h4>
                  <p className="text-neutral-300 text-sm">Built for sustainable growth</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-2">Community Focus</h4>
                  <p className="text-neutral-300 text-sm">Transparent governance model</p>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Utilities;
