import React, { useState, useEffect } from 'react';
import LeaderboardTable from './LeaderboardTable';
import CountdownTimer from './CountdownTimer';



const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Contest dates
  // Ensure these dates are correctly set and in UTC if your backend uses UTC.
  // Current time: Wednesday, July 9, 2025 at 2:20:30 PM WAT (UTC+1)
  // Your contest dates are set to UTC (Z suffix)
const contestStart = new Date('2025-07-09T15:00:00Z'); // Changed from 14:00 to 15:00 UTC
const contestEnd = new Date('2025-07-16T15:00:00Z');   // Changed from 14:00 to 15:00 UTC
// Adjust if needed

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // The backend API at /api/leaderboard should now return only qualified wallets
        // (disqualified: false AND meeting 5/7 day criteria).
        const response = await fetch('https://savercoin.onrender.com/api/leaderboard');
        if (!response.ok) {
            // Attempt to read error message from response body
            const errorBody = await response.json();
            throw new Error(errorBody.message || 'Failed to fetch leaderboard');
        }
        
        const data = await response.json();
        setLeaderboardData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching leaderboard:", err);
      }
    };

    fetchLeaderboard();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-saver-green"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p>Error loading leaderboard: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 bg-saver-green text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Display message if no qualified contestants are found
  if (leaderboardData.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">$SAVER Buy & Hold Contest</h1>
          <CountdownTimer endDate={contestEnd} />
          
          <div className="mt-6 bg-saver-green/10 p-4 rounded-lg border border-saver-green/20">
            <h2 className="text-xl font-semibold mb-2">🏆 Grand Prize: 1,000,000 $SAVER</h2>
            <p className="text-gray-700">
              Wallet with the highest total SAVER holdings at {contestEnd.toLocaleString()} wins!
            </p>
          </div>

          <div className="mt-12 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
            <p className="font-bold">No Qualified Contestants Yet!</p>
            <p>Be the first to join the leaderboard by meeting the contest rules.</p>
          </div>
          
          <div className="mt-8 bg-saver-green/5 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Contest Rules:</h3>
            <ul className="list-disc pl-5 space-y-2 text-left inline-block">
              <li>Must hold SAVER during the contest period</li>
              <li>Minimum 1 buy per day ($10+) to qualify</li>
              <li>No selling allowed - immediate disqualification</li>
              <li>Winner determined by highest total SAVER holdings</li>
              <li>Must have bought on at least 5 out of the last 7 active days.</li> {/* Added for clarity */}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">$SAVER Buy & Hold Contest</h1>
          <CountdownTimer endDate={contestEnd} />
          
          <div className="mt-6 bg-saver-green/10 p-4 rounded-lg border border-saver-green/20">
            <h2 className="text-xl font-semibold mb-2">🏆 Grand Prize: 1,000,000 $SAVER</h2>
            <p className="text-gray-700">
              Wallet with the highest total SAVER holdings at {contestEnd.toLocaleString()} wins!
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <LeaderboardTable data={leaderboardData} />
        </div>
        
        <div className="mt-8 bg-saver-green/5 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Contest Rules:</h3>
          <ul className="list-disc pl-5 space-y-2 text-left inline-block">
            <li>Must hold SAVER during the contest period</li>
            <li>Minimum 1 buy per day ($10+) to qualify</li>
            <li>No selling allowed - immediate disqualification</li>
            <li>Winner determined by highest total SAVER holdings</li>
            <li>Must have bought on at least 5 out of the last 7 active days.</li> {/* Added for clarity */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;