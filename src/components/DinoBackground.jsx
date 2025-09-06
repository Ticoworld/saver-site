import React from 'react';
import { motion as Motion } from 'framer-motion';

const DinoBackground = ({ className = '', opacity = 0.03, size = 'large' }) => {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48', 
    large: 'w-64 h-64',
    xlarge: 'w-80 h-80'
  };

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`absolute pointer-events-none ${sizeClasses[size]} ${className}`}
      style={{ 
        background: `radial-gradient(circle, rgba(16, 185, 129, ${opacity}) 0%, transparent 70%)`,
        borderRadius: '50%'
      }}
    >
      {/* Subtle Dino silhouette */}
      <div 
        className="w-full h-full opacity-20"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 80 Q30 60 50 65 Q70 60 80 80 Q75 85 50 85 Q25 85 20 80Z' fill='%2310b981'/%3E%3Ccircle cx='35' cy='70' r='3' fill='%2310b981'/%3E%3Ccircle cx='65' cy='70' r='3' fill='%2310b981'/%3E%3C/svg%3E")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
    </Motion.div>
  );
};

export default DinoBackground;
