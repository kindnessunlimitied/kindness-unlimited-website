import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    }
    if (location.pathname !== '/') {
      navigate('/');
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Mission', href: '#mission' },
    { name: 'Honor', href: '#honor' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Founder', href: '/founder' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-yellow-400 py-3 shadow-lg backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center min-h-[60px]">
          {/* Logo and Brand Name */}
          <div className={`flex items-center flex-shrink-0 transition-all duration-500 ${
            isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'
          }`}>
            <div onClick={handleLogoClick} className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <img 
                src="/1000005447 (1) (1) (1).png" 
                alt="Kindness Unlimited Logo" 
                className={`w-auto mix-blend-multiply transition-all duration-300 ${
                  isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-12'
                }`}
                style={{
                  filter: 'contrast(1.2) brightness(0.9)',
                }}
              />
              <h1 className={`ml-2 sm:ml-3 font-bold transition-all duration-500 charity-title ${
                isScrolled 
                  ? 'text-lg sm:text-xl md:text-2xl text-black bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-pulse' 
                  : 'text-xl sm:text-2xl md:text-3xl text-black'
              } drop-shadow-sm`}>
                Kindness Unlimited
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-90'
          }`}>
            {menuItems.map((item) => (
              item.href.startsWith('/') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 text-sm xl:text-base text-center relative group ${
                    isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-yellow-300 drop-shadow-lg'
                  } ${location.pathname === item.href ? 'font-bold' : ''}`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${isScrolled ? 'bg-black' : 'bg-yellow-400'}`}></span>
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 text-sm xl:text-base text-center relative group ${
                    isScrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-yellow-300 drop-shadow-lg'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-black' : 'bg-yellow-400'
                  }`}></span>
                </a>
              )
            ))}
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden lg:flex">
            <a
              href={location.pathname === '/' ? '#donate' : '/#donate'}
              className={`rounded-full font-semibold transition-all duration-300 text-center transform hover:scale-105 active:scale-95 ${
                isScrolled 
                  ? 'px-5 py-2 text-sm bg-black text-yellow-400 hover:bg-gray-800 shadow-lg' 
                  : 'px-6 py-2.5 text-base bg-yellow-400 text-black hover:bg-yellow-300 shadow-xl drop-shadow-lg'
              }`}
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 focus:outline-none transition-all duration-300 rounded-full ${
                isScrolled 
                  ? 'text-black hover:bg-black hover:bg-opacity-10' 
                  : 'text-white hover:bg-white hover:bg-opacity-20 drop-shadow-lg'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-yellow-400 mt-2 rounded-xl shadow-xl py-4 absolute left-4 right-4 backdrop-blur-sm border border-yellow-300">
            <div className="flex flex-col space-y-3 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-black font-medium py-2 text-center hover:bg-black hover:bg-opacity-10 rounded-lg transition-colors duration-200 ${
                    location.pathname === item.href ? 'bg-black bg-opacity-10 font-bold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={location.pathname === '/' ? '#donate' : '/#donate'}
                className="bg-black text-yellow-400 px-6 py-2 rounded-full font-semibold text-center mt-2 hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;