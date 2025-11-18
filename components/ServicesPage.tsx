import React, { useState, useEffect } from 'react';
import type { JSX } from 'react';
import SEO from './SEO';
import { useLanguage } from '../contexts/LanguageContext';

import ContactPopup from './ContactPopup';




interface DetailedService {
    title: string;
    description: string;
    icon: JSX.Element;
    capabilities: string[];
    industriesServed: string[];
    valueToClients: string[];
}


            //   {t('footer.description') || 
            //     'Manufacturing precision machined parts, socket weld fittings, flanges,
            //      valves, and assemblies with global quality standards.'}


const getServicesData = (t: (key: string) => string): DetailedService[] => [
    {
        title: t('services.cncMachining.title') || 'CNC Machining Services',
        description: t('services.cncMachining.description') || 'At Danesh Industries, we specialize in high-precision CNC machining solutions tailored for OEMs, industrial projects, and specialized engineering requirements. With state-of-the-art CNC turning and milling machines, our team delivers components with exact tolerances, smooth finishes, and international quality standards.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        capabilities: [
            t('services.cncMachining.capabilities.turning') || 'CNC turning and milling for small to large components',
            t('services.cncMachining.capabilities.prototype') || 'Prototype to mass production runs',
            t('services.cncMachining.capabilities.accuracy') || 'High accuracy ±0.01 mm tolerances',
            t('services.cncMachining.capabilities.materials') || 'Machining in stainless steel, aluminum, brass, copper, and engineering plastics',
            t('services.cncMachining.capabilities.fixtures') || 'Custom fixtures, jigs, and tooling'
        ],
        industriesServed: [
            t('services.cncMachining.industries.automotive') || 'Automotive & Aerospace',
            t('services.cncMachining.industries.oilGas') || 'Oil & Gas',
            t('services.cncMachining.industries.heavyMachinery') || 'Heavy Machinery',
            t('services.cncMachining.industries.foodPharma') || 'Food Processing & Pharma Equipment'
        ],
        valueToClients: [
            t('services.cncMachining.value.fasterCycles') || 'Faster production cycles',
            t('services.cncMachining.value.consistentQuality') || 'Consistent quality with ISO-certified processes',
            t('services.cncMachining.value.costOptimization') || 'Cost optimization for both low and high-volume requirements'
        ]
    },
    {
        title: t('services.fabrication.title') || 'Fabrication Services',
        description: t('services.fabrication.description') || 'Our fabrication unit is equipped to handle both light and heavy fabrication works for diverse industries. We combine technical expertise with modern machinery to deliver durable and reliable structures.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
        capabilities: [
            t('services.fabrication.capabilities.sheetMetal') || 'Sheet metal fabrication',
            t('services.fabrication.capabilities.welding') || 'Welding (MIG, TIG, ARC) and structural assembly',
            t('services.fabrication.capabilities.cutting') || 'Cutting, bending, and surface finishing',
            t('services.fabrication.capabilities.materials') || 'Stainless steel, mild steel, and aluminum fabrication'
        ],
        industriesServed: [
            t('services.fabrication.industries.processEquipment') || 'Process Equipment Manufacturers',
            t('services.fabrication.industries.construction') || 'Construction & Infrastructure',
            t('services.fabrication.industries.industrialMachinery') || 'Industrial Machinery',
            t('services.fabrication.industries.powerEnergy') || 'Power & Energy Sector'
        ],
        valueToClients: [
            t('services.fabrication.value.endToEnd') || 'End-to-end fabrication support from design to delivery',
            t('services.fabrication.value.safetyCompliance') || 'Strong adherence to safety and compliance standards',
            t('services.fabrication.value.longLasting') || 'Long-lasting quality backed by skilled welders and inspectors'
        ]
    },
    {
        title: t('services.reverseEngineering.title') || 'Reverse Engineering & MRO Services',
        description: t('services.reverseEngineering.description') || 'Danesh Industries is a trusted partner for restoring and replicating critical components when original parts are unavailable or obsolete. Our reverse engineering services are widely used in emergency breakdown situations and legacy equipment restoration.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 20h5v-5M20 4h-5v5" /></svg>,
        capabilities: [
            t('services.reverseEngineering.capabilities.scanning') || '3D scanning, measurement, and CAD modeling',
            t('services.reverseEngineering.capabilities.replication') || 'Replication of damaged or worn-out parts',
            t('services.reverseEngineering.capabilities.analysis') || 'Metallurgical analysis for material matching',
            t('services.reverseEngineering.capabilities.redesign') || 'Redesign for improved durability and performance'
        ],
        industriesServed: [
            t('services.reverseEngineering.industries.pharma') || 'Pharma & Biotech',
            t('services.reverseEngineering.industries.petrochemical') || 'Petrochemical & Chemical Plants',
            t('services.reverseEngineering.industries.foodProcessing') || 'Food Processing Units',
            t('services.reverseEngineering.industries.textile') || 'Textile & Heavy Engineering'
        ],
        valueToClients: [
            t('services.reverseEngineering.value.extendLife') || 'Extend equipment life and reduce replacement costs',
            t('services.reverseEngineering.value.minimizeDowntime') || 'Minimize downtime with rapid part restoration',
            t('services.reverseEngineering.value.assuredPerformance') || 'Assured performance with ISO-quality controls'
        ]
    },
    {
        title: t('services.contractManufacturing.title') || 'Contract Manufacturing',
        description: t('services.contractManufacturing.description') || 'We work as long-term manufacturing partners for companies seeking consistent quality and timely delivery. With our infrastructure and skilled team, we provide turnkey manufacturing support for clients worldwide.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
        capabilities: [
            t('services.contractManufacturing.capabilities.endToEnd') || 'End-to-end production of OEM spare parts',
            t('services.contractManufacturing.capabilities.batchProduction') || 'Batch production with strict process control',
            t('services.contractManufacturing.capabilities.vmi') || 'Vendor-managed inventory (VMI) for repeat requirements',
            t('services.contractManufacturing.capabilities.packaging') || 'Export-quality packaging and logistics support'
        ],
        industriesServed: [
            t('services.contractManufacturing.industries.manufacturing') || 'Manufacturing Companies',
            t('services.contractManufacturing.industries.oems') || 'Equipment OEMs',
            t('services.contractManufacturing.industries.suppliers') || 'Industrial Suppliers',
            t('services.contractManufacturing.industries.exporters') || 'Global Exporters'
        ],
        valueToClients: [
            t('services.contractManufacturing.value.reducedCosts') || 'Reduced overhead costs for in-house facilities',
            t('services.contractManufacturing.value.onTimeDelivery') || 'On-time delivery with global supply chain integration',
            t('services.contractManufacturing.value.confidentiality') || 'Strong confidentiality and IP protection'
        ]
    },
    {
        title: t('services.surfaceTreatments.title') || 'Surface Treatments',
        description: t('services.surfaceTreatments.description') || 'Our surface treatment services enhance corrosion resistance, wear resistance, and improve the overall lifespan of components.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" /></svg>,
        capabilities: [
            t('services.surfaceTreatments.capabilities.zincPlating') || 'Zinc Plating (Electroplated & Hot-dip)',
            t('services.surfaceTreatments.capabilities.nickelPlating') || 'Nickel Plating & Electroless Nickel Plating',
            t('services.surfaceTreatments.capabilities.chromePlating') || 'Chrome Plating, Boronizing & Nitriding',
            t('services.surfaceTreatments.capabilities.anodizing') || 'Anodizing for Aluminum & Passivation for Stainless Steel',
            t('services.surfaceTreatments.capabilities.powderCoating') || 'Powder Coating, Painting & Blasting'
        ],
        industriesServed: [
            t('services.surfaceTreatments.industries.automotive') || 'Automotive components',
            t('services.surfaceTreatments.industries.oilGas') || 'Oil & Gas & Petrochemicals',
            t('services.surfaceTreatments.industries.foodProcessing') || 'Food Processing equipment',
            t('services.surfaceTreatments.industries.industrialMachinery') || 'Industrial machinery'
        ],
        valueToClients: [
            t('services.surfaceTreatments.value.longevity') || 'Increased part longevity',
            t('services.surfaceTreatments.value.performance') || 'Improved performance with protective finishes',
            t('services.surfaceTreatments.value.compliance') || 'Compliance with international surface treatment standards'
        ]
    },
    {
        title: 'Welding Services',
        description: 'Our welding division provides strong and reliable joints, essential for structural integrity and heavy-duty performance.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.63.63 1.707.63 2.337 0l2.293-2.293m-4.586 16l-2.293-2.293a1.65 1.65 0 010-2.337l2.293-2.293c.63-.63 1.707-.63 2.337 0l2.293 2.293a1.65 1.65 0 010 2.337l-2.293 2.293z" /></svg>,
        capabilities: [
            'MIG Welding',
            'TIG Welding',
            'ARC Welding',
            'Robust Welding Fixtures',
            'Weld Inspection & NDT'
        ],
        industriesServed: [
            'Fabrication & Process Equipment',
            'Aerospace & Automotive Structures',
            'Heavy Machinery & Infrastructure',
            'Power Plant Components'
        ],
        valueToClients: [
            'High-quality welding with strong, durable joints',
            'Skilled workforce with certifications and experience',
            'Support for prototype, batch, and large-scale projects'
        ]
    },
    {
        title: 'Design & Automation Services',
        description: 'We provide end-to-end design support and smart solutions for modern industries with CAD/CAM capabilities and automation expertise.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        capabilities: [
            'CAD/CAM Design',
            'Product Development',
            'Automation Solutions',
            'Process Improvement',
            'Custom Machine Design'
        ],
        industriesServed: [
            'Automotive & Aerospace',
            'Pharma & Biotech Equipment',
            'Industrial Automation & Robotics',
            'Heavy Engineering'
        ],
        valueToClients: [
            'Reduced product development time',
            'Smarter, more efficient production with automation',
            'Optimized designs for reliability and cost savings',
            'Confidentiality and IP protection'
        ]
    },
    {
        title: 'Quality Assurance',
        description: 'At Danesh Industries, quality is built into every stage of our manufacturing and service process.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        capabilities: [
            'Material Certification',
            'Dimensional Accuracy',
            'NDT (Non-Destructive Testing)',
            'Mechanical Testing',
            'Documentation & Reporting'
        ],
        industriesServed: [
            'All Manufacturing Industries',
            'Aerospace & Defense',
            'Oil & Gas',
            'Automotive & Transportation'
        ],
        valueToClients: [
            'Guaranteed international quality',
            'Reduced risk of part failures and downtime',
            'Complete documentation for audits',
            'Reliable, ISO-certified partner'
        ]
    }
];

const ServiceCard: React.FC<{
    service: DetailedService;
    isExpanded: boolean;
    onToggle: () => void;
    t: (key: string) => string;
}> = ({ service, isExpanded, onToggle, t }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${isExpanded ? 'min-h-[800px]' : 'min-h-[300px]'}`}>
            <div className="text-brand-blue mb-4 flex-shrink-0">
                {React.cloneElement(service.icon, { className: "h-12 w-12" })}
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-blue hover:text-yellow-500 transition-colors duration-300 flex-shrink-0 cursor-pointer">
                {service.title}
            </h3>

            <div className="flex-grow">
                {!isExpanded ? (
                    // Collapsed state - compact view
                    <div className="space-y-4">
                        <p className="text-brand-dark text-sm leading-relaxed">
                            {service.description.length > 150
                                ? `${service.description.substring(0, 150)}...`
                                : service.description}
                        </p>
                        <div className="flex-shrink-0">
                            <button
                                onClick={onToggle}
                                className="bg-brand-blue hover:bg-yellow-500 text-white hover:text-brand-dark font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                {t('services.readMore') || 'Read More'}
                            </button>
                        </div>
                    </div>
                ) : (
                    // Expanded state - full details
                    <div className="space-y-4">
                        <p className="text-brand-dark text-sm leading-relaxed">
                            {service.description}
                        </p>

                        <div className="space-y-6 flex-shrink-0">
                            <div>
                                <h4 className="font-semibold text-brand-blue mb-3 flex items-center">
                                    <span className="text-brand-blue mr-2">◆</span>
                                    {t('services.capabilities') || 'Capabilities'}:
                                </h4>
                                <ul className="text-sm text-brand-dark space-y-2 ml-6">
                                    {service.capabilities.map((capability, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-brand-blue mr-2">•</span>
                                            <span>{capability}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-brand-blue mb-3 flex items-center">
                                    <span className="text-brand-blue mr-2">◆</span>
                                    {t('services.industriesServed') || 'Industries Served'}:
                                </h4>
                                <ul className="text-sm text-brand-dark space-y-2 ml-6">
                                    {service.industriesServed.map((industry, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-brand-blue mr-2">•</span>
                                            <span>{industry}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-brand-blue mb-3 flex items-center">
                                    <span className="text-brand-blue mr-2">◆</span>
                                    {t('services.valueToClients') || 'Value to Clients'}:
                                </h4>
                                <ul className="text-sm text-brand-dark space-y-2 ml-6">
                                    {service.valueToClients.map((value, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-brand-blue mr-2">•</span>
                                            <span>{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex-shrink-0">
                            <button
                                onClick={onToggle}
                                className="bg-brand-blue hover:bg-yellow-500 text-white hover:text-brand-dark font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                {t('services.showLess') || 'Show Less'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();

  //popup

  const [showContactPopup, setShowContactPopup] = useState(false);
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());

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

    const toggleServiceExpansion = (serviceTitle: string) => {
        const newExpanded = new Set(expandedServices);
        if (newExpanded.has(serviceTitle)) {
            newExpanded.delete(serviceTitle);
        } else {
            newExpanded.add(serviceTitle);
        }
        setExpandedServices(newExpanded);
    };


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
                        <h1 className="text-4xl font-extrabold text-brand-dark">{t('services.title') || 'Our Services'}</h1>
                        <p className="mt-4 text-lg text-brand-gray">{t('services.subtitle') || 'Comprehensive manufacturing solutions from precision machining to quality assurance.'}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {getServicesData(t).map((service, index) => (
                            <div
                                key={service.title}
                                className="animate-fade-in w-full"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <ServiceCard
                                    service={service}
                                    isExpanded={expandedServices.has(service.title)}
                                    onToggle={() => toggleServiceExpansion(service.title)}
                                    t={t}
                                />
                            </div>
                        ))}
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

export default ServicesPage;