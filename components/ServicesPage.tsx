import React from 'react';
import type { JSX } from 'react';
import SEO from './SEO';

interface Service {
    title: string;
    description: string;
    icon: JSX.Element;
}

const servicesData: Service[] = [
    {
        title: 'Precision Machining',
        description: 'Ready-to-use machined parts from castings, forgings, and bar materials.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    },
    {
        title: 'Reverse Engineering',
        description: 'Dismantling, material capture, dimensional accuracy check, rebuilding to specifications, and hydro testing for performance validation.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5" /></svg>,
    },
    {
        title: 'Surface Treatments & Welding',
        description: 'Hard facing of Stellite 6 & Ultimet on various materials including A105, F22, LF2 steel, SS300/400, Incoloy, Monel, and Hastelloy.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.63.63 1.707.63 2.337 0l2.293-2.293m-4.586 16l-2.293-2.293a1.65 1.65 0 010-2.337l2.293-2.293c.63-.63 1.707-.63 2.337 0l2.293 2.293a1.65 1.65 0 010 2.337l-2.293 2.293z" /></svg>,
    },
    {
        title: 'Design & Automation',
        description: 'CAD/CAM design with SolidWorks, CNC process automation with Mastercam, and continuous monitoring by skilled engineers.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    },
    {
        title: 'Quality Assurance',
        description: 'Compliance with ASME, ASTM, AMS, SAE, AISI, DIN, EN, NORSOK, API, NACE standards with strict inspection and testing.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-[300px] flex flex-col">
        <div className="text-brand-blue mb-3 flex-shrink-0">
            {React.cloneElement(service.icon, { className: "h-8 w-8" })}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${
            service.title === "Precision Machining" 
                ? "text-brand-blue hover:text-brand-yellow" 
                : "text-brand-blue"
        } transition-colors duration-300 flex-shrink-0`}>
            {service.title}
        </h3>
        <p className="text-brand-dark text-sm leading-relaxed overflow-y-auto flex-grow">
            {service.description}
        </p>
    </div>
);

const ServicesPage: React.FC = () => {
    return (
        <>
            <SEO
                title="Our Services - Danesh Industries"
                description="Comprehensive industrial services including precision machining, reverse engineering, surface treatments, design & automation, and quality assurance."
                url="/services"
            />
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes services-slideshow {
                        0% { background-image: url('/service1.jpg'); }
                        33.33% { background-image: url('/service2.jpg'); }
                        66.66% { background-image: url('/service4.jpg'); }
                        100% { background-image: url('/service1.jpg'); }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.6s ease-out forwards;
                        opacity: 0;
                    }
                `
            }} />
            <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'services-slideshow 15s infinite' }}>
                <div className="absolute inset-0 bg-white opacity-70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-brand-dark">Our Services</h1>
                        <p className="mt-4 text-lg text-brand-gray">Comprehensive solutions from design to delivery.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {servicesData.map((service, index) => (
                            <div 
                                key={service.title} 
                                className="animate-fade-in w-full"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <ServiceCard service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;