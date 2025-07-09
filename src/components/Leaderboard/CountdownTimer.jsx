// src/components/Leaderboard/CountdownTimer.jsx
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate - new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="bg-saver-green/20 p-4 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-3">Contest Ends In:</h2>
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg px-3 py-2 text-xl font-bold">
            {formatTime(timeLeft.days)}
          </div>
          <span className="text-sm mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg px-3 py-2 text-xl font-bold">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-sm mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg px-3 py-2 text-xl font-bold">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-sm mt-1">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-lg px-3 py-2 text-xl font-bold">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-sm mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;