import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';

const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.capabilities', path: '/capabilities' },
  { key: 'nav.technology', path: '/technology' },
  { key: 'nav.certifications', path: '/certifications' },
  // { name: 'Testimonials', path: '/testimonials' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Define custom styles for consistency with the overall app theme
  const activeLinkStyle = {
    color: '#0067C5', // Brand Blue
    fontWeight: '700',
    backgroundColor: 'rgba(0, 103, 197, 0.1)', // Light blue background
    borderRadius: '4px',
    borderBottom: '3px solid #FFC400' // Brand Yellow accent
  };

  const handleLanguageChange = (newLanguage: Language) => {
    console.log('Language changing from', language, 'to', newLanguage);
    setLanguage(newLanguage);
    setIsLanguageMenuOpen(false);
    console.log('Language changed to', newLanguage);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Custom brand colors for utility classes */
          .bg-brand-blue { background-color: #0067C5; }
          .text-brand-blue { color: #0067C5; }
          .bg-brand-yellow { background-color: #FFC400; }
          .text-brand-yellow { color: #FFC400; }
          
          /* Simplified Hover Effect for Professionalism */
          .menu-item-base {
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.3s ease-in-out;
            font-size: 1rem;
            line-height: 1.5rem;
            color: #4B5563; /* Gray-700 */
            border-bottom: 3px solid transparent;
          }

          .menu-item-base:hover {
            color: #0067C5; /* Brand Blue */
            transform: translateY(-2px);
          }
        `
      }} />
      <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4 sm:px-6 lg:px-8">
        {/* Logo Link to Home (Crucial for SEO) */}
        <NavLink to="/" className="hover:opacity-90 transition-opacity duration-300">
          <img 
            src="/logos/daneshlogo.jpg" 
            alt="Danesh Industries Logo" 
            className="h-16 w-auto object-contain"
          />
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className={({ isActive }) =>
                `menu-item-base font-medium ${
                  t(link.key) === t('nav.contact')
                    ? 'bg-brand-yellow text-gray-800 hover:bg-brand-yellow/80 transition-all duration-300 shadow-md transform hover:scale-105 border-0'
                    : ''
                }`
              }
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {t(link.key)}
            </NavLink>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="menu-item-base font-medium px-3 py-2 rounded-md border border-gray-300 hover:border-brand-blue transition-colors duration-300 flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="text-sm" title={`Current language: ${language}`}>
                {language === 'en' ? 'EN' : 'हिं'}
                {process.env.NODE_ENV === 'development' && (
                  <span className="text-xs ml-1 opacity-50">({language})</span>
                )}
              </span>
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-50">
                <div className="py-1">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === 'en' ? 'bg-brand-blue text-white' : 'text-gray-700'
                    }`}
                  >
                    {t('common.english')}
                  </button>
                  <button
                    onClick={() => handleLanguageChange('hi')}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      language === 'hi' ? 'bg-brand-blue text-white' : 'text-gray-700'
                    }`}
                  >
                    {t('common.hindi')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 pb-4 shadow-inner">
          <div className="flex flex-col items-stretch space-y-1 px-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.key}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-center menu-item-base block font-semibold ${
                    t(link.key) === t('nav.contact')
                      ? 'bg-brand-yellow text-gray-800 hover:bg-brand-yellow/80 mt-2 border-0'
                      : 'hover:bg-gray-200'
                  }`
                }
                style={({ isActive }) => (isActive ? { ...activeLinkStyle, width: '100%', padding: '10px 0' } : { width: '100%', padding: '10px 0' })}
              >
                {t(link.key)}
              </NavLink>
            ))}

            {/* Mobile Language Switcher */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-center space-x-2">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-300 ${
                    language === 'en'
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t('common.english')}
                </button>
                <button
                  onClick={() => handleLanguageChange('hi')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-300 ${
                    language === 'hi'
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t('common.hindi')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
