import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPulsing, setPulsing] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollAttempts, setScrollAttempts] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulsing(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Prevent body scrolling while splash screen is active
  useEffect(() => {
    // Store current scroll position
    setScrollPosition(window.scrollY);
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition);
    };
  }, []);

  // Add scroll listener to dismiss splash screen
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Detect scroll attempts even when scrolling is prevented
      if (e.deltaY > 0) { // Scrolling down
        setScrollAttempts(prev => prev + 1);
        if (prev => prev >= 2) { // After 2 scroll attempts
          handleClick();
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Detect touch scroll attempts on mobile
      const touch = e.touches[0];
      if (touch) {
        setScrollAttempts(prev => prev + 1);
        if (prev => prev >= 2) {
          handleClick();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect arrow key down, page down, space, etc.
      if (['ArrowDown', 'PageDown', 'Space', 'End'].includes(e.code)) {
        handleClick();
      }
    };

    // Use wheel and touch events instead of scroll since scrolling is prevented
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleClick = () => {
    setIsAnimating(false);
    
    // Restore scrolling immediately when dismissed
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
    
    setTimeout(onComplete, 1000);
  };

  return (
    <div
      className={`fixed inset-0 bg-yellow-400 z-50 flex items-center justify-center transition-opacity duration-1000 ${
        !isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleClick}
    >
      <div
        className={`w-64 h-64 transition-transform duration-1000 ${
          isPulsing ? 'animate-pulse cursor-pointer hover:scale-110 active:scale-95' : 'animate-spin-slow'
        } ${!isAnimating ? 'scale-0' : 'scale-100'}`}
      >
        <img 
          src="/1000005447 (1) (1) (1).png" 
          alt="Kindness Unlimited Logo" 
          className="w-full h-full object-contain mix-blend-multiply"
          style={{
            filter: 'contrast(1.2) brightness(0.9)',
          }}
        />
      </div>
    </div>
  );
};

export default SplashScreen;