import React from 'react';
import SOS from '../config/sos';

const DexScreener = () => {
  return (
    <section id="dexscreener" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Live <span className="text-saver-dark">Market Data</span></h2>
          <div className="w-20 h-1 bg-saver-dark mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Track SAVER price and trading activity in real-time
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src={SOS.links.dexscreener || 'about:blank'}
            title="$SOS DexScreener"
            width="100%"
            height="500"
            frameBorder="0"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DexScreener;