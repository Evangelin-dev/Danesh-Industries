import React from 'react';
import { Link } from 'react-router-dom';

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

const HomePage: React.FC = () => {
	const backgroundStyle = {
		backgroundImage:
			"url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop')",
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed', // This makes the background fixed while scrolling
	};

	return (
		<>
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
									<iframe
										className='w-full h-96 rounded-2xl shadow-lg'
										src={item.title === "Wide Range of Industrial Fittings & Flanges" ? "https://www.youtube.com/embed/example2" : "https://www.youtube.com/embed/-PDEwil52Lg"}
										title='YouTube Shorts Video'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										allowFullScreen
									></iframe>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;