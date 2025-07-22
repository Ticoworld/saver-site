import React from 'react';
import { motion } from 'framer-motion';
import CopyAddress from './CopyAddress';

const Tokenomics = () => {
  const tokenDetails = [
    { title: 'Token Name', value: 'SAVER' },
    { title: 'Ticker', value: '$SAVER' },
    { title: 'Total Supply', value: '950,000,000' },
    { title: 'Blockchain', value: 'BNB Smart Chain (BSC)' },
  ];

  const features = [
    '100% Public Supply: No tokens reserved for the team',
    '0% Buy/Sell Tax: Fair, clean and efficient',
    'No Presale: Launched fairly on Four.meme',
    'No Dev Wallets: Team only owns what they buy',
    'Liquidity now on PancakeSwap',
    'Achieved $30K+ market cap',
    'LP is open, public and community-visible',
    '5% Supply burned - 950M in supply',
    'Liquidity locked and burned',
    'Contract locked'
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-saver-green/5 to-saver-green/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/5 to-transparent hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-saver-green/10 rounded-full transform translate-x-1/3 translate-y-1/3 hidden sm:block"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token <span className="text-saver-green">Details</span></h2>
          <div className="w-20 h-1 bg-saver-green mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            A transparent project designed for long-term growth and stability. You get what you see – and what you hold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6 text-saver-green">Token Information</h3>

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
              <CopyAddress address="0xd2bdf8d84a9d8c77da58385582f706e1eb894444" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-saver-green text-white rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden"
          >
            <h3 className="text-2xl font-bold mb-6">Transparent Tokenomics</h3>

            <ul className="space-y-4 text-sm sm:text-base">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-white rounded-full p-1 mt-1 mr-3 shrink-0">
                    <div className="w-2 h-2 bg-saver-green rounded-full"></div>
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;