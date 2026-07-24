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
    <nav className="bg-gray-900/70 backdrop-blur-xl shadow-lg border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
      {/* Frosted Dark Glass Effect - Distinct from the Midnight background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 border border-white/5 transition-all duration-300">
              <Terminal className="w-5 h-5 text-white transition-colors duration-300" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
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
                    ? 'text-white border-b-2 border-pastel-blue'
                    : 'text-gray-400 hover:text-white'
                } px-1 py-5 text-sm font-semibold transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Hire Me Button - Vibrant Accent */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-pastel-blue text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-white hover:shadow-lg hover:shadow-pastel-blue/20 transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}