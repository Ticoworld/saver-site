import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  CubeIcon, 
  RocketLaunchIcon,
  BuildingLibraryIcon 
} from '@heroicons/react/24/outline';
import DinoBackground from './DinoBackground';
import SectionReveal from './SectionReveal';
import ScrollParallax from './ScrollParallax';

const Utilities = () => {
  const utilities = [
    { 
      title: 'Community First', 
      description: 'Build a kind, disciplined culture where newcomers feel safe and supported.',
      icon: UserGroupIcon,
      gradient: 'from-emerald-500 to-teal-500'
    },
    { 
      title: 'Education & Tools', 
      description: 'Share simple guides, ideas, and resources that help people level up.',
      icon: ChartBarIcon,
      gradient: 'from-blue-500 to-indigo-500'
    },
    { 
      title: 'Transparent Funds', 
      description: 'Clear, public updates on how community funds are allocated as we grow.',
      icon: BuildingLibraryIcon,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Safety Mindset', 
      description: 'Best-practice ops and partnerships; heavy tech like audits/DAO come later.',
      icon: ShieldCheckIcon,
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Creative Culture', 
      description: 'Memes, art, and Dino-themed drops as the brand takes shape.',
      icon: CubeIcon,
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      title: 'Future Utilities', 
      description: 'As milestones are hit: staking, DAO tools, or expansions may be explored.',
      icon: RocketLaunchIcon,
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="utilities" className="py-24 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Enhanced background with parallax Dino elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Dino backgrounds with parallax */}
      <ScrollParallax speed={0.5}>
        <DinoBackground className="top-20 left-10" size="medium" opacity={0.04} />
      </ScrollParallax>
      <ScrollParallax speed={-0.3}>
        <DinoBackground className="bottom-32 right-16" size="large" opacity={0.03} />
      </ScrollParallax>
      <ScrollParallax speed={0.7}>
        <DinoBackground className="top-1/2 left-1/4" size="small" opacity={0.05} />
      </ScrollParallax>

      <div className="container mx-auto px-4 relative">
        <SectionReveal 
          direction="up" 
          distance={60} 
          duration={0.8}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            What We're About
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-neutral-900">
            Built for <span className="text-emerald-600">People</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-600 leading-relaxed">
            No promises we can't keep. We start with story and community, then grow into utilities as the brand matures.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {utilities.map((util, index) => (
            <SectionReveal
              key={util.title}
              direction="up"
              distance={30}
              duration={0.6}
              delay={index * 0.1}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 group-hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${util.gradient} flex items-center justify-center mb-6 shadow-lg transition-transform duration-300`}>
                  <util.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">{util.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{util.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Professional feature highlight with enhanced motion */}
        <SectionReveal
          direction="up"
          distance={80}
          duration={0.8}
          delay={0.3}
          className="relative max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-neutral-900 to-emerald-900 rounded-3xl p-12 md:p-16 text-white shadow-2xl overflow-hidden relative">
            <ScrollParallax speed={0.2}>
              <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                <img 
                  src="/strong.jpg" 
                  alt="Professional Excellence" 
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </ScrollParallax>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-6">
                Near-term Focus
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Simple, Honest <span className="text-emerald-400">Execution</span>
              </h3>
              <p className="text-xl leading-relaxed mb-10 text-neutral-300">
                Launch first. Learn fast. Share progress. Bigger features like staking, DAO, and tools will be evaluated as milestones are met.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Community Growth",
                    description: "Content, campaigns, and kindness"
                  },
                  {
                    title: "Transparency", 
                    description: "Clear updates, no hype promises"
                  },
                  {
                    title: "Future Utilities",
                    description: "Unlock as milestones are hit"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-neutral-300 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Utilities;
