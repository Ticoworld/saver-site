import React from 'react';
import { motion as Motion } from 'framer-motion';
import SOS from '../config/sos';
import DinoBackground from './DinoBackground';
import ScrollParallax from './ScrollParallax';

const Hero = () => {
  // Advanced animation variants

  // Dynamic entry variants
  const saverVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  const onVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } }
  };
  const bscVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-emerald-900 to-neutral-800"></div>
          <div className="absolute inset-0 opacity-20">
            <img 
              src="/beach.jpg" 
              alt="" 
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.7) saturate(1.2)' }}
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/60 to-neutral-900/75"></div>
        
        {/* Floating background elements */}
        <Motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
        <Motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-2xl"
        />
      </div>
      
      {/* Parallax Dino backgrounds */}
      <ScrollParallax speed={0.6}>
        <DinoBackground className="top-1/4 left-20" size="large" opacity={0.02} />
      </ScrollParallax>
      <ScrollParallax speed={-0.4}>
        <DinoBackground className="bottom-1/3 right-24" size="medium" opacity={0.03} />
      </ScrollParallax>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced main headline with 3D effect */}
          <Motion.h1 
            className="mb-12 text-6xl md:text-8xl lg:text-9xl font-display font-black leading-tight text-white relative"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(16, 185, 129, 0.3)' }}
          >
            <Motion.span
              variants={saverVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              SAVER
            </Motion.span>
            <br />
            <Motion.span
              variants={onVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-7xl font-bold block mt-4"
            >
              ON{' '}
              <Motion.span
                variants={bscVariants}
                initial="hidden"
                animate="visible"
                className="bsc-text-gradient bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300"
                whileHover={{ rotateY: 10 }}
              >
                BSC
              </Motion.span>
            </Motion.span>
          </Motion.h1>

          {/* Enhanced subtitle with typewriter effect */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <Motion.p 
              className="text-2xl md:text-3xl lg:text-4xl text-neutral-300 mb-6 leading-relaxed max-w-5xl mx-auto font-light"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              <Motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                The SAVER lifestyle meets 
              </Motion.span>{' '}
              <Motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="text-emerald-400 font-medium"
              >
                community-driven growth on BSC
              </Motion.span>
            </Motion.p>
          </Motion.div>

          {/* Enhanced CTA Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            {SOS.links.bscscan ? (
              <Motion.a
                href={SOS.links.bscscan}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  backgroundColor: "rgba(16, 185, 129, 1)",
                  color: "rgba(23, 23, 23, 1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="border-2 border-emerald-400 text-emerald-400 px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-400 hover:text-neutral-900 transition-all inline-flex items-center justify-center backdrop-blur-sm"
              >
                View Contract
              </Motion.a>
            ) : (
              <Motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="border-2 border-neutral-600 text-neutral-500 px-12 py-5 rounded-xl font-bold text-lg cursor-not-allowed inline-flex items-center justify-center backdrop-blur-sm"
              >
                Contract Soon
              </Motion.button>
            )}
          </Motion.div>

          {/* Quick copy address below CTAs */}
          {SOS.contractAddress && (
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <div className="text-neutral-300 text-sm mb-2">Contract Address</div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-3 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-2">
                  <code className="text-emerald-300 font-mono text-xs sm:text-sm truncate">{SOS.contractAddress}</code>
                  <button
                    onClick={() => navigator.clipboard.writeText(SOS.contractAddress)}
                    className="px-3 py-1.5 text-xs rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition-colors"
                    aria-label="Copy contract address"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </Motion.div>
          )}

          {/* Available Now Section */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Available Now On</h3>
              <div className="w-16 h-1 bg-emerald-400 mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-3 mb-8">
              {/* Pump.fun CTA intentionally omitted for BSC launch */}
              
              {/* Dexscreener */}
              {SOS.links.dexscreener && (
                <Motion.a
                  href={SOS.links.dexscreener}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="text-xl font-bold mb-2">Dexscreener Chart</div>
                  <div className="text-blue-100 text-sm">View price & volume</div>
                </Motion.a>
              )}
              
              {/* GeckoTerminal */}
              {SOS.links.geckoTerminal && (
                <Motion.a
                  href={SOS.links.geckoTerminal}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="text-xl font-bold mb-2">GeckoTerminal Chart</div>
                  <div className="text-purple-100 text-sm">Advanced analytics</div>
                </Motion.a>
              )}
            </div>
          </Motion.div>

          {/* Enhanced stats grid with 3D cards */}
          <Motion.div
            initial="hidden"
            animate="visible"
            variants={statsVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[ 
              { value: "1B", label: "Total Supply" },
              { value: "0%", label: "Trading Tax" },
              { value: "BSC", label: "Network" }
            ].map((stat, index) => (
              <Motion.div
                key={stat.label}
                variants={statItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                }}
                transition={{ duration: 0.3 }}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 group cursor-pointer"
                style={{ 
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
              >
                <Motion.div 
                  animate={floatingVariants.animate}
                  transition={{ delay: index * 0.5 }}
                  className="text-4xl font-display font-bold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors"
                >
                  {stat.value}
                </Motion.div>
                <div className="text-neutral-300 font-medium group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

