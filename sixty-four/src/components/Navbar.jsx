import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Name */}
          <div className="flex items-center">
            <img 
              src="/path-to-your-logo.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-2 text-2xl font-bold text-gray-800">SFACC</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`
        fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}>
        <div className="p-6">
          {/* Mobile Logo and Close Button */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <img 
                src="/path-to-your-logo.png" 
                alt="SFACC Logo" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">SFACC</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 py-2">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900 py-2">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-900 py-2">Services</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900 py-2">Projects</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 py-2">Contact</Link>
          </div>

          {/* Mobile Buttons */}
          <div className="mt-8 space-y-4">
            <button className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md">
              Login
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;