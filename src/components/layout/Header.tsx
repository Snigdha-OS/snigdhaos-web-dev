import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src="/snigdhaos-logo.svg"
              alt="Snigdha OS"
              className="h-12 w-12 group-hover:scale-125 transition-transform duration-300"
            />
            <span className="font-extrabold text-3xl tracking-wide text-[#6495ED] group-hover:text-white transition-colors duration-300">
              SNIGDHA OS
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#6495ED]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7 animate-spin-reverse" />
            ) : (
              <Menu className="h-7 w-7 animate-spin" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <NavLinks isActive={isActive} closeMenu={() => setIsMenuOpen(false)} animate />
          </nav>
        </div>

        {/* Mobile navigation */}
        <div
          className={`${
            isMenuOpen ? 'animate-fade-in-down' : 'animate-fade-out-up'
          } md:hidden overflow-hidden transition-all duration-500`}
        >
          {isMenuOpen && (
            <nav className="mt-4">
              <div className="flex flex-col space-y-4 bg-gray-800 p-5 rounded-lg shadow-lg">
                <NavLinks
                  isActive={isActive}
                  closeMenu={() => setIsMenuOpen(false)}
                  animate
                />
              </div>
            </nav>
          )}
        </div>
      </div>

      {/* Global Keyframe Animations (inline style tag) */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-out-up {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}

function NavLinks({
  isActive,
  closeMenu,
  animate,
}: {
  isActive: (path: string) => boolean;
  closeMenu: () => void;
  animate?: boolean;
}) {
  return (
    <ul className="space-y-4 md:space-y-0 md:flex md:space-x-10">
      {['/', '/about', '/download', '/donors', '/maintainers'].map((path, idx) => {
        const labels = ['Home', 'About', 'Download', 'Donors', 'Maintainers'];
        return (
          <li
            key={path}
            className={`${
              animate ? `animate-fade-in-up delay-${idx * 100}` : ''
            }`}
          >
            <Link
              to={path}
              className={`${
                isActive(path)
                  ? 'text-[#6495ED] underline underline-offset-4 decoration-2'
                  : 'text-gray-300 hover:text-[#6495ED]'
              } font-medium transition-all duration-300 hover:scale-110`}
              onClick={closeMenu}
            >
              {labels[idx]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
