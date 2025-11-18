import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage, Language } from '../contexts/LanguageContext';

/* ------------------------------
   NAVIGATION WITHOUT EXPORT DROPDOWN
------------------------------ */
const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.services', path: '/services' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.capabilities', path: '/capabilities' },
  { key: 'nav.technology', path: '/technology' },
  { key: 'nav.certifications', path: '/certifications' },
  { key: 'nav.blog', path: '/blog' },
  { key: 'nav.contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const { language, setLanguage, t } = useLanguage();

  const activeLinkStyle = {
    color: "#0067C5",
    fontWeight: "700",
    backgroundColor: "rgba(0, 103, 197, 0.1)",
    borderRadius: "4px",
    borderBottom: "3px solid #FFC400",
  };

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <style>{`
        .menu-item-base {
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.3s;
          color: #4B5563;
        }
        .menu-item-base:hover {
          color: #0067C5;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4">

        {/* LOGO */}
        <NavLink to="/">
          <img src="/logos/daneshlogo.jpg" className="h-16" />
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex items-center space-x-3">

          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className="menu-item-base font-medium"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {t(link.key)}
            </NavLink>
          ))}

          {/* LANGUAGE SWITCH */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
              className="menu-item-base border px-3 py-2"
            >
              {language === "en" ? "ENGLISH" : "हिन्दी"}
            </button>

            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow">
                <button
                  onClick={() => handleLanguageChange("en")}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange("hi")}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  हिन्दी
                </button>
              </div>
            )}
          </div>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 border rounded"
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 py-4 px-4 space-y-2">

          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 font-medium"
            >
              {t(link.key)}
            </NavLink>
          ))}

        </div>
      )}
    </header>
  );
};

export default Header;
