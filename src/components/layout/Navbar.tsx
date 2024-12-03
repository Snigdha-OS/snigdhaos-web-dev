import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/features', label: 'Features' },
    { path: '/download', label: 'Download' },
    { path: '/developers', label: 'Developers' }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Terminal className="h-8 w-8 text-[#754ffe]" />
              <span className="ml-2 text-xl font-bold text-gray-900">Snigdha OS</span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({isActive}) => 
                  `${isActive ? 'text-[#754ffe]' : 'text-gray-700'} hover:text-[#754ffe] transition-colors`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#754ffe]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className="block px-3 py-2 text-gray-700 hover:text-[#754ffe]"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}