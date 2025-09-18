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
    '6% Transfer Tax supporting rewards and development',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token <span className="text-saver-dark">omics</span></h2>
          <div className="w-20 h-1 bg-saver-dark mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Get rewards when you hold $SOS. A transparent project designed for long-term growth and stability.
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
              {SOS.distributorAddress && (
                <div>
                  <h4 className="font-semibold mb-2">Distributor Address</h4>
                  <CopyAddress address={SOS.distributorAddress} />
                </div>
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

            {/* Quick metrics row (matches tokenomics image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80">Transfer Tax</div>
                <div className="text-2xl font-bold">6%</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80">Developer Rewards</div>
                <div className="text-2xl font-bold">1%</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80">Holder Rewards</div>
                <div className="text-2xl font-bold">99%</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-sm text-white/80">Burn Rate</div>
                <div className="text-2xl font-bold">0%</div>
              </div>
            </div>

            {/* Token configuration box */}
            <div className="bg-black/10 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Total Tax Rate</span>
                <span className="font-semibold">6%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Platform Fee</span>
                <span className="font-semibold">2%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Dev Share</span>
                <span className="font-semibold">1%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Holder Share</span>
                <span className="font-semibold">99%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">Min Holding</span>
                <span className="font-semibold">100,000 SOS</span>
              </div>
              <div className="text-xs text-white/60 pt-2">Note: Dev and Holder shares are calculated from remaining amount after platform fee is deducted.</div>
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