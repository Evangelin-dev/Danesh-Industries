import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-brand-yellow border-b-2 border-brand-yellow pb-1">Danesh Industries</h3>
            <p className="text-gray-300">
              Manufacturing precision machined parts, socket weld fittings, flanges, valves, and assemblies with global quality standards.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-yellow transition-colors">Products</Link></li>
              <li><Link to="/services" className="hover:text-brand-yellow transition-colors">Services</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-yellow transition-colors">Capabilities</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/technology" className="hover:text-brand-yellow transition-colors">Technology</Link></li>
              <li><Link to="/certifications" className="hover:text-brand-yellow transition-colors">Certifications</Link></li>
              <li><Link to="/blog" className="hover:text-brand-yellow transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/terms" className="hover:text-brand-yellow transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Danesh Industries. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;