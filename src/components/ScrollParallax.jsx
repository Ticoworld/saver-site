import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

const ScrollParallax = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  
  return (
    <div ref={ref} className={className}>
      <Motion.div style={{ y }}>
        {children}
      </Motion.div>
    </div>
  );
};

export default ScrollParallax;
