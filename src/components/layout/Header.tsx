import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#3c3c3c] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/mint-logo.svg" alt="Linux Mint" className="h-8 w-8" />
            <span className="font-bold text-xl">Linux Mint</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLinks isActive={isActive} />
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks isActive={isActive} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function NavLinks({ isActive }: { isActive: (path: string) => boolean }) {
  return (
    <>
      <Link
        to="/"
        className={`${
          isActive('/') ? 'text-green-400' : 'hover:text-green-400'
        } transition-colors`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`${
          isActive('/about') ? 'text-green-400' : 'hover:text-green-400'
        } transition-colors`}
      >
        About
      </Link>
      <Link
        to="/download"
        className={`${
          isActive('/download') ? 'text-green-400' : 'hover:text-green-400'
        } transition-colors`}
      >
        Download
      </Link>
      <Link
        to="/donors"
        className={`${
          isActive('/donors') ? 'text-green-400' : 'hover:text-green-400'
        } transition-colors`}
      >
        Donors
      </Link>
      <Link
        to="/maintainers"
        className={`${
          isActive('/maintainers') ? 'text-green-400' : 'hover:text-green-400'
        } transition-colors`}
      >
        Maintainers
      </Link>
    </>
  );
}