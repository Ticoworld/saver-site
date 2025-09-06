import React from 'react';
import { motion as Motion } from 'framer-motion';
import CopyAddress from './CopyAddress';
import SOS from '../config/sos';

const Tokenomics = () => {
  const tokenDetails = [
    { title: 'Token Name', value: 'SAVER ON SOL' },
    { title: 'Ticker', value: '$SOS' },
    { title: 'Total Supply', value: SOS.supply },
    { title: 'Blockchain', value: 'Solana' },
  ];

  const features = [
    'Fair Launch on Pump.fun (no presale, no pre-mint)',
    '100% of tokens enter the liquidity pool at launch',
    '0% Buy/Sell Tax',
    'No Dev Wallets – team only owns what they buy',
    'Community Treasury will be created post-launch',
    'Transparent, community-driven usage of treasury',
  ];

  return (
  <section id="tokenomics" className="py-20 bg-gradient-to-br from-saver-dark/5 to-saver-dark/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/5 to-transparent hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-saver-green/10 rounded-full transform translate-x-1/3 translate-y-1/3 hidden sm:block"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
  <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token <span className="text-saver-dark">Details</span></h2>
          <div className="w-20 h-1 bg-saver-dark mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            A transparent project designed for long-term growth and stability. You get what you see – and what you hold.
          </p>
  </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6 text-saver-dark">Token Information</h3>

            <div className="space-y-4 mb-8">
              {tokenDetails.map((item, index) => (
                <div key={index} className="flex justify-between border-b border-gray-100 pb-3 text-sm sm:text-base">
                  <span className="font-medium text-gray-600">{item.title}</span>
                  <span className="font-semibold text-right">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="font-semibold mb-2">Contract Address</h4>
              {SOS.contractAddress ? (
                <CopyAddress address={SOS.contractAddress} />
              ) : (
                <div className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3">Contract address will be shared after launch.</div>
              )}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-saver-dark text-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6">Transparent Tokenomics</h3>

            <ul className="space-y-4 text-sm sm:text-base">
              {features.map((feature, index) => (
                <Motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-white rounded-full p-1 mt-1 mr-3 shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>{feature}</span>
        </Motion.li>
              ))}
            </ul>
      </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;