import React from 'react';
import { motion as Motion } from 'framer-motion';

const SectionReveal = ({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  distance = 50,
  duration = 0.8
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  const variants = {
    hidden: { 
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={className}
    >
      {children}
    </Motion.div>
  );
};

export default SectionReveal;
