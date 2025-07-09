import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from '../pages/HomePage';
import LeaderboardPage from './components/Leaderboard/LeaderboardPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-saver-green/5 to-white font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;