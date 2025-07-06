import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaSearch, FaExchangeAlt, FaLink } from 'react-icons/fa';

const HowToBuy = () => {
  const steps = [
    {
      icon: <FaWallet className="text-2xl" />,
      title: "Set Up Wallet",
      description: "Install MetaMask or TrustWallet and add BNB Smart Chain network"
    },
    {
      icon: <FaSearch className="text-2xl" />,
      title: "Get BNB",
      description: "Buy BNB on an exchange and send it to your wallet"
    },
    {
      icon: <FaExchangeAlt className="text-2xl" />,
      title: "Connect to DEX",
      description: "Go to PancakeSwap and connect your wallet"
    },
    {
      icon: <FaLink className="text-2xl" />,
      title: "Buy SAVER",
      description: "Search for our contract address and swap BNB for SAVER"
    }
  ];

  return (
    <section id="howtobuy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Buy <span className="text-saver-green">SAVER</span></h2>
          <div className="w-20 h-1 bg-saver-green mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Join the SAVER community in just a few simple steps
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-saver-green/5 rounded-xl p-6 border border-saver-green/10 hover:border-saver-green/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-saver-green text-white flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Buy on PancakeSwap</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Trade directly on PancakeSwap (recommended)
            </p>
            <a 
              href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xd2bdf8d84a9d8c77da58385582f706e1eb894444" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-saver-green px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
            >
              Buy on PancakeSwap
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Track on DexScreener</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Monitor price and trading volume
            </p>
            <a 
              href="https://dexscreener.com/bsc/0x16E1a9b9BbE22707020f8b1D569182B4f75C50BE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
            >
              View DexScreener
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;