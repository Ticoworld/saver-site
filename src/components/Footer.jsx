// src/components/Footer.jsx
import React from 'react';
import { FaTwitter, FaTelegram, FaGithub, FaReddit } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-saver-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-saver-green font-bold text-lg">S</span>
              </div>
              <h2 className="text-xl font-bold">SAVER<span className="text-white/80">COIN</span></h2>
            </div>
            <p className="max-w-xs text-white/80">
              Built to Support, Made to Last. Join our community for preparedness and mutual help.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://twitter.com/SAVERCOIN1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Reddit"
              >
                <FaReddit className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/70 text-sm">
                &copy; {currentYear} SAVERCOIN. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-2">
                This website is for informational purposes only. Cryptocurrency investments are volatile and high risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;