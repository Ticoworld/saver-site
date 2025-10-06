import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  UsersIcon,
  ChartBarIcon,
  FireIcon,
  AcademicCapIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import DinoBackground from './DinoBackground';
import SectionReveal from './SectionReveal';
import ScrollParallax from './ScrollParallax';

const About = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Safety Mindset',
      description: 'Best practices and careful partnerships as we grow'
    },
    {
      icon: CurrencyDollarIcon,
      title: '0% Tax',
      description: 'Simple structure — no buy or sell fees on BSC'
    },
    {
      icon: UsersIcon,
      title: 'Community First',
      description: 'Building together with transparency and kindness'
    },
    {
      icon: ChartBarIcon,
      title: 'Builder Friendly',
      description: 'Story and community first — utilities follow as we mature'
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
      
      {/* Enhanced floating Dino backgrounds with parallax */}
      <ScrollParallax speed={0.4}>
        <DinoBackground className="top-32 right-20" size="large" opacity={0.03} />
      </ScrollParallax>
      
      <ScrollParallax speed={-0.2}>
        <DinoBackground className="bottom-40 left-16" size="medium" opacity={0.04} />
      </ScrollParallax>
      
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
              The Story of <span className="text-emerald-600">SAVER on BSC</span>
            </Motion.h2>
            
            <Motion.div 
              variants={itemVariants}
              className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-12"
            >
              <p>
                In a world full of noise and quick flips, SAVER on BSC ($SOS) was created with a simple mission: 
                bring purpose, discipline, and strength back into crypto culture.
              </p>
              <p>
                At the heart of $SOS stands the SAVER Dino — our lifeguard, protector, and symbol of resilience. 
                He represents a lifestyle built on fitness, learning, and kindness.
              </p>
            </Motion.div>

            {/* Core Values Section */}
            <Motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <FireIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">Strength</h4>
                <p className="text-sm text-neutral-600">Like Dino at the gym — discipline and preparation in everything we do.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AcademicCapIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">Knowledge</h4>
                <p className="text-sm text-neutral-600">Always learning, sharing tools, ideas, and strategies with the community.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">Community</h4>
                <p className="text-sm text-neutral-600">Helping friends, welcoming newcomers — kindness is our edge.</p>
              </div>
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
                $SOS isn't just another meme coin. It's a movement — a lifestyle built on the SAVER mindset. 
                This is not just a coin. It's a mindset.
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
                    alt="SAVER Lifestyle" 
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
                      The SAVER Lifestyle
                    </h4>
                    <p className="text-neutral-200 text-sm">
                      Strength, knowledge, and community — building something real together
                    </p>
                  </Motion.div>
                </div>
              </div>
            </Motion.div>

            {/* Feature Grid with simplified animations */}
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
                  <div className="mb-4">
                    <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-emerald-500 transition-colors duration-300" />
                  </div>
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