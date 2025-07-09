import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContestPromo = () => {
  return (
    <section id="contest" className="py-20 bg-gradient-to-r from-emerald-300 to-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-white text-saver-green px-4 py-1 rounded-full mb-4 font-bold shadow-md">
              LIVE CONTEST
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              $SAVER Buy & Hold Contest
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Compete for <span className="font-bold text-yellow-300">1,000,000 $SAVER</span> - 
              The biggest holder wins!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-white/20"
            >
              <div className="text-4xl font-bold mb-2">7</div>
              <h3 className="text-xl font-semibold mb-2">Days</h3>
              <p>July 9 - July 16 UTC</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 p-6 rounded-xl border border-white/20"
            >
              <div className="text-4xl font-bold mb-2">1M</div>
              <h3 className="text-xl font-semibold mb-2">Prize Pool</h3>
              <p>1,000,000 $SAVER</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white/10 p-6 rounded-xl border border-white/20"
            >
              <div className="text-4xl font-bold mb-2">1</div>
              <h3 className="text-xl font-semibold mb-2">Grand Winner</h3>
              <p>Highest holder wins all</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/leaderboard" 
              className="inline-block bg-white hover:bg-gray-100 text-saver-green font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              View Live Leaderboard →
            </Link>
            <div className="mt-4 text-sm text-white/80">
              Contest ends: July 16, 2025 at 12:00 UTC
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContestPromo;