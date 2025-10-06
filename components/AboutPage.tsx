import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';

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
const Card: React.FC<CardProps> = ({ title, children }) => (
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
const ClientLogos: React.FC = () => {
    // Determine the number of duplicates needed for seamless scrolling
    const logosToDisplay = [...clientLogoPaths, ...clientLogoPaths];

    return (
        <section className="mt-20 bg-white p-10 rounded-lg shadow-lg overflow-hidden" aria-label="Our Trusted Clients">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-6">Our Trusted Clients</h2>
            <p className="text-lg text-brand-dark text-center mb-8">
                We are proud to serve leading companies in the industry.
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
                         <h1 className="text-4xl font-extrabold text-yellow-500">About Danesh Industries</h1>
                         <p className="mt-4 text-lg text-yellow-400">Our commitment to quality and excellence.</p>
                     </header>

                    {/* Vision, Mission, Policy Section */}
                    <section aria-labelledby="vision-mission-heading">
                        <h2 id="vision-mission-heading" className="sr-only">Our Vision, Mission, and Quality Policy</h2>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                            <Card title="Our Vision">
                                “To be a professional organization, manufacturing the highest quality performance-oriented products while enhancing our relationships with customers across the globe.”
                            </Card>
                            <Card title="Our Mission">
                                “At Danesh Industries, we are committed to continuous improvement and strive for excellence in everything we do. Every team member contributes to a total quality culture, ensuring customer satisfaction.”
                            </Card>
                            <Card title="Our Quality Policy">
                                We are committed to achieving customer satisfaction by supplying quality products on time, every time — while continually improving our quality management systems and complying with international standards.
                            </Card>
                        </div>
                    </section>

                    {/* Infrastructure Section */}
                    <section className="mt-20 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="infrastructure-heading">
                        <h2 id="infrastructure-heading" className="text-3xl font-bold text-brand-dark text-center mb-6">
                            Infrastructure & Factory Overview
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-lg text-brand-dark text-left">
                            <div>
                                <h3 className="text-xl font-semibold text-brand-blue mb-2">Our Facility</h3>
                                <p>Our state-of-the-art manufacturing unit is spread across 3000 sq. ft. in Chennai, India. It is equipped with modern machinery and a dedicated quality assurance lab to ensure every product meets the highest standards of precision and excellence.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-brand-blue mb-2">Advanced Capabilities</h3>
                                <p>We leverage advanced CNC machining, VMC, and precision lathes, alongside robust testing facilities, including hydro testing and PMI analysis. This allows us to handle complex projects and deliver components that perform reliably in the most demanding environments.</p>
                            </div>
                        </div>
                    </section>

                    {/* Client Logos Carousel Component */}
                    <ClientLogos />

                    {/* Company Overview Section */}
                    <section className="mt-20 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="company-overview-heading">
                        <h2 id="company-overview-heading" className="text-3xl font-bold text-brand-dark text-center mb-8">
                            About Us – Danesh Industries
                        </h2>

                        <div className="text-lg text-brand-dark leading-relaxed space-y-6">
                            <p>
                                Founded in 2016, Danesh Industries is a trusted manufacturer and exporter of machined components,
                                precision machined parts, CNC machine parts, and custom machined components, based in Chennai, India.
                                With a 5,000 sq. ft. ISO-certified manufacturing facility in Perungudi, we specialize in OEM spare parts,
                                contract manufacturing services, and precision-engineered components for industries across India, Oman,
                                Saudi Arabia, UAE, Qatar, Bahrain, Singapore, and Malaysia.
                            </p>
                        </div>
                    </section>

                    {/* Who We Are Section */}
                    <section className="mt-10 bg-gray-50 p-10 rounded-lg" aria-labelledby="who-we-are-heading">
                        <h2 id="who-we-are-heading" className="text-2xl font-bold text-brand-blue mb-6">Who We Are</h2>
                        <div className="text-lg text-brand-dark leading-relaxed space-y-4">
                            <p>
                                For over a decade, Danesh Industries has partnered with leading global companies such as Autosys,
                                Severn Glocon Group, and Serino, Flowserve, Armstrong international, JC VALVES delivering export-quality
                                components that meet international standards. Our skilled team of engineers and machinists is committed
                                to cost-effective, reliable, and scalable solutions for diverse industrial sectors.
                            </p>
                        </div>
                    </section>

                    {/* What We Do Section */}
                    <section className="mt-10 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="what-we-do-heading">
                        <h2 id="what-we-do-heading" className="text-2xl font-bold text-brand-blue mb-6">What We Do</h2>
                        <p className="text-lg text-brand-dark mb-6">
                            We manufacture and supply a wide range of industrial components and fittings, including:
                        </p>
                        <ul className="space-y-2 text-brand-dark">
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Valve Components</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Flanges (SS 304, SS 316, MS Spacer)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">GI Slip-On Flanges</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">GI Threaded Flanges</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Pipe Fittings (GI, Stainless Steel, Ductile Iron)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Cast Steel Screwed Fittings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">R Brand Fittings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Grooved Fittings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Partition Plate Dies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Pull Studs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Plug Valves</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Mild Steel Pins</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Ball Valve Seat Rings</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Solenoid Valves</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Cage for control valve</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Plug for control valve</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Seat Ring for all valves</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold text-brand-blue">Actuator cylinder</span>
                            </li>
                        </ul>
                    </section>

                    {/* Our Services Section */}
                    <section className="mt-10 bg-gray-50 p-10 rounded-lg" aria-labelledby="services-heading">
                        <h2 id="services-heading" className="text-2xl font-bold text-brand-blue mb-6">Our Services</h2>
                        <ul className="space-y-4 text-brand-dark">
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Precision Machining</div>
                                    <p className="text-sm">CNC Turning, Milling, Drilling</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Custom Component Manufacturing</div>
                                    <p className="text-sm">Flanges, fittings, valve parts</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Die & Mould Manufacturing</div>
                                    <p className="text-sm">Partition plates, seat rings, precision dies</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Threading, Grooving & Cutting Services</div>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Prototype Development & Mass Production</div>
                                    <p className="text-sm">With in-house CNC machining and quality testing, we cater to both low-volume prototypes and high-volume OEM manufacturing.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Our Expertise Section */}
                    <section className="mt-10 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="expertise-heading">
                        <h2 id="expertise-heading" className="text-2xl font-bold text-brand-blue mb-6">Our Expertise</h2>
                        <ul className="space-y-6 text-brand-dark">
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-4 flex-shrink-0">◆</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-blue mb-2">Machined Components</h3>
                                    <p className="text-sm">For pumps, process plants, and industrial assemblies.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-4 flex-shrink-0">◆</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-blue mb-2">Precision Machined Parts</h3>
                                    <p className="text-sm">With tight tolerances for critical industries.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-4 flex-shrink-0">◆</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-blue mb-2">CNC Machine Parts</h3>
                                    <p className="text-sm">Manufactured on advanced CNC turning centres, VMC with 4th Axis, DRO milling, and lathes.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-4 flex-shrink-0">◆</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-blue mb-2">Contract Manufacturing Services</h3>
                                    <p className="text-sm">Long-term partnerships for prototype development, small batch runs, and large-scale production, with strict ISO-certified quality control.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="mt-10 bg-gray-50 p-10 rounded-lg" aria-labelledby="why-choose-heading">
                        <h2 id="why-choose-heading" className="text-2xl font-bold text-brand-blue mb-6 transition-all duration-300 hover:text-yellow-500 hover:scale-105 cursor-pointer inline-block">Why Choose Danesh Industries</h2>
                        {/* Key Message - Standalone */}
                        <div className="mb-8 text-center">
                            <div className="flex items-center justify-center space-x-4">
                                <span className="text-2xl text-brand-blue flex-shrink-0">◆</span>
                                <p className="text-2xl font-bold text-brand-blue italic">At Danesh Industries, we don't just manufacture parts — we build precision, trust, and long-term partnerships.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-brand-dark">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">10+ years of proven experience in OEM and contract manufacturing.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">Trusted supplier to companies across India, Middle East (Oman, Saudi Arabia, UAE, Qatar, Bahrain), and Southeast Asia (Singapore, Malaysia).</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">Advanced CNC machinery and in-house calibration testing.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">ISO-certified processes ensuring quality and consistency.</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">Fast turnaround and scalable production capacity.</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information Section */}
                    <section className="mt-10 bg-white p-10 rounded-lg shadow-lg text-center" aria-labelledby="contact-heading">
                        <h2 id="contact-heading" className="text-2xl font-bold text-brand-blue mb-6">Get In Touch</h2>
                        <div className="space-y-4 text-brand-dark">
                            <p className="text-lg">📧 Email: <span className="font-semibold">marketing@daneshindustries.com</span></p>
                            <p className="text-lg">📞 Phone: <span className="font-semibold">+91 9884001473 | 8939415026</span></p>
                        </div>
                    </section>

                    {/* Contract Manufacturing Section */}
                    <section className="mt-10 bg-gray-50 p-10 rounded-lg" aria-labelledby="contract-manufacturing-heading">
                        <h2 id="contract-manufacturing-heading" className="text-2xl font-bold text-brand-blue mb-6">
                            Danesh Industries – Contract Manufacturing Services
                        </h2>
                        <p className="text-lg text-brand-dark mb-8">
                            For over a decade, Danesh Industries has been a reliable partner in contract manufacturing services,
                            delivering precision-engineered components and assemblies to industries in India, Oman, Saudi Arabia,
                            UAE, Qatar, Bahrain, Singapore, and Malaysia.
                        </p>

                        <h3 className="text-xl font-bold text-brand-blue mb-4">Our Capabilities</h3>
                        <ul className="space-y-4 text-brand-dark mb-8">
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Precision Machining</div>
                                    <p className="text-sm">CNC turning, milling, drilling, and finishing.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Fabrication & Assembly</div>
                                    <p className="text-sm">End-to-end production support.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Custom Engineering</div>
                                    <p className="text-sm">Reverse engineering, tailored designs, and product modifications.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue text-xl mr-3 flex-shrink-0">★</span>
                                <div>
                                    <div className="font-semibold text-brand-blue mb-1">Quality Assurance</div>
                                    <p className="text-sm">ISO-certified processes, dimensional checks, and rigorous inspections.</p>
                                </div>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold text-brand-blue mb-4">Our Work Process</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-violet-800 transition-colors duration-300">1. Discuss Needs</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-yellow-300 transition-colors duration-300">2. Plan & Quote</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-violet-800 transition-colors duration-300">3. Source Material</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-yellow-300 transition-colors duration-300">4. Machine & Fabricate</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-violet-800 transition-colors duration-300">5. Quality Check</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-yellow-300 transition-colors duration-300">6. Assemble & Finish</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-violet-800 transition-colors duration-300">7. Pack & Deliver</div>
                            </div>
                            <div className="text-center p-3 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer">
                                <div className="text-sm font-semibold text-brand-blue group-hover:text-yellow-300 transition-colors duration-300">8. Support</div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-brand-blue mb-4">Frequently Asked Questions (FAQ)</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">Q: What is contract manufacturing?</h4>
                                    <p className="text-brand-dark text-sm">A: It means outsourcing your product's machining, fabrication, or assembly to a trusted partner. Danesh Industries provides CNC machining, fabrication, and testing under ISO standards.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">Q: Which industries do you serve?</h4>
                                    <p className="text-brand-dark text-sm">A: Oil & Gas, automotive, valves, chemical process plants, water treatment, and industrial machinery in India, GCC countries, and Southeast Asia.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">Q: Can you handle both prototypes and mass production?</h4>
                                    <p className="text-brand-dark text-sm">A: Yes, we support low-volume prototypes, small-batch runs, and high-volume OEM spare parts manufacturing.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">Q: What materials do you work with?</h4>
                                    <p className="text-brand-dark text-sm">A: Stainless Steel (304, 316), Mild Steel, Hastelloy, and special alloys.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">Q: How do you ensure quality?</h4>
                                    <p className="text-brand-dark text-sm">A: With ISO-certified quality control, in-house calibration, and strict dimensional checks on every batch.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">Q: How do I get started?</h4>
                                    <p className="text-brand-dark text-sm">📧 Email us at <span className="font-semibold">marketing@daneshindustries.com</span> or 📞 Call <span className="font-semibold">+91 95000 71287 (Mr. Nambi)</span> with your requirements.</p>
                                </div>
                            </div>
                        </div>
                    </section>

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