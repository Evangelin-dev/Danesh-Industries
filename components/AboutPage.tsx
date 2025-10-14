import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';
import { useLanguage } from '../contexts/LanguageContext';

const backgroundImages = [
    '/2.png',
    '/3.png',
    '/4.png',
];

// import React from 'react';


// --- Type Definitions ---
interface CardProps {
    title: string;
    children: React.ReactNode;
}

// --- Data ---
// Using an object array for better structure, though simple strings are fine too.
const clientLogoPaths: string[] = [
    '/client_logos/c1.png', '/client_logos/c2.png', '/client_logos/c3.png', '/client_logos/c4.png', 
    '/client_logos/c5.png', '/client_logos/c6.png', '/client_logos/c7.png', '/client_logos/Picture1.png', 
    '/client_logos/Picture2.png', '/client_logos/Picture3.png', '/client_logos/Picture4.png', 
    '/client_logos/Picture5.png', '/client_logos/Picture6.png', '/client_logos/Picture7.png', 
    '/client_logos/Picture9.png', '/client_logos/Picture10.png', '/client_logos/Picture11.png', 
    '/client_logos/Picture12.png', '/client_logos/Picture14.png', '/client_logos/Picture15.png', 
    '/client_logos/Picture16.png', '/client_logos/Picture17.png', '/client_logos/Picture18.png',
];

// --- Sub-Components ---

/**
 * Reusable Card component for Vision, Mission, and Policy.
 */
const Card: React.FC<CardProps & { t: (key: string) => string }> = ({ title, children, t }) => (
    <article 
        className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
        aria-labelledby={`card-title-${title.toLowerCase().replace(/\s/g, '-')}`}
    >
        <h3 id={`card-title-${title.toLowerCase().replace(/\s/g, '-')}`} className="text-2xl font-bold text-brand-blue mb-4">
            {title}
        </h3>
        <p className="text-brand-dark leading-relaxed flex-grow">
            {children}
        </p>
    </article>
);

/**
 * Component for the scrolling client logo carousel.
 */
const ClientLogos: React.FC<{ t: (key: string) => string }> = ({ t }) => {
    // Determine the number of duplicates needed for seamless scrolling
    const logosToDisplay = [...clientLogoPaths, ...clientLogoPaths];

    return (
        <section className="mt-20 bg-white p-10 rounded-lg shadow-lg overflow-hidden" aria-label="Our Trusted Clients">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-6">{t('about.clients.title') || 'Our Trusted Clients'}</h2>
            <p className="text-lg text-brand-dark text-center mb-8">
                {t('about.clients.description') || 'We are proud to serve leading companies in the industry.'}
            </p>
            
            <div className="relative w-full py-4">
                {/* Internal CSS for the scrolling animation */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        @keyframes scroll {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-scroll {
                            animation: scroll 30s linear infinite;
                        }
                        /* Pause animation on hover for accessibility/control */
                        .logo-container:hover .animate-scroll,
                        .logo-container:focus-within .animate-scroll { 
                            animation-play-state: paused;
                        }
                    `
                }} />
                
                {/* Use role="region" or similar for accessibility, and use tabindex for focus control */}
                <div 
                    className="logo-container relative w-full overflow-hidden" 
                    role="region" 
                    aria-label="Client Logo Carousel"
                    tabIndex={0} // Allows the container to be focused for pausing
                >
                    <div className="animate-scroll flex space-x-8 whitespace-nowrap">
                        {logosToDisplay.map((logo, index) => (
                            <div key={`logo-${index}`} className="inline-block flex-shrink-0">
                                <img 
                                    // IMPORTANT: Use specific alt text if possible, e.g., "Client Name Logo"
                                    // Since we don't have client names, a general description is used.
                                    src={logo} 
                                    alt={`Client Logo ${index + 1}`}
                                    // Use 'loading="lazy"' for images below the fold for performance
                                    loading="lazy" 
                                    className="h-28 max-w-[220px] w-auto object-contain hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}




    // --- Main Component ---
    const AboutPage: React.FC = () => {
        const { t } = useLanguage();
        const [showContactPopup, setShowContactPopup] = useState(false);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    useEffect(() => {
        const imageTimer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(imageTimer);
    }, []);

    const backgroundStyle = {
        backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
    };

        return (
            // Use <main> for the primary content area for better SEO/accessibility
            <main className="py-20 relative" role="main" style={backgroundStyle}>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-85"></div>
                <div className="container mx-auto px-6 relative z-10">

                    {/* SEO: Use h1 for the main page heading */}
                    <header className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-yellow-500">{t('about.title') || 'About Danesh Industries'}</h1>
                        <p className="mt-4 text-lg text-yellow-400">{t('about.subtitle') || 'Our commitment to quality and excellence.'}</p>
                    </header>

                    {/* Vision, Mission, Policy Section */}
                    <section aria-labelledby="vision-mission-heading">
                        <h2 id="vision-mission-heading" className="sr-only">Our Vision, Mission, and Quality Policy</h2>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                            <Card title={t('about.vision.title') || "Our Vision"} t={t}>
                                {t('about.vision.content') || "“To be a professional organization, manufacturing the highest quality performance-oriented products while enhancing our relationships with customers across the globe.”"}
                            </Card>
                            <Card title={t('about.mission.title') || "Our Mission"} t={t}>
                                {t('about.mission.content') || "“At Danesh Industries, we are committed to continuous improvement and strive for excellence in everything we do. Every team member contributes to a total quality culture, ensuring customer satisfaction.”"}
                            </Card>
                            <Card title={t('about.policy.title') || "Our Quality Policy"} t={t}>
                                {t('about.policy.content') || "We are committed to achieving customer satisfaction by supplying quality products on time, every time — while continually improving our quality management systems and complying with international standards."}
                            </Card>
                        </div>
                    </section>

                    {/* Infrastructure Section */}
                    <section className="mt-20 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="infrastructure-heading">
                        <h2 id="infrastructure-heading" className="text-3xl font-bold text-brand-dark text-center mb-6">
                            {t('about.infrastructure.title') || 'Infrastructure & Factory Overview'}
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-lg text-brand-dark text-left">
                            <div>
                                <h3 className="text-xl font-semibold text-brand-blue mb-2">{t('about.infrastructure.facility.title') || 'Our Facility'}</h3>
                                <p>{t('about.infrastructure.facility.content') || 'Our state-of-the-art manufacturing unit is spread across 3000 sq. ft. in Chennai, India. It is equipped with modern machinery and a dedicated quality assurance lab to ensure every product meets the highest standards of precision and excellence.'}</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-brand-blue mb-2">{t('about.infrastructure.capabilities.title') || 'Advanced Capabilities'}</h3>
                                <p>{t('about.infrastructure.capabilities.content') || 'We leverage advanced CNC machining, VMC, and precision lathes, alongside robust testing facilities, including hydro testing and PMI analysis. This allows us to handle complex projects and deliver components that perform reliably in the most demanding environments.'}</p>
                            </div>
                        </div>
                    </section>

                    {/* Client Logos Carousel Component */}
                    <ClientLogos t={t} />


                    {/* Factory Image */}
                    <section className="mt-10 text-center" aria-labelledby="factory-image-heading">
                        <h2 id="factory-image-heading" className="sr-only">Our Manufacturing Facility</h2>
                        <img
                            src="https://www.3ds.com/assets/invest/2024-09/ht-master-future-high-tech-manufacturing-symbiotic-value-1920x900.jpg"
                            alt="A high-tech manufacturing floor showcasing modern machinery and clean working environment."
                            className="rounded-lg shadow-xl mx-auto w-full max-w-5xl"
                            loading="eager" // Keep this eager if it's high on the page, lazy otherwise
                        />
                    </section>


			{/* Contact Popup */}
            <ContactPopup
                isOpen={showContactPopup}
				onClose={() => setShowContactPopup(false)}
			/>

                </div>
            </main>
        );
    };


export default AboutPage;