import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const highlights = [
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-10 w-10 text-brand-blue'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
				/>
			</svg>
		),
		title: 'Precision Machining & Reverse Engineering',
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-10 w-10 text-brand-blue'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
				/>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
				/>
			</svg>
		),
		title: 'Wide Range of Industrial Fittings & Flanges',
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-10 w-10 text-brand-blue'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3'
				/>
			</svg>
		),
		title: 'Global Standard Compliance',
	},
	{
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-10 w-10 text-brand-blue'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path d='M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' />
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8a1 1 0 001-1z'
				/>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M18 12h-5'
				/>
			</svg>
		),
		title: 'Timely Delivery & Proven Reliability',
	},
];

const testimonials = [
	{
		quote: 'Thanks for the fast delivery within a short span.',
		author: 'Arun Kumar',
		company: 'Flowserve Sanmar Ltd',
		logo: '/logos/flowserve-sanmar.jpeg', // Updated with logo from logos.docx
	},
	{
		quote:
			'The supply of materials we received was timely and of high quality. The consistency in your deliveries has helped us maintain our production schedule smoothly. Keep up the good work!',
		author: 'Karthick',
		company: 'Armstrong International Pvt Ltd',
		logo: '/logos/armstrong-international.png', // Updated with logo from logos.docx
	},
	{
		quote:
			'Danesh Industries has been a reliable partner for our critical valve components. Their precision machining is top-notch.',
		author: 'Priya Singh',
		company: 'IGP Engineers',
		logo: '/logos/priyasingh.jpeg', // Updated with logo from logos.docx
	},
	{
		quote:
			'The quality of the flanges we ordered exceeded our expectations. Excellent service and support from their team.',
		author: 'Rajesh Menon',
		company: 'VK Fasteners',
		logo: '/logos/vkfasteners.jpeg', // Updated with logo from logos.docx
	},
	{
		quote:
			'We appreciate the custom solutions and the attention to detail. Danesh Industries is our go-to for specialized fittings.',
		author: 'Anjali Verma',
		company: 'Autosys Pvt Ltd',
		logo: '/logos/autosys.jpeg', // Updated with logo from logos.docx
	},
];

const HomePage: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const backgroundStyle = {
		backgroundImage:
			"url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed', // This makes the background fixed while scrolling
	};

	const organizationStructuredData = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Danesh Industries",
		"description": "Manufacturer of precision machined parts, socket weld fittings, flanges, valves, and assemblies for industrial applications.",
		"url": "https://daneshindustries.com",
		"logo": "https://daneshindustries.com/logos/daneshlogo.jpg",
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+91-XXXX-XXXXXX", // Replace with actual phone
			"contactType": "Customer Service"
		},
		"address": {
			"@type": "PostalAddress",
			"addressCountry": "IN"
		},
		"sameAs": [
			// Add social media URLs if available
		]
	};

	return (
		<>
			<SEO
				title="Danesh Industries - Precision Machined Parts Manufacturer"
				description="Leading manufacturer of precision machined parts, socket weld fittings, flanges, valves, and industrial assemblies. Serving oil & gas, petrochemical, and process industries with global quality standards."
				keywords="precision machining, industrial fittings, flanges, valves, socket weld fittings, Danesh Industries, manufacturing, oil & gas components"
				url="/"
				structuredData={organizationStructuredData}
			/>
			<style
				dangerouslySetInnerHTML={{
					__html: `
          @keyframes slideshow {
            0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
            20% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'); }
            40% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'); }
            60% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'); }
            80% { background-image: url('https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=2070&auto=format&fit=crop'); }
            100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
          }
          @keyframes slide-in-up {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-in {
            animation: slide-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          @keyframes bounce-in {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-bounce-in {
            animation: bounce-in 0.8s ease-out forwards;
            opacity: 0;
          }
        `,
				}}
			/>
			{/* Hero Section - Updated */}
			<section
				className='relative text-white py-20 md:py-32'
				style={backgroundStyle}
			>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80'></div>
				<div className='container mx-auto px-6 text-center relative z-10'>
					{/* <img src='/logos/daneshlogo.jpg' alt='Danesh Industries Logo' className='mx-auto mb-6 w-32 h-32 md:w-48 md:h-48' /> */}
					<h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-4'>
						Engineered for Excellence.
					</h1>
					<h2 className='text-4xl md:text-6xl font-extrabold leading-tight mb-6'>
						Built for Performance.
					</h2>
					<p className='text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200'>
						Manufacturing precision machined parts, socket weld fittings, flanges,
						valves, and assemblies — with global quality standards.
					</p>
					<div className='flex justify-center space-x-4'>
						<Link
							to='/products'
							className='bg-brand-blue hover:bg-[#FFE5B4] hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105'
						>
							View Products
						</Link>
						<Link
							to='/contact'
							className='bg-brand-yellow hover:bg-[#FFE5B4] hover:text-gray-800 text-brand-dark font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105'
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>

			{/* Highlights Section - Updated */}
			<section
				className='py-20 relative'
				style={backgroundStyle}
			>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-85'></div>
				<div className='relative z-10'>
					<div className='container mx-auto px-6'>
						<h2 className='text-3xl font-bold text-center text-white mb-12 animate-bounce-in'>
							Why Choose Us?
						</h2>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
							{highlights.map((item, index) => (
								<div
									key={index}
									className='text-center p-6 bg-black text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-in'
									style={{ animationDelay: `${index * 0.2}s` }}
								>
									<div className='flex justify-center mb-4 hover:animate-pulse transition-all duration-300'>
										{item.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2 hover:text-brand-yellow transition-colors duration-300'>
										{item.title}
									</h3>
									
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* YouTube video embed */}
			<div className="container mx-auto px-6 py-4 ">
				<div className="flex justify-end"> {/* Aligns content to the right */}
					<div className="w-full md:w-1/2"> {/* Takes up half width on medium screens and up */}
						<iframe
							className='w-full aspect-video rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
							src='https://www.youtube.com/embed/R2eZH0n2Gd0'
							title='Company Overview'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>

			{/* Testimonials Section */}
			<section className='bg-brand-light py-20 relative' style={{ ...backgroundStyle }}>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-85'></div>
				<div className='container mx-auto px-3 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-extrabold text-white'>
							Clientele & Testimonials
						</h2>
						<p className='mt-4 text-lg text-gray-300'>
							Trusted by leading clients in oil & gas, valves, pumps, and engineering
							sectors.
						</p>
					</div>

					<div className='relative max-w-7xl mx-auto'>
						<div className='overflow-hidden relative'>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
								{testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
									<div
										key={index}
										className='bg-black bg-opacity-50 p-8 rounded-lg shadow-lg flex flex-col justify-between h-full transition-all duration-500 hover:transform hover:scale-105'
									>
										<div className='flex-grow'>
											<svg
												className='w-10 h-10 text-brand-yellow mb-4'
												fill='currentColor'
												viewBox='0 0 32 32'
											>
												<path d='M9.333 22.583c0 2.25 1.042 4.125 3.125 5.625l2.208-2.833c-1.042-.667-1.583-1.625-1.583-2.875 0-.917.333-1.625 1-2.125.667-.5 1.5-1.042 2.5-1.625 1.25-.75 2.167-1.542 2.75-2.375.583-.833.875-1.833.875-3 0-2.417-.917-4.417-2.75-6S15.417 1 13 1c-2.417 0-4.417.875-6 2.625S4 7.583 4 10.333c0 3.083.833 5.75 2.5 8 1.667 2.25 3.833 3.25 3.833 4.25z'></path>
											</svg>
											<p className='text-white text-lg italic mb-6'>
												{`"${testimonial.quote}"`}
											</p>
										</div>
										<div className='flex justify-between items-end'>
											<div>
												<p className='font-bold text-brand-yellow'>
													{testimonial.author}
												</p>
												<p className='text-gray-300'>{testimonial.company}</p>
											</div>
											{testimonial.logo && (
												<img
													src={testimonial.logo}
													alt={testimonial.company}
													className='h-12 w-auto object-contain'
												/>
											)}
										</div>
									</div>
								))}
							</div>
						</div>

						<button
							onClick={handlePrev}
							className='absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition'
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
							</svg>
						</button>
						<button
							onClick={handleNext}
							className='absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition'
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
							</svg>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
