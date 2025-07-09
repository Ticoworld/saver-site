// src/components/Leaderboard/StatusBadge.jsx
import React from 'react';

const StatusBadge = ({ disqualified, buyDays }) => {
  if (disqualified) {
    return (
      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
        Disqualified
      </span>
    );
  }
  
  if (buyDays >= 5) {
    return (
      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
        Eligible
      </span>
    );
  }
  
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
      Pending ({buyDays}/5 days)
    </span>
  );
};

export default StatusBadge;