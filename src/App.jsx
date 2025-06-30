// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-saver-green/5 to-white font-sans">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;