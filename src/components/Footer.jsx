import React from "react";
import { FaTwitter, FaTelegram, FaGithub, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-saver-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="max-w-xs">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <span className="text-saver-green font-bold text-lg">S</span>
              </div>
              <h2 className="text-xl font-bold">
                SAVER<span className="text-white/80">COIN</span>
              </h2>
            </div>
            <p className="text-white/80">
              Built to Support, Made to Last. Join our community for
              preparedness and mutual help.
            </p>
          </div>

          {/* Links & Social Section */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-8 justify-between">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-3">
                <h3 className="font-bold text-white/90">Navigation</h3>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors w-fit"
                >
                  Home
                </Link>
                <Link
                  to="/leaderboard"
                  className="text-white/80 hover:text-white transition-colors w-fit flex items-center gap-2"
                >
                  Contest Leaderboard
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex flex-col space-y-3">
                <h3 className="font-bold text-white/90">Community</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/SAVERCOIN1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-lg" />
                  </a>
                  <a
                    href="https://t.me/savercoin1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Telegram"
                  >
                    <FaTelegram className="text-lg" />
                  </a>
                  <a
                    href="https://github.com/Ticoworld/saver-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/70 text-sm">
                &copy; {currentYear} SAVERCOIN. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-2 max-w-md">
                This website is for informational purposes only. Cryptocurrency
                investments are volatile and high risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;