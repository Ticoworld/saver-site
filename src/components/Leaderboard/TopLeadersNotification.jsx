import React, { useState, useEffect } from 'react';

const TopLeadersNotification = ({ leaders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Rotate through top leaders every 8 seconds
  useEffect(() => {
    if (leaders.length === 0) return;
    
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.min(3, leaders.length));
        setVisible(true);
      }, 500); // Fade-out/in duration
    }, 8000);

    return () => clearInterval(interval);
  }, [leaders]);

  if (leaders.length === 0) return null;

  const leader = leaders[currentIndex];
  const rankEmoji = ['🥇', '🥈', '🥉'][currentIndex];
  
  return (
    <div className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 z-50 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto text-center font-bold flex justify-center items-center">
        <span className="text-xl mr-2">{rankEmoji}</span>
        <span className="mr-1">#{currentIndex + 1}:</span>
        <span className="font-mono bg-black/20 px-2 py-1 rounded mr-2">
          {leader.address.substring(0, 6)}...{leader.address.substring(38)}
        </span>
        <span className="hidden sm:inline">is leading with</span>
        <span className="ml-2 bg-black text-yellow-300 px-2 py-1 rounded">
          {leader.totalBought.toLocaleString(undefined, { maximumFractionDigits: 0 })} SAVER
        </span>
      </div>
    </div>
  );
};

export default TopLeadersNotification;