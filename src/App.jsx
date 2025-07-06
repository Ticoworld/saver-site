import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import DexScreener from './components/DexScreener';
import CoinGecko from './components/CoinGecko';
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
      <DexScreener />
      <CoinGecko />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;