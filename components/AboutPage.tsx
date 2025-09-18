import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-brand-blue mb-4">{title}</h3>
        <p className="text-brand-dark leading-relaxed">
            {children}
        </p>
    </div>
);

const clientLogos = [
    '/client_logos/c1.png',
    '/client_logos/c2.png',
    '/client_logos/c3.png',
    '/client_logos/c4.png',
    '/client_logos/c5.png',
    '/client_logos/c6.png',
    '/client_logos/c7.png',
    '/client_logos/Picture1.png',
    '/client_logos/Picture2.png',
    '/client_logos/Picture3.png',
    '/client_logos/Picture4.png',
    '/client_logos/Picture5.png',
    '/client_logos/Picture6.png',
    '/client_logos/Picture7.png',
    '/client_logos/Picture9.png',
    '/client_logos/Picture10.png',
    '/client_logos/Picture11.png',
    '/client_logos/Picture12.png',
    '/client_logos/Picture14.png',
    '/client_logos/Picture15.png',
    '/client_logos/Picture16.png',
    '/client_logos/Picture17.png',
    '/client_logos/Picture18.png',
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-brand-dark">About Danesh Industries</h1>
                    <p className="mt-4 text-lg text-brand-gray">Our commitment to quality and excellence.</p>
                </div>
                
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
                
                <div className="mt-20 bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-brand-dark text-center mb-6">Infrastructure & Factory Overview</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-lg text-brand-dark text-left">
                        <div>
                            <h4 className="text-xl font-semibold text-brand-blue mb-2">Our Facility</h4>
                            <p>Our state-of-the-art manufacturing unit is spread across 3000 sq. ft. in Chennai, India. It is equipped with modern machinery and a dedicated quality assurance lab to ensure every product meets the highest standards of precision and excellence.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-brand-blue mb-2">Advanced Capabilities</h4>
                            <p>We leverage advanced CNC machining, VMC, and precision lathes, alongside robust testing facilities, including hydro testing and PMI analysis. This allows us to handle complex projects and deliver components that perform reliably in the most demanding environments.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 bg-white p-10 rounded-lg shadow-lg overflow-hidden">
                    <h2 className="text-3xl font-bold text-brand-dark text-center mb-6">Our Trusted Clients</h2>
                    <p className="text-lg text-brand-dark text-center mb-8">
                        We are proud to serve leading companies in the industry
                    </p>
                    
                    <div className="relative overflow-hidden w-full py-4">
                        <style dangerouslySetInnerHTML={{
                            __html: `
                                @keyframes scroll {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-50%); }
                                }
                                .animate-scroll {
                                    animation: scroll 30s linear infinite;
                                }
                                .logo-container:hover .animate-scroll {
                                    animation-play-state: paused;
                                }
                            `
                        }} />
                        
                        <div className="logo-container relative w-full overflow-hidden">
                            <div className="animate-scroll flex space-x-8 whitespace-nowrap">
                                {/* First set of logos */}
                                {clientLogos.map((logo, index) => (
                                    <div key={`logo1-${index}`} className="inline-block">
                                        <img 
                                            src={logo} 
                                            alt={`Client Logo ${index + 1}`}
                                            className="h-28 max-w-[220px] w-auto object-contain hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate set for seamless scrolling */}
                                {clientLogos.map((logo, index) => (
                                    <div key={`logo2-${index}`} className="inline-block">
                                        <img 
                                            src={logo} 
                                            alt={`Client Logo ${index + 1}`}
                                            className="h-28 max-w-[220px] w-auto object-contain hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <img src="https://www.3ds.com/assets/invest/2024-09/ht-master-future-high-tech-manufacturing-symbiotic-value-1920x900.jpg" alt="Factory" className="rounded-lg shadow-xl mx-auto"/>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
