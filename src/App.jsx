import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { usePerformanceMonitor } from './utils/performance';

// Lazy load components for code splitting
const HomePage = lazy(() => import('../pages/HomePage'));
// const LeaderboardPage = lazy(() => import('./components/Leaderboard/LeaderboardPage'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Enable performance monitoring in development
  if (import.meta.env.DEV) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    usePerformanceMonitor();
  }

  // Preload critical images
  useEffect(() => {
    const imagesToPreload = [
      '/logo.jpg',
      '/beach.jpg',
      '/bullish.jpg',
      '/strong.jpg'
    ];

    const imagePromises = imagesToPreload.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.allSettled(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  // Handle loading completion
  const handleLoadComplete = () => {
    if (imagesLoaded) {
      setIsLoading(false);
    }
  };

  // Auto-complete after max time
  useEffect(() => {
    const maxLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 seconds max

    return () => clearTimeout(maxLoadTime);
  }, []);

  // Complete loading when images are ready
  useEffect(() => {
    if (imagesLoaded && !isLoading) {
      // Images are loaded and loader is done
    }
  }, [imagesLoaded, isLoading]);

  if (isLoading) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black/5 to-white font-sans">
        <Header />
        <main className='py-10'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/** Leaderboard temporarily disabled per rebrand **/}
            {/** <Route path="/leaderboard" element={<LeaderboardPage />} /> **/}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;