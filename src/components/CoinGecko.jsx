import React from 'react';
import SOS from '../config/sos';

const CoinGecko = () => {
  return (
    <section id="coingecko" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GeckoTerminal <span className="text-saver-dark">Market Data</span></h2>
          <div className="w-20 h-1 bg-saver-dark mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            View comprehensive market data for SAVER
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src={SOS.links.geckoTerminal || 'about:blank'}
            title="$SOS GeckoTerminal"
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

export default CoinGecko;