import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaDiscord, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SOS from '../config/sos';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-[99999] transition-all duration-500 ${scrolled ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-neutral-100 py-3' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center space-x-3"
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
              <img 
                src="/logo.jpg" 
                alt="SAVER ON BSC" 
                className="relative w-12 h-12 rounded-xl object-cover border-2 border-emerald-200 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-neutral-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                SAVER ON{' '}
                <span className="text-emerald-600 group-hover:text-emerald-500">BSC</span>
              </h1>
              <div className="text-xs text-neutral-500 font-medium">$SOS • Built for BSC explorers</div>
            </div>
          </Link>
        </Motion.div>
        
        <div className="flex items-center space-x-4">
          {/* Social Icons */}
          <Motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex space-x-2"
          >
            <Motion.a 
              href={SOS.links.twitter || 'https://x.com'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-100/80 hover:bg-emerald-100 transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Twitter"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="text-neutral-700 group-hover:text-emerald-600 text-sm transition-colors duration-300" />
            </Motion.a>
            <Motion.a 
              href={SOS.links.telegram || '#'} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-neutral-100/80 hover:bg-emerald-100 transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Telegram"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTelegram className="text-neutral-700 group-hover:text-emerald-600 text-sm transition-colors duration-300" />
            </Motion.a>
            {SOS.links.discord && (
              <Motion.a 
                href={SOS.links.discord} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100/80 hover:bg-emerald-100 transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Discord"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDiscord className="text-neutral-700 group-hover:text-emerald-600 text-sm transition-colors duration-300" />
              </Motion.a>
            )}
            {SOS.links.tiktok && (
              <Motion.a 
                href={SOS.links.tiktok} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100/80 hover:bg-emerald-100 transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="TikTok"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTiktok className="text-neutral-700 group-hover:text-emerald-600 text-sm transition-colors duration-300" />
              </Motion.a>
            )}
          </Motion.div>

          {/* Pump.fun CTA intentionally omitted for BSC launch */}
        </div>
      </div>
    </header>
  );
};

export default Header;