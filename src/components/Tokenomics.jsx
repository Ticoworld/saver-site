import React from 'react';
import { motion as Motion } from 'framer-motion';
import CopyAddress from './CopyAddress';
import SOS from '../config/sos';

const Tokenomics = () => {
  const tokenDetails = [
    { title: 'Token Name', value: 'SAVER ON BSC' },
    { title: 'Ticker', value: '$SOS' },
    { title: 'Total Supply', value: SOS.supply },
    { title: 'Blockchain', value: 'BNB Smart Chain (BSC)' },
  ];

  const features = [
    'Phase 1: Simple community launch focused on liquidity',
    '0% trading tax – clean swaps in and out',
    'No reflections or automated reward mechanics',
    'No team wallets — everyone plays by the same rules',
    'Transparent treasury guidance with community input',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token <span className="text-saver-dark">omics</span></h2>
          <div className="w-20 h-1 bg-saver-dark mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Built for BSC believers. A clean token structure with no tax, no automatic rewards, and a focus on community strength.
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

            <div className="mb-6 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Contract Address</h4>
                {SOS.contractAddress ? (
                  <CopyAddress address={SOS.contractAddress} />
                ) : (
                  <div className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3">Contract address will be shared after launch.</div>
                )}
              </div>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-saver-dark text-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6">BSC Token Setup</h3>

            {/* Core facts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
              {[ 
                { value: '0%', label: 'Trading Tax' },
                { value: '0%', label: 'Reflections' },
                { value: '1B', label: 'Total Supply' },
                { value: 'BSC', label: 'Network' }
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-4">
                  <div className="text-sm text-white/80">{item.label}</div>
                  <div className="text-2xl font-bold">{item.value}</div>
                </div>
              ))}
            </div>

            <div className="bg-black/10 rounded-xl p-4 border border-white/10 text-sm text-white/80 mb-6">
              No hidden fees, no automatic reward splits — just straightforward trading on BSC.
            </div>

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