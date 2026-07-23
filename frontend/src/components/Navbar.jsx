import { Link, useLocation } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-pearl-bg/70 backdrop-blur-md shadow-sm border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-pastel-blue/30 p-2 rounded-lg group-hover:bg-pastel-blue transition-colors duration-300">
              <Terminal className="w-5 h-5 text-deep-slate transition-colors duration-300" />
            </div>
            <span className="font-bold text-xl text-deep-slate tracking-tight">
              Harsh Vardhan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-deep-slate border-b-2 border-deep-slate'
                    : 'text-gray-400 hover:text-deep-slate'
                } px-1 py-5 text-sm font-semibold transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hire Me Button - Classy Lilac Accent */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-soft-lilac text-deep-slate px-6 py-2 rounded-full font-semibold hover:brightness-95 hover:shadow-sm transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}