// src/components/CopyAddress.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';

const CopyAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between bg-saver-green/5 border border-saver-green/20 rounded-lg p-2"
    >
      <span className="text-sm font-mono truncate mr-2">{address}</span>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={copyToClipboard}
        className={`p-2 rounded-lg ${
          copied ? 'bg-emerald-500 text-white' : 'bg-saver-green/10 hover:bg-saver-green/20'
        }`}
        aria-label={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </motion.button>
    </motion.div>
  );
};

export default CopyAddress;