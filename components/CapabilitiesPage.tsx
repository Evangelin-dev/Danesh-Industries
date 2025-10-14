import React, { useState, useEffect } from 'react';
import ContactPopup from './ContactPopup';
import { useLanguage } from '../contexts/LanguageContext';


const CapabilitiesPage: React.FC = () => {
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
                    @keyframes capabilities-slideshow {
                        0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
                        20% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'); }
                        40% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'); }
                        60% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'); }
                        80% { background-image: url('https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=2070&auto=format&fit=crop'); }
                        100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
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
            <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'capabilities-slideshow 18s infinite' }}>
                <div className="absolute inset-0 bg-white opacity-60"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl font-extrabold text-brand-dark">{t('capabilities.title') || 'Manufacturing Capabilities – Danesh Industries'}</h1>
                        <p className="mt-4 text-lg text-brand-gray max-w-4xl mx-auto">
                            {t('capabilities.description') || 'At Danesh Industries, we operate from a state-of-the-art 3,000 sq. ft. facility equipped with advanced CNC machines, milling centers, conventional machining, and in-house testing systems. Our setup ensures precision engineering, strict quality control, and reliable delivery for industries such as oil & gas, petrochemicals, power, automotive, valves, and industrial engineering.'}
                        </p>
                    </div>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center animate-fade-in">{t('capabilities.machinery.title') || 'Our Machinery'}</h2>
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
                            <ul className="list-disc pl-8 space-y-2 text-lg text-brand-dark">
                                <li>{t('capabilities.machinery.cnc') || 'CNC Turning Centres'}</li>
                                <li>{t('capabilities.machinery.vmc') || 'VMC with 4th Axis'}</li>
                                <li>{t('capabilities.machinery.dro') || 'DRO Milling'}</li>
                                <li>{t('capabilities.machinery.lathes') || 'Conventional Lathes'}</li>
                                <li>{t('capabilities.machinery.cutting') || 'Cutting Machine'}</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center animate-fade-in">{t('capabilities.testing.title') || 'In-House Calibration & Testing'}</h2>
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
                            <p className="text-lg text-brand-dark mb-6">
                                {t('capabilities.testing.description') || 'We ensure the highest standards of accuracy and reliability by maintaining dedicated in-house calibration and testing facilities.'}
                            </p>
                            <ul className="list-none space-y-2 text-lg text-brand-dark">
                                <li>🔹 {t('capabilities.testing.dimensional') || 'Dimensional Accuracy Testing – Using calibrated gauges, micrometers, verniers, and precision instruments'}</li>
                                <li>🔹 {t('capabilities.testing.pressure') || 'Pressure & Hydro Testing – Ensuring valve and fitting components meet industry safety standards'}</li>
                                <li>🔹 {t('capabilities.testing.material') || 'Material Testing Support – PMI (Positive Material Identification) & spectro testing (through partner labs if required)'}</li>
                                <li>🔹 {t('capabilities.testing.surface') || 'Surface & Thread Inspection – Verifying finishes and thread profiles for flawless assembly'}</li>
                                <li>🔹 {t('capabilities.testing.documentation') || 'Documentation & Traceability – Test certificates and calibration reports provided with supply'}</li>
                            </ul>
                            <p className="text-lg text-brand-dark mt-6">
                                {t('capabilities.testing.benefits.title') || 'This in-house capability allows us to:'}
                            </p>
                            <ul className="list-none space-y-2 text-lg text-brand-dark">
                                <li>✔ {t('capabilities.testing.benefits.reduced') || 'Reduce lead times by eliminating dependency on third-party labs'}</li>
                                <li>✔ {t('capabilities.testing.benefits.guarantee') || 'Guarantee quality consistency and compliance with ASME, ASTM, DIN, EN standards'}</li>
                                <li>✔ {t('capabilities.testing.benefits.provide') || 'Provide customers with traceable quality reports and certificates for every batch'}</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center animate-fade-in">{t('capabilities.highlights.title') || 'Factory Highlights'}</h2>
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
                            <ul className="list-none space-y-2 text-lg text-brand-dark">
                                <li>🏭 {t('capabilities.highlights.floorSpace') || 'Floor Space: 3,000 sq. ft.'}</li>
                                <li>⚙️ {t('capabilities.highlights.machinery') || 'Machinery: CNC turning centers, VMC with 4th axis, DRO milling, conventional lathes, cutting machines'}</li>
                                <li>🧪 {t('capabilities.highlights.testing') || 'In-House Testing: Calibration, dimensional inspection, hydro testing, and QA certification'}</li>
                                <li>📦 {t('capabilities.highlights.capacity') || 'Production Capacity: Medium to high-volume runs with quick turnaround times'}</li>
                                <li>🎯 {t('capabilities.highlights.specialization') || 'Specialization: Precision machining of valves, flanges, fittings, and custom components'}</li>
                                <li>🛠️ {t('capabilities.highlights.flexibility') || 'Flexibility: Prototyping, small-batch, and large-volume production capabilities'}</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center animate-fade-in">{t('capabilities.whyChoose.title') || 'Why Choose Danesh Industries?'}</h2>
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg animate-fade-in">
                            <ul className="list-none space-y-2 text-lg text-brand-dark">
                                <li>✔ {t('capabilities.whyChoose.technology') || 'Advanced CNC & VMC technology for complex machining'}</li>
                                <li>✔ {t('capabilities.whyChoose.testing') || 'In-house calibration & testing for assured quality'}</li>
                                <li>✔ {t('capabilities.whyChoose.expertise') || 'Skilled engineers and machinists with decades of expertise'}</li>
                                <li>✔ {t('capabilities.whyChoose.capability') || 'Capability for both custom and bulk orders'}</li>
                                <li>✔ {t('capabilities.whyChoose.commitment') || 'Commitment to timely delivery and international quality compliance'}</li>
                            </ul>
                        </div>
                    </section>


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

export default CapabilitiesPage;