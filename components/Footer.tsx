import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-brand-yellow border-b-2 border-brand-yellow pb-1">{t('footer.companyName') || 'Danesh Industries'}</h3>
            <p className="text-gray-300">
              {t('footer.description') || 'Manufacturing precision machined parts, socket weld fittings, flanges, valves, and assemblies with global quality standards.'}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('footer.quickLinks') || 'Quick Links'}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/about" className="hover:text-brand-yellow transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="hover:text-brand-yellow transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/services" className="hover:text-brand-yellow transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-yellow transition-colors">{t('nav.capabilities')}</Link></li>
              {/* <li><Link to="/technology" className="hover:text-brand-yellow transition-colors">Technology</Link></li>
              <li><Link to="/certifications" className="hover:text-brand-yellow transition-colors">Certifications</Link></li>
              <li><Link to="/blog" className="hover:text-brand-yellow transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">Contact Us</Link></li> */}

            </ul>
          </div>
          <div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/technology" className="hover:text-brand-yellow transition-colors">{t('nav.technology')}</Link></li>
              <li><Link to="/certifications" className="hover:text-brand-yellow transition-colors">{t('nav.certifications')}</Link></li>
              <li><Link to="/blog" className="hover:text-brand-yellow transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-yellow transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('footer.legal') || 'Legal'}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/terms" className="hover:text-brand-yellow transition-colors">{t('footer.terms') || 'Terms & Conditions'}</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-yellow transition-colors">{t('footer.privacy') || 'Privacy Policy'}</Link></li>
            </ul>
          </div>

<div>

        {/* ✅ Address Section */}
        <address className="not-italic">
          <p>{t('footer.address') || 'Address'}:</p>
          <p>No 906, 10th Cross Street,</p>
          <p>Venkateswara Nagar,</p>
          <p>Perungudi, Chennai - 600096,</p>
          <p>Tamil Nadu, India</p>
        </address>

        {/* Optional Contact Info */}
        <p className="mt-2">
          📞 +919962333220 | ✉️ daneshindustries@gmail.com
        </p>


</div>






        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t('footer.companyName') || 'Danesh Industries'}. {t('footer.copyright') || 'All Rights Reserved'}.</p>

        {/* ✅ Address Section */}
        {/* <address className="not-italic">
                        <p>No 906, 10th Cross Street,</p>
                <p>Venkateswara Nagar, Perungudi,</p>
                <p>Chennai - 600096, Tamil Nadu, India</p>

        </address> */}

        
        {/* Optional Contact Info */}
        {/* <p className="mt-2">
          📞 +919962333220 | ✉️ daneshindustries@gmail.com
        </p>

          <p>&copy; {new Date().getFullYear()} Danesh Industries. All Rights Reserved.</p> */}



        </div>
      </div>
    </footer>
  );
};

export default Footer;