import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/snigdhaos-logo.svg"
              alt="Snigdha OS"
              className="h-10 w-10 hover:scale-110 transition-transform"
            />
            <span className="font-extrabold text-2xl tracking-wide">
              SNIGDHA OS
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-700 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLinks isActive={isActive} closeMenu={() => setIsMenuOpen(false)} />
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 bg-gray-900 p-4 rounded-lg shadow-md">
              <NavLinks isActive={isActive} closeMenu={() => setIsMenuOpen(false)} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function NavLinks({ isActive, closeMenu }: { isActive: (path: string) => boolean; closeMenu: () => void }) {
  return (
    <>
      {['/', '/about', '/download', '/donors', '/maintainers'].map((path, idx) => {
        const labels = ['Home', 'About', 'Download', 'Donors', 'Maintainers'];
        return (
          <Link
            key={path}
            to={path}
            className={`${
              isActive(path)
                ? 'text-indigo-400 underline underline-offset-4'
                : 'hover:text-indigo-400'
            } font-medium transition-colors`}
            onClick={closeMenu} // Close the menu when a link is clicked
          >
            {labels[idx]}
          </Link>
        );
      })}
    </>
  );
}
