import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-saver-green w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-xl font-bold text-saver-green">SAVER<span className="text-black">COIN</span></h1>
          </Link>
        </motion.div>
        
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Perfect circular leaderboard button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/leaderboard" 
              className={`
                flex items-center justify-center
                w-10 h-10 rounded-full font-medium transition-colors
                ${scrolled 
                  ? 'bg-saver-green text-white hover:bg-green-600' 
                  : 'bg-green-700 text-white hover:bg-white/30'
                }`}
              aria-label="Leaderboard"
            >
              <FaTrophy className="text-lg" />
              <span className="sr-only">Leaderboard</span>
            </Link>
          </motion.div>
          
          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-3 sm:space-x-4"
          >
            <a 
              href="https://twitter.com/SAVERCOIN1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-saver-green/10 hover:bg-saver-green/20 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-saver-green text-lg sm:text-xl" />
            </a>
            <a 
              href="https://t.me/savercoin1" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-saver-green/10 hover:bg-saver-green/20 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram className="text-saver-green text-lg sm:text-xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;