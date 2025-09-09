import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Testimonials from './components/Testimonials';
import Donate from './components/Donate';
import HonorGallery from './components/HonorGallery';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import FounderPage from './components/FounderPage';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [skipSplash, setSkipSplash] = useState(false);

  const HomePage = () => (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${(showSplash && !skipSplash) ? 'opacity-0' : 'opacity-100'}`}>
      <Header onLogoClick={() => setSkipSplash(true)} />
      <main>
        <Hero />
        <Mission />
        <HonorGallery />
        <Testimonials />
        <Donate />
      </main>
      <Footer />
    </div>
  );

  return (
    <Router>
      {(showSplash && !skipSplash) && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {(showSplash && !skipSplash) && (
        <style>{`
          body { overflow: hidden !important; }
        `}</style>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/founder" element={<FounderPage onLogoClick={() => setSkipSplash(true)} />} />
      </Routes>
    </Router>
  );
}

export default App;