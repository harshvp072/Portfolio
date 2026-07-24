import { Link } from 'react-router-dom';
import { Code, Briefcase, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-slate border-t border-white/10 pt-16 pb-8 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors duration-300 border border-white/5">
                <Terminal className="w-5 h-5 text-white transition-colors duration-300" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Harsh Vardhan
              </span>
            </Link>
            <p className="text-gray-400 font-medium max-w-xs leading-relaxed">
              Full-Stack Developer & AI/ML Specialist building intelligent, scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <Link to="/" className="text-gray-400 hover:text-white font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white font-medium transition-colors">About</Link>
              <Link to="/projects" className="text-gray-400 hover:text-white font-medium transition-colors">Projects</Link>
            </div>
          </div>

          {/* Social Connections */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4">
              {/* Replace the '#' with your actual GitHub Profile URL */}
              <a href="https://github.com/harshvp072/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:bg-pastel-blue/20 hover:border-pastel-blue hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-pastel-blue/20 transition-all duration-300">
                <Code className="w-5 h-5" />
              </a>
              
              {/* Replace the '#' with your actual LinkedIn Profile URL */}
              <a href="https://www.linkedin.com/in/harshvp1/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:bg-pastel-sage/20 hover:border-pastel-sage hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-pastel-sage/20 transition-all duration-300">
                <Briefcase className="w-5 h-5" />
              </a>
              
              <Link to="/contact" className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:bg-soft-lilac/20 hover:border-soft-lilac hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-soft-lilac/20 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm text-center md:text-left">
            © {currentYear} Harsh Vardhan Pandey. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm font-bold text-gray-500">
            <span>Built with React & Node.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}