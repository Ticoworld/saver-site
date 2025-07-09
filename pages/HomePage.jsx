import React from 'react';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Tokenomics from '../src/components/Tokenomics';
import HowToBuy from '../src/components/HowToBuy';
import DexScreener from '../src/components/DexScreener';
import CoinGecko from '../src/components/CoinGecko';
import Roadmap from '../src/components/Roadmap';
import ContestPromo from '../src/components/ContestPromo'; // Add this

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ContestPromo /> {/* Add contest promo section */}
      <Tokenomics />
      <HowToBuy />
      <DexScreener />
      <CoinGecko />
      <Roadmap />
    </>
  );
};

export default HomePage;