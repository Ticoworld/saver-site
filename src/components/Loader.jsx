import React, { useState, useEffect } from 'react';

const Loader = ({ onLoadComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "SAVER on BSC is getting ready...",
    "Warming up the Dino signal...",
    "Loading community vibes...",
    "Almost there — welcome to $SOS"
  ];

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadComplete?.(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Rotate messages
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onLoadComplete, messages.length]);

  return (
    <div className="fixed inset-0 z-[100000] bg-white flex items-center justify-center">
      {/* Professional glassmorphism background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl"></div>
      </div>

      <div className="relative flex flex-col items-center">
  {/* Central Loader - Saver Signal Pulse with BSC gradients */}
        <div className="relative mb-8">
          {/* Animated SVG waves */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0" style={{ pointerEvents: 'none' }}>
            <circle cx="90" cy="90" r="70" stroke="url(#bsc1)" strokeWidth="3" opacity="0.18">
              <animate attributeName="r" values="70;85;70" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0.05;0.18" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="90" cy="90" r="50" stroke="url(#bsc2)" strokeWidth="4" opacity="0.25">
              <animate attributeName="r" values="50;65;50" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.25;0.08;0.25" dur="1.6s" repeatCount="indefinite" />
            </circle>
            <defs>
              <linearGradient id="bsc1" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F0B90B" />
                <stop offset="0.5" stopColor="#10B981" />
                <stop offset="1" stopColor="#0B5E55" />
              </linearGradient>
              <linearGradient id="bsc2" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0B5E55" />
                <stop offset="0.5" stopColor="#10B981" />
                <stop offset="1" stopColor="#F0B90B" />
              </linearGradient>
            </defs>
          </svg>
          {/* Central logo with glass effect */}
          <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-white/70 shadow-2xl border-2 border-neutral-200 backdrop-blur-xl">
            <img 
              src="/logo.jpg" 
              alt="Saver Logo" 
              className="w-20 h-20 rounded-xl object-cover border-2 border-emerald-200 shadow-lg animate-pulse"
              style={{ background: 'white' }}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-neutral-200 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-[#F0B90B] via-[#10B981] to-[#0B5E55] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(loadingProgress, 100)}%` }}
          ></div>
        </div>

        {/* Rotating meme messages */}
        <div className="text-center h-12 flex items-center">
          <p
            className="text-neutral-700 text-lg font-medium transition-opacity duration-500"
            key={currentMessage}
          >
            {messages[currentMessage]}
          </p>
        </div>

        {/* Dino Morse code SOS animation */}
        <div className="flex gap-2 mt-6" aria-label="SOS Morse Code">
          {/* S: ... (Dino heads) */}
          {[0,1,2].map(i => (
            <span key={`s-dot-${i}`} className="w-6 h-6 flex items-center justify-center animate-morse-dot" style={{ animationDelay: `${i*0.2}s` }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" fill="#10b981" stroke="#065f46" strokeWidth="2"/>
                <ellipse cx="12" cy="15" rx="5" ry="3" fill="#fff" opacity=".7"/>
                <ellipse cx="12" cy="10" rx="4" ry="5" fill="#fff"/>
                <ellipse cx="10" cy="10" rx="1.2" ry="1.5" fill="#065f46"/>
                <ellipse cx="14" cy="10" rx="1.2" ry="1.5" fill="#065f46"/>
                <ellipse cx="12" cy="13.5" rx="1.2" ry="0.7" fill="#065f46"/>
              </svg>
            </span>
          ))}
          {/* O: --- (dashes) */}
          {[0,1,2].map(i => (
            <span key={`o-dash-${i}`} className="w-6 h-2 rounded bg-gradient-to-br from-[#F15BB5] to-[#9945FF] animate-morse-dash" style={{ animationDelay: `${0.6+i*0.2}s` }}></span>
          ))}
          {/* S: ... (Dino heads) */}
          {[0,1,2].map(i => (
            <span key={`s2-dot-${i}`} className="w-6 h-6 flex items-center justify-center animate-morse-dot" style={{ animationDelay: `${1.2+i*0.2}s` }}>
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" fill="#10b981" stroke="#065f46" strokeWidth="2"/>
                <ellipse cx="12" cy="15" rx="5" ry="3" fill="#fff" opacity=".7"/>
                <ellipse cx="12" cy="10" rx="4" ry="5" fill="#fff"/>
                <ellipse cx="10" cy="10" rx="1.2" ry="1.5" fill="#065f46"/>
                <ellipse cx="14" cy="10" rx="1.2" ry="1.5" fill="#065f46"/>
                <ellipse cx="12" cy="13.5" rx="1.2" ry="0.7" fill="#065f46"/>
              </svg>
            </span>
          ))}
        </div>

        {/* Loading percentage */}
        <div className="mt-4 text-neutral-400 text-sm font-mono">
          {Math.round(Math.min(loadingProgress, 100))}%
        </div>
      </div>

      {/* Morse code keyframes */}
      <style>{`
        @keyframes morseDot {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          40% { opacity: 0.2; }
          100% { opacity: 0.2; }
        }
        @keyframes morseDash {
          0% { opacity: 0.2; }
          30% { opacity: 1; }
          60% { opacity: 0.2; }
          100% { opacity: 0.2; }
        }
        .animate-morse-dot {
          animation: morseDot 1.8s infinite;
        }
        .animate-morse-dash {
          animation: morseDash 1.8s infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-morse-dot, .animate-morse-dash {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;