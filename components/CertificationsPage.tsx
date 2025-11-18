import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';
import { useLanguage } from '../contexts/LanguageContext';

const getStandardsData = (t: (key: string) => string) => [
    { name: 'ASME', description: t('certifications.standards.asme') || 'American Society of Mechanical Engineers standards for pressure vessels, piping, and components.' },
    { name: 'ASTM', description: t('certifications.standards.astm') || 'American Society for Testing and Materials standards for material properties and testing.' },
    { name: 'DIN', description: t('certifications.standards.din') || 'Deutsches Institut für Normung (German Institute for Standardization) standards.' },
    { name: 'API', description: t('certifications.standards.api') || 'American Petroleum Institute standards for the oil and gas industry.' },
    { name: 'NORSOK', description: t('certifications.standards.norsok') || 'Norwegian standards developed for the petroleum industry.' },
    { name: 'ISO 9001:2015', description: t('certifications.standards.iso') || 'International standard for a quality management system (QMS).' },
    { name: 'NACE', description: t('certifications.standards.nace') || 'National Association of Corrosion Engineers standards for corrosion control.' },
    { name: 'EN Standards', description: t('certifications.standards.en') || 'European Standards for products, services, or systems.' },
];

const CertificationsPage: React.FC = () => {
 const { t } = useLanguage();

 //popup

 const [showContactPopup, setShowContactPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContactPopup(true);
        }, 60000); // 60 seconds
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Show contact popup immediately for testing
        setShowContactPopup(false);
    }, []);



    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes cert-slideshow {
                        0% { background-image: url('https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop'); }
                        14.29% { background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop'); }
                        28.57% { background-image: url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'); }
                        42.86% { background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop'); }
                        57.14% { background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'); }
                        71.43% { background-image: url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop'); }
                        85.71% { background-image: url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop'); }
                        100% { background-image: url('https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=2070&auto=format&fit=crop'); }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.6s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes trophy-shine {
                        0% { transform: rotate(0deg) scale(1); filter: brightness(1); }
                        25% { transform: rotate(5deg) scale(1.05); filter: brightness(1.2); }
                        50% { transform: rotate(-5deg) scale(1.1); filter: brightness(1.3); }
                        75% { transform: rotate(3deg) scale(1.05); filter: brightness(1.2); }
                        100% { transform: rotate(0deg) scale(1); filter: brightness(1); }
                    }
                    .animate-trophy {
                        animation: trophy-shine 3s ease-in-out infinite;
                    }
                    @keyframes certificate-float {
                        0%, 100% { transform: translateY(0px) rotate(0deg); }
                        25% { transform: translateY(-10px) rotate(1deg); }
                        50% { transform: translateY(-20px) rotate(-1deg); }
                        75% { transform: translateY(-10px) rotate(0.5deg); }
                    }
                    .animate-certificate {
                        animation: certificate-float 4s ease-in-out infinite;
                    }
                    @keyframes medal-spin {
                        0% { transform: rotateY(0deg) scale(1); }
                        25% { transform: rotateY(90deg) scale(1.1); }
                        50% { transform: rotateY(180deg) scale(1.2); }
                        75% { transform: rotateY(270deg) scale(1.1); }
                        100% { transform: rotateY(360deg) scale(1); }
                    }
                    .animate-medal {
                        animation: medal-spin 5s ease-in-out infinite;
                        transform-style: preserve-3d;
                    }
                    @keyframes medal-glow {
                        0%, 100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
                        50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.4); }
                    }
                    .medal-glow {
                        animation: medal-glow 3s ease-in-out infinite;
                    }
                `
            }} />
            <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'cert-slideshow 20s infinite' }}>
                <div className="absolute inset-0 bg-white opacity-30"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl font-extrabold text-brand-dark">{t('certifications.title') || 'Certifications & Compliance'}</h1>
                        <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
                            {t('certifications.subtitle') || 'Our unwavering commitment to global quality standards ensures that every product we deliver is reliable, safe, and built to perform.'}
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-2xl font-bold text-brand-dark mb-6">{t('certifications.standards.title') || 'Adherence to International Standards'}</h2>
                        <p className="mb-8 text-brand-dark">
                            {t('certifications.standards.description') || 'We manufacture products in strict compliance with a wide range of international standards to meet the diverse needs of our global clientele. Our quality assurance systems are designed to ensure traceability, consistency, and excellence from raw material sourcing to final inspection.'}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {getStandardsData(t).map((standard, index) => (
                                <div key={standard.name} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                                    <h3 className="font-bold text-brand-blue text-lg hover:text-brand-yellow transition-colors duration-300">{standard.name}</h3>
                                    <p className="text-sm text-brand-gray">{standard.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <br />
                    {/* ISO Certificate */}
                    <div className="flex flex-col items-center space-y-4 ">
                    {/* <iframe
                        src="/ISO_CERTIFICATE_DANESH.pdf"
                        title="ISO 9001 Certified"
                        className="w-full h-[600px] border rounded-lg shadow"
                    /> */}
                    <a
                        href="/ISO_CERTIFICATE_DANESH.pdf"
                        download="ISO_CERTIFICATE_DANESH.pdf"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        {t('certifications.download') || 'Download ISO Certificate'}
                    </a>
                    </div>

                    <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1.0s' }}>
                        <h2 className="text-3xl font-bold text-brand-dark mb-4 hover:text-brand-blue transition-colors duration-300">{t('certifications.qms.title') || 'Our Quality Management System'}</h2>
                        <p className="max-w-3xl mx-auto text-lg text-brand-gray hover:text-brand-dark transition-colors duration-300">
                            {t('certifications.qms.description') || 'Our processes are governed by a robust Quality Management System (QMS) that aligns with ISO 9001:2015 principles. This includes rigorous inspection, continuous process improvement, and comprehensive documentation support to guarantee that our products meet and exceed customer expectations.'}
                        </p>
                        <div className="mt-8 flex justify-center space-x-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center animate-medal shadow-2xl medal-glow">
                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center animate-certificate shadow-lg" style={{ animationDelay: '0.5s' }}>
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center animate-medal shadow-2xl medal-glow" style={{ animationDelay: '1s' }}>
                                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 6l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z"/>
                                </svg>
                            </div>

                         

                        </div>
                    </div>
                </div>
                                         {/* Contact Popup */}
            <ContactPopup
                isOpen={showContactPopup}
				onClose={() => setShowContactPopup(false)}
			/>

            </div>
        </>
    );
};

export default CertificationsPage;