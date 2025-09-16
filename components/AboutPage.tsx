import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-brand-blue mb-4">{title}</h3>
        <p className="text-brand-dark leading-relaxed">
            {children}
        </p>
    </div>
);


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

                <div className="mt-20 bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-brand-dark text-center mb-6">Our Trusted Clients</h2>
                    <div className="text-center">
                        <p className="text-lg text-brand-dark mb-4">We are proud to serve leading companies in the industry, including:</p>
                        <ul className="list-disc list-inside text-lg text-brand-dark">
                            <li>Flowserve Sanmar Ltd</li>
                        </ul>
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