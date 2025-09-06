import React, { Suspense, lazy } from 'react';
import Hero from '../src/components/Hero';
import About from '../src/components/About';

// Lazy load components below the fold
const Story = lazy(() => import('../src/components/Story'));
const Tokenomics = lazy(() => import('../src/components/Tokenomics'));
const Utilities = lazy(() => import('../src/components/Utilities'));
const Community = lazy(() => import('../src/components/Community'));
const HowToBuy = lazy(() => import('../src/components/HowToBuy'));
const DexScreener = lazy(() => import('../src/components/DexScreener'));
const CoinGecko = lazy(() => import('../src/components/CoinGecko'));
const Roadmap = lazy(() => import('../src/components/Roadmap'));

const SectionFallback = () => (
  <div className="py-24 flex justify-center">
    <div className="animate-pulse bg-gradient-to-r from-emerald-100 to-neutral-100 rounded-lg h-32 w-full max-w-md"></div>
  </div>
);

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      
      <Suspense fallback={<SectionFallback />}>
        <Story />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Tokenomics />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Utilities />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <HowToBuy />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <DexScreener />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <CoinGecko />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Roadmap />
      </Suspense>
      
      <Suspense fallback={<SectionFallback />}>
        <Community />
      </Suspense>
    </>
  );
};

export default HomePage;