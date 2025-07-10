import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '/logo.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-saver-green/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-saver-green/10 rounded-full transform translate-x-1/4 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-saver-green">SAVER</span> - Built to Support, Made to Last
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A community-first meme token for preparedness, mutual help, and real value.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0xd2bdf8d84a9d8c77da58385582f706e1eb894444"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-saver-green text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-block"
              >
                Buy on PancakeSwap
              </motion.a>
              
              {/* <motion.a
                href="https://four.meme/token/0xd2bdf8d84a9d8c77da58385582f706e1eb894444"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-saver-green text-saver-green px-6 py-3 rounded-full font-semibold hover:bg-saver-green/10 transition-all inline-block"
              >
                Buy on Four.meme
              </motion.a> */}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-saver-green/10 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-saver-green/5 rounded-2xl transform -rotate-3"></div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
                >
                  <img 
                    src={HeroImage} 
                    alt="SAVERCOIN Community" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-saver-green text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                >
                  #SAVERARMY
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;