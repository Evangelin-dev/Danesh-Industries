import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  console.log('LanguageProvider rendered with language:', language);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('danesh-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'hi')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    console.log('Language state changed to:', language);
    localStorage.setItem('danesh-language', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[language]?.[key];
    if (translation) {
      return translation;
    }

    // Log missing translations for debugging
    console.warn(`❌ Missing translation for key "${key}" in language "${language}" - falling back to English`);
    const englishTranslation = translations.en[key];
    if (!englishTranslation) {
      console.error(`❌ Missing translation for key "${key}" in English too!`);
    }
    return englishTranslation || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    console.error('useLanguage must be used within a LanguageProvider');
    // Return a fallback instead of throwing to prevent app crashes
    return {
      language: 'en',
      setLanguage: () => console.warn('setLanguage called but no LanguageProvider found'),
      t: (key: string) => translations.en[key] || key,
    };
  }
  return context;
};

// Translation data
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.capabilities': 'Capabilities',
    'nav.technology': 'Technology',
    'nav.certifications': 'Certifications',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact Us',

    // Common
    'common.language': 'Language',
    'common.english': 'English',
    'common.hindi': 'हिन्दी',

    // Header
    'header.logo.alt': 'Danesh Industries Logo',

    // Home Page
    'home.title': 'Welcome to Danesh Industries',
    'home.subtitle': 'Precision Machined Parts Manufacturer',
    'home.description': 'Leading manufacturer of high-quality precision machined parts, flanges, fittings, and valve components serving industries worldwide.',
    'home.hero.title1': 'Engineered for Excellence.',
    'home.hero.title1Hindi': 'उत्कृष्टता के लिए इंजीनियर्ड।',
    'home.hero.title2': 'Built for Performance.',
    'home.hero.title2Hindi': 'प्रदर्शन के लिए निर्मित।',
    'home.hero.description': 'Manufacturing precision machined parts, socket weld fittings, flanges, valves, and assemblies — with global quality standards.',
    'home.hero.descriptionHindi': 'परिशुद्ध मशीनीकृत पार्ट्स, सॉकेट वेल्ड फिटिंग्स, फ्लैंजेस, वाल्व्स और असेंबलीज़ का निर्माण — वैश्विक गुणवत्ता मानकों के साथ।',
    'home.hero.viewProducts': 'View Products',
    'home.hero.contactUs': 'Contact Us',
    'home.highlights.title': 'Why Choose Us?',
    'home.highlights.precisionMachining': 'Precision Machining & Reverse Engineering',
    'home.highlights.industrialFittings': 'Wide Range of Industrial Fittings & Flanges',
    'home.highlights.globalStandards': 'Global Standard Compliance',
    'home.highlights.timelyDelivery': 'Timely Delivery & Proven Reliability',
    'home.testimonials.title': 'Clientele & Testimonials',
    'home.testimonials.subtitle': 'Trusted by leading clients in oil & gas, valves, pumps, and engineering sectors.',
    'home.about.title': 'About Us – Danesh Industries',
    'home.about.description': 'Founded in 2016, Danesh Industries is a trusted manufacturer and exporter of machined components, precision machined parts, CNC machine parts, and custom machined components, based in Chennai, India. With a 5,000 sq. ft. ISO-certified manufacturing facility in Perungudi, we specialize in OEM spare parts, contract manufacturing services, and precision-engineered components for industries across India, Oman, Saudi Arabia, UAE, Qatar, Bahrain, Singapore, and Malaysia.',
    'home.whoWeAre.title': 'Who We Are',
    'home.whoWeAre.description1': 'For over a decade, Danesh Industries has partnered with leading global companies such as Autosys, Severn Glocon Group, Serino, Flowserve, Armstrong International, JC VALVES delivering export-quality components that meet international standards.',
    'home.whoWeAre.description2': 'Our skilled team of engineers and machinists is committed to cost-effective, reliable, and scalable solutions for diverse industrial sectors.',
    'home.whatWeDo.title': 'What We Do',
    'home.whatWeDo.subtitle': 'We manufacture and supply a comprehensive range of industrial components and fittings, including:',
    'home.whatWeDo.valveComponents': 'Valve Components',
    'home.whatWeDo.flanges': 'Flanges (SS 304, SS 316, MS Spacer)',
    'home.whatWeDo.giFlanges': 'GI Slip-On Flanges',
    'home.whatWeDo.giThreadedFlanges': 'GI Threaded Flanges',
    'home.whatWeDo.pipeFittings': 'Pipe Fittings (GI, Stainless Steel, Ductile Iron)',
    'home.whatWeDo.castSteelFittings': 'Cast Steel Screwed Fittings',
    'home.whatWeDo.rBrandFittings': 'R Brand Fittings',
    'home.whatWeDo.groovedFittings': 'Grooved Fittings',
    'home.whatWeDo.partitionPlates': 'Partition Plate Dies',
    'home.whatWeDo.pullStuds': 'Pull Studs',
    'home.whatWeDo.plugValves': 'Plug Valves',
    'home.whatWeDo.mildSteelPins': 'Mild Steel Pins',
    'home.whatWeDo.ballValveSeatRings': 'Ball Valve Seat Rings',
    'home.whatWeDo.solenoidValves': 'Solenoid Valves',
    'home.whatWeDo.cageControlValve': 'Cage for control valve',
    'home.whatWeDo.plugControlValve': 'Plug for control valve',
    'home.whatWeDo.seatRingValves': 'Seat Ring for all valves',
    'home.whatWeDo.actuatorCylinder': 'Actuator cylinder',

    // Our Services Section
    'home.services.title': 'Our Services',
    'home.services.precisionMachining': 'Precision Machining',
    'home.services.precisionMachiningDesc': 'CNC Turning, Milling, Drilling',
    'home.services.customComponents': 'Custom Component Manufacturing',
    'home.services.customComponentsDesc': 'Flanges, fittings, valve parts',
    'home.services.dieMould': 'Die & Mould Manufacturing',
    'home.services.dieMouldDesc': 'Partition plates, seat rings, precision dies',
    'home.services.threadingGrooving': 'Threading, Grooving & Cutting Services',
    'home.services.prototypeDevelopment': 'Prototype Development & Mass Production',
    'home.services.prototypeDevelopmentDesc': 'With in-house CNC machining and quality testing, we cater to both low-volume prototypes and high-volume OEM manufacturing.',

    // Our Expertise Section
    'home.expertise.title': 'Our Expertise',
    'home.expertise.machinedComponents': 'Machined Components',
    'home.expertise.machinedComponentsDesc': 'For pumps, process plants, and industrial assemblies.',
    'home.expertise.precisionParts': 'Precision Machined Parts',
    'home.expertise.precisionPartsDesc': 'With tight tolerances for critical industries.',
    'home.expertise.cncParts': 'CNC Machine Parts',
    'home.expertise.cncPartsDesc': 'Manufactured on advanced CNC turning centres, VMC with 4th Axis, DRO milling, and lathes.',
    'home.expertise.contractManufacturing': 'Contract Manufacturing Services',
    'home.expertise.contractManufacturingDesc': 'Long-term partnerships for prototype development, small batch runs, and large-scale production, with strict ISO-certified quality control.',

    // Why Choose Danesh Industries Section
    'home.whyChoose.title': 'Why Choose Danesh Industries',
    'home.whyChoose.message': 'At Danesh Industries, we don\'t just manufacture parts — we build precision, trust, and long-term partnerships.',
    'home.whyChoose.experience': '10+ years',
    'home.whyChoose.experienceDesc': 'of proven experience in OEM and contract manufacturing.',
    'home.whyChoose.markets': 'Trusted supplier to companies across',
    'home.whyChoose.india': 'India',
    'home.whyChoose.middleEast': 'Middle East',
    'home.whyChoose.middleEastCountries': '(Oman, Saudi Arabia, UAE, Qatar, Bahrain)',
    'home.whyChoose.southeastAsia': 'Southeast Asia',
    'home.whyChoose.southeastAsiaCountries': '(Singapore, Malaysia)',
    'home.whyChoose.advancedMachinery': 'Advanced',
    'home.whyChoose.advancedMachineryItem': 'CNC machinery',
    'home.whyChoose.calibration': 'in-house calibration',
    'home.whyChoose.isoCertified': 'ISO-certified',
    'home.whyChoose.fastTurnaround': 'Fast',
    'home.whyChoose.turnaroundItem': 'turnaround and scalable production capacity.',

    // Contract Manufacturing Section
    'home.contractManufacturing.title': 'Danesh Industries – Contract Manufacturing Services',
    'home.contractManufacturing.description': 'For over a decade, Danesh Industries has been a reliable partner in contract manufacturing services, delivering precision-engineered components and assemblies to industries in',
    'home.contractManufacturing.industries': 'India, Oman, Saudi Arabia, UAE, Qatar, Bahrain, Singapore, and Malaysia.',
    'home.contractManufacturing.ourCapabilities': 'Our Capabilities',
    'home.contractManufacturing.precisionMachining': 'Precision Machining',
    'home.contractManufacturing.precisionMachiningDesc': 'CNC turning, milling, drilling, and finishing.',
    'home.contractManufacturing.fabrication': 'Fabrication & Assembly',
    'home.contractManufacturing.fabricationDesc': 'End-to-end production support.',
    'home.contractManufacturing.customEngineering': 'Custom Engineering',
    'home.contractManufacturing.customEngineeringDesc': 'Reverse engineering, tailored designs, and product modifications.',
    'home.contractManufacturing.qualityAssurance': 'Quality Assurance',
    'home.contractManufacturing.qualityAssuranceDesc': 'ISO-certified processes, dimensional checks, and rigorous inspections.',
    'home.contractManufacturing.ourWorkProcess': 'Our Work Process',
    'home.contractManufacturing.discussNeeds': '1. Discuss Needs',
    'home.contractManufacturing.planQuote': '2. Plan & Quote',
    'home.contractManufacturing.sourceMaterial': '3. Source Material',
    'home.contractManufacturing.machineFabricate': '4. Machine & Fabricate',
    'home.contractManufacturing.qualityCheck': '5. Quality Check',
    'home.contractManufacturing.assembleFinish': '6. Assemble & Finish',
    'home.contractManufacturing.packDeliver': '7. Pack & Deliver',
    'home.contractManufacturing.support': '8. Support',

    // FAQ Section
    'home.faq.title': 'Frequently Asked Questions (FAQ)',
    'home.faq.q1': 'Q: What is contract manufacturing?',
    'home.faq.a1': 'A: It means outsourcing your product\'s machining, fabrication, or assembly to a trusted partner. Danesh Industries provides CNC machining, fabrication, and testing under ISO standards.',
    'home.faq.q2': 'Q: Which industries do you serve?',
    'home.faq.a2': 'A: Oil & Gas, automotive, valves, chemical process plants, water treatment, and industrial machinery in India, GCC countries, and Southeast Asia.',
    'home.faq.q3': 'Q: Can you handle both prototypes and mass production?',
    'home.faq.a3': 'A: Yes, we support low-volume prototypes, small-batch runs, and high-volume OEM spare parts manufacturing.',
    'home.faq.q4': 'Q: What materials do you work with?',
    'home.faq.a4': 'A: Stainless Steel (304, 316), Mild Steel, Hastelloy, and special alloys.',
    'home.faq.q5': 'Q: How do you ensure quality?',
    'home.faq.a5': 'A: With ISO-certified quality control, in-house calibration, and strict dimensional checks on every batch.',
    'home.faq.q6': 'Q: How do I get started?',
    'home.faq.a6': '📧 Email us at',
    'home.faq.email': 'marketing@daneshindustries.com',
    'home.faq.orCall': 'or 📞 Call',
    'home.faq.phone': '+91 95000 71287 (Mr. Nambi)',
    'home.faq.withRequirements': 'with your requirements.',

    // Footer
    'footer.companyName': 'Danesh Industries',
    'footer.description': 'Manufacturing precision machined parts, socket weld fittings, flanges, valves, and assemblies with global quality standards.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': 'All Rights Reserved.',
    'footer.address': 'Address:',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': "We're here to help and answer any question you might have.",
    'contact.address': 'Address',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.formTitle': 'Send us a Message',
    'contact.fullName': 'Full Name',
    'contact.emailAddress': 'Email Address',
    'contact.phoneLabel': 'Phone',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.sendMessage': 'Send Message',
    'contact.successTitle': 'Success!',
    'contact.successMessage': 'Thank you for your message. We will get back to you shortly.',
    'contact.location': 'Our Location',

    // Contact Popup
    'contactPopup.title': 'Contact Us',
    'contactPopup.successTitle': 'Thank you!',
    'contactPopup.successMessage': 'Your message has been sent successfully.',
    'contactPopup.fullName': 'Full Name',
    'contactPopup.fullNamePlaceholder': 'Enter your name',
    'contactPopup.emailAddress': 'Email Address',
    'contactPopup.emailPlaceholder': 'Enter your email',
    'contactPopup.phoneNumber': 'Phone Number',
    'contactPopup.phonePlaceholder': 'Enter your phone number',
    'contactPopup.message': 'Message',
    'contactPopup.messagePlaceholder': 'Enter your message',
    'contactPopup.sendMessage': 'Send Message',
    'contactPopup.cancel': 'Cancel',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive manufacturing solutions from precision machining to quality assurance.',
    'services.readMore': 'Read More',
    'services.showLess': 'Show Less',
    'services.capabilities': 'Capabilities',
    'services.industriesServed': 'Industries Served',
    'services.valueToClients': 'Value to Clients',

    // CNC Machining Services
    'services.cncMachining.title': 'CNC Machining Services',
    'services.cncMachining.description': 'At Danesh Industries, we specialize in high-precision CNC machining solutions tailored for OEMs, industrial projects, and specialized engineering requirements. With state-of-the-art CNC turning and milling machines, our team delivers components with exact tolerances, smooth finishes, and international quality standards.',
    'services.cncMachining.capabilities.turning': 'CNC turning and milling for small to large components',
    'services.cncMachining.capabilities.prototype': 'Prototype to mass production runs',
    'services.cncMachining.capabilities.accuracy': 'High accuracy ±0.01 mm tolerances',
    'services.cncMachining.capabilities.materials': 'Machining in stainless steel, aluminum, brass, copper, and engineering plastics',
    'services.cncMachining.capabilities.fixtures': 'Custom fixtures, jigs, and tooling',
    'services.cncMachining.industries.automotive': 'Automotive & Aerospace',
    'services.cncMachining.industries.oilGas': 'Oil & Gas',
    'services.cncMachining.industries.heavyMachinery': 'Heavy Machinery',
    'services.cncMachining.industries.foodPharma': 'Food Processing & Pharma Equipment',
    'services.cncMachining.value.fasterCycles': 'Faster production cycles',
    'services.cncMachining.value.consistentQuality': 'Consistent quality with ISO-certified processes',
    'services.cncMachining.value.costOptimization': 'Cost optimization for both low and high-volume requirements',

    // Fabrication Services
    'services.fabrication.title': 'Fabrication Services',
    'services.fabrication.description': 'Our fabrication unit is equipped to handle both light and heavy fabrication works for diverse industries. We combine technical expertise with modern machinery to deliver durable and reliable structures.',
    'services.fabrication.capabilities.sheetMetal': 'Sheet metal fabrication',
    'services.fabrication.capabilities.welding': 'Welding (MIG, TIG, ARC) and structural assembly',
    'services.fabrication.capabilities.cutting': 'Cutting, bending, and surface finishing',
    'services.fabrication.capabilities.materials': 'Stainless steel, mild steel, and aluminum fabrication',
    'services.fabrication.industries.processEquipment': 'Process Equipment Manufacturers',
    'services.fabrication.industries.construction': 'Construction & Infrastructure',
    'services.fabrication.industries.industrialMachinery': 'Industrial Machinery',
    'services.fabrication.industries.powerEnergy': 'Power & Energy Sector',
    'services.fabrication.value.endToEnd': 'End-to-end fabrication support from design to delivery',
    'services.fabrication.value.safetyCompliance': 'Strong adherence to safety and compliance standards',
    'services.fabrication.value.longLasting': 'Long-lasting quality backed by skilled welders and inspectors',

    // About Page
    'about.title': 'About Danesh Industries',
    'about.subtitle': 'Our commitment to quality and excellence.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': '“To be a professional organization, manufacturing the highest quality performance-oriented products while enhancing our relationships with customers across the globe.”',
    'about.mission.title': 'Our Mission',
    'about.mission.content': '“At Danesh Industries, we are committed to continuous improvement and strive for excellence in everything we do. Every team member contributes to a total quality culture, ensuring customer satisfaction.”',
    'about.policy.title': 'Our Quality Policy',
    'about.policy.content': 'We are committed to achieving customer satisfaction by supplying quality products on time, every time — while continually improving our quality management systems and complying with international standards.',
    'about.infrastructure.title': 'Infrastructure & Factory Overview',
    'about.infrastructure.facility.title': 'Our Facility',
    'about.infrastructure.facility.content': 'Our state-of-the-art manufacturing unit is spread across 3000 sq. ft. in Chennai, India. It is equipped with modern machinery and a dedicated quality assurance lab to ensure every product meets the highest standards of precision and excellence.',
    'about.infrastructure.capabilities.title': 'Advanced Capabilities',
    'about.infrastructure.capabilities.content': 'We leverage advanced CNC machining, VMC, and precision lathes, alongside robust testing facilities, including hydro testing and PMI analysis. This allows us to handle complex projects and deliver components that perform reliably in the most demanding environments.',
    'about.clients.title': 'Our Trusted Clients',
    'about.clients.description': 'We are proud to serve leading companies in the industry.',

    // Capabilities Page
    'capabilities.title': 'Manufacturing Capabilities – Danesh Industries',
    'capabilities.description': 'At Danesh Industries, we operate from a state-of-the-art 3,000 sq. ft. facility equipped with advanced CNC machines, milling centers, conventional machining, and in-house testing systems. Our setup ensures precision engineering, strict quality control, and reliable delivery for industries such as oil & gas, petrochemicals, power, automotive, valves, and industrial engineering.',
    'capabilities.machinery.title': 'Our Machinery',
    'capabilities.machinery.cnc': 'CNC Turning Centres',
    'capabilities.machinery.vmc': 'VMC with 4th Axis',
    'capabilities.machinery.dro': 'DRO Milling',
    'capabilities.machinery.lathes': 'Conventional Lathes',
    'capabilities.machinery.cutting': 'Cutting Machine',
    'capabilities.testing.title': 'In-House Calibration & Testing',
    'capabilities.testing.description': 'We ensure the highest standards of accuracy and reliability by maintaining dedicated in-house calibration and testing facilities.',
    'capabilities.testing.dimensional': 'Dimensional Accuracy Testing – Using calibrated gauges, micrometers, verniers, and precision instruments',
    'capabilities.testing.pressure': 'Pressure & Hydro Testing – Ensuring valve and fitting components meet industry safety standards',
    'capabilities.testing.material': 'Material Testing Support – PMI (Positive Material Identification) & spectro testing (through partner labs if required)',
    'capabilities.testing.surface': 'Surface & Thread Inspection – Verifying finishes and thread profiles for flawless assembly',
    'capabilities.testing.documentation': 'Documentation & Traceability – Test certificates and calibration reports provided with supply',
    'capabilities.testing.benefits.title': 'This in-house capability allows us to:',
    'capabilities.testing.benefits.reduced': 'Reduce lead times by eliminating dependency on third-party labs',
    'capabilities.testing.benefits.guarantee': 'Guarantee quality consistency and compliance with ASME, ASTM, DIN, EN standards',
    'capabilities.testing.benefits.provide': 'Provide customers with traceable quality reports and certificates for every batch',
    'capabilities.highlights.title': 'Factory Highlights',
    'capabilities.highlights.floorSpace': 'Floor Space: 3,000 sq. ft.',
    'capabilities.highlights.machinery': 'Machinery: CNC turning centers, VMC with 4th axis, DRO milling, conventional lathes, cutting machines',
    'capabilities.highlights.testing': 'In-House Testing: Calibration, dimensional inspection, hydro testing, and QA certification',
    'capabilities.highlights.capacity': 'Production Capacity: Medium to high-volume runs with quick turnaround times',
    'capabilities.highlights.specialization': 'Specialization: Precision machining of valves, flanges, fittings, and custom components',
    'capabilities.highlights.flexibility': 'Flexibility: Prototyping, small-batch, and large-volume production capabilities',
    'capabilities.whyChoose.title': 'Why Choose Danesh Industries?',
    'capabilities.whyChoose.technology': 'Advanced CNC & VMC technology for complex machining',
    'capabilities.whyChoose.testing': 'In-house calibration & testing for assured quality',
    'capabilities.whyChoose.expertise': 'Skilled engineers and machinists with decades of expertise',
    'capabilities.whyChoose.capability': 'Capability for both custom and bulk orders',
    'capabilities.whyChoose.commitment': 'Commitment to timely delivery and international quality compliance',

    // Certifications Page
    'certifications.title': 'Certifications & Compliance',
    'certifications.subtitle': 'Our unwavering commitment to global quality standards ensures that every product we deliver is reliable, safe, and built to perform.',
    'certifications.standards.title': 'Adherence to International Standards',
    'certifications.standards.description': 'We manufacture products in strict compliance with a wide range of international standards to meet the diverse needs of our global clientele. Our quality assurance systems are designed to ensure traceability, consistency, and excellence from raw material sourcing to final inspection.',
    'certifications.standards.asme': 'American Society of Mechanical Engineers standards for pressure vessels, piping, and components.',
    'certifications.standards.astm': 'American Society for Testing and Materials standards for material properties and testing.',
    'certifications.standards.din': 'Deutsches Institut für Normung (German Institute for Standardization) standards.',
    'certifications.standards.api': 'American Petroleum Institute standards for the oil and gas industry.',
    'certifications.standards.norsok': 'Norwegian standards developed for the petroleum industry.',
    'certifications.standards.iso': 'International standard for a quality management system (QMS).',
    'certifications.standards.nace': 'National Association of Corrosion Engineers standards for corrosion control.',
    'certifications.standards.en': 'European Standards for products, services, or systems.',
    'certifications.download': 'Download ISO Certificate',
    'certifications.qms.title': 'Our Quality Management System',
    'certifications.qms.description': 'Our processes are governed by a robust Quality Management System (QMS) that aligns with ISO 9001:2015 principles. This includes rigorous inspection, continuous process improvement, and comprehensive documentation support to guarantee that our products meet and exceed customer expectations.',

    // Blog Page
    'blog.loading': 'Loading blogs...',
    'blog.error': 'Error loading blogs',
    'blog.title': 'Blog',
    'blog.companyName': 'Danesh Industries',
    'blog.comingSoon.title': 'Industry Insights Coming Soon!',
    'blog.comingSoon.description': 'We are currently curating valuable content, including industry trends, product application guides, and technical articles on valves, flanges, and fittings. Please check back later to explore our blog.',
    'blog.returnHome': 'Return to Home',
    'blog.readMore': 'Read More',
    'blog.notFound': 'Blog not found.',
    'blog.contentInHindi': 'This content is not yet available in Hindi.',
    'blog.englishContent': 'This content is in English.',

    // Products Page
    'products.title': 'Our Products',
    'products.subtitle': 'Explore our comprehensive range of high-quality, precision-engineered components for various industrial applications.',
    'products.selectCategory': 'Select a category',
    'products.selectItem': 'Select an item',
    'products.orderNow': 'Order Now',
    'products.categories.valveComponents': 'Valve Components',
    'products.categories.flanges': 'Flanges',
    'products.categories.msFlanges': 'MS Flanges',
    'products.categories.ss304Flanges': 'SS 304 Flanges',
    'products.categories.msSpacerFlanges': 'MS Spacer Flanges',
    'products.categories.ss316Flanges': 'SS 316 Flanges',
    'products.categories.giSlipOnFlanges': 'GI Slip-On Flanges',
    'products.categories.giThreadedFlanges': 'GI Threaded Flanges',
    'products.categories.pipeFittings': 'Pipe Fittings',
    'products.categories.castSteelFittings': 'Cast Steel Screwed Fittings',
    'products.categories.ductileIronFittings': 'Ductile Iron Fittings',
    'products.categories.groovedFittings': 'Grooved Fittings',
    'products.categories.forgedSteelFittings': 'Forged Steel Fittings',
    'products.categories.giRBrandFittings': 'GI R Brand Fittings',
    'products.categories.giFittings': 'GI Fittings',
    'products.categories.ssFittings': 'Stainless Steel (SS) Fittings',
    'products.categories.pullStuds': 'Pull Studs',
    'products.categories.plugValves': 'Plug Valves',
    'products.categories.controlValves': 'Control Valves',
    'products.categories.mildSteelPins': 'Mild Steel Pins',
    'products.categories.partitionPlateDie': 'Partition Plate Die',
    'products.categories.ballValveSeatRing': 'Ball Valve Seat Ring',
    'products.categories.solenoidValves': 'Solenoid Valves',

    // Technology Page
    'technology.title': 'Our Technology',
    'technology.subtitle': 'We Integrating advanced tools and software into our processes.',
    'technology.solidworks.name': 'SolidWorks',
    'technology.solidworks.description': 'For 3D modeling and design.',
    'technology.mastercam.name': 'Mastercam',
    'technology.mastercam.description': 'For process automation.',
    'technology.faro.name': 'FARO Arm',
    'technology.faro.description': 'For precision measurement.',
    'technology.pmi.name': 'PMI & Mobile Spectro',
    'technology.pmi.description': 'For material analysis.',
    'technology.hydro.name': 'Hydro Testing',
    'technology.hydro.description': 'For final validation.',

    // Add more translations as needed
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.products': 'उत्पाद',
    'nav.services': 'सेवाएं',
    'nav.capabilities': 'क्षमताएं',
    'nav.technology': 'प्रौद्योगिकी',
    'nav.certifications': 'प्रमाणपत्र',
    'nav.blog': 'ब्लॉग',
    'nav.contact': 'संपर्क करें',

    // Common
    'common.language': 'भाषा',
    'common.english': 'English',
    'common.hindi': 'हिन्दी',

    // Header
    'header.logo.alt': 'दानेश इंडस्ट्रीज लोगो',

    // Home Page
    'home.title': 'दानेश इंडस्ट्रीज में आपका स्वागत है',
    'home.subtitle': 'परिशुद्ध मशीनीकृत पार्ट्स निर्माता',
    'home.description': 'उच्च गुणवत्ता वाली परिशुद्ध मशीनीकृत पार्ट्स, फ्लैंजेस, फिटिंग्स और वाल्व कंपोनेंट्स का अग्रणी निर्माता जो विश्वभर की उद्योगों की सेवा करता है।',
    'home.hero.title1': 'उत्कृष्टता के लिए इंजीनियर्ड।',
    'home.hero.title1Hindi': 'उत्कृष्टता के लिए इंजीनियर्ड।',
    'home.hero.title2': 'प्रदर्शन के लिए निर्मित।',
    'home.hero.title2Hindi': 'प्रदर्शन के लिए निर्मित।',
    'home.hero.description': 'परिशुद्ध मशीनीकृत पार्ट्स, सॉकेट वेल्ड फिटिंग्स, फ्लैंजेस, वाल्व्स और असेंबलीज़ का निर्माण — वैश्विक गुणवत्ता मानकों के साथ।',
    'home.hero.descriptionHindi': 'परिशुद्ध मशीनीकृत पार्ट्स, सॉकेट वेल्ड फिटिंग्स, फ्लैंजेस, वाल्व्स और असेंबलीज़ का निर्माण — वैश्विक गुणवत्ता मानकों के साथ।',
    'home.hero.viewProducts': 'उत्पाद देखें',
    'home.hero.contactUs': 'संपर्क करें',
    'home.highlights.title': 'हमें क्यों चुनें?',
    'home.testimonials.title': 'ग्राहक और प्रशंसापत्र',
    'home.testimonials.subtitle': 'तेल और गैस, वाल्व्स, पंप्स और इंजीनियरिंग क्षेत्रों के अग्रणी ग्राहकों द्वारा विश्वसनीय।',
    'home.about.title': 'हमारे बारे में – दानेश इंडस्ट्रीज',
    'home.about.description': '2016 में स्थापित, दानेश इंडस्ट्रीज मशीनीकृत कंपोनेंट्स, परिशुद्ध मशीनीकृत पार्ट्स, CNC मशीन पार्ट्स और कस्टम मशीनीकृत कंपोनेंट्स का विश्वसनीय निर्माता और निर्यातक है, जो चेन्नई, भारत में स्थित है। पेरुंगुडी में 5,000 वर्ग फुट की ISO-प्रमाणित विनिर्माण सुविधा के साथ, हम भारत, ओमान, सऊदी अरब, UAE, कतर, बहरीन, सिंगापुर और मलेशिया में उद्योगों के लिए OEM स्पेयर पार्ट्स, अनुबंध विनिर्माण सेवाओं और परिशुद्ध-इंजीनियर्ड कंपोनेंट्स में विशेषज्ञ हैं।',
    'home.whoWeAre.title': 'हम कौन हैं',
    'home.whoWeAre.description1': 'एक दशक से अधिक समय से, दानेश इंडस्ट्रीज ने Autosys, Severn Glocon Group, Serino, Flowserve, Armstrong International, JC VALVES जैसी अग्रणी वैश्विक कंपनियों के साथ साझेदारी की है और अंतरराष्ट्रीय मानकों को पूरा करने वाले निर्यात-गुणवत्ता वाले कंपोनेंट्स प्रदान किए हैं।',
    'home.whoWeAre.description2': 'हमारे कुशल इंजीनियर्स और मशीनिस्टों की टीम विविध औद्योगिक क्षेत्रों के लिए लागत-प्रभावी, विश्वसनीय और स्केलेबल समाधानों के लिए प्रतिबद्ध है।',
    'home.whatWeDo.title': 'हम क्या करते हैं',
    'home.whatWeDo.subtitle': 'हम औद्योगिक कंपोनेंट्स और फिटिंग्स की व्यापक श्रृंखला का निर्माण और आपूर्ति करते हैं, जिनमें शामिल हैं:',
    'home.whatWeDo.valveComponents': 'वाल्व कंपोनेंट्स',
    'home.whatWeDo.flanges': 'फ्लैंजेस (SS 304, SS 316, MS स्पेसर)',
    'home.whatWeDo.giFlanges': 'GI स्लिप-ऑन फ्लैंजेस',
    'home.whatWeDo.giThreadedFlanges': 'GI थ्रेडेड फ्लैंजेस',
    'home.whatWeDo.pipeFittings': 'पाइप फिटिंग्स (GI, स्टेनलेस स्टील, डक्टाइल आयरन)',
    'home.whatWeDo.castSteelFittings': 'कास्ट स्टील स्क्रूड फिटिंग्स',
    'home.whatWeDo.rBrandFittings': 'R ब्रांड फिटिंग्स',
    'home.whatWeDo.groovedFittings': 'ग्रूव्ड फिटिंग्स',
    'home.whatWeDo.partitionPlates': 'पार्टिशन प्लेट डाई',
    'home.whatWeDo.pullStuds': 'पुल स्टड्स',
    'home.whatWeDo.plugValves': 'प्लग वाल्व्स',
    'home.whatWeDo.mildSteelPins': 'माइल्ड स्टील पिन्स',
    'home.whatWeDo.ballValveSeatRings': 'बॉल वाल्व सीट रिंग्स',
    'home.whatWeDo.solenoidValves': 'सोलनॉइड वाल्व्स',
    'home.whatWeDo.cageControlValve': 'कंट्रोल वाल्व के लिए केज',
    'home.whatWeDo.plugControlValve': 'कंट्रोल वाल्व के लिए प्लग',
    'home.whatWeDo.seatRingValves': 'सभी वाल्व्स के लिए सीट रिंग',
    'home.whatWeDo.actuatorCylinder': 'एक्ट्यूएटर सिलेंडर',

    // Our Services Section - Hindi
    'home.services.title': 'हमारी सेवाएं',
    'home.services.precisionMachining': 'परिशुद्ध मशीनिंग',
    'home.services.precisionMachiningDesc': 'सीएनसी टर्निंग, मिलिंग, ड्रिलिंग',
    'home.services.customComponents': 'कस्टम कंपोनेंट विनिर्माण',
    'home.services.customComponentsDesc': 'फ्लैंजेस, फिटिंग्स, वाल्व पार्ट्स',
    'home.services.dieMould': 'डाई और मोल्ड विनिर्माण',
    'home.services.dieMouldDesc': 'पार्टिशन प्लेट्स, सीट रिंग्स, परिशुद्ध डाई',
    'home.services.threadingGrooving': 'थ्रेडिंग, ग्रूविंग और कटिंग सेवाएं',
    'home.services.prototypeDevelopment': 'प्रोटोटाइप विकास और बड़े पैमाने पर उत्पादन',
    'home.services.prototypeDevelopmentDesc': 'इन-हाउस सीएनसी मशीनिंग और गुणवत्ता परीक्षण के साथ, हम कम-वॉल्यूम प्रोटोटाइप और उच्च-वॉल्यूम OEM विनिर्माण दोनों के लिए सेवा प्रदान करते हैं।',

    // Our Expertise Section - Hindi
    'home.expertise.title': 'हमारी विशेषज्ञता',
    'home.expertise.machinedComponents': 'मशीनीकृत कंपोनेंट्स',
    'home.expertise.machinedComponentsDesc': 'पंप्स, प्रक्रिया संयंत्रों और औद्योगिक असेंबली के लिए।',
    'home.expertise.precisionParts': 'परिशुद्ध मशीनीकृत पार्ट्स',
    'home.expertise.precisionPartsDesc': 'महत्वपूर्ण उद्योगों के लिए सख्त सहनशीलता के साथ।',
    'home.expertise.cncParts': 'सीएनसी मशीन पार्ट्स',
    'home.expertise.cncPartsDesc': 'उन्नत सीएनसी टर्निंग सेंटर, 4थी एक्सिस के साथ वीएमसी, डीआरओ मिलिंग और लेथ पर निर्मित।',
    'home.expertise.contractManufacturing': 'अनुबंध विनिर्माण सेवाएं',
    'home.expertise.contractManufacturingDesc': 'प्रोटोटाइप विकास, छोटी बैच रन और बड़े पैमाने पर उत्पादन के लिए दीर्घकालिक साझेदारी, सख्त ISO-प्रमाणित गुणवत्ता नियंत्रण के साथ।',

    // Why Choose Danesh Industries Section - Hindi
    'home.whyChoose.title': 'दानेश इंडस्ट्रीज को क्यों चुनें',
    'home.whyChoose.message': 'दानेश इंडस्ट्रीज में, हम सिर्फ पार्ट्स का निर्माण नहीं करते — हम परिशुद्धता, विश्वास और दीर्घकालिक साझेदारी बनाते हैं।',
    'home.whyChoose.experience': '10+ वर्ष',
    'home.whyChoose.experienceDesc': 'की OEM और अनुबंध विनिर्माण में सिद्ध अनुभव।',
    'home.whyChoose.markets': 'कंपनियों के लिए विश्वसनीय आपूर्तिकर्ता',
    'home.whyChoose.india': 'भारत',
    'home.whyChoose.middleEast': 'मध्य पूर्व',
    'home.whyChoose.middleEastCountries': '(ओमान, सऊदी अरब, UAE, कतर, बहरीन)',
    'home.whyChoose.southeastAsia': 'दक्षिण पूर्व एशिया',
    'home.whyChoose.southeastAsiaCountries': '(सिंगापुर, मलेशिया)',
    'home.whyChoose.advancedMachinery': 'उन्नत',
    'home.whyChoose.advancedMachineryItem': 'सीएनसी मशीनरी',
    'home.whyChoose.calibration': 'इन-हाउस कैलिब्रेशन',
    'home.whyChoose.isoCertified': 'ISO-प्रमाणित',
    'home.whyChoose.fastTurnaround': 'तेजी से',
    'home.whyChoose.turnaroundItem': 'टर्नअराउंड और स्केलेबल उत्पादन क्षमता।',

    // Contract Manufacturing Section - Hindi
    'home.contractManufacturing.title': 'दानेश इंडस्ट्रीज – अनुबंध विनिर्माण सेवाएं',
    'home.contractManufacturing.description': 'एक दशक से अधिक समय से, दानेश इंडस्ट्रीज अनुबंध विनिर्माण सेवाओं में एक विश्वसनीय भागीदार रही है, जो परिशुद्ध-इंजीनियर्ड कंपोनेंट्स और असेंबली प्रदान करती है',
    'home.contractManufacturing.industries': 'भारत, ओमान, सऊदी अरब, UAE, कतर, बहरीन, सिंगापुर और मलेशिया में उद्योगों के लिए।',
    'home.contractManufacturing.ourCapabilities': 'हमारी क्षमताएं',
    'home.contractManufacturing.precisionMachining': 'परिशुद्ध मशीनिंग',
    'home.contractManufacturing.precisionMachiningDesc': 'सीएनसी टर्निंग, मिलिंग, ड्रिलिंग और फिनिशिंग।',
    'home.contractManufacturing.fabrication': 'फैब्रिकेशन और असेंबली',
    'home.contractManufacturing.fabricationDesc': 'अंत-से-अंत उत्पादन सहायता।',
    'home.contractManufacturing.customEngineering': 'कस्टम इंजीनियरिंग',
    'home.contractManufacturing.customEngineeringDesc': 'रिवर्स इंजीनियरिंग, अनुरूप डिजाइन और उत्पाद संशोधन।',
    'home.contractManufacturing.qualityAssurance': 'गुणवत्ता आश्वासन',
    'home.contractManufacturing.qualityAssuranceDesc': 'ISO-प्रमाणित प्रक्रियाएं, आयामी जांच और कठोर निरीक्षण।',
    'home.contractManufacturing.ourWorkProcess': 'हमारी कार्य प्रक्रिया',
    'home.contractManufacturing.discussNeeds': '1. आवश्यकताओं पर चर्चा करें',
    'home.contractManufacturing.planQuote': '2. योजना बनाएं और कोट करें',
    'home.contractManufacturing.sourceMaterial': '3. सामग्री प्राप्त करें',
    'home.contractManufacturing.machineFabricate': '4. मशीन और फैब्रिकेट करें',
    'home.contractManufacturing.qualityCheck': '5. गुणवत्ता जांच',
    'home.contractManufacturing.assembleFinish': '6. असेंबल और फिनिश करें',
    'home.contractManufacturing.packDeliver': '7. पैक और डिलीवर करें',
    'home.contractManufacturing.support': '8. सहायता',

    // FAQ Section - Hindi
    'home.faq.title': 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
    'home.faq.q1': 'प्रश्न: अनुबंध विनिर्माण क्या है?',
    'home.faq.a1': 'उत्तर: इसका मतलब है अपने उत्पाद की मशीनिंग, फैब्रिकेशन या असेंबली को एक विश्वसनीय भागीदार को आउटसोर्स करना। दानेश इंडस्ट्रीज ISO मानकों के तहत सीएनसी मशीनिंग, फैब्रिकेशन और परीक्षण प्रदान करती है।',
    'home.faq.q2': 'प्रश्न: आप किन उद्योगों की सेवा करते हैं?',
    'home.faq.a2': 'उत्तर: भारत, GCC देशों और दक्षिण पूर्व एशिया में तेल और गैस, ऑटोमोटिव, वाल्व्स, रासायनिक प्रक्रिया संयंत्र, जल उपचार और औद्योगिक मशीनरी।',
    'home.faq.q3': 'प्रश्न: क्या आप प्रोटोटाइप और बड़े पैमाने पर उत्पादन दोनों संभाल सकते हैं?',
    'home.faq.a3': 'उत्तर: हां, हम कम-वॉल्यूम प्रोटोटाइप, छोटी-बैच रन और उच्च-वॉल्यूम OEM स्पेयर पार्ट्स विनिर्माण का समर्थन करते हैं।',
    'home.faq.q4': 'प्रश्न: आप किन सामग्रियों के साथ काम करते हैं?',
    'home.faq.a4': 'उत्तर: स्टेनलेस स्टील (304, 316), माइल्ड स्टील, हेस्टेलॉय और विशेष मिश्र धातु।',
    'home.faq.q5': 'प्रश्न: आप गुणवत्ता कैसे सुनिश्चित करते हैं?',
    'home.faq.a5': 'उत्तर: ISO-प्रमाणित गुणवत्ता नियंत्रण, इन-हाउस कैलिब्रेशन और हर बैच पर सख्त आयामी जांच के साथ।',
    'home.faq.q6': 'प्रश्न: मैं कैसे शुरू करूं?',
    'home.faq.a6': '📧 हमें ईमेल करें',
    'home.faq.email': 'marketing@daneshindustries.com',
    'home.faq.orCall': 'या 📞 कॉल करें',
    'home.faq.phone': '+91 95000 71287 (श्री नाम्बी)',
    'home.faq.withRequirements': 'के साथ अपनी आवश्यकताओं के साथ।',

    // Additional sections - Hindi
    'home.whyChooseUs.title': 'Why Choose Us?',
    'home.machineryInAction.title': 'हमारी मशीनरी कार्य में',
    'home.machineryInAction.drilling': 'वर्टिकल मशीनिंग सेंटर में ड्रिलिंग',
    'home.machineryInAction.inspection': 'निरीक्षण',
    'home.machineryInAction.cncTurning': 'सीएनसी टर्निंग सेंटर का उपयोग करके परिशुद्ध कंपोनेंट्स की मशीनिंग',

    // Highlight items - Hindi
    'home.highlights.precisionMachining': 'परिशुद्ध मशीनिंग और रिवर्स इंजीनियरिंग',
    'home.highlights.industrialFittings': 'औद्योगिक फिटिंग्स और फ्लैंजेस की विस्तृत श्रृंखला',
    'home.highlights.globalStandards': 'वैश्विक मानक अनुपालन',
    'home.highlights.timelyDelivery': 'समय पर डिलीवरी और सिद्ध विश्वसनीयता',

    // Footer
    'footer.companyName': 'दानेश इंडस्ट्रीज',
    'footer.description': 'वैश्विक गुणवत्ता मानकों के साथ परिशुद्ध मशीनीकृत पार्ट्स, सॉकेट वेल्ड फिटिंग्स, फ्लैंजेस, वाल्व्स और असेंबलीज़ का निर्माण।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.legal': 'कानूनी',
    'footer.terms': 'नियम और शर्तें',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.copyright': 'सभी अधिकार सुरक्षित।',
    'footer.address': 'पता:',

    // Contact Page
    'contact.title': 'संपर्क करें',
    'contact.subtitle': 'हम आपकी मदद करने और आपके किसी भी प्रश्न का उत्तर देने के लिए यहां हैं।',
    'contact.address': 'पता',
    'contact.email': 'ईमेल',
    'contact.phone': 'फोन',
    'contact.whatsapp': 'व्हाट्सएप',
    'contact.formTitle': 'हमें एक संदेश भेजें',
    'contact.fullName': 'पूरा नाम',
    'contact.emailAddress': 'ईमेल पता',
    'contact.phoneLabel': 'फोन',
    'contact.subject': 'विषय',
    'contact.message': 'संदेश',
    'contact.sendMessage': 'संदेश भेजें',
    'contact.successTitle': 'सफलता!',
    'contact.successMessage': 'आपके संदेश के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
    'contact.location': 'हमारा स्थान',

    // Contact Popup - Hindi
    'contactPopup.title': 'संपर्क करें',
    'contactPopup.successTitle': 'धन्यवाद!',
    'contactPopup.successMessage': 'आपका संदेश सफलतापूर्वक भेज दिया गया है।',
    'contactPopup.fullName': 'पूरा नाम',
    'contactPopup.fullNamePlaceholder': 'अपना नाम दर्ज करें',
    'contactPopup.emailAddress': 'ईमेल पता',
    'contactPopup.emailPlaceholder': 'अपना ईमेल दर्ज करें',
    'contactPopup.phoneNumber': 'फोन नंबर',
    'contactPopup.phonePlaceholder': 'अपना फोन नंबर दर्ज करें',
    'contactPopup.message': 'संदेश',
    'contactPopup.messagePlaceholder': 'अपना संदेश दर्ज करें',
    'contactPopup.sendMessage': 'संदेश भेजें',
    'contactPopup.cancel': 'रद्द करें',

    // Services Page
    'services.title': 'हमारी सेवाएं',
    'services.subtitle': 'परिशुद्ध मशीनिंग से लेकर गुणवत्ता आश्वासन तक व्यापक विनिर्माण समाधान।',
    'services.readMore': 'और पढ़ें',
    'services.showLess': 'कम दिखाएं',
    'services.capabilities': 'क्षमताएं',
    'services.industriesServed': 'सेवा प्रदान की जाने वाली उद्योग',
    'services.valueToClients': 'ग्राहकों के लिए मूल्य',

    // CNC Machining Services - Hindi
    'services.cncMachining.title': 'सीएनसी मशीनिंग सेवाएं',
    'services.cncMachining.description': 'दानेश इंडस्ट्रीज में, हम OEMs, औद्योगिक परियोजनाओं और विशेष इंजीनियरिंग आवश्यकताओं के लिए तैयार उच्च परिशुद्धता सीएनसी मशीनिंग समाधान में विशेषज्ञ हैं। अत्याधुनिक सीएनसी टर्निंग और मिलिंग मशीनों के साथ, हमारी टीम सटीक सहनशीलता, चिकनी फिनिश और अंतरराष्ट्रीय गुणवत्ता मानकों के साथ कंपोनेंट्स प्रदान करती है।',
    'services.cncMachining.capabilities.turning': 'छोटे से बड़े कंपोनेंट्स के लिए सीएनसी टर्निंग और मिलिंग',
    'services.cncMachining.capabilities.prototype': 'प्रोटोटाइप से लेकर बड़े पैमाने पर उत्पादन',
    'services.cncMachining.capabilities.accuracy': 'उच्च सटीकता ±0.01 मिमी सहनशीलता',
    'services.cncMachining.capabilities.materials': 'स्टेनलेस स्टील, एल्यूमीनियम, पीतल, तांबा और इंजीनियरिंग प्लास्टिक्स में मशीनिंग',
    'services.cncMachining.capabilities.fixtures': 'कस्टम फिक्सचर, जिग्स और टूलिंग',
    'services.cncMachining.industries.automotive': 'ऑटोमोटिव और एयरोस्पेस',
    'services.cncMachining.industries.oilGas': 'तेल और गैस',
    'services.cncMachining.industries.heavyMachinery': 'भारी मशीनरी',
    'services.cncMachining.industries.foodPharma': 'खाद्य प्रसंस्करण और फार्मा उपकरण',
    'services.cncMachining.value.fasterCycles': 'तेजी से उत्पादन चक्र',
    'services.cncMachining.value.consistentQuality': 'ISO-प्रमाणित प्रक्रियाओं के साथ सुसंगत गुणवत्ता',
    'services.cncMachining.value.costOptimization': 'निम्न और उच्च-वॉल्यूम आवश्यकताओं दोनों के लिए लागत अनुकूलन',

    // Fabrication Services - Hindi
    'services.fabrication.title': 'फैब्रिकेशन सेवाएं',
    'services.fabrication.description': 'हमारी फैब्रिकेशन इकाई विविध उद्योगों के लिए हल्के और भारी फैब्रिकेशन कार्यों को संभालने के लिए सुसज्जित है। हम टिकाऊ और विश्वसनीय संरचनाएं प्रदान करने के लिए तकनीकी विशेषज्ञता के साथ आधुनिक मशीनरी को जोड़ते हैं।',
    'services.fabrication.capabilities.sheetMetal': 'शीट मेटल फैब्रिकेशन',
    'services.fabrication.capabilities.welding': 'वेल्डिंग (MIG, TIG, ARC) और संरचनात्मक असेंबली',
    'services.fabrication.capabilities.cutting': 'कटिंग, बेंडिंग और सतह फिनिशिंग',
    'services.fabrication.capabilities.materials': 'स्टेनलेस स्टील, माइल्ड स्टील और एल्यूमीनियम फैब्रिकेशन',
    'services.fabrication.industries.processEquipment': 'प्रक्रिया उपकरण निर्माता',
    'services.fabrication.industries.construction': 'निर्माण और बुनियादी ढांचा',
    'services.fabrication.industries.industrialMachinery': 'औद्योगिक मशीनरी',
    'services.fabrication.industries.powerEnergy': 'बिजली और ऊर्जा क्षेत्र',
    'services.fabrication.value.endToEnd': 'डिजाइन से डिलीवरी तक अंत-से-अंत फैब्रिकेशन सहायता',
    'services.fabrication.value.safetyCompliance': 'सुरक्षा और अनुपालन मानकों का मजबूत पालन',
    'services.fabrication.value.longLasting': 'कुशल वेल्डरों और निरीक्षकों द्वारा समर्थित लंबे समय तक चलने वाली गुणवत्ता',

    // About Page
    'about.title': 'दानेश इंडस्ट्रीज के बारे में',
    'about.subtitle': 'गुणवत्ता और उत्कृष्टता के प्रति हमारी प्रतिबद्धता।',
    'about.vision.title': 'हमारा विजन',
    'about.vision.content': '"वैश्विक स्तर पर ग्राहकों के साथ अपने संबंधों को बढ़ाते हुए उच्चतम गुणवत्ता वाले प्रदर्शन-उन्मुख उत्पादों का निर्माण करने वाला एक पेशेवर संगठन बनना।"',
    'about.mission.title': 'हमारा मिशन',
    'about.mission.content': '"दानेश इंडस्ट्रीज में, हम जो कुछ भी करते हैं उसमें निरंतर सुधार और उत्कृष्टता के लिए प्रतिबद्ध हैं। हर टीम सदस्य कुल गुणवत्ता संस्कृति में योगदान देता है, ग्राहक संतुष्टि सुनिश्चित करता है।"',
    'about.policy.title': 'हमारी गुणवत्ता नीति',
    'about.policy.content': 'हम समय पर, हर बार गुणवत्ता वाले उत्पादों की आपूर्ति करके ग्राहक संतुष्टि प्राप्त करने के लिए प्रतिबद्ध हैं — साथ ही अपनी गुणवत्ता प्रबंधन प्रणालियों में लगातार सुधार करते हुए और अंतरराष्ट्रीय मानकों का अनुपालन करते हुए।',
    'about.infrastructure.title': 'बुनियादी ढांचा और फैक्टरी अवलोकन',
    'about.infrastructure.facility.title': 'हमारी सुविधा',
    'about.infrastructure.facility.content': 'हमारी अत्याधुनिक विनिर्माण इकाई चेन्नई, भारत में 3000 वर्ग फुट में फैली हुई है। यह आधुनिक मशीनरी और एक समर्पित गुणवत्ता आश्वासन प्रयोगशाला से सुसज्जित है ताकि हर उत्पाद उच्चतम मानकों की परिशुद्धता और उत्कृष्टता को पूरा करे।',
    'about.infrastructure.capabilities.title': 'उन्नत क्षमताएं',
    'about.infrastructure.capabilities.content': 'हम उन्नत सीएनसी मशीनिंग, वीएमसी, और परिशुद्ध लेथ का लाभ उठाते हैं, साथ ही मजबूत परीक्षण सुविधाओं के साथ, जिसमें हाइड्रो परीक्षण और पीएमआई विश्लेषण शामिल हैं। यह हमें जटिल परियोजनाओं को संभालने और सबसे मांग वाले वातावरणों में विश्वसनीय रूप से प्रदर्शन करने वाले घटकों को वितरित करने की अनुमति देता है।',
    'about.clients.title': 'हमारे विश्वसनीय ग्राहक',
    'about.clients.description': 'हम उद्योग में अग्रणी कंपनियों की सेवा करने पर गर्व महसूस करते हैं।',

    // Capabilities Page
    'capabilities.title': 'विनिर्माण क्षमताएं – दानेश इंडस्ट्रीज',
    'capabilities.description': 'दानेश इंडस्ट्रीज में, हम अत्याधुनिक 3,000 वर्ग फुट की सुविधा से काम करते हैं जो उन्नत सीएनसी मशीनों, मिलिंग केंद्रों, पारंपरिक मशीनिंग और इन-हाउस परीक्षण प्रणालियों से सुसज्जित है। हमारा सेटअप तेल और गैस, पेट्रोकेमिकल्स, बिजली, ऑटोमोटिव, वाल्व और औद्योगिक इंजीनियरिंग जैसे उद्योगों के लिए परिशुद्ध इंजीनियरिंग, सख्त गुणवत्ता नियंत्रण और विश्वसनीय डिलीवरी सुनिश्चित करता है।',
    'capabilities.machinery.title': 'हमारी मशीनरी',
    'capabilities.machinery.cnc': 'सीएनसी टर्निंग सेंटर',
    'capabilities.machinery.vmc': '4थी एक्सिस के साथ वीएमसी',
    'capabilities.machinery.dro': 'डीआरओ मिलिंग',
    'capabilities.machinery.lathes': 'पारंपरिक लेथ',
    'capabilities.machinery.cutting': 'कटिंग मशीन',
    'capabilities.testing.title': 'इन-हाउस कैलिब्रेशन और परीक्षण',
    'capabilities.testing.description': 'हम समर्पित इन-हाउस कैलिब्रेशन और परीक्षण सुविधाओं को बनाए रखते हुए सटीकता और विश्वसनीयता के उच्चतम मानकों को सुनिश्चित करते हैं।',
    'capabilities.testing.dimensional': 'आयामी सटीकता परीक्षण – कैलिब्रेटेड गेज, माइक्रोमीटर, वर्नियर और परिशुद्ध उपकरणों का उपयोग करके',
    'capabilities.testing.pressure': 'दबाव और हाइड्रो परीक्षण – यह सुनिश्चित करना कि वाल्व और फिटिंग घटक उद्योग सुरक्षा मानकों को पूरा करते हैं',
    'capabilities.testing.material': 'सामग्री परीक्षण सहायता – पीएमआई (सकारात्मक सामग्री पहचान) और स्पेक्ट्रो परीक्षण (आवश्यक होने पर पार्टनर लैब के माध्यम से)',
    'capabilities.testing.surface': 'सतह और थ्रेड निरीक्षण – त्रुटिहीन असेंबली के लिए फिनिश और थ्रेड प्रोफाइल को सत्यापित करना',
    'capabilities.testing.documentation': 'दस्तावेजीकरण और ट्रेसेबिलिटी – आपूर्ति के साथ प्रदान किए गए परीक्षण प्रमाण पत्र और कैलिब्रेशन रिपोर्ट',
    'capabilities.testing.benefits.title': 'यह इन-हाउस क्षमता हमें अनुमति देती है:',
    'capabilities.testing.benefits.reduced': 'तीसरे पक्ष की लैब पर निर्भरता समाप्त करके लीड समय कम करें',
    'capabilities.testing.benefits.guarantee': 'ASME, ASTM, DIN, EN मानकों के साथ गुणवत्ता स्थिरता और अनुपालन की गारंटी दें',
    'capabilities.testing.benefits.provide': 'हर बैच के लिए ग्राहकों को ट्रेसेबल गुणवत्ता रिपोर्ट और प्रमाण पत्र प्रदान करें',
    'capabilities.highlights.title': 'फैक्टरी हाइलाइट्स',
    'capabilities.highlights.floorSpace': 'फर्श क्षेत्र: 3,000 वर्ग फुट।',
    'capabilities.highlights.machinery': 'मशीनरी: 4थी एक्सिस के साथ सीएनसी टर्निंग सेंटर, वीएमसी, डीआरओ मिलिंग, पारंपरिक लेथ, कटिंग मशीनें',
    'capabilities.highlights.testing': 'इन-हाउस परीक्षण: कैलिब्रेशन, आयामी निरीक्षण, हाइड्रो परीक्षण और क्यूए प्रमाणन',
    'capabilities.highlights.capacity': 'उत्पादन क्षमता: त्वरित टर्नअराउंड समय के साथ मध्यम से उच्च-वॉल्यूम रन',
    'capabilities.highlights.specialization': 'विशेषज्ञता: वाल्व, फ्लैंज, फिटिंग और कस्टम घटकों की परिशुद्ध मशीनिंग',
    'capabilities.highlights.flexibility': 'लचीलापन: प्रोटोटाइपिंग, छोटी-बैच और बड़े-वॉल्यूम उत्पादन क्षमताएं',
    'capabilities.whyChoose.title': 'दानेश इंडस्ट्रीज को क्यों चुनें?',
    'capabilities.whyChoose.technology': 'जटिल मशीनिंग के लिए उन्नत सीएनसी और वीएमसी प्रौद्योगिकी',
    'capabilities.whyChoose.testing': 'आश्वस्त गुणवत्ता के लिए इन-हाउस कैलिब्रेशन और परीक्षण',
    'capabilities.whyChoose.expertise': 'दशकों के विशेषज्ञ अनुभव वाले कुशल इंजीनियर्स और मशीनिस्ट',
    'capabilities.whyChoose.capability': 'कस्टम और थोक दोनों ऑर्डर के लिए क्षमता',
    'capabilities.whyChoose.commitment': 'समय पर डिलीवरी और अंतरराष्ट्रीय गुणवत्ता अनुपालन के प्रति प्रतिबद्धता',

    // Certifications Page
    'certifications.title': 'प्रमाणन और अनुपालन',
    'certifications.subtitle': 'वैश्विक गुणवत्ता मानकों के प्रति हमारी अटूट प्रतिबद्धता सुनिश्चित करती है कि हम जो भी उत्पाद प्रदान करते हैं वह विश्वसनीय, सुरक्षित और प्रदर्शन करने के लिए बनाया गया है।',
    'certifications.standards.title': 'अंतरराष्ट्रीय मानकों का पालन',
    'certifications.standards.description': 'हम अपने वैश्विक ग्राहकों की विविध आवश्यकताओं को पूरा करने के लिए अंतरराष्ट्रीय मानकों की एक विस्तृत श्रृंखला के साथ सख्त अनुपालन में उत्पादों का निर्माण करते हैं। हमारी गुणवत्ता आश्वासन प्रणालियां कच्चे माल की सोर्सिंग से अंतिम निरीक्षण तक ट्रेसेबिलिटी, स्थिरता और उत्कृष्टता सुनिश्चित करने के लिए डिज़ाइन की गई हैं।',
    'certifications.standards.asme': 'दबाव वाहिकाओं, पाइपिंग और घटकों के लिए अमेरिकन सोसाइटी ऑफ मैकेनिकल इंजीनियर्स मानक।',
    'certifications.standards.astm': 'सामग्री गुणों और परीक्षण के लिए अमेरिकन सोसाइटी फॉर टेस्टिंग एंड मैटेरियल्स मानक।',
    'certifications.standards.din': 'डॉयचेस इंस्टीट्यूट फर नॉर्मुंग (जर्मन इंस्टीट्यूट फॉर स्टैंडर्डाइजेशन) मानक।',
    'certifications.standards.api': 'तेल और गैस उद्योग के लिए अमेरिकन पेट्रोलियम इंस्टीट्यूट मानक।',
    'certifications.standards.norsok': 'पेट्रोलियम उद्योग के लिए विकसित नॉर्वेजियन मानक।',
    'certifications.standards.iso': 'गुणवत्ता प्रबंधन प्रणाली (QMS) के लिए अंतरराष्ट्रीय मानक।',
    'certifications.standards.nace': 'संक्षारण नियंत्रण के लिए नेशनल एसोसिएशन ऑफ कोरोजन इंजीनियर्स मानक।',
    'certifications.standards.en': 'उत्पादों, सेवाओं या प्रणालियों के लिए यूरोपीय मानक।',
    'certifications.download': 'ISO प्रमाणपत्र डाउनलोड करें',
    'certifications.qms.title': 'हमारी गुणवत्ता प्रबंधन प्रणाली',
    'certifications.qms.description': 'हमारी प्रक्रियाओं को एक मजबूत गुणवत्ता प्रबंधन प्रणाली (QMS) द्वारा शासित किया जाता है जो ISO 9001:2015 सिद्धांतों के साथ संरेखित होती है। इसमें कठोर निरीक्षण, निरंतर प्रक्रिया सुधार और व्यापक दस्तावेजीकरण सहायता शामिल है ताकि यह गारंटी दी जा सके कि हमारे उत्पाद ग्राहकों की अपेक्षाओं को पूरा करते हैं और उनसे अधिक हैं।',

    // Technology Page
    'technology.title': 'हमारी प्रौद्योगिकी',
    'technology.subtitle': 'हम अपनी प्रक्रियाओं में उन्नत उपकरणों और सॉफ्टवेयर को एकीकृत करते हैं।',
    'technology.solidworks.name': 'सॉलिडवर्क्स',
    'technology.solidworks.description': '3D मॉडलिंग और डिजाइन के लिए।',
    'technology.mastercam.name': 'मास्टरकैम',
    'technology.mastercam.description': 'प्रक्रिया स्वचालन के लिए।',
    'technology.faro.name': 'फेरो आर्म',
    'technology.faro.description': 'परिशुद्ध माप के लिए।',
    'technology.pmi.name': 'पीएमआई और मोबाइल स्पेक्ट्रो',
    'technology.pmi.description': 'सामग्री विश्लेषण के लिए।',
    'technology.hydro.name': 'हाइड्रो टेस्टिंग',
    'technology.hydro.description': 'अंतिम सत्यापन के लिए।',

    // Blog Page
    'blog.loading': 'ब्लॉग लोड हो रहा है...',
    'blog.error': 'ब्लॉग लोड करने में त्रुटि',
    'blog.title': 'ब्लॉग',
    'blog.companyName': 'दानेश इंडस्ट्रीज',
    'blog.comingSoon.title': 'उद्योग अंतर्दृष्टि जल्द आ रही है!',
    'blog.comingSoon.description': 'हम वर्तमान में मूल्यवान सामग्री तैयार कर रहे हैं, जिसमें उद्योग रुझान, उत्पाद अनुप्रयोग गाइड और वाल्व, फ्लैंज और फिटिंग्स पर तकनीकी लेख शामिल हैं। हमारे ब्लॉग को एक्सप्लोर करने के लिए कृपया बाद में वापस आएं।',
    'blog.returnHome': 'होम पर वापस जाएं',
    'blog.readMore': 'और पढ़ें',
    'blog.notFound': 'ब्लॉग नहीं मिला।',
    'blog.contentInHindi': 'यह सामग्री अभी हिन्दी में उपलब्ध नहीं है।',
    'blog.englishContent': 'यह सामग्री अंग्रेजी में है।',

    // Add more translations as needed
  },
};
