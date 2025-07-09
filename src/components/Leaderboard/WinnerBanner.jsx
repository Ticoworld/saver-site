import React, { useState, useEffect } from 'react';

const WinnerBanner = () => {
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Contest end date
  const contestEnd = new Date('2025-07-16T15:00:00Z');
  const now = new Date();
  
  useEffect(() => {
    const fetchWinner = async () => {
      try {
        const response = await fetch('https://your-backend-url/api/winner');
        if (!response.ok) throw new Error('Failed to fetch winner');
        
        const data = await response.json();
        setWinner(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    // Only fetch if contest has ended
    if (now > contestEnd) {
      fetchWinner();
    }
  }, []);
  
  if (now < contestEnd) return null;
  
  if (loading) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6">
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-saver-green mr-3"></div>
          <p className="font-bold">Calculating winner...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 p-4 my-6">
        <p className="font-bold text-red-700">Error loading winner</p>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }
  
  if (!winner) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-6">
        <p className="font-bold">Winner announcement pending</p>
        <p>No winner has been determined yet. Please check back later.</p>
      </div>
    );
  }
  
  const formatAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };
  
  return (
    <div className="bg-gradient-to-r from-saver-green to-green-600 rounded-xl p-6 my-8 text-center shadow-lg">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
          🏆 Contest Winner
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Congratulations to the Winner!
        </h2>
        
        <div className="bg-white/90 rounded-lg p-6 shadow-inner">
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-1">
              {formatAddress(winner.address)}
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="bg-saver-green/20 text-saver-green px-2 py-1 rounded-full text-xs">
                {winner.buyDays.length} Buy Days
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {winner.totalBought.toLocaleString()} SAVER
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="bg-saver-green/10 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Prize Won</p>
                <p className="font-bold">1,000,000 SAVER</p>
              </div>
              <div className="bg-saver-green/10 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Total Bought</p>
                <p className="font-bold">{winner.totalBought.toLocaleString()} SAVER</p>
              </div>
            </div>
            
            <button 
              className="mt-6 bg-saver-green text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition"
              onClick={() => navigator.clipboard.writeText(winner.address)}
            >
              Copy Winner Address
            </button>
          </div>
        </div>
        
        <div className="mt-6 text-white/80 text-sm">
          <p>Winner determined at {new Date(winner.timestamp).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default WinnerBanner;