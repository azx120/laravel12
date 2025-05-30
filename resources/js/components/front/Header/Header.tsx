import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import MainHeader from './MainHeader';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'transform' : ''}`}>
      <TopBar className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-10'}`} />
      <MainHeader className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`} />
    </header>
  );
};

export default Header;