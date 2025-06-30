// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../assets/about-image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What is <span className="text-saver-green">SAVER</span>?</h2>
          <div className="w-20 h-1 bg-saver-green mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            SAVER is a community-first meme token born in uncertain times. It stands for preparedness, mutual help, and real value.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-saver-green/10 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-saver-green">Our Mission</h3>
              <p className="mb-4">
                In a world where trust matters more than hype, SAVER delivers both a practical tool and a unifying symbol. It's not just a coin – it's a mindset.
              </p>
              <p>
                SAVER combines the playful, community-driven nature of a meme coin with a unique mission centered on preparedness, financial security, and community empowerment.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-saver-green/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-saver-green/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={AboutImage} 
                alt="SAVERCOIN Values" 
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Community & Preparedness</h3>
                <p className="text-white/80 text-sm">Core values of SAVERCOIN</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;