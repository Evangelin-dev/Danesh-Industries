import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PRODUCT_IMAGE = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
                // image: PRODUCT_IMAGE,
                specifications: { 'Material': 'Teflon', 'Finishing': 'Machined', 'Packaging Type': 'Box', 'Size': '2 inch', 'Color': 'White' },
                additionalInfo: { 'Production Capacity': '500 Nos. per month', 'Delivery Time': '3 weeks', 'Packaging': 'As per customer requirement' },
                keyFeatures: ['Manufactured with premium-grade Teflon for chemical resistance', 'Precision machined for accurate sealing and smooth operation', 'High-volume production capability (500 pcs/month)', 'Packaged for safe handling and logistics']
            },
            {
                name: 'Stem for Ball Valve',
                // image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Easy to install and align', 'Ideal for low-pressure applications', 'Commonly used in piping systems where quick assembly is required']
            },
            {
                name: 'Butt Weld Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Strong, durable, and ideal for high-pressure and high-temperature applications', 'Provides structural reinforcement to piping systems']
            },
            {
                name: 'Socket Weld Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Designed for small pipe diameters and high-pressure systems', 'Offers a strong weld connection with smooth flow inside the pipe']
            },
            {
                name: 'Threaded Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Attached without welding, making them ideal for maintenance and quick installation', 'Commonly used in low-pressure applications']
            },
            {
                name: 'Blind Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Used to seal off piping systems or terminate pipelines', 'Suitable for inspection and testing of flow systems']
            },
            {
                name: 'Lap Joint Flanges',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Designed for smaller pipe sizes and lower pressure applications', 'Easy to weld and install, ensuring a smooth and secure seal', 'Widely used in plumbing, HVAC, and water distribution systems']
            },
            {
                name: 'Weld Neck MS Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Heavier duty flanges for high-pressure and high-temperature applications', 'Long tapered hub design ensures stress distribution and resistance to warping', 'Commonly used in oil refineries, petrochemicals, and power plants']
            }
        ]
    },
    {
        id: 'ss-304-flanges',
        category: 'SS 304 Flanges',
        introduction: 'At Danesh Industries, we manufacture and supply Stainless Steel 304 (SS 304) Flanges, one of the most widely used and versatile flange materials in the industry. SS 304 is an austenitic stainless steel grade containing approximately 18% chromium and 8% nickel, which gives it excellent durability, weldability, and corrosion resistance.',
        keyFeatures: [
            'Durability: SS 304 flanges are strong, long-lasting, and resistant to high stress, making them ideal for industrial environments',
            'Corrosion Resistance: The chromium and nickel composition offers superior resistance against rust, oxidation, and chemicals, even in wet or corrosive environments',
            'Versatility: SS 304 flanges have excellent weldability and machinability, allowing them to be fabricated into a wide range of sizes and shapes for different engineering applications',
            'Affordability: As one of the most commonly used stainless steel grades, SS 304 flanges provide cost-effective performance without compromising on quality'
        ],
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
                image: '/ss-slip-on-flangesimage.jpg',
                keyFeatures: ['Durability', 'Corrosion Resistance', 'Versatility', 'Affordability']
            },
            {
                name: 'SS 304 Weld Neck Flanges',
                image: '/ss-304-weld-neck-flanges-image.jpeg',
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['With or without countersunk holes, recesses, or custom designs']
            },
             {

                name: 'Tunnel Spacer Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['For recessed valve installations']
            },
             {
                name: 'Raised Face Options',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Superior Corrosion Resistance', 'High Strength & Durability', 'Excellent Sealing', 'Versatile Applications', 'Heat Resistance']
            },
            {
                name: 'Weld Neck Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Superior Corrosion Resistance', 'High Strength & Durability', 'Excellent Sealing', 'Versatile Applications', 'Heat Resistance']
            },
            {
                name: 'Lap Joint Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Perfect for applications requiring frequent dismantling and inspection']
            },
            {
                name: 'Blind Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Used to seal or terminate pipelines securely']
            },
            {
                name: 'Threaded Flanges',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Designed for high-pressure systems requiring strength and precision']
            },
            {
                name: 'Socket Weld Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Ideal for small-diameter, high-pressure piping']
            },
            {
                name: 'Threaded Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['For quick installation without welding']
            },
            {
                name: 'Blind Flanges',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Used to seal off or terminate a pipeline']
            },
            {
                name: 'Forged Steel Flanges',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                additionalNote: 'Used to seal the end of a pipe system, providing safety and inspection points.',
            },
            {
                name: 'GI Threaded Flanges',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Best suited for low to medium-pressure applications', 'Easy to install by hand or with a wrench', 'Available in brass, steel, and plastic', 'Suitable for plastic tubing, flexible hoses, and reinforced rubber pipes', 'Tapered design with ridges ensures a tight, secure hold']
            },
            {
                name: 'Threaded Fittings',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Provide stronger sealing than barbed fittings', 'Designed with a threaded lip for secure connection and disconnection', 'Excellent resistance to water and gas leaks', 'Manufactured in steel, brass, and plastic', 'Common uses include pressure relief valves, check valves, and joint connections', 'Compatible with straight and angled pipes']
            },
            {
                name: 'Compression Fittings',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Provide secure connections in water and fluid delivery systems']
            },
            {
                name: 'Socket Fittings',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Strong and durable, suitable for industrial piping networks']
            },
            {
                name: 'Flanged Fittings',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Reliable sealing, widely used in gas pipelines and pressure systems']
            },
            {
                name: 'Bulkhead Union Fittings',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Heat Resistant – Withstands temperatures up to 1000°F (538°C), making it ideal for extreme operating conditions', 'Corrosion Resistant – Zinc phosphate coating ensures protection against moisture, salt water, and corrosive elements', 'Versatility – Available in multiple designs including elbows, tees, reducers, couplers, and flanges, in sizes ranging from ½” to 6” or larger', 'Strong & Durable – A cost-effective alternative to steel, resistant to cracking, bending, and warping', 'Economical – Affordable and reliable solution for large-scale infrastructure and industrial projects']
            },
            {
                name: 'Tees',
                image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE
            },
            {
                name: 'Grooved Tees',
                image: PRODUCT_IMAGE
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
                image: PRODUCT_IMAGE
            },
            {
                name: 'Socket Weld Fittings',
                image: PRODUCT_IMAGE
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['High-Quality Construction – Made from durable galvanized iron, designed to last for years under tough conditions', 'Wide Range of Options – Available in multiple sizes, shapes, and styles to suit different projects', 'Easy Installation – Supplied with step-by-step guides and clear instructions for hassle-free setup', 'Corrosion Resistance – Protective galvanization ensures resistance to rust, moisture, and wear', 'Lifetime Reliability – Backed by industry-standard quality assurance and warranty support']
            },
            {
                name: 'GI R Elbows',
                image: PRODUCT_IMAGE,
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
               // image: PRODUCT_IMAGE,
                keyFeatures: ['For branching pipelines']
            },
            {
                name: 'Elbows',
                //image: PRODUCT_IMAGE,
                keyFeatures: ['For changing direction of flow (available in hot-dip galvanized or electroplated, ERW B class and C class)']
            },
            {
                name: 'Couplings',
                //image: PRODUCT_IMAGE,
                keyFeatures: ['For securely connecting two pipes']
            },
            {
                name: 'Bends',
                //image: PRODUCT_IMAGE,
                keyFeatures: ['Long bend threaded fittings for smooth directional changes']
            },
            {
                name: 'Valves',
                image: PRODUCT_IMAGE,
                keyFeatures: ['For controlling and regulating flow']
            },
            {
                name: 'Plugs & Caps',
               // image: PRODUCT_IMAGE,
                keyFeatures: ['For closing pipe ends and outlets']
            },
            {
                name: 'Pipe Nipples',
                //image: PRODUCT_IMAGE,
                keyFeatures: ['Threaded nipples for direct pipe connections']
            },
            {
                name: 'Reducers',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Concentric reducers in electroplated ERW finish']
            },
            {
                name: 'Flanges',
               // image: PRODUCT_IMAGE,
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
                image: PRODUCT_IMAGE,
                keyFeatures: ['Designed with external (male) threads for secure connections']
            },
            {
                name: 'Female Fittings (Female Adapters)',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Designed with internal (female) threads to connect with male fittings']
            },
            {
                name: 'Adapters',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Used to connect male and female threaded components']
            },
            {
                name: 'Flange Fittings',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Provide strong, leak-proof connections between pipe ends']
            },
            {
                name: 'Elbows',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Used to change flow direction in pipelines']
            },
            {
                name: 'Reducers',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Connect pipes of different diameters']
            },
            {
                name: 'Couplers',
                image: PRODUCT_IMAGE,
                keyFeatures: ['Join two pipe sections securely']
            },
            {
                name: 'Unions',
                image: PRODUCT_IMAGE,
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
               // image: PRODUCT_IMAGE,
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
                //image: PRODUCT_IMAGE,
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
                //image: PRODUCT_IMAGE,
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
               // image: PRODUCT_IMAGE,
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
               // image: PRODUCT_IMAGE,
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
                //image: PRODUCT_IMAGE,
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
                // image: PRODUCT_IMAGE,
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
                <h3 className="text-xl font-bold text-brand-blue hover:text-brand-yellow transition-colors duration-300">{title}</h3>
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

const ProductDetail: React.FC<{ item: any }> = ({ item }) => {
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

    const renderFaq = (faqItems: { q: string, a: string }[]) => (
        <div className="space-y-4">
            {faqItems.map((faq, index) => (
                <div key={index}>
                    <p className="font-bold text-brand-yellow">Q: {faq.q}</p>
                    <p className="text-brand-yellow">A: {faq.a}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-4">
            {item.images && Array.isArray(item.images) ? (
                <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {item.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${item.name} ${idx + 1}`}
                            className="rounded-lg shadow-md w-full h-10 object-cover"
                            loading="lazy"
                        />
                    ))}
                </div>
            ) : item.image && (
                <div className="mb-6">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-lg shadow-md w-full max-w-md h-auto mx-auto"
                        loading="lazy"
                    />
                </div>
            )}
            {item.description && <p className="text-lg">{item.description}</p>}
            {item.specifications && (<div><h4 className="text-lg font-semibold mb-2">Specifications</h4>{renderTable(item.specifications)}</div>)}
            {item.additionalInfo && (<div><h4 className="text-lg font-semibold mb-2">Additional Information</h4>{renderTable(item.additionalInfo)}</div>)}
            {item.keyFeatures && (<div><h4 className="text-lg font-semibold mb-2">Key Features</h4>{renderList(item.keyFeatures)}</div>)}
            {item.additionalNote && <p className="text-lg text-white  italic">{item.additionalNote}</p>}
            {item.advantages && (<div><h4 className="text-lg font-semibold mb-2">Advantages</h4>{renderList(item.advantages)}</div>)}
            {item.applications && (<div><h4 className="text-lg font-semibold mb-2">Applications</h4>{renderList(item.applications)}</div>)}
            {item.faq && (<div><h4 className="text-lg font-semibold mb-2">FAQs</h4>{renderFaq(item.faq)}</div>)}
        </div>
    );
};

const ProductsPage: React.FC = () => {
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
    };
    const handleSectionSelect = (categoryId: string, section: string) => {
        setSelectedSection(prev => ({ ...prev, [categoryId]: section }));
    };
    return (
        <>
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
                    select option {
                        background-color: grey;
                        color: white;
                    }
                    select option:hover {
                        background-color: #e3b37f;
                    }
                `
            }} />
            <div className="bg-brand-dark py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: 'url(/stockvalve.jpg.png)' }}>
                <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl lg:text-5xl font-extrabold gradient-text">Our Products</h1>
                        <p className="mt-4 text-lg text-white  max-w-3xl mx-auto">
                            Explore our comprehensive range of high-quality, precision-engineered components for various industrial applications.
                        </p>
                    </div>

                    <div className="sticky top-16 bg-brand-light py-4 z-40 mb-12 border-b-2 border-brand-yellow">
                    <div className="container mx-auto flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto whitespace-nowrap">
                        <h3 className="hidden md:block font-bold text-white flex-shrink-0">Navigate to:</h3>
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
                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            style={{ backgroundColor: '#FFC400' }}
                        >
                            <option value="">Select a category</option>
                            <option value="valve-components">Valve Components</option>
                            <option value="flanges">Flanges</option>
                            <option value="ms-flanges">MS Flanges</option>
                            <option value="ss-304-flanges">SS 304 Flanges</option>
                            <option value="ms-spacer-flanges">MS Spacer Flanges</option>
                            <option value="ss-316-flanges">SS 316 Flanges</option>
                            <option value="gi-slip-on-flanges">GI Slip-On Flanges</option>
                            <option value="gi-threaded-flanges">GI Threaded Flanges</option>
                            <option value="pipe-fittings">Pipe Fittings</option>
                            <option value="cast-steel-screwed-fittings">Cast Steel Screwed Fittings</option>
                            <option value="ductile-iron-fittings">Ductile Iron Fittings</option>
                            <option value="grooved-fittings">Grooved Fittings</option>
                            <option value="forged-steel-fittings">Forged Steel Fittings</option>
                            <option value="gi-r-brand-fittings">GI R Brand Fittings</option>
                            <option value="gi-fittings">GI Fittings</option>
                            <option value="ss-fittings">Stainless Steel (SS) Fittings</option>
                            <option value="pull-studs">Pull Studs</option>
                            <option value="plug-valves">Plug Valves</option>
                            <option value="control-valves">Control Valves</option>
                            <option value="mild-steel-pins">Mild Steel Pins</option>
                            <option value="partition-plate-die">Partition Plate Die</option>
                            <option value="ball-valve-seat-ring">Ball Valve Seat Ring</option>
                            <option value="solenoid-valves">Solenoid Valves</option>
                        </select>
                    </div>
                </div>

                    {productData.filter(cat => !selectedCategory || selectedCategory === cat.id).map((categoryData, catIndex) => (
                        <section key={categoryData.id} id={categoryData.id} className="mb-20 scroll-mt-32 animate-fade-in" style={{ animationDelay: `${0.5 + catIndex * 0.2}s` }}>
                            <div className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-bold gradient-text-alt mb-4 border-l-4 border-brand-yellow pl-4">{categoryData.category}</h2>
                                <p className="text-lg text-white ">{categoryData.introduction}</p>
                                {categoryData.uses && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Uses of Forged Steel Fittings</h3>
                                        <ul className="list-none space-y-1">
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
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Components of Grooved Fittings</h3>
                                        {categoryData.components.map((component, index) => (
                                            <div key={index} className="mb-4">
                                                <h4 className="text-xl font-semibold text-brand-yellow mb-2">🔹 {component.title}</h4>
                                                <ul className="list-none space-y-1">
                                                    {component.points.map((point, idx) => (
                                                        <li key={idx} className="flex items-center">
                                                            <span className="text-blue-500 mr-2">•</span>{point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {categoryData.composition && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Composition of Ductile Iron Fittings</h3>
                                        <p className="text-lg text-white mb-2">{categoryData.composition.text}</p>
                                        <ul className="list-none space-y-1 text-white">
                                            {categoryData.composition.points.map((point, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-green-500 mr-2">•</span>{point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.whyChoose && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Why Choose Danesh Industries {categoryData.category}?</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.whyChoose.map((point, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-green-500 mr-2">✔</span>{point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.keyFeatures && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Key Features of {categoryData.category}</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.keyFeatures.map((feature, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">●</span>{feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.advantages && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Benefits of Danesh Industries Flanges</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.advantages.map((adv, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-green-500 mr-2">✔</span>{adv}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.types && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Types of Forged Steel Fittings</h3>
                                        <ul className="list-none space-y-1">
                                            {categoryData.types.map((type, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">•</span>{type}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.applications && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-yellow mb-4">Applications of {categoryData.category}</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.applications.map((app, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">●</span>{app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.selectionGuide && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">How to Select the Right {categoryData.category}</h3>
                                        <p className="text-lg text-brand-dark mb-2">When choosing a {categoryData.category}, consider:</p>
                                        <ul className="list-none space-y-2 text-lg text-brand-dark">
                                            {categoryData.selectionGuide.map((guide, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">●</span>{guide}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.limitations && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">{categoryData.id === 'grooved-fittings' ? 'Disadvantages of Grooved Fittings' : `Limitations of ${categoryData.category}`}</h3>
                                        <ul className="list-none space-y-2 text-lg text-brand-dark">
                                            {categoryData.limitations.map((lim, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-red-500 mr-2">⚠️</span>{lim}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.installationConsiderations && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Installation Considerations for {categoryData.category}</h3>
                                        <ul className="list-none space-y-2 text-lg text-brand-dark">
                                            {categoryData.installationConsiderations.map((consideration, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-blue-500 mr-2">●</span>{consideration}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.safetyGuidelines && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-blue mb-4">{categoryData.id === 'ductile-iron-fittings' ? 'Maintenance & Installation' : `Workplace Safety Guidelines for ${categoryData.category}`}</h3>
                                        <ul className="list-none space-y-2 text-lg text-white">
                                            {categoryData.safetyGuidelines.map((guideline, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="text-red-500 mr-2">⚠️</span>{guideline}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {categoryData.faq && (
                                    <div className="mt-6">
                                        <h3 className="text-2xl font-bold text-brand-yellow mb-4">{categoryData.category} FAQ</h3>
                                        <div className="space-y-4">
                                            {categoryData.faq.map((faq, index) => (
                                                <div key={index}>
                                                    <p className="font-bold text-brand-yellow">Q{index + 1}. {faq.q}</p>
                                                    <p className="text-white">A: {faq.a}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <select
                                    value={selectedItem[categoryData.id] || ''}
                                    onChange={(e) => handleItemSelect(categoryData.id, e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                >
                                    <option value="">Select an item</option>
                                    {categoryData.items.map((item, index) => (
                                        <option key={index} value={item.name}>{item.name}</option>
                                    ))}
                                </select>
                                {selectedItem[categoryData.id] && (
                                    <ProductDetail item={categoryData.items.find(item => item.name === selectedItem[categoryData.id])} />
                                )}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
