import React from 'react';

const CoinGecko = () => {
  return (
    <section id="coingecko" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CoinGecko <span className="text-saver-green">Market Data</span></h2>
          <div className="w-20 h-1 bg-saver-green mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            View comprehensive market data for SAVER
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src="https://www.geckoterminal.com/bsc/pools/0x16e1a9b9bbe22707020f8b1d569182b4f75c50be?embed=1"
            title="SAVER GeckoTerminal"
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