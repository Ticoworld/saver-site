import React from "react";
import { FaTwitter, FaTelegram, FaGithub, FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import SOS from '../config/sos';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-saver-dark text-white py-16 relative overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Brand Section */}
          <div className="max-w-md">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/logo.jpg" 
                alt="SAVER ON SOL" 
                className="w-14 h-14 rounded-xl object-cover ring-2 ring-emerald-400/30 shadow-lg"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h2 className="text-2xl font-bold">
                  SAVER ON <span className="solana-text-gradient">SOL</span>
                </h2>
                <p className="text-emerald-400 text-sm font-medium">$SOS</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-lg">
              SAVER on SOL is a community-first movement on Solana. We stand for strength, learning, and kindness — building together with transparency.
            </p>
          </div>

          {/* Links & Social Section */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-12 justify-between">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-bold text-white/90 text-lg">Navigation</h3>
                <Link
                  to="/"
                  className="text-white/70 hover:text-emerald-400 transition-colors w-fit text-base"
                >
                  Home
                </Link>
                <a
                  href="#utilities"
                  className="text-white/70 hover:text-emerald-400 transition-colors w-fit text-base"
                >
                  Utilities
                </a>
                <a
                  href="#tokenomics"
                  className="text-white/70 hover:text-emerald-400 transition-colors w-fit text-base"
                >
                  Tokenomics
                </a>
                <a
                  href="#roadmap"
                  className="text-white/70 hover:text-emerald-400 transition-colors w-fit text-base"
                >
                  Roadmap
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-col space-y-4">
                <h3 className="font-bold text-white/90 text-lg">Community</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SOS.links.twitter || 'https://x.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-xl hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href={SOS.links.telegram || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-xl hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="text-xl" />
                  </a>
                  {SOS.links.discord && (
                    <a
                      href={SOS.links.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-xl hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110"
                      aria-label="Discord"
                    >
                      <FaDiscord className="text-xl" />
                    </a>
                  )}
                  {SOS.links.tiktok && (
                    <a
                      href={SOS.links.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-3 rounded-xl hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110"
                      aria-label="TikTok"
                    >
                      <FaTiktok className="text-xl" />
                    </a>
                  )}
                  <a
                    href="https://github.com/Ticoworld/saver-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-3 rounded-xl hover:bg-emerald-600/20 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-white/70 text-base">
                  © {currentYear} SAVER ON SOL ($SOS). All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-sm text-white/50">
                  <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4 max-w-2xl">
                This website is for informational purposes only. Cryptocurrency investments are volatile and high risk. 
                Always do your own research before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;