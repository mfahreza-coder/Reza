
import React from 'react';
import Logo from './Logo';

interface HeaderProps {
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onHomeClick) {
      e.preventDefault();
      onHomeClick();
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-center md:justify-start">
        <a href="/" onClick={handleClick} aria-label="Kembali ke Beranda">
           <Logo className="h-14 w-auto" />
        </a>
      </div>
    </header>
  );
};

export default Header;
