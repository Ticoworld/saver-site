import React from 'react';
import { motion as Motion } from 'framer-motion';
import { 
  WalletIcon, 
  MagnifyingGlassIcon, 
  ArrowsRightLeftIcon, 
  LinkIcon 
} from '@heroicons/react/24/outline';
import SOS from '../config/sos';
import CopyAddress from './CopyAddress';

const HowToBuy = () => {
  const steps = [
    {
      icon: WalletIcon,
      title: 'Set Up Wallet',
      description: 'Install MetaMask or Trust Wallet and enable the BSC network.'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Fund with BNB',
      description: 'Buy BNB on an exchange and send it to your BSC wallet.'
    },
    {
      icon: ArrowsRightLeftIcon,
      title: 'Connect to a DEX',
      description: 'Choose PancakeSwap or your preferred BSC DEX for swapping.'
    },
    {
      icon: LinkIcon,
      title: 'Swap for $SOS',
      description: 'Paste the contract address and trade BNB for $SOS.'
    }
  ];

  return (
    <section id="howtobuy" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-neutral-50/50"></div>
      
      <div className="container mx-auto px-4 relative">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            Getting Started
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-neutral-900">
            How to Join <span className="text-emerald-600">$SOS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-600 leading-relaxed">
            Simple, secure steps to join the SAVER community
          </p>
        </Motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-neutral-200 to-neutral-300 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 group-hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-900">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            </Motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Contract Address</h3>
            <p className="mb-6 text-emerald-100 leading-relaxed">
              Use this CA on BSC when adding liquidity or swapping for $SOS.
            </p>
            <div className="max-w-xl mx-auto">
              {SOS.contractAddress ? (
                <CopyAddress address={SOS.contractAddress} />
              ) : (
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-sm">
                  Contract address will be shared soon.
                </div>
              )}
            </div>
            {SOS.links.bscscan && (
              <a 
                href={SOS.links.bscscan}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-neutral-100 transition-colors"
              >
                View on BscScan
              </a>
            )}
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Market Analytics</h3>
            <p className="mb-6 text-neutral-300 leading-relaxed">
              Monitor price and trading volume on analytics platforms
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {SOS.links.dexscreener && (
                <a 
                  href={SOS.links.dexscreener}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-neutral-800 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-neutral-100 transition-colors"
                >
                  Dexscreener
                </a>
              )}
              {SOS.links.geckoTerminal && (
                <a 
                  href={SOS.links.geckoTerminal}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-purple-500 transition-colors"
                >
                  GeckoTerminal
                </a>
              )}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;