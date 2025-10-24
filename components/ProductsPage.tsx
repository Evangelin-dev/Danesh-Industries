import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from './SEO';
import { useLanguage } from '../contexts/LanguageContext';

import ContactPopup from './ContactPopup';


const PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const getProductDescription = (category: string) => {
                return `Leading manufacturer and supplier of ${category}, flanges, fittings, valves, and industrial components. Danesh Industries offers high-quality ${category.toLowerCase()} manufacturing in Chennai, India. We specialize in precision-engineered products meeting international standards. Contact us for ${category.toLowerCase()}, industrial valves, and fittings requirements.`;
            };

const getProductKeywords = (category: string) => {
    return `${category}, flanges, fittings, valves, Danesh Industries, flanges manufacturer in chennai, flanges manufacturer in india, ${category.toLowerCase()} manufacturer in chennai, ${category.toLowerCase()} manufacturer in india`;
};
// Data extracted from the user-provided document
const productData = [
    {
        id: 'valve-components',
        category: 'Valve Components',
        introduction: 'At Danesh Industries, we specialize in manufacturing high-quality valve components designed for precision, durability, and compatibility with industrial valve systems. Our components are engineered to meet global quality standards and are widely used in oil & gas, petrochemicals, water treatment, and process industries. We offer a variety of valve components, including Plug Valve Components and Stems for Ball Valves, manufactured with superior materials for long-lasting performance.',
        whyChoose: [
            'Manufactured with premium materials (SS316, Teflon, etc.)',
            'Designed to fit seamlessly into industrial-grade valves',
            'Customizable sizes and finishes based on project needs',
            'Proven reliability in oil & gas, petrochemicals, and industrial applications',
            'Backed by quality assurance and on-time delivery'
        ],
        faq: [
            { q: 'What are valve components?', a: 'Valve components are the individual parts that make up a valve, such as stems, plugs, and seals, designed for specific functions in controlling fluid flow.' },
            { q: 'What materials are used in valve components?', a: 'We use high-grade materials like SS316, Teflon, and other alloys to ensure durability and compatibility with various applications.' },
            { q: 'Where are valve components used?', a: 'They are used in oil & gas, petrochemicals, water treatment, and industrial processes where precise flow control is required.' },
            { q: 'Why choose Danesh Industries for valve components?', a: 'We offer customized solutions, premium materials, and strict quality control to meet global standards.' }
        ],
        items: [
            {
                name: 'Plug Valve Components',
                image: '/product_image/Plug_Valve_components.png',
                specifications: { 'Material': 'Teflon', 'Finishing': 'Machined', 'Packaging Type': 'Box', 'Size': '2 inch', 'Color': 'White' },
                additionalInfo: { 'Production Capacity': '500 Nos. per month', 'Delivery Time': '3 weeks', 'Packaging': 'As per customer requirement' },
                keyFeatures: ['Manufactured with premium-grade Teflon for chemical resistance', 'Precision machined for accurate sealing and smooth operation', 'High-volume production capability (500 pcs/month)', 'Packaged for safe handling and logistics']
            },
            {
                name: 'Stem for Ball Valve',
                image: '/product_image/Stem_for_ball_valve.png',
                specifications: { 'Material': 'Stainless Steel SS316', 'Size': '½ inch to 12 inches', 'Usage/Application': 'For use in Ball Valves', 'Head Shape': 'Circular', 'Packaging Type': 'As per customer requirement' },
                additionalInfo: { 'Delivery Time': '1 month' },
                keyFeatures: ['Made from SS316 for superior corrosion resistance and durability', 'Available in a wide size range (½" to 12") to suit different valve types', 'High strength and precision machining for reliable valve operation', 'Custom packaging available for client-specific needs']
            }
        ]
    },
    {
        id: 'flanges',
        category: 'Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply a wide range of industrial flanges designed for reliability, durability, and performance. Flanges are essential mechanical components that connect pipes, valves, pumps, and other equipment to ensure a leak-proof, secure, and strong joint. Our flanges are engineered to meet international standards (ASME, ASTM, DIN, EN, API, NORSOK, etc.), ensuring consistent quality across applications in oil & gas, petrochemicals, power, water treatment, HVAC, and process industries.',
        advantages: [
            'Precision engineered for accuracy and durability',
            'Compliance with global standards for assured reliability',
            'Excellent sealing capability ensuring leak-proof connections',
            'Versatile applications across multiple industries',
            'Cost-effective & durable for long-term operations'
        ],
        applications: [
            'Process & mechanical piping systems',
            'Structural support in piping layouts',
            'Underground & tank piping systems',
            'HVAC & ventilation systems',
            'Gas, water, and oil distribution networks',
            'Power & energy infrastructure'
        ],
        faq: [
            { q: 'What are flanges?', a: 'Flanges are rims, collars, or projecting edges used to connect pipes, valves, pumps, and other equipment in a piping system.' },
            { q: 'What materials do you use?', a: 'We manufacture flanges in carbon steel, stainless steel, duplex, super duplex, and exotic alloys like Monel, Incoloy, and Hastelloy.' },
            { q: 'Where are flanges commonly used?', a: 'They are widely used in oil & gas, petrochemicals, power plants, water treatment, HVAC systems, and industrial process plants.' },
            { q: 'Why choose Danesh Industries for flanges?', a: 'Because we deliver high-quality, precision machined flanges with on-time delivery, strict quality control, and global standard compliance.' }
        ],
        items: [
            {
                name: 'Slip-On Flanges',
                image: '/product_image/Slip-on_flanges.png',
                keyFeatures: ['Easy to install and align', 'Ideal for low-pressure applications', 'Commonly used in piping systems where quick assembly is required']
            },
            {
                name: 'Butt Weld Flanges',
                image: '/product_image/Butt_weld_flanges.png',
                keyFeatures: ['Strong, durable, and ideal for high-pressure and high-temperature applications', 'Provides structural reinforcement to piping systems']
            },
            {
                name: 'Socket Weld Flanges',
                image: '/product_image/Socket_weld_flanges.png',
                keyFeatures: ['Designed for small pipe diameters and high-pressure systems', 'Offers a strong weld connection with smooth flow inside the pipe']
            },
            {
                name: 'Threaded Flanges',
                image: '/product_image/Threaded_Flanges.png',
                keyFeatures: ['Attached without welding, making them ideal for maintenance and quick installation', 'Commonly used in low-pressure applications']
            },
            {
                name: 'Blind Flanges',
                image: '/product_image/Blind_Flanges.png',
                keyFeatures: ['Used to seal off piping systems or terminate pipelines', 'Suitable for inspection and testing of flow systems']
            },
            {
                name: 'Lap Joint Flanges',
                image: '/product_image/Lap_Joint_Flanges.png',
                keyFeatures: ['Designed for easy disassembly and maintenance', 'Commonly used in systems requiring frequent inspection or cleaning']
            }
        ]
    },
    {
        id: 'ms-flanges',
        category: 'MS Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Mild Steel (MS) Flanges, which play a crucial role in connecting and sealing piping systems across multiple industries. MS Flanges are widely used in oil & gas, power generation, water supply, industrial manufacturing, and process piping systems, offering durability, strength, and reliability.',
        keyFeatures: [
            'Manufactured with high-grade mild steel',
            'Strong weldability for secure, long-lasting joints',
            'Resistant to corrosion and leakage',
            'Available in multiple sizes and standards (ASME, ASTM, DIN, EN, etc.)',
            'Cost-effective and reliable solution for diverse applications'
        ],
        applications: [
            'Oil & Gas pipelines',
            'Power plants & energy systems',
            'Water transfer and treatment facilities',
            'Industrial process plants',
            'Plumbing & HVAC systems'
        ],
        whyChoose: [
            'With decades of expertise in flange manufacturing and precision machining, Danesh Industries ensures that every MS flange meets stringent quality and safety standards',
            'High performance under demanding conditions',
            'Long service life with minimal maintenance',
            'On-time delivery and global standard compliance'
        ],
        items: [
            {
                name: 'Socket Weld MS Flanges',
                image: '/product_image/Socket_Weld_MS_flanges.png',
                keyFeatures: ['Designed for smaller pipe sizes and lower pressure applications', 'Easy to weld and install, ensuring a smooth and secure seal', 'Widely used in plumbing, HVAC, and water distribution systems']
            },
            {
                name: 'Weld Neck MS Flanges',
                image: '/product_image/Weld_neck_MS_flanges.png',
                keyFeatures: ['Heavier duty flanges for high-pressure and high-temperature applications', 'Long tapered hub design ensures stress distribution and resistance to warping', 'Commonly used in oil refineries, petrochemicals, and power plants']
            }
        ]
    },
    {
        id: 'ss-304-flanges',
        category: 'SS 304 Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Stainless Steel 304 (SS 304) Flanges, one of the most widely used and versatile flange materials in the industry. SS 304 is an austenitic stainless steel grade containing approximately 18% chromium and 8% nickel, which gives it excellent durability, weldability, and corrosion resistance.',
       applications: [
            'Chemical processing plants',
            'Food & beverage industry (beer, wine, dairy equipment)',
            'Pharmaceuticals & medical equipment',
            'Heat exchangers & power plants',
            'Plumbing & piping systems',
            'Ships & marine manufacturing',
            'Water treatment facilities',
            'Valve components and pump systems'
        ],
       
      
        keyFeatures: [
            'Durability: SS 304 flanges are strong, long-lasting, and resistant to high stress, making them ideal for industrial environments',
            'Corrosion Resistance: The chromium and nickel composition offers superior resistance against rust, oxidation, and chemicals, even in wet or corrosive environments',
            'Versatility: SS 304 flanges have excellent weldability and machinability, allowing them to be fabricated into a wide range of sizes and shapes for different engineering applications',
            'Affordability: As one of the most commonly used stainless steel grades, SS 304 flanges provide cost-effective performance without compromising on quality'
        ],
        whyChoose: [
            'Precision engineered to meet ASME, ASTM, DIN, EN, and international standards',
            'Superior surface finish for leak-proof sealing',
            'Available in a wide range of types: Slip-On, Weld Neck, Socket Weld, Threaded, Blind, and Lap Joint',
            'Proven track record in critical industrial and commercial projects'
        ],
        faq: [
            { q: 'What is SS 304 stainless steel?', a: 'SS 304 is an austenitic stainless steel grade containing ~18% chromium and 8% nickel, offering excellent corrosion resistance, weldability, and strength.' },
            { q: 'Where can SS 304 flanges be used?', a: 'They are suitable for chemical plants, food industry, marine applications, heat exchangers, and water treatment systems.' },
            { q: 'Why choose SS 304 flanges over other grades?', a: 'Because they offer the best balance of strength, corrosion resistance, affordability, and versatility, making them the most widely used flange material globally.' }
        ],
        items: [
            {
                name: 'SS 304 Slip-On Flanges',
                image: '/product_image/SS_304_Slip-on_Flanges.png',
                keyFeatures: ['Durability', 'Corrosion Resistance', 'Versatility', 'Affordability']
            },
            {
                name: 'SS 304 Weld Neck Flanges',
                image: '/product_image/SS_304_Weld_Neck_Flanges.png',
                keyFeatures: ['High Strength & Durability', 'Excellent Sealing', 'Versatile Applications']
            }
        ]
    },
    {
        id: 'ms-spacer-flanges',
        category: 'MS Spacer Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Mild Steel (MS) Spacer Flanges, designed for use in high-pressure piping systems as filler components between two machined flanges or valves. These flanges ensure load distribution, dimensional stability, and leak-proof connections, making them an essential component in critical industrial applications.',
        keyFeatures: [
            'High Strength: Made from durable mild steel, our spacer flanges withstand high pressure and stress without compromising performance',
            'Corrosion Resistance: Specially treated to resist rust and wear, MS spacer flanges perform reliably even in corrosive industrial environments',
            'Cost-Effective: Economical, durable, and requiring minimal maintenance, these flanges provide long service life at reduced operational costs',
            'Dimensional Stability: Manufactured to precise tolerances, they ensure uniform alignment and installation with no need for rework',
            'Ease of Installation: Quick and simple to install, reducing downtime and labor costs'
        ],
        applications: [
            'Oil & Gas pipelines',
            'Petrochemical plants',
            'Power generation systems',
            'Water treatment & transfer facilities',
            'Industrial manufacturing & process piping'
        ],
        safetyGuidelines: [
            'Inspect flanges for cracks or defects before installation',
            'Ensure proper torque for all bolts and nuts',
            'Always use PPE (gloves, goggles, helmets) during installation',
            'Use appropriate tools for servicing',
            'Stop operations immediately and inspect if leakage is detected'
        ],
        whyChoose: [
            'Manufactured with precision engineering',
            'Compliance with ASME, ASTM, DIN, and international standards',
            'Wide range of sizes, designs, and custom configurations',
            'On-time delivery and reliable performance'
        ],
        items: [
            {
                name: 'Full-Face Spacer Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['With or without bolt holes']
            },
            {
                name: 'Blind Spacer Flanges',
                image: '/product_image/Blind_Spacer_Flanges.png',
                keyFeatures: ['With or without countersunk holes, recesses, or custom designs']
            },
             {

                name: 'Tunnel Spacer Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['For recessed valve installations']
            },
             {
                name: 'Raised Face Options',
                image: '/product_image/Raised_Face_Options.png',
                keyFeatures: ['Matching the mating flange face for proper sealing Thickness and dimensions can be customized based on application requirements.']
            }
        ]
    },
    {
        id: 'ss-316-flanges',
        category: 'SS 316 Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Stainless Steel 316 (SS 316) Flanges, designed for maximum durability and corrosion resistance in demanding industrial environments. SS 316 is an austenitic stainless steel grade containing molybdenum, chromium, and nickel, which enhances its ability to withstand high pressure, high temperature, and corrosive chemicals.',
        keyFeatures: [
            'Superior Corrosion Resistance – The molybdenum content provides enhanced resistance against chlorides, acids, and seawater environments.',
            'High Strength & Durability – Built to withstand high-pressure and high-temperature applications without deformation.',
            'Excellent Sealing – Designed for leak-proof joints, ensuring safe and efficient operations.',
            'Versatile Applications – Available in a wide variety of types, sizes, and pressure classes to meet diverse industry requirements.',
            'Heat Resistance – Performs reliably in elevated temperatures, making it suitable for chemical and power plants.'
        ],
        applications: [
            'Oil & Gas pipelines',
            'Chemical and petrochemical industries',
            'Water & wastewater treatment',
            'Marine and shipbuilding',
            'Heat exchangers and power generation',
            'Pharmaceutical and food-grade applications'
        ],
        installationConsiderations: [
            'Always pair SS 316 flanges with the correct gasket type to prevent galvanic corrosion when joining dissimilar metals.',
            'Select the right pressure class to ensure safe and reliable performance.',
            'Proper torqueing of bolts and use of quality fasteners ensures long-lasting sealing.'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Precision machining ensures a perfect fit and sealing',
            'Available in multiple pressure classes and face types (raised face, flat face)',
            'Proven reliability in corrosive and high-temperature environments',
            'Backed by on-time delivery and strict quality assurance'
        ],
        faq: [
            { q: 'What makes SS 316 different from SS 304?', a: 'SS 316 contains molybdenum, which improves resistance to chlorides, chemicals, and seawater — making it stronger against corrosion than SS 304.' },
            { q: 'Where are SS 316 flanges commonly used?', a: 'They are widely used in oil & gas, chemical plants, water treatment, marine environments, and high-pressure industrial systems.' },
            { q: 'Are SS 316 flanges suitable for marine applications?', a: 'Yes, due to their superior resistance to saltwater corrosion, SS 316 flanges are commonly used in shipbuilding and offshore platforms.' },
            { q: 'Can SS 316 flanges handle high temperatures?', a: 'Yes, they maintain strength and integrity at elevated temperatures, making them suitable for boilers, heat exchangers, and power plants.' }
        ],
        items: [
            {
                name: 'Slip-On Flanges',
                image: '/product_image/Slip-on_flanges.png',
                keyFeatures: ['Superior Corrosion Resistance', 'High Strength & Durability', 'Excellent Sealing', 'Versatile Applications', 'Heat Resistance']
            },
            {
                name: 'Weld Neck Flanges',
                image: '/product_image/Weld_Neck_Flanges.png',
                keyFeatures: ['Superior Corrosion Resistance', 'High Strength & Durability', 'Excellent Sealing', 'Versatile Applications', 'Heat Resistance']
            },
            {
                name: 'Lap Joint Flanges',
                image: '/product_image/Lap_Joint_Flanges.png',
                keyFeatures: ['Perfect for applications requiring frequent dismantling and inspection']
            },
            {
                name: 'Blind Flanges',
                image: '/product_image/Blind_Flanges.png',
                keyFeatures: ['Used to seal or terminate pipelines securely']
            },
            {
                name: 'Threaded Flanges',
                image: '/product_image/Threaded_Flanges.png',
                keyFeatures: ['No welding required, suitable for quick installation']
            },
            {
                name: 'Custom Configurations',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Square, oval, flat bore, or grooved end connections available upon request']
            }
        ]
    },
    {
        id: 'gi-slip-on-flanges',
        category: 'GI Slip-On Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Galvanized Iron (GI) Slip-On Flanges, designed for easy installation and secure pipe connections. These flanges are widely used across industries due to their strength, corrosion resistance, and versatility.',
        applications: [
            'Water supply and distribution systems',
            'Food & beverage industries',
            'Chemical & petrochemical pipelines',
            'Oil & gas infrastructure',
            'Fire protection systems (sprinklers, safety pipelines, alarms)'
        ],
        advantages: [
            'Secure & robust connection between pipes',
            'Easy installation – quick alignment and welding',
            'Corrosion-resistant due to galvanized iron coating',
            'Available in multiple sizes & materials',
            'Allows for adjustments in pipe size when needed'
        ],
        limitations: [
            'Requires periodic inspection and maintenance',
            'Performance may be affected by improper tightening during installation',
            'May involve additional labor for welding in high-pressure systems'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Precision machining ensures leak-free sealing',
            'Proven reliability across industrial and commercial sectors',
            'On-time delivery and customer-focused service'
        ],
        faq: [
            { q: 'What is a GI Slip-On Flange?', a: 'A GI Slip-On Flange is a galvanized iron flange that slips over the end of a pipe and is welded or bolted to create a secure seal.' },
            { q: 'Where are GI Slip-On Flanges used?', a: 'They are commonly used in water systems, fire safety systems, chemical plants, food processing, and oil & gas industries.' },
            { q: 'Why use GI instead of plain steel?', a: 'The galvanized coating provides enhanced resistance against corrosion, rust, and harsh environments, extending the service life of the flange.' }
        ],
        items: [
            {
                name: 'Weld Neck Flanges',
                image: '/product_image/Weld_Neck_Flanges.png',
                keyFeatures: ['Designed for high-pressure systems requiring strength and precision']
            },
            {
                name: 'Socket Weld Flanges',
                image: '/product_image/Socket_weld_flanges.png',
                keyFeatures: ['Ideal for small-diameter, high-pressure piping']
            },
            {
                name: 'Threaded Flanges',
                image: '/product_image/Threaded_Flanges.png',
                keyFeatures: ['For quick installation without welding']
            },
            {
                name: 'Blind Flanges',
                image: '/product_image/Blind_Flanges.png',
                keyFeatures: ['Used to seal off or terminate a pipeline']
            },
            {
                name: 'Forged Steel Flanges',
                image: '/product_image/Forged_Steel_Flange.png',
                keyFeatures: ['Machined from a single block of steel for maximum durability']
            }
        ]
    },
    {
        id: 'gi-threaded-flanges',
        category: 'GI Threaded Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Galvanized Iron (GI) Threaded Flanges, engineered to deliver secure, leak-proof connections in piping systems. These flanges are widely used in oil & gas, water supply, chemical processing, food & beverage, and industrial pipelines due to their strength, corrosion resistance, and ease of installation.',
        applications: [
            'Oil & gas pipelines',
            'Water supply and sewerage systems',
            'Automotive and industrial machinery',
            'Chemical & petrochemical plants',
            'Food and beverage processing units',
            'Fire protection systems'
        ],
        advantages: [
            'Excellent strength and durability – Withstand pressure and mechanical stress',
            'Corrosion resistant – Galvanized iron coating ensures longer service life',
            'Heat & chemical resistance – Suitable for demanding industrial conditions',
            'Easy installation – No welding required; ideal for quick setup and maintenance',
            'Versatile designs – Available in a wide range of sizes, thread types, and pressure classes'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Precision machining for a perfect fit and leak-proof seal',
            'Wide range of sizes, thread types, and pressure ratings available',
            'Proven performance in critical industrial sectors',
            'On-time delivery with strict quality assurance'
        ],
        selectionGuide: [
            'Application pressure & temperature (to select the right material and size)',
            'Thread type & end style (to match the piping system)',
            'Bore size and gasket requirements (to ensure a proper seal)',
            'Material grade (for compatibility with process fluids and environments)'
        ],
        faq: [
            { q: 'What is a GI Threaded Flange?', a: 'A GI Threaded Flange is a galvanized iron flange with internal threads that connects to pipes without welding.' },
            { q: 'Where are GI Threaded Flanges used?', a: 'They are used in oil & gas, water systems, chemical plants, food processing, and industrial pipelines.' },
            { q: 'What are the advantages of using GI over plain steel?', a: 'GI flanges offer enhanced corrosion resistance, ensuring a longer lifespan even in harsh environments.' },
            { q: 'Are GI Threaded Flanges suitable for high-pressure applications?', a: 'They are best suited for low to medium-pressure systems. For higher pressures, weld neck or socket weld flanges are recommended.' }
        ],
        items: [
            {
                name: 'GI Blind Flanges',
                image: '/product_image/GI_Blind_Flanges.png',
                additionalNote: 'Used to seal the end of a pipe system, providing safety and inspection points.',
            },
            {
                name: 'GI Threaded Flanges',
                image: '/product_image/GI_Threaded_Flanges.png',
                additionalNote: 'Used to connect pipes with external threads, ensuring a secure seal without welding. Both types are available in multiple sizes, thread types, and materials including mild steel, stainless steel, and copper alloys.'
            }
        ]
    },
    {
        id: 'pipe-fittings',
        category: 'Pipe Fittings',
        introduction: 'At Danesh Industries, we manufacture and supply a wide range of pipe fittings that form the backbone of modern piping systems. Fittings are essential for connecting pipes, changing direction, sealing joints, and controlling flow within pipelines. Our fittings are designed to meet ASME, ASTM, DIN, EN, and other global standards, ensuring reliability and performance across industries such as oil & gas, water treatment, petrochemicals, HVAC, food processing, and power generation.',
        applications: [
            'Oil & gas transmission lines',
            'Chemical & petrochemical plants',
            'Water supply & treatment systems',
            'Food & beverage processing',
            'HVAC & refrigeration systems',
            'Power plants & industrial piping networks'
        ],
        whyChoose: [
            'Manufactured from premium raw materials (steel, stainless steel, brass, plastic, aluminum)',
            'Compliance with global standards for safety and reliability',
            'Wide range of sizes, shapes, and pressure ratings',
            'Durable, corrosion-resistant, and leak-proof designs',
            'Customized fittings available for specialized industrial applications'
        ],
        faq: [
            { q: 'What are pipe fittings?', a: 'Pipe fittings are components used to connect, control, and seal pipes within a piping system.' },
            { q: 'Which industries use Danesh Industries fittings?', a: 'Our fittings are widely used in oil & gas, water treatment, chemical, food processing, HVAC, and power plants.' },
            { q: 'How do I select the right fitting?', a: 'The choice depends on application pressure, material compatibility, pipe size, and operating environment. Our engineers can assist in selecting the correct fitting.' },
            { q: 'Do you provide customized fittings?', a: 'Yes, we manufacture custom fittings based on client specifications for specialized projects.' }
        ],
        items: [
            {
                name: 'Barbed Fittings',
                image: '/product_image/Barbed_Fittings.png',
                keyFeatures: ['Best suited for low to medium-pressure applications', 'Easy to install by hand or with a wrench', 'Available in brass, steel, and plastic', 'Suitable for plastic tubing, flexible hoses, and reinforced rubber pipes', 'Tapered design with ridges ensures a tight, secure hold']
            },
            {
                name: 'Threaded Fittings',
                image: '/product_image/Threaded_Fittings.png',
                keyFeatures: ['Provide stronger sealing than barbed fittings', 'Designed with a threaded lip for secure connection and disconnection', 'Excellent resistance to water and gas leaks', 'Manufactured in steel, brass, and plastic', 'Common uses include pressure relief valves, check valves, and joint connections', 'Compatible with straight and angled pipes']
            },
            {
                name: 'Compression Fittings',
                image: '/product_image/Compression_Fittings.png',
                keyFeatures: ['Ideal for high-pressure applications', 'Made from brass, steel, aluminum, or plastic', 'Create a leak-proof seal using a ferrule or compression ring', 'Easy to install and highly reliable', 'Suitable for pipelines requiring durability, flexibility, and safety']
            }
        ]
    },
    {
        id: 'cast-steel-screwed-fittings',
        category: 'Cast Steel Screwed Fittings',
        introduction: 'At Danesh Industries, we manufacture and supply Cast Steel Screwed Fittings, designed to provide strong, corrosion-resistant, and leak-proof connections for a wide range of piping applications. These fittings eliminate the need for welding, making them easy to assemble, versatile, and cost-effective for industries across the globe.',
        keyFeatures: [
            'Durability – Built to withstand pressure fluctuations, temperature changes, and corrosion',
            'Ease of Assembly – Threaded connections allow for quick, precise, and leak-free installation',
            'Versatility – Compatible with different pipe materials and used across industries',
            'Corrosion Resistance – Designed for outdoor and industrial use where environmental conditions are harsh',
            'Precision Machined – Tapered threads ensure accurate fit and long-term reliability'
        ],
        applications: [
            'Water pipelines and distribution networks',
            'Gas and fuel pipelines',
            'Chemical and petrochemical plants',
            'Steam and compressed air lines',
            'Plumbing and HVAC systems',
            'High-temperature and industrial process applications'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Wide range of sizes, shapes, and configurations available',
            'Engineered for strength, leak-proof performance, and long service life',
            'Trusted supplier for oil & gas, water treatment, chemical, and industrial sectors',
            'On-time delivery and customer-centric support'
        ],
        faq: [
            { q: 'What are cast steel screwed fittings?', a: 'They are pipe fittings made from cast steel that use threaded or socket connections instead of welding, ensuring quick and reliable assembly.' },
            { q: 'Where are they used?', a: 'They are used in water, gas, chemical, steam, and industrial piping applications, where strong and durable connections are required.' },
            { q: 'What are the advantages of screwed fittings over welded fittings?', a: 'They are easier to install, require less labor, and allow for disassembly and maintenance, while still providing strength and corrosion resistance.' },
            { q: 'Are Danesh Industries screwed fittings customizable?', a: 'Yes, we provide custom sizes and configurations to meet client-specific requirements.' }
        ],
        items: [
            {
                name: 'Threaded Fittings',
                image: '/product_image/Threaded_Fittings.png',
                keyFeatures: ['Provide secure connections in water and fluid delivery systems']
            },
            {
                name: 'Socket Fittings',
                image: '/product_image/Socket_Fittings.png',
                keyFeatures: ['Strong and durable, suitable for industrial piping networks']
            },
            {
                name: 'Flanged Fittings',
                image: '/product_image/Flanged_Fittings.png',
                keyFeatures: ['Reliable sealing, widely used in gas pipelines and pressure systems']
            },
            {
                name: 'Bulkhead Union Fittings',
                image: '/product_image/Bulkhead_Union_Fittings.png',
                keyFeatures: ['Provide medium-pressure sealing, commonly used in plumbing and chemical applications']
            }
        ]
    },
    {
        id: 'ductile-iron-fittings',
        category: 'Ductile Iron Fittings',
        introduction: 'At Danesh Industries, we manufacture and supply Ductile Iron Fittings engineered for strength, durability, and versatility in industrial and commercial piping systems. With their high tensile strength and long service life, ductile iron fittings are trusted across industries including water supply, oil & gas, petrochemicals, power plants, marine, and automotive applications.',
        composition: {
            text: 'Ductile iron is made from spheroidal graphite cast iron, typically containing 2.5%–4.5% carbon, along with manganese, silicon, copper, and molybdenum. This composition provides:',
            points: ['High tensile strength', 'Resistance to cracking and warping', 'Superior performance in extreme environments']
        },
        advantages: [
            'Heat Resistant – Withstands temperatures up to 1000°F (538°C), making it ideal for extreme operating conditions',
            'Corrosion Resistant – Zinc phosphate coating ensures protection against moisture, salt water, and corrosive elements',
            'Versatility – Available in multiple designs including elbows, tees, reducers, couplers, and flanges, in sizes ranging from ½” to 6” or larger',
            'Strong & Durable – A cost-effective alternative to steel, resistant to cracking, bending, and warping',
            'Economical – Affordable and reliable solution for large-scale infrastructure and industrial projects'
        ],
        applications: [
            'Water distribution & sewer systems',
            'Oil & gas pipelines',
            'Chemical & petrochemical plants',
            'Automotive & machinery piping',
            'Power plants & process industries',
            'Marine and saltwater environments'
        ],
        safetyGuidelines: [
            'Regularly inspect for cracks, corrosion, or wear',
            'Ensure proper installation with correct torque and sealing methods',
            'Replace damaged or worn fittings as part of preventive maintenance',
            'Require minimal upkeep for long-lasting service'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Wide range of sizes, grades, and configurations available',
            'Built for extreme conditions, high strength, and reliability',
            'Proven performance in municipal, industrial, and commercial projects',
            'Backed by strict quality assurance and timely delivery'
        ],
        faq: [
            { q: 'What are ductile iron fittings?', a: 'They are pipe fittings made from spheroidal graphite cast iron, offering high strength, durability, and corrosion resistance.' },
            { q: 'Where are ductile iron fittings commonly used?', a: 'They are widely used in water supply, sewer systems, oil & gas, power plants, petrochemicals, marine, and automotive industries.' },
            { q: 'How long do ductile iron fittings last?', a: 'With proper installation and preventive maintenance, ductile iron fittings can last for decades in service.' },
            { q: 'Why choose ductile iron fittings over steel fittings?', a: 'They are more affordable, resistant to cracking and warping, highly corrosion-resistant, and suitable for long-term applications.' },
            { q: 'Do you offer customized ductile iron fittings?', a: 'Yes, at Danesh Industries we provide customized designs, sizes, and coatings to meet project-specific requirements.' }
        ],
        items: [
            {
                name: 'Elbows',
                image: '/product_image/Elbows.png',
                keyFeatures: ['Heat Resistant – Withstands temperatures up to 1000°F (538°C), making it ideal for extreme operating conditions', 'Corrosion Resistant – Zinc phosphate coating ensures protection against moisture, salt water, and corrosive elements', 'Versatility – Available in multiple designs including elbows, tees, reducers, couplers, and flanges, in sizes ranging from ½” to 6” or larger', 'Strong & Durable – A cost-effective alternative to steel, resistant to cracking, bending, and warping', 'Economical – Affordable and reliable solution for large-scale infrastructure and industrial projects']
            },
            {
                name: 'Tees',
                image: '/public/product_image/Tees_Fittings.png',
                keyFeatures: ['Heat Resistant – Withstands temperatures up to 1000°F (538°C), making it ideal for extreme operating conditions', 'Corrosion Resistant – Zinc phosphate coating ensures protection against moisture, salt water, and corrosive elements', 'Versatility – Available in multiple designs including elbows, tees, reducers, couplers, and flanges, in sizes ranging from ½” to 6” or larger', 'Strong & Durable – A cost-effective alternative to steel, resistant to cracking, bending, and warping', 'Economical – Affordable and reliable solution for large-scale infrastructure and industrial projects']
            }
        ]
    },
    {
        id: 'grooved-fittings',
        category: 'Grooved Fittings',
        introduction: 'At Danesh Industries, we supply Grooved Fittings, engineered for quick installation, flexibility, and enhanced safety in piping systems. These fittings are a preferred alternative to traditional flanged or threaded connections, delivering faster assembly, reliable sealing, and long-term durability. Grooved fittings are widely used in fire protection systems, HVAC, water distribution, industrial piping, and commercial applications, making them a versatile solution for modern infrastructure needs.',
        components: [
            {
                title: 'Body',
                points: ['The main structural element, typically made of cast or extruded steel/iron', 'Features grooved surfaces for secure connection with pipes and couplings', 'Designed with sealing rings for a strong, leak-free connection']
            },
            {
                title: 'Gasket',
                points: ['Provides a seal between the fitting body and pipe ends', 'Commonly made from neoprene, EPDM, or rubber', 'Offers vibration dampening and noise absorption', 'Available in single-piece or two-piece designs depending on the application']
            }
        ],
        advantages: [
            'Quick Installation – No welding or threading required; reduces labor and downtime',
            'Flexibility – Allows angular deflection and compensates for pipe misalignment',
            'Improved Safety – Releases pressure in emergencies, reducing system damage',
            'Vibration Control – Gaskets reduce vibration and noise in the system',
            'Reliable Sealing – Ensures long-term leak-proof performance in critical applications'
        ],
        limitations: [
            'Higher Initial Cost – More expensive than conventional fittings',
            'Maintenance Needs – Requires periodic inspection of gaskets and couplings',
            'Specialized Labor – Proper training and tools are essential for installation'
        ],
        applications: [
            'Fire protection systems (sprinklers, hydrants)',
            'HVAC & air conditioning networks',
            'Industrial piping systems',
            'Water distribution & treatment facilities',
            'Commercial building pipelines',
            'Marine & mining applications'
        ],
        whyChoose: [
            'Manufactured with premium-grade materials for strength and durability',
            'Fully compliant with ASME, ASTM, DIN, EN standards',
            'Available in a wide range of sizes, shapes, and pressure ratings',
            'Proven reliability in industrial, commercial, and safety-critical projects',
            'Backed by quality assurance, customer support, and timely delivery'
        ],
        faq: [
            { q: 'What are grooved fittings?', a: 'Grooved fittings are mechanical connectors that use a groove on the pipe end and a coupling with a gasket to create a strong, sealed joint.' },
            { q: 'Why are grooved fittings better than traditional flanges?', a: 'They allow faster installation, more flexibility, and enhanced safety, reducing both time and overall project costs.' },
            { q: 'Where are grooved fittings commonly used?', a: 'They are widely used in fire safety systems, HVAC, industrial pipelines, water treatment plants, and commercial building infrastructure.' },
            { q: 'Do grooved fittings require maintenance?', a: 'Yes. To maintain safe, leak-free performance, periodic inspection of gaskets and couplings is recommended.' },
            { q: 'Can grooved fittings handle high pressure?', a: 'Yes, when manufactured to international standards, grooved fittings can perform reliably in medium to high-pressure systems.' }
        ],
        items: [
            {
                name: 'Grooved Elbows',
                image: '/product_image/Grooved_Elbow_Fittings.png'
            },
            {
                name: 'Grooved Tees',
                image: '/product_image/Grooved_Tees_Fittings.png'
            }
        ]
    },
    {
        id: 'forged-steel-fittings',
        category: 'Forged Steel Fittings',
        introduction: 'At Danesh Industries, we manufacture and supply Forged Steel Fittings that provide strength, reliability, and long-term durability in high-pressure and high-temperature piping systems. Produced by forging carbon steel or stainless steel, these fittings are denser, stronger, and more resilient than standard cast fittings. Our forged fittings are trusted across industries such as oil & gas, petrochemicals, chemicals, mechanical fabrication, and power generation, where safety and performance are critical.',
        uses: [
            'Provide leak-proof connections in pressurized systems',
            'Withstand corrosive liquids, solvents, and high-temperature gases',
            'Ensure safety when transporting hazardous materials',
            'Ideal for pipe-to-flange connections, pressure vessels, and heavy-duty structures'
        ],
        advantages: [
            'High Strength – Forging increases density and the strength-to-weight ratio, preventing buckling under high pressure',
            'Corrosion Resistance – Resists rust, solvents, and chemicals, even in harsh conditions',
            'Extreme Durability – Withstands long-term wear and tear in critical applications',
            'Versatility – Available in multiple shapes, sizes, and thread types to suit diverse industries'
        ],
        types: [
            'Threaded Fittings – Cylindrical fasteners with internal/external threads for secure connections',
            'Socket Weld Fittings – For welded, high-pressure joints',
            'Elbow Fittings – Change the direction of flow',
            'Tee Fittings – Split or combine fluid flow',
            'Union Fittings – Join two pipes without disturbing structure or flow',
            'Collar Fittings – Provide secure connections for tubing and hoses'
        ],
        applications: [
            'Oil & Gas pipelines and offshore platforms',
            'Chemical and petrochemical industries',
            'Power plants and boiler systems',
            'Mechanical fabrication and heavy industrial projects',
            'High-pressure steam, air, and fluid distribution systems'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Precision-engineered for tight sealing and leak-proof performance',
            'Wide range of sizes, pressure ratings, and custom specifications',
            'Proven reliability in critical and hazardous environments',
            'Backed by strict quality control and on-time delivery'
        ],
        faq: [
            { q: 'What are forged steel fittings?', a: 'Forged steel fittings are piping components made by heating and shaping carbon or stainless steel, offering superior strength, density, and durability compared to cast fittings.' },
            { q: 'Why are forged fittings better than cast fittings?', a: 'Forged fittings are denser, stronger, and more resistant to stress and corrosion, making them ideal for high-pressure and corrosive applications.' },
            { q: 'Where are forged steel fittings used?', a: 'They are widely used in oil & gas pipelines, chemical plants, power systems, boilers, and heavy industrial structures.' },
            { q: 'What types of forged steel fittings does Danesh Industries supply?', a: 'We supply a full range including threaded, socket weld, elbows, tees, unions, and collars, available in various sizes, grades, and pressure classes.' },
            { q: 'Can forged steel fittings be customized?', a: 'Yes, we offer custom specifications and finishes based on customer and project requirements.' }
        ],
        items: [
            {
                name: 'Threaded Fittings',
                image: '/product_image/Threaded_Fittings.png'
            },
            {
                name: 'Socket Weld Fittings',
                image: '/product_image/Socket_Weld_Fittings.png'
            }
        ]
    },
    {
        id: 'gi-r-brand-fittings',
        category: 'GI R Brand Fittings',
        introduction: 'At Danesh Industries, we supply GI R Brand Fittings, trusted for their quality, durability, and versatility in plumbing and piping applications. Designed to meet domestic, commercial, and industrial requirements, GI R fittings are known for their strength, corrosion resistance, and ease of installation.',
        keyFeatures: [
            'High-Quality Construction – Made from durable galvanized iron, designed to last for years under tough conditions',
            'Wide Range of Options – Available in multiple sizes, shapes, and styles to suit different projects',
            'Easy Installation – Supplied with step-by-step guides and clear instructions for hassle-free setup',
            'Corrosion Resistance – Protective galvanization ensures resistance to rust, moisture, and wear',
            'Lifetime Reliability – Backed by industry-standard quality assurance and warranty support'
        ],
        applications: [
            'Plumbing and sanitary systems',
            'Water supply and drainage networks',
            'Wastewater management',
            'Industrial and commercial piping solutions',
            'Residential plumbing projects'
        ],
        whyChoose: [
            'Reliable supply of authentic GI R Brand fittings',
            'Products compliant with industry standards',
            'Competitive pricing with bulk availability',
            'Backed by after-sales support and warranty',
            'Trusted by contractors, builders, and industries nationwide'
        ],
        faq: [
            { q: 'What are GI R Brand Fittings?', a: 'They are high-quality galvanized iron fittings used in plumbing and piping systems for secure, leak-proof, and corrosion-resistant connections.' },
            { q: 'Where are GI R Brand Fittings used?', a: 'They are commonly used in residential, commercial, and industrial water supply and drainage systems.' },
            { q: 'Are GI R Fittings easy to install?', a: 'Yes, they are supplied with user-friendly installation guides for both professionals and DIY users.' },
            { q: 'What makes GI R Brand Fittings reliable?', a: 'They are manufactured using premium-grade galvanized iron, ensuring long service life, durability, and resistance to corrosion.' }
        ],
        items: [
            {
                name: 'GI R Tees',
                image: '/product_image/GI_R_Tees.png',
                keyFeatures: ['High-Quality Construction – Made from durable galvanized iron, designed to last for years under tough conditions', 'Wide Range of Options – Available in multiple sizes, shapes, and styles to suit different projects', 'Easy Installation – Supplied with step-by-step guides and clear instructions for hassle-free setup', 'Corrosion Resistance – Protective galvanization ensures resistance to rust, moisture, and wear', 'Lifetime Reliability – Backed by industry-standard quality assurance and warranty support']
            },
            {
                name: 'GI R Elbows',
                image: '/product_image/GI_R_Elbow.png',
                keyFeatures: ['High-Quality Construction – Made from durable galvanized iron, designed to last for years under tough conditions', 'Wide Range of Options – Available in multiple sizes, shapes, and styles to suit different projects', 'Easy Installation – Supplied with step-by-step guides and clear instructions for hassle-free setup', 'Corrosion Resistance – Protective galvanization ensures resistance to rust, moisture, and wear', 'Lifetime Reliability – Backed by industry-standard quality assurance and warranty support']
            }
        ]
    },
    {
        id: 'gi-fittings',
        category: 'GI Fittings',
        introduction: 'At Danesh Industries, we manufacture and supply a comprehensive range of Galvanized Iron (GI) Fittings, engineered for strength, durability, and corrosion resistance. Designed to meet the needs of residential, commercial, agricultural, and industrial piping systems, our GI fittings are trusted for long-lasting performance and cost-effectiveness.',
        
        advantages: [
            'Strength & Durability - Designed for heavy-duty and long-term use',
            'Corrosion Resistant - Zinc coating ensures protection from rust and moisture',
            'Cost-Effective - Affordable alternative to stainless steel fittings',
            'Easy Installation - Quick to assemble without requiring special tools or labor',
            'Low Maintenance - Reliable performance with minimal upkeep'
        ],
        applications: [
            'Plumbing & sanitary systems',
            'Water supply & distribution pipelines',
            'Heating systems & HVAC networks',
            'Chemical & industrial pipelines',
            'Household & commercial piping systems',
            'Agricultural & irrigation applications'
        ],
        whyChoose: [
            'Wide range of standard and customized GI fittings',
            'Manufactured to ASME, ASTM, DIN, EN, and international standards',
            'Suitable for domestic, commercial, and industrial use',
            'Backed by strict quality assurance and competitive pricing',
            'Bulk availability and on-time delivery for large projects'
        ],
        faq: [
            { q: 'What are GI fittings?', a: 'GI fittings are Galvanized Iron fittings, made from steel coated with zinc for corrosion resistance. They are used to connect, control, or terminate pipelines.' },
            { q: 'What are the advantages of using GI fittings?', a: 'They are durable, cost-effective, corrosion-resistant, and easy to install, making them ideal for long-term use in plumbing and industrial systems.' },
            { q: 'Where are GI fittings commonly used?', a: 'They are widely used in water supply systems, heating & cooling pipelines, chemical industries, household plumbing, and agricultural irrigation systems.' },
            { q: 'What types of GI fittings does Danesh Industries offer?', a: 'We offer a complete range including tees, elbows, couplings, nipples, bends, valves, reducers, plugs, caps, and flanges, available in multiple grades and finishes.' },
            { q: 'Can GI fittings be customized?', a: 'Yes, we provide custom sizes, finishes, and packaging options based on project-specific requirements.' }
        ],
        items: [
            {
                name: 'Tees',
                image: '/product_image/Tees_Fittings.png',
                keyFeatures: ['For branching pipelines']
            },
            {
                name: 'Elbows',
                image: '/product_image/Elbow_Fittings.png',
                keyFeatures: ['For changing direction of flow (available in hot-dip galvanized or electroplated, ERW B class and C class)']
            },
            {
                name: 'Couplings',
                image: '/product_image/Coupling_Fittings.png',
                keyFeatures: ['For securely connecting two pipes']
            },
            {
                name: 'Bends',
                image: '/product_image/Bends.png',
                keyFeatures: ['Long bend threaded fittings for smooth directional changes']
            },
            {
                name: 'Valves',
                image: '/product_image/Valves.png',
                keyFeatures: ['For controlling and regulating flow']
            },
            {
                name: 'Plugs & Caps',
                image: '/product_image/Plugs_and_Caps.png',
                keyFeatures: ['For closing pipe ends and outlets']
            },
            {
                name: 'Pipe Nipples',
                image: '/product_image/Pipe_Nipples.png',
                keyFeatures: ['Threaded nipples for direct pipe connections']
            },
            {
                name: 'Reducers',
                image: '/product_image/Reducers.png',
                keyFeatures: ['Concentric reducers in electroplated ERW finish']
            },
            {
                name: 'Flanges',
                image: '/product_image/Flanges.png',
                keyFeatures: ['For secure pipe-to-equipment connections']
            }
        ]
    },
    {
        id: 'ss-fittings',
        category: 'Stainless Steel (SS) Fittings',
        introduction: 'At Danesh Industries, we manufacture and supply Stainless Steel Fittings that are precision-engineered for high-pressure, high-temperature, and corrosive applications. Stainless steel’s superior strength and corrosion resistance make these fittings essential in industries such as oil & gas, petrochemicals, food & beverage processing, pharmaceuticals, water treatment, construction, and manufacturing.',
        advantages: [
            'Corrosion Resistance - Excellent resistance against rust, moisture, and harsh chemicals',
            'High Strength - Withstand operating pressures from 3000 psi to 15,000 psi',
            'Temperature Resistance - Perform reliably in extreme temperature ranges',
            'Versatility - Available in multiple sizes (0.25" to 4") and configurations',
            'Durability - Engineered for long-term reliability with minimal maintenance',
            'Hygienic & Safe - Ideal for food, beverage, and pharmaceutical industries where sanitation is critical'
        ],
        applications: [
            'Oil & Gas exploration and pipelines',
            'Chemical & petrochemical processing plants',
            'Food & beverage processing (dairy, brewery, winery)',
            'Pharmaceutical & medical industries',
            'Water treatment & desalination plants',
            'Construction & heavy engineering projects'
        ],
        whyChoose: [
            'Manufactured with premium stainless steel (SS 304, SS 316, and special alloys)',
            'Compliance with ASME, ASTM, DIN, EN, and international standards',
            'Quality tested for strength, sealing performance, and durability',
            'Wide range of sizes, pressure ratings, and custom specifications',
            'Trusted supplier for industrial, commercial, and hygienic applications'
        ],
        faq: [
            { q: 'What are SS fittings?', a: 'SS fittings are stainless steel pipe fittings used to connect, control, or seal pipelines in industries like oil & gas, chemical, food processing, and pharmaceuticals.' },
            { q: 'What are the benefits of SS fittings?', a: 'They offer corrosion resistance, durability, high-pressure strength, and excellent performance in extreme environments.' },
            { q: 'What sizes and ratings are available?', a: 'Danesh Industries SS fittings are available in 0.25" to 4" sizes with pressure ratings from 3000 psi up to 15,000 psi.' },
            { q: 'Why choose Danesh Industries SS fittings?', a: 'Because we provide precision-engineered, tested, and globally compliant SS fittings, trusted by industries worldwide.' }
        ],
        items: [
            {
                name: 'Male Fittings (Male Adapters)',
                image: '/product_image/Male_Fittings_(Male_Adapter).png',
                keyFeatures: ['Designed with external (male) threads for secure connections']
            },
            {
                name: 'Female Fittings (Female Adapters)',
                image: '/product_image/Female_Fittings_(Female_Adapter).png',
                keyFeatures: ['Designed with internal (female) threads to connect with male fittings']
            },
            {
                name: 'Adapters',
                image: '/product_image/Adapters.png',
                keyFeatures: ['Used to connect male and female threaded components']
            },
            {
                name: 'Flange Fittings',
                image: '/product_image/Flange_Fittings.png',
                keyFeatures: ['Provide strong, leak-proof connections between pipe ends']
            },
            {
                name: 'Elbows',
                image: '/product_image/Elbows.png',
                keyFeatures: ['Used to change flow direction in pipelines']
            },
            {
                name: 'Reducers',
                image: '/product_image/Reducers.png',
                keyFeatures: ['Connect pipes of different diameters']
            },
            {
                name: 'Couplers',
                image: '/product_image/Couplers.png',
                keyFeatures: ['Join two pipe sections securely']
            },
            {
                name: 'Unions',
                image: '/product_image/Unions.png',
                keyFeatures: ['Allow disconnection and reconnection without disturbing the pipeline']
            }
        ]
    },
    {
        id: 'pull-studs',
        category: 'Pull Studs',
        introduction: 'At Danesh Industries, we manufacture and supply Pull Studs (Pull Stud Pullers) designed for precision machining applications. These components are critical in CNC machines and tool holding systems, ensuring secure clamping, high accuracy, and reliable machining performance.',
        
        applications: [
            'CNC machining centers',
            'Milling machines',
            'Precision tool holding systems',
            'Automotive and aerospace component machining',
            'Heavy-duty industrial machining setups'
        ],
        whyChoose: [
            'Manufactured to strict dimensional tolerances for high accuracy',
            'Designed for reliability under high-load machining conditions',
            'Produced with quality raw materials to ensure durability',
            'On-time delivery with customized packaging',
            'Trusted by clients in engineering, automotive, and manufacturing sectors'
        ],
        items: [
            {
                name: 'Pull Studs',
                image: '/product_image/Pull_Studs.png',
                specifications: { 'Material': 'B7', 'Size': '8"', 'Finishing Type': 'Threaded', 'Packaging Type': 'Box' },
                additionalInfo: { 'Production Capacity': '500 Nos. per month', 'Delivery Time': '3 weeks', 'Packaging': 'As per customer requirement' },
                keyFeatures: ['High Strength - Manufactured using B7 grade steel, known for tensile strength and toughness', 'Precision Machined – Threaded finishing ensures accurate fit and secure clamping', 'Durable Performance – Built to withstand high spindle speeds and machining stresses', 'Bulk Production Capability – 500 pieces per month with consistent quality control', 'Custom Packaging – Ensures safe handling and delivery to clients']
            }
        ]
    },
    {
        id: 'plug-valves',
        category: 'Plug Valves',
        introduction: 'At Danesh Industries, we manufacture and supply Plug Valve Components and Assemblies that ensure reliable sealing, smooth operation, and durability in industrial valve systems. Our plug valves are engineered for use in oil & gas, petrochemicals, water treatment, and general industrial applications.',
        
        applications: [
            'Oil & gas pipelines',
            'Chemical and petrochemical plants',
            'Water supply and wastewater treatment systems',
            'Industrial fluid handling systems',
            'Process industries requiring tight shutoff and flow control'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN standards',
            'Precision-engineered for seamless integration with plug and ball valve assemblies',
            'Provides reliable sealing and extended service life',
            'Supported by timely delivery and customer-focused service'
        ],
        faq: [
            { q: 'What is a Plug Stem Assembly?', a: 'A Plug Stem Assembly is a key component in plug valves, designed to provide sealing and control flow in industrial pipelines.' },
            { q: 'What material is used in your Plug Stem Assemblies?', a: 'We manufacture them from high-grade aluminium, finished with protective coatings for durability.' },
            { q: 'What is the standard size available?', a: 'Our standard size is 1 inch, but we also provide custom sizes based on project requirements.' },
            { q: 'Where are these plug valve components used?', a: 'They are used in oil & gas, petrochemicals, water treatment, industrial fluid systems, and process industries.' },
            { q: 'What is the delivery lead time?', a: 'Our typical delivery time is 1 month, depending on order volume and customization.' }
        ],
        items: [
            {
                name: 'Plug Stem Assembly',
                image: '/product_image/Plug_Stem_Assembly.png',
                specifications: { 'Material': 'Aluminium', 'Size': '1 inch', 'Finishing': 'Coated', 'Thread Type': 'Circular', 'Color': 'Silver' },
                additionalInfo: { 'Delivery Time': '1 month' },
                keyFeatures: ['Durable Construction - Made from high-quality aluminium with a protective coating', 'Corrosion Resistance – Ensures long-lasting performance in harsh environments', 'Precision Engineering – Circular threading ensures accurate fit and leak-proof sealing', 'Lightweight & Strong – Strong aluminium body for durability with easy handling during installation', 'Custom Options – Available with tailored sizes, coatings, and finishes as per client requirements']
            }
        ]
    },
    {
        id: 'control-valves',
        category: 'Control Valves',
        introduction: 'At Danesh Industries, we supply Control Valve Components designed for precision, durability, and industrial performance. Our Quick Opening Cage is engineered to provide reliable flow control and is widely used in industrial valve systems, process industries, and mechanical applications.',
        
        applications: [
            'Industrial process plants',
            'Oil & gas valve systems',
            'Petrochemical and chemical industries',
            'Water treatment facilities',
            'Manufacturing & mechanical applications'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN international standards',
            'Precision-machined for accurate fit and performance',
            'Designed for long-term reliability in industrial use',
            'Supported by customization and on-time delivery'
        ],
        items: [
            {
                name: 'Quick Opening Cage',
                // image: '/product_image/Quick_Opening_Cage.png',
                specifications: { 'Machine Type': 'Booth Type', 'Usage/Application': 'Industrial', 'Material to Be Blasted': 'Mild Steel', 'Number of Doors': 'Single Door', 'Surface Finish': 'Polished', 'Automation Grade': 'Manual' },
                keyFeatures: ['Durable Construction - Manufactured from mild steel with polished surface finish', 'Reliable Performance - Designed for quick operation and efficient flow control', 'User-Friendly - Manual operation for ease of handling', 'Industrial Grade - Built to meet demanding industrial environments', 'Custom Options - Available with customer-specific design and size requirements']
            }
        ]
    },
    {
        id: 'mild-steel-pins',
        category: 'Mild Steel Pins',
        introduction: 'At Danesh Industries, we are a leading manufacturer of Mild Steel Pins, widely used in the automobile industry and industrial applications. Manufactured from high-grade mild steel and finished with precision, our pins are engineered for durability, strength, and reliability.',
        
        applications: [
            'Automotive components & assemblies',
            'Mechanical engineering & fabrication',
            'Heavy machinery & equipment',
            'Industrial and manufacturing processes'
        ],
        whyChoose: [
            'Manufactured to strict dimensional accuracy and quality standards',
            'Durable, cost-effective, and corrosion-resistant',
            'Available in both standard and customized specifications',
            'Backed by timely delivery and customer-focused service'
        ],
        faq: [
            { q: 'What are Mild Steel Pins used for?', a: 'They are widely used in automotive assemblies, machinery, and industrial applications for load-bearing and precision connections.' },
            { q: 'What finishing is provided?', a: 'Our pins are available with a chrome finish, which ensures corrosion resistance and durability.' },
            { q: 'Can you provide customized sizes?', a: 'Yes, we manufacture custom pins in different sizes, diameters, and finishes based on client requirements.' },
            { q: 'What is the delivery timeline?', a: 'Standard delivery is 3 weeks, with packaging provided as per customer requirements.' },
            { q: 'What industries commonly use these pins?', a: 'Industries such as automobile, mechanical fabrication, heavy machinery, and general manufacturing rely on our pins for precision and durability.' }
        ],
        items: [
            {
                name: 'Mild Steel Pin',
                image: '/product_image/Mild_Steel_Pins.png',
                specifications: { 'Material': 'Mild Steel', 'Finishing': 'Chrome Finish', 'Size': '1 inch', 'Diameter': '10 mm', 'Usage/Application': 'Automobiles Industry', 'Packaging Type': 'Packet' },
                additionalInfo: { 'Delivery Time': '3 weeks', 'Packaging': 'As per customer requirement' },
                keyFeatures: ['High Strength - Made from premium mild steel for maximum load-bearing capacity', 'Corrosion Resistant - Chrome finish ensures durability and extended service life', 'Precision Machined - Accurate dimensions for secure and reliable fitting', 'Customizable - Available in different sizes and finishes as per client requirements', 'Reliable Supply - Supported by bulk production and on-time delivery']
            }
        ]
    },
    {
        id: 'partition-plate-die',
        category: 'Partition Plate Die',
        introduction: 'At Danesh Industries, we are pioneers in manufacturing Partition Plate Dies, engineered with precision and durability to meet the needs of factory and industrial applications. Built using high-grade mild steel, our dies are designed for accuracy, reliability, and long service life.',
        // keyFeatures: [
        //     'Durable Build – Manufactured from premium mild steel for strength and longevity',
        //     'Precision Engineering – Round pattern ensures accuracy and repeatability in production',
        //     'Polished Finish – Smooth surface for enhanced performance and reduced wear',
        //     'Customizable Supply – Production and packaging tailored to client requirements',
        //     'Bulk Availability – Consistent supply with up to 50 units per month'
        // ],
        applications: [
            'Factory and industrial production setups',
            'Partition plate manufacturing',
            'Sheet metal forming',
            'Customized die-making for specific client projects'
        ],
        whyChoose: [
            'Proven expertise as pioneers in die manufacturing',
            'Strict quality control for accuracy and durability',
            'On-time delivery within 4 weeks',
            'Backed by customer-focused service and support'
        ],
        faq: [
            { q: 'What material is used in Partition Plate Dies?', a: 'Our dies are made from high-grade mild steel, ensuring strength and long service life.' },
            { q: 'What is the production capacity?', a: 'We manufacture up to 50 dies per month, with delivery available in 4 weeks.' },
            { q: 'Can the dies be customized?', a: 'Yes, we can tailor designs, sizes, and packaging to meet specific customer requirements.' },
            { q: 'What industries use Partition Plate Dies?', a: 'They are widely used in factories, sheet metal forming, and industrial partition manufacturing.' },
            { q: 'How are the dies packaged?', a: 'Packaging is provided as per customer requirements, ensuring safe transport and handling.' }
        ],
        items: [
            {
                name: 'Partition Plate Die',
                image: '/product_image/Partition_Plate_Die.png',
                specifications: { 'Material': 'Mild Steel', 'Pattern Type': 'Round', 'Usage/Application': 'Factory / Industrial use', 'Finishing': 'Polished' },
                additionalInfo: { 'Production Capacity (Per Unit)': '10', 'Monthly Production Capacity': '50 Nos.', 'Delivery Time': '4 weeks', 'Packaging': 'As per customer requirement' },
                keyFeatures: ['Durable Build - Manufactured from premium mild steel for strength and longevity', 'Precision Engineering - Round pattern ensures accuracy and repeatability in production', 'Polished Finish - Smooth surface for enhanced performance and reduced wear', 'Customizable Supply - Production and packaging tailored to client requirements', 'Bulk Availability – Consistent supply with up to 50 units per month']
            }
        ]
    },
    {
        id: 'ball-valve-seat-ring',
        category: 'Ball Valve Seat Ring',
        introduction: 'At Danesh Industries, we are a leading manufacturer of Ball Valve Seat Rings, designed for precision, durability, and reliability in industrial applications. Manufactured from high-grade mild steel, our seat rings ensure accurate sealing, smooth valve operation, and long service life.',
        // keyFeatures: [
        //     'Durable Build – Manufactured with premium mild steel for long-lasting performance',
        //     'Precision Machined – Ensures accurate fit and reliable valve sealing',
        //     'Corrosion Resistant – Silver finish offers added protection against wear and tear',
        //     'Custom Options – Available in different sizes, finishes, and specifications',
        //     'Reliable Supply – Production capacity of 100 units per month with on-time delivery'
        // ],
        applications: [
            'Oil & gas pipelines',
            'Chemical & petrochemical industries',
            'Power generation systems',
            'Water supply & wastewater treatment plants',
            'Industrial process piping systems'
        ],
        whyChoose: [
            'Designed to meet ASME, ASTM, DIN, EN, and international standards',
            'Manufactured with precision engineering for leak-proof sealing',
            'Trusted by clients across industrial and commercial sectors',
            'Supported by customization, quality assurance, and timely supply'
        ],
        faq: [
            { q: 'What is a Ball Valve Seat Ring?', a: 'It is a round sealing component inside a ball valve that ensures tight shutoff and smooth valve operation.' },
            { q: 'What material is used in your seat rings?', a: 'We manufacture them from high-quality mild steel, with a protective silver finish for added durability.' },
            { q: 'What is the standard size you offer?', a: 'Our standard offering is 4 inches, but we also provide custom sizes based on project needs.' },
            { q: 'What industries use ball valve seat rings?', a: 'They are widely used in oil & gas, chemicals, petrochemicals, power plants, water treatment, and general industrial piping systems.' },
            { q: 'What is the production capacity and lead time?', a: 'We produce up to 100 units per month, with a standard delivery time of 3 weeks.' }
        ],
        items: [
            {
                name: 'Ball Valve Seat Ring',
                image: '/product_image/Ball_Valve_Seat_Ring.png',
                specifications: { 'Size': '4"', 'Color': 'Silver', 'Material': 'Mild Steel', 'Shape': 'Round', 'Application': 'Industrial use' },
                additionalInfo: { 'Production Capacity': '100 Nos. per month', 'Delivery Time': '3 weeks', 'Packaging': 'As per customer requirement' },
                keyFeatures: ['Durable Build – Manufactured with premium mild steel for long-lasting performance', 'Precision Machined – Ensures accurate fit and reliable valve sealing', 'Corrosion Resistant – Silver finish offers added protection against wear and tear', 'Custom Options – Available in different sizes, finishes, and specifications', 'Reliable Supply – Production capacity of 100 units per month with on-time delivery']
            }
        ]
    },
    {
        id: 'solenoid-valves',
        category: 'Solenoid Valves',
        introduction: 'At Danesh Industries, we manufacture and supply Solenoid Valves, designed for precision control, durability, and efficiency in industrial piping and automation systems. These valves use electromagnetic operation to regulate the flow of liquids or gases, making them an essential component in automation, fluid control, and process industries. Our solenoid valves are engineered to meet international standards and deliver reliable, leak-proof performance even in demanding environments.',
        // keyFeatures: [
        //     'Precise Flow Control – Provides accurate regulation of fluids and gases',
        //     'Durable Build – Manufactured from premium-grade materials for long service life',
        //     'Automation-Ready – Compatible with industrial automation and process systems',
        //     'Leak-Proof Operation – Ensures reliability in critical applications',
        //     'Custom Options – Available in different sizes, voltages, and materials'
        // ],
        // 
        applications: [
            'Industrial automation & process control',
            'Oil & gas plants',
            'Chemical & petrochemical industries',
            'Water treatment & distribution systems',
            'Food & beverage processing',
            'Pharmaceutical & medical applications',
            'HVAC & refrigeration systems'
        ],
        whyChoose: [
            'Manufactured to ASME, ASTM, DIN, EN, and IEC standards',
            'Designed for precision, reliability, and durability',
            'Available in custom sizes and material grades',
            'Backed by timely delivery and quality assurance',
            'Trusted supplier to industrial and commercial sectors'
        ],
        faq: [
            { q: 'What is a solenoid valve?', a: 'A solenoid valve is an electromagnetically operated valve used to control the flow of liquids or gases in pipelines.' },
            { q: 'What industries use solenoid valves?', a: 'They are widely used in oil & gas, water treatment, chemical plants, pharmaceuticals, HVAC, and automation systems.' },
            { q: 'What materials are your solenoid valves made of?', a: 'We manufacture solenoid valves in stainless steel, brass, and mild steel, based on customer requirements.' },
            { q: 'Can solenoid valves be customized?', a: 'Yes, we offer custom sizes, voltage configurations, and material options as per project needs.' },
            { q: 'What is the typical delivery time?', a: 'Standard delivery is 3–4 weeks, depending on order volume and customization.' }
        ],
        items: [
            {
                name: 'Solenoid Valve',
                image: '/product_image/Solenoid_Valves.png',
                specifications: { 'Type': 'Electromagnetically operated valve', 'Material': 'High-grade stainless steel / brass / mild steel (options available)', 'Application': 'Industrial automation, fluid & gas control systems', 'Surface Finish': 'Polished / Coated (as per requirement)', 'Packaging': 'As per customer requirement' },
                additionalInfo: { 'Production Capacity': 'Bulk supply available', 'Delivery Time': '3–4 weeks', 'Packaging': 'Safe and customizable as per client needs' },
                keyFeatures: ['Precise Flow Control – Provides accurate regulation of fluids and gases', 'Durable Build – Manufactured from premium-grade materials for long service life', 'Automation-Ready – Compatible with industrial automation and process systems', 'Leak-Proof Operation – Ensures reliability in critical applications', 'Custom Options – Available in different sizes, voltages, and materials']
            }
        ]
    }
];

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onToggle: () => void }> = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="border-b hover:shadow-lg transition-shadow duration-300">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 hover:scale-105 transition-all duration-300 focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className="text-xl font-bold text-brand-blue hover:text-brand-blue transition-colors duration-300">{title}</h3>
                <svg className={`w-6 h-6 transform transition-all duration-300 ${isOpen ? 'rotate-180' : ''} hover:rotate-90`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-6 bg-white prose max-w-none hover:bg-gray-50 transition-colors duration-300">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ProductDetail: React.FC<{ item: any; categoryId: string; language: string; t: (key: string) => string }> = ({ item, categoryId, language, t }) => {
    const renderList = (items: string[]) => (
        <ul className="list-none pl-5 space-y-1">
            {items.map((text, index) => <li key={index} className="flex items-center"><span className="text-green-500 mr-2">✔</span>{text}</li>)}
        </ul>
    );

    const renderTable = (data: Record<string, string>) => (
        <table className="min-w-full">
            <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key} className="border-b">
                        <td className="py-2 font-semibold pr-4">{key}</td>
                        <td className="py-2">{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderFaq = (faqItems: { q: string, a: string }[], categoryId?: string) => (
        <div className="space-y-4">
            {faqItems.map((faq, index) => (
                <div key={index}>
                    {categoryId === 'partition-plate-die' && language === 'hi' ? (
                        <>
                            <p className="font-bold text-brand-blue">Q: {t(`products.partitionPlateDie.faq.q${index + 1}`)}</p>
                            <p className="text-brand-blue">A: {t(`products.partitionPlateDie.faq.a${index + 1}`)}</p>
                        </>
                    ) : (
                        <>
                            <p className="font-bold text-brand-blue">Q: {faq.q}</p>
                            <p className="text-brand-blue">A: {faq.a}</p>
                        </>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-4">
            {item.description && <p className="text-lg">{item.description}</p>}
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                    <h4 className="text-lg font-semibold mb-2 text-center text-orange-400">{item.name}</h4>
                    {item.image && (
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-48 h-48 object-contain rounded-lg shadow-lg"
                            loading="lazy"
                        />
                    )}
                </div>
                <div className="flex-1 space-y-4">
                    {item.keyFeatures && (
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h4 className="text-xl font-bold mb-3 text-brand-blue">
                                {categoryId === 'ss-304-flanges' && language === 'hi' ? t('products.ss304Flanges.keyFeatures.title') :
                                 categoryId === 'solenoid-valves' && language === 'hi' ? t('products.solenoidValves.keyFeatures.title') : 'Key Features'}
                            </h4>
                            {categoryId === 'ss-304-flanges' && language === 'hi' ? (
                                <ul className="list-none pl-5 space-y-1">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.ss304Flanges.keyFeatures.1')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.ss304Flanges.keyFeatures.2')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.ss304Flanges.keyFeatures.3')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.ss304Flanges.keyFeatures.4')}
                                    </li>
                                </ul>
                            ) : categoryId === 'solenoid-valves' && language === 'hi' ? (
                                <ul className="list-none pl-5 space-y-1">
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.solenoidValves.keyFeatures.1')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.solenoidValves.keyFeatures.2')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.solenoidValves.keyFeatures.3')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.solenoidValves.keyFeatures.4')}
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-green-500 mr-2">✔</span>
                                        {t('products.solenoidValves.keyFeatures.5')}
                                    </li>
                                </ul>
                            ) : (
                                renderList(item.keyFeatures)
                            )}
                        </div>
                    )}
                    {item.specifications && (
                        <div>
                            <h4 className="text-lg font-semibold mb-2">
                                {categoryId === 'solenoid-valves' && language === 'hi' ? 'विशेषताएं' : 'Specifications'}
                            </h4>
                            {categoryId === 'solenoid-valves' && language === 'hi' ? (
                                <table className="min-w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold pr-4">{t('products.solenoidValves.specifications.type')}</td>
                                            <td className="py-2">{t('products.solenoidValves.specifications.material')}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold pr-4">{t('products.solenoidValves.specifications.application')}</td>
                                            <td className="py-2">{t('products.solenoidValves.specifications.surfaceFinish')}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold pr-4">{'पैकेजिंग'}</td>
                                            <td className="py-2">{t('products.solenoidValves.specifications.packaging')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                renderTable(item.specifications)
                            )}
                        </div>
                    )}
                    {item.additionalInfo && (
                        <div>
                            <h4 className="text-lg font-semibold mb-2">
                                {categoryId === 'solenoid-valves' && language === 'hi' ? 'अतिरिक्त जानकारी' : 'Additional Information'}
                            </h4>
                            {categoryId === 'solenoid-valves' && language === 'hi' ? (
                                <table className="min-w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold pr-4">{'उत्पादन क्षमता'}</td>
                                            <td className="py-2">{t('products.solenoidValves.additionalInfo.productionCapacity')}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold pr-4">{'डिलीवरी समय'}</td>
                                            <td className="py-2">{t('products.solenoidValves.additionalInfo.deliveryTime')}</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2 font-semibold pr-4">{'पैकेजिंग'}</td>
                                            <td className="py-2">{t('products.solenoidValves.additionalInfo.packaging')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                renderTable(item.additionalInfo)
                            )}
                        </div>
                    )}
                    {item.additionalNote && <p className="text-lg text-white  italic">{item.additionalNote}</p>}
                    {item.advantages && (<div><h4 className="text-lg font-semibold mb-2">Advantages</h4>{renderList(item.advantages)}</div>)}
                    {item.applications && (<div><h4 className="text-lg font-semibold mb-2">Applications</h4>{renderList(item.applications)}</div>)}
                    {item.faq && (
                        <div>
                            <h4 className="text-lg font-semibold mb-2">
                                {categoryId === 'ss-304-flanges' && language === 'hi' ? 'सामान्य प्रश्न' : 'FAQs'}
                            </h4>
                            {categoryId === 'ss-304-flanges' && language === 'hi' ? (
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-brand-blue">Q: {t('products.ss304Flanges.faq.q1')}</p>
                                        <p className="text-brand-blue">A: {t('products.ss304Flanges.faq.a1')}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-blue">Q: {t('products.ss304Flanges.faq.q2')}</p>
                                        <p className="text-brand-blue">A: {t('products.ss304Flanges.faq.a2')}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-blue">Q: {t('products.ss304Flanges.faq.q3')}</p>
                                        <p className="text-brand-blue">A: {t('products.ss304Flanges.faq.a3')}</p>
                                    </div>
                                </div>
                            ) : (
                                renderFaq(item.faq, categoryId)
                            )}
                        </div>
                    )}
                    <div className="mt-6 text-center">
                        <a
                            href="/contact"
                            className="inline-block px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductsPage: React.FC = () => {
  const { t, language } = useLanguage();

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






    const { categoryId, productId } = useParams();
    const navigate = useNavigate();
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [selectedItem, setSelectedItem] = useState<Record<string, string>>({});
    const [selectedSection, setSelectedSection] = useState<Record<string, string>>({});
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        if (categoryId) {
            setSelectedCategory(categoryId);
        } else {
            setSelectedCategory('');
        }
    }, [categoryId]);

    useEffect(() => {
        if (categoryId && productId) {
            setSelectedItem(prev => ({ ...prev, [categoryId]: decodeURIComponent(productId) }));
        }
    }, [categoryId, productId]);
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleItemSelect = (categoryId: string, itemName: string) => {
        setSelectedItem(prev => ({ ...prev, [categoryId]: itemName }));
        navigate(`/products/${categoryId}/${encodeURIComponent(itemName)}`);
        // Scroll to the product details after a short delay
        setTimeout(() => {
            const element = document.getElementById(`product-${encodeURIComponent(itemName)}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    const handleSectionSelect = (categoryId: string, section: string) => {
        setSelectedSection(prev => ({ ...prev, [categoryId]: section }));
    };
    // Dynamic SEO
    const currentCategory = productData.find(cat => cat.id === selectedCategory);
    const currentProduct = currentCategory?.items.find(item => item.name === selectedItem[selectedCategory]);

    let seoTitle = "Our Products - Danesh Industries";
    let seoDescription = "Explore our comprehensive range of precision machined parts, flanges, fittings, valves, and industrial components manufactured to global standards.";
    let seoUrl = "/products";

    if (selectedCategory && currentCategory) {
        seoTitle = `${currentCategory.category} - Danesh Industries`;
        seoDescription = currentCategory.introduction;
        seoUrl = `/products/${selectedCategory}`;

        if (currentProduct) {
            seoTitle = `${currentProduct.name} - ${currentCategory.category} | Danesh Industries`;
            seoDescription = (currentProduct as any).keyFeatures ? (currentProduct as any).keyFeatures.join('. ') : (currentProduct as any).description || seoDescription;
            seoUrl = `/products/${selectedCategory}/${encodeURIComponent(currentProduct.name)}`;
        }
    }


    return (
        <>
            
            <SEO
                title={seoTitle}
                description={getProductDescription(currentCategory?.category || 'Industrial Components')}
                keywords={getProductKeywords(selectedCategory)}
                url={seoUrl}
            />
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes products-slideshow {
                        0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=4000&auto=format&fit=crop'); }
                        20% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=4000&auto=format&fit=crop'); }
                        40% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=4000&auto=format&fit=crop'); }
                        60% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=4000&auto=format&fit=crop'); }
                        80% { background-image: url('https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=4000&auto=format&fit=crop'); }
                        100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=4000&auto=format&fit=crop'); }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.6s ease-out forwards;
                        opacity: 0;
                    }
                    .gradient-text {
                        background: linear-gradient(45deg, #0067C5, #FFC400, #1A202C);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    .gradient-text-alt {
                        background: linear-gradient(45deg, #FFC400, #0067C5);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    .gradient-text-flanges {
                        background: linear-gradient(45deg, #0067C5, #FFC400, #1A202C);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }
                    select option {
                        background-color: grey;
                        color: white;
                    }
                    select option:hover {
                        background-color: #e3b37f;
                    }
                `
            }} />
            <div className="bg-brand-dark py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(/techno2.jpg)' }}>
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="container mx-auto px-2 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl lg:text-5xl font-extrabold gradient-text">{t('products.title')}</h1>
                        <p className="mt-4 text-lg text-white  max-w-3xl mx-auto">
                            {t('products.subtitle')}
                        </p>
                    </div>

                    <div className="sticky top-15 bg-brand-light z-40 mb-2 border-b-1 border-brand-yellow w-fit">
                    <div>
                    {/* <div className="flex justify-start items-center space-x-4 md:space-x-8 overflow-x-auto pl-2"> */}
                        {/* <h3 className="hidden md:block font-bold text-white flex-shrink-0">Navigate to:</h3> */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => {
                                const value = e.target.value;
                                setSelectedCategory(value);
                                if (value) {
                                    navigate(`/products/${value}`);
                                } else {
                                    navigate('/products');
                                }
                            }}
                            className="p-1 border border-gray-300 rounded-md
                            focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            style={{ backgroundColor: '#FFC400', position: 'fixed', top: '310px', left: '50px' }}


                        >
                            <option value="">{t('products.selectCategory')}</option>
                            <option value="valve-components">{t('products.categories.valveComponents')}</option>
                            <option value="flanges">{t('products.categories.flanges')}</option>
                            <option value="ms-flanges">{t('products.categories.msFlanges')}</option>
                            <option value="ss-304-flanges">{t('products.categories.ss304Flanges')}</option>
                            <option value="ms-spacer-flanges">{t('products.categories.msSpacerFlanges')}</option>
                            <option value="ss-316-flanges">{t('products.categories.ss316Flanges')}</option>
                            <option value="gi-slip-on-flanges">{t('products.categories.giSlipOnFlanges')}</option>
                            <option value="gi-threaded-flanges">{t('products.categories.giThreadedFlanges')}</option>
                            <option value="pipe-fittings">{t('products.categories.pipeFittings')}</option>
                            <option value="cast-steel-screwed-fittings">{t('products.categories.castSteelFittings')}</option>
                            <option value="ductile-iron-fittings">{t('products.categories.ductileIronFittings')}</option>
                            <option value="grooved-fittings">{t('products.categories.groovedFittings')}</option>
                            <option value="forged-steel-fittings">{t('products.categories.forgedSteelFittings')}</option>
                            <option value="gi-r-brand-fittings">{t('products.categories.giRBrandFittings')}</option>
                            <option value="gi-fittings">{t('products.categories.giFittings')}</option>
                            <option value="ss-fittings">{t('products.categories.ssFittings')}</option>
                            <option value="pull-studs">{t('products.categories.pullStuds')}</option>
                            <option value="plug-valves">{t('products.categories.plugValves')}</option>
                            <option value="control-valves">{t('products.categories.controlValves')}</option>
                            <option value="mild-steel-pins">{t('products.categories.mildSteelPins')}</option>
                            <option value="partition-plate-die">{t('products.categories.partitionPlateDie')}</option>
                            <option value="ball-valve-seat-ring">{t('products.categories.ballValveSeatRing')}</option>
                            <option value="solenoid-valves">{t('products.categories.solenoidValves')}</option>
                        </select>
                    </div>
                </div>

                    {productData.filter(cat => selectedCategory ? selectedCategory === cat.id : cat.id === 'valve-components').map((categoryData, catIndex) => (
                        <section key={categoryData.id} id={categoryData.id} className="mb-20 scroll-mt-32 animate-fade-in" style={{ animationDelay: `${0.5 + catIndex * 0.2}s` }}>
                            <div className="mb-8">
                                <div className="flex justify-between items-center">
                                    <h2 className={`text-3xl lg:text-4xl font-bold border-l-4 border-brand-yellow pl-4 mb-4 ${categoryData.id === 'flanges' || categoryData.id === 'valve-components' || categoryData.id === 'ms-flanges' || categoryData.id === 'ss-304-flanges' || categoryData.id === 'gi-r-brand-fittings' || categoryData.id === 'gi-fittings' || categoryData.id === 'ss-fittings' || categoryData.id === 'pull-studs' || categoryData.id === 'plug-valves' || categoryData.id === 'control-valves' || categoryData.id === 'mild-steel-pins' || categoryData.id === 'partition-plate-die' || categoryData.id === 'ball-valve-seat-ring' || categoryData.id === 'solenoid-valves' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'pipe-fittings' || categoryData.id === 'gi-slip-on-flanges' || categoryData.id === 'ss-316-flanges' || categoryData.id === 'ms-spacer-flanges' ? 'text-orange-500' : 'text-brand-blue'}`}>
                                        {categoryData.category}</h2>
                                    <select
                                        value={selectedItem[categoryData.id] || ''}
                                        onChange={(e) => handleItemSelect(categoryData.id, e.target.value)}
                                        className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                        style={{ backgroundColor: '#FFC400'
                                       , position: 'fixed', top: '20px', right: '10px' }}

                    >
                                        <option value="">{t('products.selectItem')}</option>
                                        {categoryData.items.map((item, index) => (
                                            <option key={index} value={item.name}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <p className="text-lg text-gray-800">
                                        {categoryData.id === 'valve-components' && language === 'hi'
                                            ? t('products.valveComponents.introduction')
                                            : categoryData.id === 'flanges' && language === 'hi'
                                            ? t('products.flanges.introduction')
                                            : categoryData.id === 'ms-flanges' && language === 'hi'
                                            ? t('products.msFlanges.introduction')
                                            : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                            ? t('products.ss304Flanges.introduction')
                                            : categoryData.id === 'ms-spacer-flanges' && language === 'hi'
                                            ? t('products.msSpacerFlanges.introduction')
                                            : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                            ? t('products.ss316Flanges.introduction')
                                            : categoryData.id === 'gi-slip-on-flanges' && language === 'hi'
                                            ? t('products.giSlipOnFlanges.introduction')
                                            : categoryData.id === 'gi-threaded-flanges' && language === 'hi'
                                            ? t('products.giThreadedFlanges.introduction')
                                            : categoryData.id === 'pipe-fittings' && language === 'hi'
                                            ? t('products.pipeFittings.introduction')
                                            : categoryData.id === 'cast-steel-screwed-fittings' && language === 'hi'
                                            ? t('products.castSteelScrewedFittings.introduction')
                                            : categoryData.id === 'grooved-fittings' && language === 'hi'
                                            ? t('products.groovedFittings.introduction')
                                            : categoryData.id === 'solenoid-valves' && language === 'hi'
                                            ? t('products.solenoidValves.introduction')
                                            : categoryData.id === 'forged-steel-fittings' && language === 'hi'
                                            ? t('products.forgedSteelFittings.introduction')
                                            : categoryData.id === 'gi-r-brand-fittings' && language === 'hi'
                                            ? t('products.giRBrandFittings.introduction')
                                            : categoryData.id === 'gi-fittings' && language === 'hi'
                                            ? t('products.giFittings.introduction')
                                            : categoryData.id === 'ss-fittings' && language === 'hi'
                                            ? t('products.ssFittings.introduction')
                                            : categoryData.id === 'pull-studs' && language === 'hi'
                                            ? t('products.pullStuds.introduction')
                                            : categoryData.id === 'plug-valves' && language === 'hi'
                                            ? t('products.plugValves.introduction')
                                            : categoryData.id === 'control-valves' && language === 'hi'
                                            ? t('products.controlValves.introduction')
                                            : categoryData.id === 'mild-steel-pins' && language === 'hi'
                                            ? t('products.mildSteelPins.introduction')
                                            : categoryData.id === 'partition-plate-die' && language === 'hi'
                                            ? t('products.partitionPlateDie.introduction')
                                            : categoryData.id === 'ball-valve-seat-ring' && language === 'hi'
                                            ? t('products.ballValveSeatRing.introduction')
                                            : categoryData.introduction}
                                    </p>
                                </div>
                                {selectedItem[categoryData.id] && (
                                    <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
                                        <ProductDetail item={categoryData.items.find(item => item.name === selectedItem[categoryData.id])} categoryId={categoryData.id} language={language} t={t} />
                                    </div>
                                )}
                                {/* {categoryData.applications && (
                                    <div className="mt-6">
                                        {categoryData.id === 'control-valves' || categoryData.id === 'mild-steel-pins' || categoryData.id === 'partition-plate-die' || categoryData.id === 'ball-valve-seat-ring' || categoryData.id === 'solenoid-valves' || categoryData.id === 'gi-r-brand-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'pipe-fittings' || categoryData.id === 'ss-316-flanges' || categoryData.id === 'ms-spacer-flanges' || categoryData.id === 'ss-304-flanges' || categoryData.id === 'plug-valves' || categoryData.id === 'pull-studs' || categoryData.id === 'ss-fittings' || categoryData.id === 'gi-fittings' || categoryData.id === 'forged-steel-fittings' || categoryData.id === 'gi-slip-on-flanges' || categoryData.id === 'gi-threaded-flanges' ? (
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1">
                                                    <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'flanges' || categoryData.id === 'ms-flanges' ? 'text-orange-500' : 'text-amber-600'}`}>
                                                        {categoryData.id === 'flanges' && language === 'hi'
                                                            ? t('products.flanges.applications.title')
                                                            : categoryData.id === 'ms-flanges' && language === 'hi'
                                                            ? t('products.msFlanges.applications.title')
                                                            : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                            ? t('products.ss304Flanges.applications.title')
                                                            : `Applications of Danesh Industries ${categoryData.category}`}
                                                    </h3>
                                                    <ul className="list-none space-y-2 text-lg text-white">
                                                        {categoryData.id === 'flanges' && language === 'hi'
                                                            ? [
                                                                t('products.flanges.applications.1'),
                                                                t('products.flanges.applications.2'),
                                                                t('products.flanges.applications.3'),
                                                                t('products.flanges.applications.4'),
                                                                t('products.flanges.applications.5'),
                                                                t('products.flanges.applications.6')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.applications.map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{t(app)}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.ss316Flanges.applications.1'),
                                                                t('products.ss316Flanges.applications.2'),
                                                                t('products.ss316Flanges.applications.3'),
                                                                t('products.ss316Flanges.applications.4'),
                                                                t('products.ss316Flanges.applications.5'),
                                                                t('products.ss316Flanges.applications.6')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-slip-on-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.giSlipOnFlanges.applications.1'),
                                                                t('products.giSlipOnFlanges.applications.2'),
                                                                t('products.giSlipOnFlanges.applications.3'),
                                                                t('products.giSlipOnFlanges.applications.4'),
                                                                t('products.giSlipOnFlanges.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-threaded-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.giThreadedFlanges.applications.1'),
                                                                t('products.giThreadedFlanges.applications.2'),
                                                                t('products.giThreadedFlanges.applications.3'),
                                                                t('products.giThreadedFlanges.applications.4'),
                                                                t('products.giThreadedFlanges.applications.5'),
                                                                t('products.giThreadedFlanges.applications.6')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'cast-steel-screwed-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.castSteelScrewedFittings.applications.1'),
                                                                t('products.castSteelScrewedFittings.applications.2'),
                                                                t('products.castSteelScrewedFittings.applications.3'),
                                                                t('products.castSteelScrewedFittings.applications.4'),
                                                                t('products.castSteelScrewedFittings.applications.5'),
                                                                t('products.castSteelScrewedFittings.applications.6')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.ductileIronFittings.applications.1'),
                                                                t('products.ductileIronFittings.applications.2'),
                                                                t('products.ductileIronFittings.applications.3'),
                                                                t('products.ductileIronFittings.applications.4'),
                                                                t('products.ductileIronFittings.applications.5'),
                                                                t('products.ductileIronFittings.applications.6')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.applications.map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{t(app)}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={categoryData.id === 'control-valves' ? "/product_image/Control_Valves.png" : categoryData.id === 'mild-steel-pins' ? "/product_image/Mild_Steel_Pins.png" : categoryData.id === 'partition-plate-die' ? "/product_image/Partition_Plate_Die.png" : categoryData.id === 'ball-valve-seat-ring' ? "/product_image/Ball_Valve_Seat_Ring.png" : categoryData.id === 'solenoid-valves' ? "/product_image/Solenoid_Valves.png" : categoryData.id === 'gi-r-brand-fittings' ? "/product_image/GI_R_Brand_Fittings.png" : categoryData.id === 'ductile-iron-fittings' ? "/product_image/Ductile_Iron_Fittings.png" : categoryData.id === 'cast-steel-screwed-fittings' ? "/product_image/Cast_Steel_Screw_Fittings.png" : categoryData.id === 'pipe-fittings' ? "/product_image/Pipe_Fittings.png" : categoryData.id === 'ss-316-flanges' ? "/product_image/SS_316_Flanges.png" : categoryData.id === 'ms-spacer-flanges' ? "/product_image/MS_Flanges.png" : categoryData.id === 'ss-304-flanges' ? "/product_image/SS_304_Flanges.png" : categoryData.id === 'plug-valves' ? "/product_image/Plug_Valves.png" : categoryData.id === 'pull-studs' ? "/product_image/Pull_Studs.png" : categoryData.id === 'ss-fittings' ? "/product_image/Stainless_Steel_(SS)_Fittings.png" : categoryData.id === 'gi-fittings' ? "/product_image/GI_Fittings.png" : categoryData.id === 'grooved-fittings' ? "/Grooved_Fitttings.png" : "/product_image/Forged_Steel_Fittings.png"}
                                                        alt={categoryData.category}
                                                        className={categoryData.id === 'gi-r-brand-fittings' ? "w-40 h-40 object-contain rounded-lg shadow-lg" : "w-48 h-48 object-contain rounded-lg shadow-lg"}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'flanges' ? 'text-orange-500' : 'text-amber-600'}`}>Applications of Danesh Industries {categoryData.category}</h3>
                                                <ul className="list-none space-y-2 text-lg text-white">
                                                    {categoryData.id === 'ms-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.msFlanges.applications.1'),
                                                            t('products.msFlanges.applications.2'),
                                                            t('products.msFlanges.applications.3'),
                                                            t('products.msFlanges.applications.4'),
                                                            t('products.msFlanges.applications.5')
                                                        ].map((app, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">●</span>{app}
                                                            </li>
                                                        ))
                                                        : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.ss304Flanges.applications.1'),
                                                            t('products.ss304Flanges.applications.2'),
                                                            t('products.ss304Flanges.applications.3'),
                                                            t('products.ss304Flanges.applications.4'),
                                                            t('products.ss304Flanges.applications.5'),
                                                            t('products.ss304Flanges.applications.6'),
                                                            t('products.ss304Flanges.applications.7'),
                                                            t('products.ss304Flanges.applications.8')
                                                        ].map((app, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">●</span>{app}
                                                            </li>
                                                        ))
                                                        : categoryData.applications.map((app, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">●</span>{t(app)}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        )}
                                    </div> */}
                                {/* )} */}
                                {categoryData.applications && (
                                    <div className="mt-6">
                                        {categoryData.id === 'control-valves' || categoryData.id === 'mild-steel-pins' || categoryData.id === 'partition-plate-die' || categoryData.id === 'ball-valve-seat-ring' || categoryData.id === 'solenoid-valves' || categoryData.id === 'gi-r-brand-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'pipe-fittings' || categoryData.id === 'ss-316-flanges' || categoryData.id === 'ms-spacer-flanges' || categoryData.id === 'ss-304-flanges' || categoryData.id === 'plug-valves' || categoryData.id === 'pull-studs' || categoryData.id === 'ss-fittings' || categoryData.id === 'gi-fittings' || categoryData.id === 'forged-steel-fittings' || categoryData.id === 'grooved-fittings' || categoryData.id === 'flanges' || categoryData.id === 'ms-flanges' || categoryData.id === 'ss-304-flanges' ? (
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1">
                                                    <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'flanges' || categoryData.id === 'ms-flanges' ? 'text-orange-500' : 'text-amber-600'}`}>
                                                        {categoryData.id === 'flanges' && language === 'hi'
                                                            ? t('products.flanges.applications.title')
                                                            : categoryData.id === 'ms-flanges' && language === 'hi'
                                                            ? t('products.msFlanges.applications.title')
                                                            : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                            ? t('products.ss316Flanges.applications.title')
                                                            : categoryData.id === 'pipe-fittings' && language === 'hi'
                                                            ? t('products.pipeFittings.applications.title')
                                                            : categoryData.id === 'solenoid-valves' && language === 'hi'
                                                            ? t('products.solenoidValves.applications.title')
                                                            : `Applications of Danesh Industries ${categoryData.category}`}
                                                    </h3>
                                                    <ul className="list-none space-y-2 text-lg text-white">
                                                        {categoryData.id === 'ms-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.msFlanges.applications.1'),
                                                                t('products.msFlanges.applications.2'),
                                                                t('products.msFlanges.applications.3'),
                                                                t('products.msFlanges.applications.4'),
                                                                t('products.msFlanges.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.ss304Flanges.applications.1'),
                                                                t('products.ss304Flanges.applications.2'),
                                                                t('products.ss304Flanges.applications.3'),
                                                                t('products.ss304Flanges.applications.4'),
                                                                t('products.ss304Flanges.applications.5'),
                                                                t('products.ss304Flanges.applications.6'),
                                                                t('products.ss304Flanges.applications.7'),
                                                                t('products.ss304Flanges.applications.8')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'solenoid-valves' && language === 'hi'
                                                            ? [
                                                                t('products.solenoidValves.applications.1'),
                                                                t('products.solenoidValves.applications.2'),
                                                                t('products.solenoidValves.applications.3'),
                                                                t('products.solenoidValves.applications.4'),
                                                                t('products.solenoidValves.applications.5'),
                                                                t('products.solenoidValves.applications.6'),
                                                                t('products.solenoidValves.applications.7')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'forged-steel-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.forgedSteelFittings.applications.1'),
                                                                t('products.forgedSteelFittings.applications.2'),
                                                                t('products.forgedSteelFittings.applications.3'),
                                                                t('products.forgedSteelFittings.applications.4'),
                                                                t('products.forgedSteelFittings.applications.5'),
                                                                t('products.forgedSteelFittings.applications.6')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-r-brand-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.giRBrandFittings.applications.1'),
                                                                t('products.giRBrandFittings.applications.2'),
                                                                t('products.giRBrandFittings.applications.3'),
                                                                t('products.giRBrandFittings.applications.4'),
                                                                t('products.giRBrandFittings.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-fittings' && language === 'hi'
                                                            ? [
                                                                'प्लंबिंग और सैनिटरी सिस्टम',
                                                                'जल आपूर्ति और वितरण पाइपलाइन',
                                                                'हीटिंग सिस्टम और HVAC नेटवर्क',
                                                                'रासायनिक और औद्योगिक पाइपलाइन',
                                                                'घरेलू और वाणिज्यिक पाइपिंग सिस्टम',
                                                                'कृषि और सिंचाई अनुप्रयोग'
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-fittings' && language === 'hi'
                                                            ? [
                                                                'तेल और गैस अन्वेषण और पाइपलाइन',
                                                                'रासायनिक और पेट्रोकेमिकल प्रसंस्करण संयंत्र',
                                                                'खाद्य और पेय प्रसंस्करण (डेयरी, ब्रुअरी, वाइनरी)',
                                                                'फार्मास्युटिकल और चिकित्सा उद्योग',
                                                                'जल उपचार और विलवणीकरण संयंत्र',
                                                                'निर्माण और भारी इंजीनियरिंग परियोजनाएं'
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'pull-studs' && language === 'hi'
                                                            ? [
                                                                t('products.pullStuds.applications.1'),
                                                                t('products.pullStuds.applications.2'),
                                                                t('products.pullStuds.applications.3'),
                                                                t('products.pullStuds.applications.4'),
                                                                t('products.pullStuds.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'plug-valves' && language === 'hi'
                                                            ? [
                                                                t('products.plugValves.applications.1'),
                                                                t('products.plugValves.applications.2'),
                                                                t('products.plugValves.applications.3'),
                                                                t('products.plugValves.applications.4'),
                                                                t('products.plugValves.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'control-valves' && language === 'hi'
                                                            ? [
                                                                t('products.controlValves.applications.1'),
                                                                t('products.controlValves.applications.2'),
                                                                t('products.controlValves.applications.3'),
                                                                t('products.controlValves.applications.4'),
                                                                t('products.controlValves.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'mild-steel-pins' && language === 'hi'
                                                            ? [
                                                                t('products.mildSteelPins.applications.1'),
                                                                t('products.mildSteelPins.applications.2'),
                                                                t('products.mildSteelPins.applications.3'),
                                                                t('products.mildSteelPins.applications.4')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'partition-plate-die' && language === 'hi'
                                                            ? [
                                                                t('products.partitionPlateDie.applications.1'),
                                                                t('products.partitionPlateDie.applications.2'),
                                                                t('products.partitionPlateDie.applications.3'),
                                                                t('products.partitionPlateDie.applications.4')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ball-valve-seat-ring' && language === 'hi'
                                                            ? [
                                                                t('products.ballValveSeatRing.applications.1'),
                                                                t('products.ballValveSeatRing.applications.2'),
                                                                t('products.ballValveSeatRing.applications.3'),
                                                                t('products.ballValveSeatRing.applications.4'),
                                                                t('products.ballValveSeatRing.applications.5')
                                                            ].map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                            : categoryData.applications.map((app, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={categoryData.id === 'control-valves' ? "/product_image/Control_Valves.png" : categoryData.id === 'mild-steel-pins' ? "/product_image/Mild_Steel_Pins.png" : categoryData.id === 'partition-plate-die' ? "/product_image/Partition_Plate_Die.png" : categoryData.id === 'ball-valve-seat-ring' ? "/product_image/Ball_Valve_Seat_Ring.png" : categoryData.id === 'solenoid-valves' ? "/product_image/Solenoid_Valves.png" : categoryData.id === 'gi-r-brand-fittings' ? "/product_image/GI_R_Brand_Fittings.png" : categoryData.id === 'ductile-iron-fittings' ? "/product_image/Ductile_Iron_Fittings.png" : categoryData.id === 'cast-steel-screwed-fittings' ? "/product_image/Cast_Steel_Screw_Fittings.png" : categoryData.id === 'pipe-fittings' ? "/product_image/Pipe_Fittings.png" : categoryData.id === 'ss-316-flanges' ? "/product_image/SS_316_Flanges.png" : categoryData.id === 'ms-spacer-flanges' ? "/product_image/MS_Flanges.png" : categoryData.id === 'ss-304-flanges' ? "/product_image/SS_304_Flanges.png" : categoryData.id === 'ms-flanges' ? "/msflanges.png" : categoryData.id === 'plug-valves' ? "/product_image/Plug_Valves.png" : categoryData.id === 'pull-studs' ? "/product_image/Pull_Studs.png" : categoryData.id === 'ss-fittings' ? "/product_image/Stainless_Steel_(SS)_Fittings.png" : categoryData.id === 'gi-fittings' ? "/product_image/GI_Fittings.png" : categoryData.id === 'flanges' ? "/flanges.png" : "/product_image/Forged_Steel_Fittings.png"}
                                                        alt={categoryData.category}
                                                        className={categoryData.id === 'gi-r-brand-fittings' ? "w-40 h-40 object-contain rounded-lg shadow-lg" : "w-48 h-48 object-contain rounded-lg shadow-lg"}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'flanges' ? 'text-orange-500' : 'text-amber-600'}`}>Applications of Danesh Industries {categoryData.category}</h3>
                                                <ul className="list-none space-y-2 text-lg text-white">
                                                    {categoryData.applications.map((app, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <span className="text-blue-500 mr-2">●</span>{app}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )}
                                {categoryData.uses && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Uses of Forged Steel Fittings</h3>
                                        <ul className="list-none space-y-1 text-white">
                                            {categoryData.uses.map((use, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-green-500 mr-2">•</span>{use}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.components && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-amber-600 mb-4">
                                            {categoryData.id === 'grooved-fittings' && language === 'hi'
                                                ? t('products.groovedFittings.components.title')
                                                : 'Components of Grooved Fittings'}
                                        </h3>
                                        {categoryData.components.map((component, index) => (
                                            <div key={index} className="mb-4">
                                                <h4 className="text-xl font-semibold text-brand-blue mb-2">
                                                    🔹 {categoryData.id === 'grooved-fittings' && language === 'hi'
                                                        ? (component.title === 'Body' ? t('products.groovedFittings.components.body.title') : t('products.groovedFittings.components.gasket.title'))
                                                        : component.title}
                                                </h4>
                                                <ul className="list-none space-y-1 text-white">
                                                    {categoryData.id === 'grooved-fittings' && language === 'hi'
                                                        ? (component.title === 'Body'
                                                            ? [
                                                                t('products.groovedFittings.components.body.points.1'),
                                                                t('products.groovedFittings.components.body.points.2'),
                                                                t('products.groovedFittings.components.body.points.3')
                                                            ].map((point, idx) => (
                                                                <li key={idx} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">•</span>{point}
                                                                </li>
                                                            ))
                                                            : [
                                                                t('products.groovedFittings.components.gasket.points.1'),
                                                                t('products.groovedFittings.components.gasket.points.2'),
                                                                t('products.groovedFittings.components.gasket.points.3'),
                                                                t('products.groovedFittings.components.gasket.points.4')
                                                            ].map((point, idx) => (
                                                                <li key={idx} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">•</span>{point}
                                                                </li>
                                                            ))
                                                        )
                                                        : component.points.map((point, idx) => (
                                                            <li key={idx} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">•</span>{point}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {categoryData.composition && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">
                                            {(categoryData.id as string) === 'ductile-iron-fittings' && language === 'hi'
                                                ? t('products.ductileIronFittings.composition.title')
                                                : 'Composition of Ductile Iron Fittings'}
                                        </h3>
                                        <p className="text-lg text-white mb-2">
                                            {categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                ? t('products.ductileIronFittings.composition.text')
                                                : categoryData.composition.text}
                                        </p>
                                        <ul className="list-none space-y-1 text-white">
                                            {categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                ? [
                                                    t('products.ductileIronFittings.composition.points.1'),
                                                    t('products.ductileIronFittings.composition.points.2'),
                                                    t('products.ductileIronFittings.composition.points.3')
                                                ].map((point, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-green-500 mr-2">•</span>{point}
                                                    </li>
                                                ))
                                                : categoryData.composition.points.map((point, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-green-500 mr-2">•</span>{point}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                                {categoryData.advantages && (
                                    <div className="mt-6">
                                        {categoryData.id === 'flanges' || categoryData.id === 'grooved-fittings' ? (
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1">
                                                    <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'flanges' || categoryData.id === 'grooved-fittings' || categoryData.id === 'gi-slip-on-flanges' ? 'text-orange-500' : 'text-brand-blue'}`}>
                                                        {categoryData.id === 'flanges' && language === 'hi'
                                                            ? t('products.flanges.benefits.title')
                                                            : categoryData.id === 'grooved-fittings' && language === 'hi'
                                                            ? t('products.groovedFittings.benefits.title')
                                                            : `Benefits of Danesh Industries ${categoryData.category}`}
                                                    </h3>
                                                    <ul className="list-none space-y-2 text-lg text-white">
                                                        {categoryData.id === 'flanges' && language === 'hi'
                                                            ? [
                                                                t('products.flanges.benefits.1'),
                                                                t('products.flanges.benefits.2'),
                                                                t('products.flanges.benefits.3'),
                                                                t('products.flanges.benefits.4'),
                                                                t('products.flanges.benefits.5')
                                                            ].map((benefit, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{benefit}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'grooved-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.groovedFittings.advantages.1'),
                                                                t('products.groovedFittings.advantages.2'),
                                                                t('products.groovedFittings.advantages.3'),
                                                                t('products.groovedFittings.advantages.4'),
                                                                t('products.groovedFittings.advantages.5')
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-slip-on-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.giSlipOnFlanges.advantages.1'),
                                                                t('products.giSlipOnFlanges.advantages.2'),
                                                                t('products.giSlipOnFlanges.advantages.3'),
                                                                t('products.giSlipOnFlanges.advantages.4'),
                                                                t('products.giSlipOnFlanges.advantages.5')
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-threaded-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.giThreadedFlanges.advantages.1'),
                                                                t('products.giThreadedFlanges.advantages.2'),
                                                                t('products.giThreadedFlanges.advantages.3'),
                                                                t('products.giThreadedFlanges.advantages.4'),
                                                                t('products.giThreadedFlanges.advantages.5')
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.ductileIronFittings.advantages.1'),
                                                                t('products.ductileIronFittings.advantages.2'),
                                                                t('products.ductileIronFittings.advantages.3'),
                                                                t('products.ductileIronFittings.advantages.4'),
                                                                t('products.ductileIronFittings.advantages.5')
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'forged-steel-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.forgedSteelFittings.advantages.1'),
                                                                t('products.forgedSteelFittings.advantages.2'),
                                                                t('products.forgedSteelFittings.advantages.3'),
                                                                t('products.forgedSteelFittings.advantages.4'),
                                                                t('products.forgedSteelFittings.advantages.5')
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-r-brand-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.giRBrandFittings.keyFeatures.1'),
                                                                t('products.giRBrandFittings.keyFeatures.2'),
                                                                t('products.giRBrandFittings.keyFeatures.3'),
                                                                t('products.giRBrandFittings.keyFeatures.4'),
                                                                t('products.giRBrandFittings.keyFeatures.5')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-fittings' && language === 'hi'
                                                            ? [
                                                                'ताकत और स्थायित्व - भारी-शुल्क और दीर्घकालिक उपयोग के लिए डिज़ाइन किया गया',
                                                                'संक्षारण प्रतिरोधी - जंग और नमी से सुरक्षा के लिए जिंक कोटिंग',
                                                                'लागत-प्रभावी - स्टेनलेस स्टील फिटिंग्स का किफायती विकल्प',
                                                                'आसान स्थापना - विशेष उपकरण या श्रम की आवश्यकता के बिना त्वरित असेंबली',
                                                                'कम रखरखाव - न्यूनतम रखरखाव के साथ विश्वसनीय प्रदर्शन'
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-fittings' && language === 'hi'
                                                            ? [
                                                                'संक्षारण प्रतिरोध - जंग, नमी और कठोर रसायनों के खिलाफ उत्कृष्ट प्रतिरोध',
                                                                'उच्च शक्ति - 3000 psi से 15,000 psi तक परिचालन दबाव का सामना',
                                                                'तापमान प्रतिरोध - चरम तापमान रेंज में विश्वसनीय प्रदर्शन',
                                                                'बहुमुखी प्रतिभा - कई आकारों (0.25" से 4") और कॉन्फ़िगरेशन में उपलब्ध',
                                                                'स्थायित्व - न्यूनतम रखरखाव के साथ दीर्घकालिक विश्वसनीयता के लिए इंजीनियर्ड',
                                                                'स्वच्छ और सुरक्षित - खाद्य, पेय और फार्मास्युटिकल उद्योगों के लिए आदर्श जहां स्वच्छता महत्वपूर्ण है'
                                                            ].map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                            : categoryData.advantages.map((adv, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={categoryData.id === 'flanges' ? "/flanges.png" : categoryData.id === 'grooved-fittings' ? "/product_image/Grooved_Fittings.png" : categoryData.id === 'gi-threaded-flanges' ? "/product_image/GI_Threaded_Flanges.png" : "/product_image/GI_Slip-On_Flanges.png"}
                                                        alt={categoryData.category}
                                                        className="w-48 h-48 object-contain rounded-lg shadow-lg"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="text-2xl font-bold text-brand-blue mb-4">Benefits of Danesh Industries {categoryData.category}</h3>
                                                <ul className="list-none space-y-2 text-lg text-white">
                                                    {categoryData.advantages.map((adv, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <span className="text-green-500 mr-2">✔</span>{adv}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )}
                                {categoryData.keyFeatures && (
                                    <div className="mt-6">
                                        {categoryData.id === 'ms-flanges' ? (
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-amber-600 mb-4">
                                                        {categoryData.id === 'ms-flanges' && language === 'hi'
                                                            ? t('products.msFlanges.keyFeatures.title')
                                                            : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                            ? t('products.ss304Flanges.keyFeatures.title')
                                                            : `Key Features of Danesh Industries ${categoryData.category}`}
                                                    </h3>
                                                    <ul className="list-none space-y-2 text-lg text-white">
                                                        {categoryData.id === 'ms-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.msFlanges.keyFeatures.1'),
                                                                t('products.msFlanges.keyFeatures.2'),
                                                                t('products.msFlanges.keyFeatures.3'),
                                                                t('products.msFlanges.keyFeatures.4'),
                                                                t('products.msFlanges.keyFeatures.5')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.ss304Flanges.keyFeatures.1'),
                                                                t('products.ss304Flanges.keyFeatures.2'),
                                                                t('products.ss304Flanges.keyFeatures.3'),
                                                                t('products.ss304Flanges.keyFeatures.4')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.ss316Flanges.keyFeatures.1'),
                                                                t('products.ss316Flanges.keyFeatures.2'),
                                                                t('products.ss316Flanges.keyFeatures.3'),
                                                                t('products.ss316Flanges.keyFeatures.4'),
                                                                t('products.ss316Flanges.keyFeatures.5')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'cast-steel-screwed-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.castSteelScrewedFittings.keyFeatures.1'),
                                                                t('products.castSteelScrewedFittings.keyFeatures.2'),
                                                                t('products.castSteelScrewedFittings.keyFeatures.3'),
                                                                t('products.castSteelScrewedFittings.keyFeatures.4'),
                                                                t('products.castSteelScrewedFittings.keyFeatures.5')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'forged-steel-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.forgedSteelFittings.keyFeatures.1'),
                                                                t('products.forgedSteelFittings.keyFeatures.2'),
                                                                t('products.forgedSteelFittings.keyFeatures.3'),
                                                                t('products.forgedSteelFittings.keyFeatures.4'),
                                                                t('products.forgedSteelFittings.keyFeatures.5')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-r-brand-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.giRBrandFittings.keyFeatures.1'),
                                                                t('products.giRBrandFittings.keyFeatures.2'),
                                                                t('products.giRBrandFittings.keyFeatures.3'),
                                                                t('products.giRBrandFittings.keyFeatures.4'),
                                                                t('products.giRBrandFittings.keyFeatures.5')
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-fittings' && language === 'hi'
                                                            ? [
                                                                'उच्च-गुणवत्ता वाला निर्माण - टिकाऊ गैल्वेनाइज्ड आयरन से बना, कठिन परिस्थितियों में वर्षों तक चलने के लिए डिज़ाइन किया गया',
                                                                'विकल्पों की विस्तृत श्रृंखला - विभिन्न परियोजनाओं के अनुरूप कई आकारों, आकृतियों और शैलियों में उपलब्ध',
                                                                'आसान स्थापना - परेशानी मुक्त सेटअप के लिए चरण-दर-चरण गाइड और स्पष्ट निर्देशों के साथ आपूर्ति',
                                                                'संक्षारण प्रतिरोध - जंग, नमी और घिसाव के खिलाफ सुरक्षा के लिए सुरक्षात्मक गैल्वनीकरण',
                                                                'लाइफटाइम विश्वसनीयता - उद्योग-मानक गुणवत्ता आश्वासन और वारंटी सहायता द्वारा समर्थित'
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-fittings' && language === 'hi'
                                                            ? [
                                                                'उच्च शक्ति और दबाव प्रतिरोध - 6000 PSI तक दबाव को संभाल सकता है',
                                                                'उत्कृष्ट स्थायित्व - कास्ट फिटिंग्स की तुलना में लंबी सेवा जीवन',
                                                                'संक्षारण प्रतिरोध - विशेष कोटिंग्स और सामग्री ग्रेड उपलब्ध',
                                                                'आयामी सटीकता - सख्त सहनशीलता के साथ निर्मित',
                                                                'कम रखरखाव - विश्वसनीय प्रदर्शन के साथ न्यूनतम डाउनटाइम'
                                                            ].map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                            : categoryData.keyFeatures.map((feature, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={categoryData.id === 'ss-304-flanges' ? "/product_image/SS_304_Flanges.png" : "/msflanges.png"}
                                                        alt={categoryData.category}
                                                        className="w-48 h-48 object-contain rounded-lg shadow-lg"
                                                    />
                                                </div>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'ss-304-flanges' ? 'text-orange-500' : 'text-amber-600'}`}>
                                                    {categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                        ? t('products.ss316Flanges.keyFeatures.title')
                                                        : `Key Features of Danesh Industries ${categoryData.category}`}
                                                </h3>
                                                <ul className="list-none space-y-2 text-lg text-white">
                                                    {categoryData.id === 'ms-spacer-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.msSpacerFlanges.keyFeatures.1'),
                                                            t('products.msSpacerFlanges.keyFeatures.2'),
                                                            t('products.msSpacerFlanges.keyFeatures.3'),
                                                            t('products.msSpacerFlanges.keyFeatures.4'),
                                                            t('products.msSpacerFlanges.keyFeatures.5')
                                                        ].map((feature, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">●</span>{feature}
                                                            </li>
                                                        ))
                                                        : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.ss304Flanges.keyFeatures.1'),
                                                            t('products.ss304Flanges.keyFeatures.2'),
                                                            t('products.ss304Flanges.keyFeatures.3'),
                                                            t('products.ss304Flanges.keyFeatures.4')
                                                        ].map((feature, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">●</span>{feature}
                                                            </li>
                                                        ))
                                                        : categoryData.keyFeatures.map((feature, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-blue-500 mr-2">●</span>{feature}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        )
                                        }
                                    </div>
                                )}
                                {/* {categoryData.advantages && (
                                    <div className="mt-6">
                                        {categoryData.id === 'flanges' || categoryData.id === 'grooved-fittings' || categoryData.id === 'gi-threaded-flanges' || categoryData.id === 'gi-slip-on-flanges' ? (
                                            <div className="flex flex-col lg:flex-row gap-6">
                                                <div className="flex-1">
                                                    <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'flanges' || categoryData.id === 'grooved-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Benefits of Danesh Industries {categoryData.category}</h3>
                                                    <ul className="list-none space-y-2 text-lg text-white">
                                                        {categoryData.advantages.map((adv, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-green-500 mr-2">✔</span>{adv}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={categoryData.id === 'flanges' ? "/flanges.png" : categoryData.id === 'grooved-fittings' ? "/product_image/Grooved_Fittings.png" : categoryData.id === 'gi-threaded-flanges' ? "/product_image/GI_Threaded_Flanges.png" : "/product_image/GI_Slip-On_Flanges.png"}
                                                        alt={categoryData.category}
                                                        className="w-48 h-48 object-contain rounded-lg shadow-lg"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="text-2xl font-bold text-brand-blue mb-4">Benefits of Danesh Industries {categoryData.category}</h3>
                                                <ul className="list-none space-y-2 text-lg text-white">
                                                    {categoryData.advantages.map((adv, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <span className="text-green-500 mr-2">✔</span>{adv}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )} */}
                                {categoryData.types && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Types of Forged Steel Fittings</h3>
                                        <ul className="list-none space-y-1 text-white">
                                            {categoryData.types.map((type, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">•</span>{type}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.whyChoose && (
                                    <div className="mt-6">
                                        {categoryData.id === 'valve-components' || categoryData.id === 'pipe-fittings' ? (
                                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                                                <div className="flex-1">
                                                    <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'valve-components' || categoryData.id === 'ms-flanges' || categoryData.id === 'pipe-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>
                                                        {categoryData.id === 'valve-components' && language === 'hi'
                                                            ? t('products.valveComponents.whyChoose')
                                                            : categoryData.id === 'pipe-fittings' && language === 'hi'
                                                            ? t('products.pipeFittings.whyChoose.title')
                                                            : (categoryData.id as string) === 'solenoid-valves' && language === 'hi'
                                                             ? t('products.solenoidValves.whyChoose.title')
                                                            : `Why Choose Danesh Industries ${categoryData.category}?`}
                                                    </h3>
                                                    <ul className="list-none space-y-2 text-lg text-white">
                                                        {categoryData.id === 'valve-components' && language === 'hi'
                                                            ? [
                                                                t('products.valveComponents.reason1'),
                                                                t('products.valveComponents.reason2'),
                                                                t('products.valveComponents.reason3'),
                                                                t('products.valveComponents.reason4'),
                                                                t('products.valveComponents.reason5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-blue-500 mr-2">•</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'pipe-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.pipeFittings.whyChoose.1'),
                                                                t('products.pipeFittings.whyChoose.2'),
                                                                t('products.pipeFittings.whyChoose.3'),
                                                                t('products.pipeFittings.whyChoose.4'),
                                                                t('products.pipeFittings.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.ss316Flanges.whyChoose.1'),
                                                                t('products.ss316Flanges.whyChoose.2'),
                                                                t('products.ss316Flanges.whyChoose.3'),
                                                                t('products.ss316Flanges.whyChoose.4'),
                                                                t('products.ss316Flanges.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-slip-on-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.giSlipOnFlanges.whyChoose.1'),
                                                                t('products.giSlipOnFlanges.whyChoose.2'),
                                                                t('products.giSlipOnFlanges.whyChoose.3'),
                                                                t('products.giSlipOnFlanges.whyChoose.4')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-threaded-flanges' && language === 'hi'
                                                            ? [
                                                                t('products.giThreadedFlanges.whyChoose.1'),
                                                                t('products.giThreadedFlanges.whyChoose.2'),
                                                                t('products.giThreadedFlanges.whyChoose.3'),
                                                                t('products.giThreadedFlanges.whyChoose.4'),
                                                                t('products.giThreadedFlanges.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'cast-steel-screwed-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.castSteelScrewedFittings.whyChoose.1'),
                                                                t('products.castSteelScrewedFittings.whyChoose.2'),
                                                                t('products.castSteelScrewedFittings.whyChoose.3'),
                                                                t('products.castSteelScrewedFittings.whyChoose.4'),
                                                                t('products.castSteelScrewedFittings.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.ductileIronFittings.whyChoose.1'),
                                                                t('products.ductileIronFittings.whyChoose.2'),
                                                                t('products.ductileIronFittings.whyChoose.3'),
                                                                t('products.ductileIronFittings.whyChoose.4'),
                                                                t('products.ductileIronFittings.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'grooved-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.groovedFittings.whyChoose.1'),
                                                                t('products.groovedFittings.whyChoose.2'),
                                                                t('products.groovedFittings.whyChoose.3'),
                                                                t('products.groovedFittings.whyChoose.4'),
                                                                t('products.groovedFittings.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'solenoid-valves' && language === 'hi'
                                                            ? [
                                                                t('products.solenoidValves.whyChoose.1'),
                                                                t('products.solenoidValves.whyChoose.2'),
                                                                t('products.solenoidValves.whyChoose.3'),
                                                                t('products.solenoidValves.whyChoose.4'),
                                                                t('products.solenoidValves.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'forged-steel-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.forgedSteelFittings.whyChoose.1'),
                                                                t('products.forgedSteelFittings.whyChoose.2'),
                                                                t('products.forgedSteelFittings.whyChoose.3'),
                                                                t('products.forgedSteelFittings.whyChoose.4'),
                                                                t('products.forgedSteelFittings.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-r-brand-fittings' && language === 'hi'
                                                            ? [
                                                                t('products.giRBrandFittings.whyChoose.1'),
                                                                t('products.giRBrandFittings.whyChoose.2'),
                                                                t('products.giRBrandFittings.whyChoose.3'),
                                                                t('products.giRBrandFittings.whyChoose.4'),
                                                                t('products.giRBrandFittings.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'gi-fittings' && language === 'hi'
                                                            ? [
                                                                'मानक और कस्टम GI फिटिंग्स की विस्तृत श्रृंखला',
                                                                'ASME, ASTM, DIN, EN और अंतरराष्ट्रीय मानकों के अनुसार निर्मित',
                                                                'घरेलू, वाणिज्यिक और औद्योगिक उपयोग के लिए उपयुक्त',
                                                                'सख्त गुणवत्ता आश्वासन और प्रतिस्पर्धी मूल्य निर्धारण द्वारा समर्थित',
                                                                'बड़ी परियोजनाओं के लिए थोक उपलब्धता और समय पर डिलीवरी'
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ss-fittings' && language === 'hi'
                                                            ? [
                                                                'प्रीमियम स्टेनलेस स्टील (SS 304, SS 316 और विशेष मिश्र धातुओं) के साथ निर्मित',
                                                                'ASME, ASTM, DIN, EN और अंतरराष्ट्रीय मानकों के साथ अनुपालन',
                                                                'ताकत, सीलिंग प्रदर्शन और स्थायित्व के लिए गुणवत्ता परीक्षण',
                                                                'आकार, दबाव रेटिंग और कस्टम विशिष्टताओं की विस्तृत श्रृंखला',
                                                                'औद्योगिक, वाणिज्यिक और स्वच्छ अनुप्रयोगों के लिए विश्वसनीय आपूर्तिकर्ता'
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'pull-studs' && language === 'hi'
                                                            ? [
                                                                t('products.pullStuds.whyChoose.1'),
                                                                t('products.pullStuds.whyChoose.2'),
                                                                t('products.pullStuds.whyChoose.3'),
                                                                t('products.pullStuds.whyChoose.4'),
                                                                t('products.pullStuds.whyChoose.5')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'plug-valves' && language === 'hi'
                                                            ? [
                                                                t('products.plugValves.whyChoose.1'),
                                                                t('products.plugValves.whyChoose.2'),
                                                                t('products.plugValves.whyChoose.3'),
                                                                t('products.plugValves.whyChoose.4')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'control-valves' && language === 'hi'
                                                            ? [
                                                                t('products.controlValves.whyChoose.1'),
                                                                t('products.controlValves.whyChoose.2'),
                                                                t('products.controlValves.whyChoose.3'),
                                                                t('products.controlValves.whyChoose.4')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'mild-steel-pins' && language === 'hi'
                                                            ? [
                                                                t('products.mildSteelPins.whyChoose.1'),
                                                                t('products.mildSteelPins.whyChoose.2'),
                                                                t('products.mildSteelPins.whyChoose.3'),
                                                                t('products.mildSteelPins.whyChoose.4')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'partition-plate-die' && language === 'hi'
                                                            ? [
                                                                t('products.partitionPlateDie.whyChoose.1'),
                                                                t('products.partitionPlateDie.whyChoose.2'),
                                                                t('products.partitionPlateDie.whyChoose.3'),
                                                                t('products.partitionPlateDie.whyChoose.4')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.id === 'ball-valve-seat-ring' && language === 'hi'
                                                            ? [
                                                                t('products.ballValveSeatRing.whyChoose.1'),
                                                                t('products.ballValveSeatRing.whyChoose.2'),
                                                                t('products.ballValveSeatRing.whyChoose.3'),
                                                                t('products.ballValveSeatRing.whyChoose.4')
                                                            ].map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                            : categoryData.whyChoose.map((point, index) => (
                                                                <li key={index} className="flex items-center">
                                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src={categoryData.id === 'pipe-fittings' ? "/product_image/Pipe_Fittings.png" : "/valve_components.jpg"}
                                                        alt={categoryData.category}
                                                        className="w-64 h-48 object-contain rounded-lg shadow-lg"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <h3 className="text-2xl font-bold text-brand-blue mb-4">
                                                    {categoryData.id === 'ms-flanges' && language === 'hi'
                                                        ? t('products.msFlanges.whyChoose.title')
                                                        : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                        ? t('products.ss304Flanges.whyChoose.title')
                                                        : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                        ? t('products.ss316Flanges.whyChoose.title')
                                                        : `Why Choose Danesh Industries ${categoryData.category}?`}
                                                </h3>
                                                <ul className="list-none space-y-2 text-lg text-white">
                                                    {categoryData.id === 'ms-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.msFlanges.whyChoose.1'),
                                                            t('products.msFlanges.whyChoose.2'),
                                                            t('products.msFlanges.whyChoose.3')
                                                        ].map((point, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-green-500 mr-2">✔</span>{point}
                                                            </li>
                                                        ))
                                                        : categoryData.id === 'ss-304-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.ss304Flanges.whyChoose.1'),
                                                            t('products.ss304Flanges.whyChoose.2'),
                                                            t('products.ss304Flanges.whyChoose.3'),
                                                            t('products.ss304Flanges.whyChoose.4')
                                                        ].map((point, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-green-500 mr-2">✔</span>{point}
                                                            </li>
                                                        ))
                                                        : categoryData.id === 'ms-spacer-flanges' && language === 'hi'
                                                        ? [
                                                            t('products.msSpacerFlanges.whyChoose.1'),
                                                            t('products.msSpacerFlanges.whyChoose.2'),
                                                            t('products.msSpacerFlanges.whyChoose.3'),
                                                            t('products.msSpacerFlanges.whyChoose.4')
                                                        ].map((point, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-green-500 mr-2">✔</span>{point}
                                                            </li>
                                                        ))
                                                        : categoryData.whyChoose.map((point, index) => (
                                                            <li key={index} className="flex items-center">
                                                                <span className="text-green-500 mr-2">✔</span>{point}
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )}
                                {categoryData.selectionGuide && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">How to Select the Right {categoryData.category}</h3>
                                        <p className="text-lg text-brand-dark mb-2">When choosing a {categoryData.category}, consider:</p>
                                        <ul className="list-none space-y-2 text-lg text-brand-dark">
                                            {categoryData.id === 'gi-threaded-flanges' && language === 'hi'
                                                ? [
                                                    t('products.giThreadedFlanges.selectionGuide.1'),
                                                    t('products.giThreadedFlanges.selectionGuide.2'),
                                                    t('products.giThreadedFlanges.selectionGuide.3'),
                                                    t('products.giThreadedFlanges.selectionGuide.4')
                                                ].map((guide, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-blue-500 mr-2">●</span>{guide}
                                                    </li>
                                                ))
                                                : categoryData.selectionGuide.map((guide, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-blue-500 mr-2">●</span>{guide}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                                {categoryData.limitations && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">{(categoryData.id as string) === 'grooved-fittings' && language === 'hi' ? t('products.groovedFittings.limitations.title') : categoryData.id === 'grooved-fittings' ? 'Disadvantages of Grooved Fittings' : `Limitations of ${categoryData.category}`}</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.id === 'gi-slip-on-flanges' && language === 'hi'
                                                ? [
                                                    t('products.giSlipOnFlanges.limitations.1'),
                                                    t('products.giSlipOnFlanges.limitations.2'),
                                                    t('products.giSlipOnFlanges.limitations.3')
                                                ].map((lim, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-red-500 mr-2">⚠️</span>{lim}
                                                    </li>
                                                ))
                                                : categoryData.id === 'grooved-fittings' && language === 'hi'
                                                ? [
                                                    t('products.groovedFittings.limitations.1'),
                                                    t('products.groovedFittings.limitations.2'),
                                                    t('products.groovedFittings.limitations.3')
                                                ].map((lim, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-red-500 mr-2">⚠️</span>{lim}
                                                    </li>
                                                ))
                                                : categoryData.limitations.map((lim, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-red-500 mr-2">⚠️</span>{lim}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                                {categoryData.installationConsiderations && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Installation Considerations for {categoryData.category}</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                ? [
                                                    t('products.ss316Flanges.installationConsiderations.1'),
                                                    t('products.ss316Flanges.installationConsiderations.2'),
                                                    t('products.ss316Flanges.installationConsiderations.3')
                                                ].map((consideration, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-blue-500 mr-2">●</span>{consideration}
                                                    </li>
                                                ))
                                                : categoryData.installationConsiderations.map((consideration, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-blue-500 mr-2">●</span>{consideration}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                                {categoryData.safetyGuidelines && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">{categoryData.id === 'ductile-iron-fittings' ? 'Maintenance & Installation' : `Workplace Safety Guidelines for ${categoryData.category}`}</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.id === 'ms-spacer-flanges' && language === 'hi'
                                                ? [
                                                    t('products.msSpacerFlanges.safetyGuidelines.1'),
                                                    t('products.msSpacerFlanges.safetyGuidelines.2'),
                                                    t('products.msSpacerFlanges.safetyGuidelines.3'),
                                                    t('products.msSpacerFlanges.safetyGuidelines.4'),
                                                    t('products.msSpacerFlanges.safetyGuidelines.5')
                                                ].map((guideline, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-red-500 mr-2">⚠️</span>{guideline}
                                                    </li>
                                                ))
                                                : categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                ? [
                                                    t('products.ductileIronFittings.safetyGuidelines.1'),
                                                    t('products.ductileIronFittings.safetyGuidelines.2'),
                                                    t('products.ductileIronFittings.safetyGuidelines.3'),
                                                    t('products.ductileIronFittings.safetyGuidelines.4')
                                                ].map((guideline, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-red-500 mr-2">⚠️</span>{guideline}
                                                    </li>
                                                ))
                                                : categoryData.safetyGuidelines.map((guideline, index) => (
                                                    <li key={index} className="flex items-center">
                                                        <span className="text-red-500 mr-2">⚠️</span>{guideline}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )}
                                {categoryData.faq && (
                                    <div className="mt-6">
                                        <h3 className={`text-2xl font-bold mb-4 ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>
                                            {categoryData.id === 'pipe-fittings' && language === 'hi'
                                                ? t('products.pipeFittings.faq.title')
                                                : `${categoryData.category} FAQ`}
                                        </h3>
                                        <div className="space-y-4">
                                            {categoryData.id === 'valve-components' && language === 'hi'
                                                ? [
                                                    { q: t('products.valveComponents.faq.q1'), a: t('products.valveComponents.faq.a1') },
                                                    { q: t('products.valveComponents.faq.q2'), a: t('products.valveComponents.faq.a2') },
                                                    { q: t('products.valveComponents.faq.q3'), a: t('products.valveComponents.faq.a3') },
                                                    { q: t('products.valveComponents.faq.q4'), a: t('products.valveComponents.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className="font-bold text-orange-500">Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'flanges' && language === 'hi'
                                                ? [
                                                    { q: t('products.flanges.faq.q1'), a: t('products.flanges.faq.a1') },
                                                    { q: t('products.flanges.faq.q2'), a: t('products.flanges.faq.a2') },
                                                    { q: t('products.flanges.faq.q3'), a: t('products.flanges.faq.a3') },
                                                    { q: t('products.flanges.faq.q4'), a: t('products.flanges.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'pipe-fittings' && language === 'hi'
                                                ? [
                                                    { q: t('products.pipeFittings.faq.q1'), a: t('products.pipeFittings.faq.a1') },
                                                    { q: t('products.pipeFittings.faq.q2'), a: t('products.pipeFittings.faq.a2') },
                                                    { q: t('products.pipeFittings.faq.q3'), a: t('products.pipeFittings.faq.a3') },
                                                    { q: t('products.pipeFittings.faq.q4'), a: t('products.pipeFittings.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className="font-bold text-orange-500">Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'ms-spacer-flanges' && language === 'hi'
                                                ? [
                                                    { q: t('products.msSpacerFlanges.faq.q1'), a: t('products.msSpacerFlanges.faq.a1') },
                                                    { q: t('products.msSpacerFlanges.faq.q2'), a: t('products.msSpacerFlanges.faq.a2') },
                                                    { q: t('products.msSpacerFlanges.faq.q3'), a: t('products.msSpacerFlanges.faq.a3') },
                                                    { q: t('products.msSpacerFlanges.faq.q4'), a: t('products.msSpacerFlanges.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'ss-316-flanges' && language === 'hi'
                                                ? [
                                                    { q: t('products.ss316Flanges.faq.q1'), a: t('products.ss316Flanges.faq.a1') },
                                                    { q: t('products.ss316Flanges.faq.q2'), a: t('products.ss316Flanges.faq.a2') },
                                                    { q: t('products.ss316Flanges.faq.q3'), a: t('products.ss316Flanges.faq.a3') },
                                                    { q: t('products.ss316Flanges.faq.q4'), a: t('products.ss316Flanges.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'gi-slip-on-flanges' && language === 'hi'
                                                ? [
                                                    { q: t('products.giSlipOnFlanges.faq.q1'), a: t('products.giSlipOnFlanges.faq.a1') },
                                                    { q: t('products.giSlipOnFlanges.faq.q2'), a: t('products.giSlipOnFlanges.faq.a2') },
                                                    { q: t('products.giSlipOnFlanges.faq.q3'), a: t('products.giSlipOnFlanges.faq.a3') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'gi-threaded-flanges' && language === 'hi'
                                                ? [
                                                    { q: t('products.giThreadedFlanges.faq.q1'), a: t('products.giThreadedFlanges.faq.a1') },
                                                    { q: t('products.giThreadedFlanges.faq.q2'), a: t('products.giThreadedFlanges.faq.a2') },
                                                    { q: t('products.giThreadedFlanges.faq.q3'), a: t('products.giThreadedFlanges.faq.a3') },
                                                    { q: t('products.giThreadedFlanges.faq.q4'), a: t('products.giThreadedFlanges.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'cast-steel-screwed-fittings' && language === 'hi'
                                                ? [
                                                    { q: t('products.castSteelScrewedFittings.faq.q1'), a: t('products.castSteelScrewedFittings.faq.a1') },
                                                    { q: t('products.castSteelScrewedFittings.faq.q2'), a: t('products.castSteelScrewedFittings.faq.a2') },
                                                    { q: t('products.castSteelScrewedFittings.faq.q3'), a: t('products.castSteelScrewedFittings.faq.a3') },
                                                    { q: t('products.castSteelScrewedFittings.faq.q4'), a: t('products.castSteelScrewedFittings.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'ductile-iron-fittings' && language === 'hi'
                                                ? [
                                                    { q: t('products.ductileIronFittings.faq.q1'), a: t('products.ductileIronFittings.faq.a1') },
                                                    { q: t('products.ductileIronFittings.faq.q2'), a: t('products.ductileIronFittings.faq.a2') },
                                                    { q: t('products.ductileIronFittings.faq.q3'), a: t('products.ductileIronFittings.faq.a3') },
                                                    { q: t('products.ductileIronFittings.faq.q4'), a: t('products.ductileIronFittings.faq.a4') },
                                                    { q: t('products.ductileIronFittings.faq.q5'), a: t('products.ductileIronFittings.faq.a5') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'grooved-fittings' && language === 'hi'
                                                ? [
                                                    { q: t('products.groovedFittings.faq.q1'), a: t('products.groovedFittings.faq.a1') },
                                                    { q: t('products.groovedFittings.faq.q2'), a: t('products.groovedFittings.faq.a2') },
                                                    { q: t('products.groovedFittings.faq.q3'), a: t('products.groovedFittings.faq.a3') },
                                                    { q: t('products.groovedFittings.faq.q4'), a: t('products.groovedFittings.faq.a4') },
                                                    { q: t('products.groovedFittings.faq.q5'), a: t('products.groovedFittings.faq.a5') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'grooved-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'solenoid-valves' && language === 'hi'
                                                ? [
                                                    { q: t('products.solenoidValves.faq.q1'), a: t('products.solenoidValves.faq.a1') },
                                                    { q: t('products.solenoidValves.faq.q2'), a: t('products.solenoidValves.faq.a2') },
                                                    { q: t('products.solenoidValves.faq.q3'), a: t('products.solenoidValves.faq.a3') },
                                                    { q: t('products.solenoidValves.faq.q4'), a: t('products.solenoidValves.faq.a4') },
                                                    { q: t('products.solenoidValves.faq.q5'), a: t('products.solenoidValves.faq.a5') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'solenoid-valves' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'forged-steel-fittings' && language === 'hi'
                                                ? [
                                                    { q: t('products.forgedSteelFittings.faq.q1'), a: t('products.forgedSteelFittings.faq.a1') },
                                                    { q: t('products.forgedSteelFittings.faq.q2'), a: t('products.forgedSteelFittings.faq.a2') },
                                                    { q: t('products.forgedSteelFittings.faq.q3'), a: t('products.forgedSteelFittings.faq.a3') },
                                                    { q: t('products.forgedSteelFittings.faq.q4'), a: t('products.forgedSteelFittings.faq.a4') },
                                                    { q: t('products.forgedSteelFittings.faq.q5'), a: t('products.forgedSteelFittings.faq.a5') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'solenoid-valves' || categoryData.id === 'forged-steel-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'gi-r-brand-fittings' && language === 'hi'
                                                ? [
                                                    { q: t('products.giRBrandFittings.faq.q1'), a: t('products.giRBrandFittings.faq.a1') },
                                                    { q: t('products.giRBrandFittings.faq.q2'), a: t('products.giRBrandFittings.faq.a2') },
                                                    { q: t('products.giRBrandFittings.faq.q3'), a: t('products.giRBrandFittings.faq.a3') },
                                                    { q: t('products.giRBrandFittings.faq.q4'), a: t('products.giRBrandFittings.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'solenoid-valves' || categoryData.id === 'forged-steel-fittings' || categoryData.id === 'gi-r-brand-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'gi-fittings' && language === 'hi'
                                                ? [
                                                    { q: 'GI फिटिंग्स क्या हैं?', a: 'GI फिटिंग्स गैल्वेनाइज्ड आयरन फिटिंग्स हैं, जो संक्षारण प्रतिरोध के लिए जिंक से लेपित स्टील से बनी होती हैं। इनका उपयोग पाइपलाइनों को जोड़ने, नियंत्रित करने या समाप्त करने के लिए किया जाता है।' },
                                                    { q: 'GI फिटिंग्स का उपयोग करने के क्या फायदे हैं?', a: 'ये टिकाऊ, लागत-प्रभावी, संक्षारण प्रतिरोधी और स्थापित करने में आसान हैं, जो इन्हें प्लंबिंग और औद्योगिक सिस्टम में दीर्घकालिक उपयोग के लिए आदर्श बनाते हैं।' },
                                                    { q: 'GI फिटिंग्स का उपयोग आमतौर पर कहां किया जाता है?', a: 'इनका व्यापक रूप से जल आपूर्ति प्रणालियों, हीटिंग और कूलिंग पाइपलाइनों, रासायनिक उद्योगों, घरेलू प्लंबिंग और कृषि सिंचाई प्रणालियों में उपयोग किया जाता है।' },
                                                    { q: 'दानेश इंडस्ट्रीज कौन से प्रकार की GI फिटिंग्स प्रदान करती है?', a: 'हम टीज़, एल्बो, कपलिंग, निपल्स, बेंड, वाल्व, रेड्यूसर, प्लग, कैप और फ्लैंज सहित संपूर्ण श्रृंखला प्रदान करते हैं, जो कई ग्रेड और फिनिश में उपलब्ध हैं।' },
                                                    { q: 'क्या GI फिटिंग्स को अनुकूलित किया जा सकता है?', a: 'हां, हम परियोजना-विशिष्ट आवश्यकताओं के आधार पर कस्टम आकार, फिनिश और पैकेजिंग विकल्प प्रदान करते हैं।' }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'solenoid-valves' || categoryData.id === 'forged-steel-fittings' || categoryData.id === 'gi-r-brand-fittings' || categoryData.id === 'gi-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'ss-fittings' && language === 'hi'
                                                ? [
                                                    { q: 'SS फिटिंग्स क्या हैं?', a: 'SS फिटिंग्स स्टेनलेस स्टील पाइप फिटिंग्स हैं जिनका उपयोग तेल और गैस, रासायनिक, खाद्य प्रसंस्करण और फार्मास्युटिकल जैसे उद्योगों में पाइपलाइनों को जोड़ने के लिए किया जाता है।' },
                                                    { q: 'SS फिटिंग्स के क्या लाभ हैं?', a: 'ये संक्षारण प्रतिरोध, स्थायित्व, उच्च दबाव की ताकत और चरम वातावरण में उत्कृष्ट प्रदर्शन प्रदान करते हैं।' },
                                                    { q: 'कौन से आकार और रेटिंग उपलब्ध हैं?', a: 'दानेश इंडस्ट्रीज SS फिटिंग्स 0.25" से 4" आकार में 3000 psi से 15,000 psi तक दबाव रेटिंग के साथ उपलब्ध हैं।' },
                                                    { q: 'दानेश इंडस्ट्रीज SS फिटिंग्स को क्यों चुनें?', a: 'क्योंकि हम परिशुद्धता इंजीनियर्ड, परीक्षण किए गए और विश्व स्तर पर अनुपालित SS फिटिंग्स प्रदान करते हैं, जो दुनिया भर के उद्योगों द्वारा विश्वसनीय हैं।' }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'solenoid-valves' || categoryData.id === 'forged-steel-fittings' || categoryData.id === 'gi-r-brand-fittings' || categoryData.id === 'gi-fittings' || categoryData.id === 'ss-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.id === 'ball-valve-seat-ring' && language === 'hi'
                                                ? [
                                                    { q: t('products.ballValveSeatRing.faq.q1'), a: t('products.ballValveSeatRing.faq.a1') },
                                                    { q: t('products.ballValveSeatRing.faq.q2'), a: t('products.ballValveSeatRing.faq.a2') },
                                                    { q: t('products.ballValveSeatRing.faq.q3'), a: t('products.ballValveSeatRing.faq.a3') },
                                                    { q: t('products.ballValveSeatRing.faq.q4'), a: t('products.ballValveSeatRing.faq.a4') }
                                                ].map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' || categoryData.id === 'ball-valve-seat-ring' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                                : categoryData.faq.map((faq, index) => (
                                                    <div key={index}>
                                                        <p className={`font-bold ${categoryData.id === 'valve-components' || categoryData.id === 'flanges' || categoryData.id === 'pipe-fittings' || categoryData.id === 'cast-steel-screwed-fittings' || categoryData.id === 'ductile-iron-fittings' ? 'text-orange-500' : 'text-brand-blue'}`}>Q{index + 1}. {faq.q}</p>
                                                        <p className="text-white">A: {faq.a}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

   ))}
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

export default ProductsPage;

