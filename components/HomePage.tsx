import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import ContactPopup from './ContactPopup';
import BannerCarousel from './BannerCarousel';
import { useLanguage } from '../contexts/LanguageContext';



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
		key: 'precisionMachining',
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
		key: 'industrialFittings',
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
		key: 'globalStandards',
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
		key: 'timelyDelivery',
	},
];

const testimonials = [
	{
		quoteKey: 'home.testimonials.quote1',
		author: 'Arun Kumar',
		company: 'Flowserve Sanmar Ltd',
		logo: '/logos/flowserve-sanmar.jpeg', // Updated with logo from logos.docx
	},
	{
		quoteKey: 'home.testimonials.quote2',
		author: 'Karthick',
		company: 'Armstrong International Pvt Ltd',
		logo: '/logos/armstrong-international.png', // Updated with logo from logos.docx
	},
	{
		quoteKey: 'home.testimonials.quote3',
		author: 'Priya Singh',
		company: 'IGP Engineers',
		logo: '/logos/priyasingh.jpeg', // Updated with logo from logos.docx
	},
	{
		quoteKey: 'home.testimonials.quote4',
		author: 'Rajesh Menon',
		company: 'VK Fasteners',
		logo: '/logos/vkfasteners.jpeg', // Updated with logo from logos.docx
	},
	{
		quoteKey: 'home.testimonials.quote5',
		author: 'Anjali Verma',
		company: 'Autosys Pvt Ltd',
		logo: '/logos/autosys.jpeg', // Updated with logo from logos.docx
	},
];







const HomePage: React.FC = () => {
	const { t, language } = useLanguage();
	const [currentIndex, setCurrentIndex] = useState(0);
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


	return (
		<>
			<SEO
			  title="Danesh Industries - Precision Machined Parts Manufacturer"
			  description="Leading manufacturer of precision machined parts, socket weld fittings, flanges, valves, and industrial assemblies. Serving oil & gas, petrochemical, and process industries with global quality standards."
			  keywords="precision machining, industrial fittings, flanges, valves, socket weld fittings, Danesh Industries, manufacturing, oil & gas components, OEM spare parts, pump spare parts, valve components, pipe fittings, stainless steel flanges, carbon steel flanges, industrial valves, mechanical engineering, reverse engineering, CNC machining, industrial manufacturing, petrochemical equipment, water treatment parts, HVAC components, process industry equipment, custom machining, bulk manufacturing, quality assurance, ASME standards, ASTM standards, DIN standards, industrial supplies Chennai, mechanical components manufacturer, engineering spare parts, durable industrial solutions, high-performance valves, reliable pipe fittings, precision engineering, industrial automation parts"
			  url="/"
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
			{/* Hero Section with Banner Carousel */}
			<section className='relative'>
				<BannerCarousel />
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-60'></div>
				<div className='absolute top-8 left-1/2 -translate-x-1/2 text-center text-white z-10'>
					<h1 className='text-4xl md:text-6xl font-extrabold leading-tight mb-4'>
						{language === 'hi' ? t('home.hero.title1Hindi') : t('home.hero.title1')}
					</h1>
					<h2 className='text-4xl md:text-6xl font-extrabold leading-tight mb-6'>
						{language === 'hi' ? t('home.hero.title2Hindi') : t('home.hero.title2')}
					</h2>
					<p className='text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-200'>
						{language === 'hi' ? t('home.hero.descriptionHindi') : t('home.hero.description')}
					</p>
					<div className='flex justify-center space-x-4'>
						<Link
							to='/products'
							className='bg-brand-blue hover:bg-[#FFE5B4] hover:text-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105'
						>
							{language === 'hi' ? 'उत्पाद देखें' : t('home.hero.viewProducts')}
						</Link>
						<Link
							to='/contact'
							className='bg-brand-yellow hover:bg-[#FFE5B4] hover:text-gray-800 text-brand-dark font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105'
						>
							{language === 'hi' ? 'संपर्क करें' : t('home.hero.contactUs')}
						</Link>
					</div>
				</div>
			</section>

			{/* Highlights Section - Updated */}
			<section
				className='py-20 relative bg-gray-100'
				style={backgroundStyle}
			>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-85'></div>
				<div className='relative z-10'>
					<div className='container mx-auto px-6'>
						<h2 className='text-3xl font-bold text-center text-white mb-12 animate-bounce-in'>
							{t('home.highlights.title')}
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
										{t(`home.highlights.${item.key}`)}
									</h3>

								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* YouTube video embed */}
			{/* <div className="container mx-auto px-6 py-4 ">
				<div className="flex justify-end"> {/* Aligns content to the right */}
					 {/* <div className="w-full md:w-1/2"> {/* Takes up half width on medium screens and up */}
						{/* <iframe
							className='w-full aspect-video rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
							src='https://www.youtube.com/embed/R2eZH0n2Gd0'
							title='Company Overview'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe> */}
					{/* </div>  */} 
				{/* </div> */}
			{/* </div> */} 

			{/* Chatbot Section
			/*<section className="py-10 bg-white">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-2xl font-bold text-brand-dark mb-4">Chat with Danesh Assistant</h2>
					<img src="/boticon1.png" alt="Chatbot Doll" className="w-24 h-24 object-contain mx-auto" />
				</div>
			</section>*/ }


{/* poster="/path/to/thumbnail.jpg" */}
{/* <video autoplay muted loop poster="banner.jpg">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support video.
</video> */}



			{/* Sample Videos Section */}
			<section className="py-21 bg-gray-100">
				<div className="container mx-auto px-6 py-4">
					<h2 className="text-3xl font-bold text-center text-brand-dark mb-12">{t('home.machineryInAction.title')}</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center min-h-[300px] flex flex-col justify-end">
							<h4 className="text-xl font-semibold text-brand-blue mb-4">{t('home.machineryInAction.drilling')}</h4>
							<video  muted loop poster="banner1.png"
							className='w-full aspect-video rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
								controls
								preload="metadata"
								style={{ height: '500px' }}
							>
								<source src="/sample1.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="text-center min-h-[300px] flex flex-col justify-end">
							<h4 className="text-xl font-semibold text-brand-blue mb-4">{t('home.machineryInAction.inspection')}</h4>
							<video  muted loop poster="banner2.png"
								className="w-full rounded-lg shadow-lg"
								controls
								preload="metadata"
								// style={{ objectFit: 'cover', height: '250px' }}
								style={{height:'500px'}}
							>
								<source src="/sample2.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
						<div className="text-center min-h-[300px] flex flex-col justify-end">
							<h4 className="text-xl font-semibold text-brand-blue mb-4">{t('home.machineryInAction.cncTurning')}</h4>
							<video  muted loop poster="/banner3.png"
								className="w-full rounded-lg shadow-lg"
								controls
								preload="metadata"
								style={{ height: '500px' }}
							>
								<source src="/sample3.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</section>
            

			{/* Testimonials Section */}
			<section className='bg-brand-light py-20 relative' style={{ ...backgroundStyle }}>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-85'></div>
				<div className='container mx-auto px-3 relative z-10'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-extrabold text-white'>
							{t('home.testimonials.title')}
						</h2>
						<p className='mt-4 text-lg text-gray-300'>
							{t('home.testimonials.subtitle')}
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
												{`"${t(testimonial.quoteKey)}"`}
											</p>
										</div>
										<div className='text-right'>
											<p className='text-brand-yellow font-semibold'>{testimonial.company}</p>
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




{/*  about section content  adding*/}

                    {/* Company Overview Section */}
                    <section className="mt-20 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="company-overview-heading">
                        <h2 id="company-overview-heading" className="text-3xl font-bold text-purple-600 text-center mb-8">
                            {t('home.about.title')}
                        </h2>

                        <div className="text-lg text-brand-dark leading-relaxed space-y-6">
                            <p>
                                {t('home.about.description')}
                            </p>
                        </div>
                    </section>

                    {/* Who We Are Section */}
                    <section className="mt-10 bg-gradient-to-br from-gray-50 to-white p-12 rounded-xl shadow-lg border border-gray-200" aria-labelledby="who-we-are-heading">
                        <div className="text-center mb-8">
                            <h2 id="who-we-are-heading" className="text-3xl font-bold text-brand-blue mb-4 transition-all duration-300 hover:text-yellow-600 hover:scale-105 cursor-pointer inline-block">
                                {t('home.whoWeAre.title')}
                                <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-yellow-500 rounded-full mx-auto mt-2"></div>
                            </h2>
                        </div>
                        <div className="max-w-9xl mx-auto">
                            <div className="bg-white p-12 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="text-lg text-brand-dark leading-relaxed">
                                    <div className="mb-8">
                                        <div className="flex items-start mb-6">
                                            <span className="text-yellow-500 text-2xl mr-4 flex-shrink-0 mt-1">★</span>
                                            <p className="text-left">
                                                {t('home.whoWeAre.description1')}
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-yellow-500 text-2xl mr-4 flex-shrink-0 mt-1">★</span>
                                            <p className="text-left">
                                                {t('home.whoWeAre.description2')}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Key Company Highlights */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-300">
                                            <span className="text-blue-600 text-lg mr-3">◆</span>
                                            <div className="text-center">
                                                <div className="font-bold text-blue-800 text-sm">{t('home.whoWeAre.experience')}</div>
                                                <div className="text-xs text-blue-600">{t('home.whoWeAre.experienceSub')}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300">
                                            <span className="text-green-600 text-lg mr-3">◆</span>
                                            <div className="text-center">
                                                <div className="font-bold text-green-800 text-sm">{t('home.whoWeAre.partnerships')}</div>
                                                <div className="text-xs text-green-600">{t('home.whoWeAre.partnershipsSub')}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-300">
                                            <span className="text-purple-600 text-lg mr-3">◆</span>
                                            <div className="text-center">
                                                <div className="font-bold text-purple-800 text-sm">{t('home.whoWeAre.quality')}</div>
                                                <div className="text-xs text-purple-600">{t('home.whoWeAre.qualitySub')}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-300">
                                            <span className="text-orange-600 text-lg mr-3">◆</span>
                                            <div className="text-center">
                                                <div className="font-bold text-orange-800 text-sm">{t('home.whoWeAre.team')}</div>
                                                <div className="text-xs text-orange-600">{t('home.whoWeAre.teamSub')}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What We Do Section */}
                    <section className="mt-10 bg-gradient-to-br from-white via-gray-50 to-white p-10 rounded-lg shadow-lg border border-gray-100" aria-labelledby="what-we-do-heading">
                        <div className="text-center mb-8">
                            <h2 id="what-we-do-heading" className="text-3xl font-bold text-brand-blue mb-3 relative inline-block">
                                {t('home.whatWeDo.title')}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-blue to-yellow-500 rounded-full"></div>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {t('home.whatWeDo.subtitle')}
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-blue-700 transition-colors duration-300">{t('home.whatWeDo.valveComponents')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-green-700 transition-colors duration-300">{t('home.whatWeDo.flanges')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-purple-700 transition-colors duration-300">{t('home.whatWeDo.giFlanges')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border border-yellow-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-yellow-700 transition-colors duration-300">{t('home.whatWeDo.giThreadedFlanges')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100 hover:border-red-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-red-700 transition-colors duration-300">{t('home.whatWeDo.pipeFittings')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-indigo-700 transition-colors duration-300">{t('home.whatWeDo.castSteelFittings')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-pink-50 to-transparent rounded-lg border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-pink-700 transition-colors duration-300">{t('home.whatWeDo.rBrandFittings')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-teal-50 to-transparent rounded-lg border border-teal-100 hover:border-teal-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-teal-700 transition-colors duration-300">{t('home.whatWeDo.groovedFittings')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-orange-50 to-transparent rounded-lg border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-orange-700 transition-colors duration-300">{t('home.whatWeDo.partitionPlates')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-50 to-transparent rounded-lg border border-cyan-100 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-cyan-700 transition-colors duration-300">{t('home.whatWeDo.pullStuds')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-emerald-700 transition-colors duration-300">{t('home.whatWeDo.plugValves')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-violet-50 to-transparent rounded-lg border border-violet-100 hover:border-violet-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-violet-700 transition-colors duration-300">{t('home.whatWeDo.mildSteelPins')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-rose-50 to-transparent rounded-lg border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-rose-700 transition-colors duration-300">{t('home.whatWeDo.ballValveSeatRings')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-amber-50 to-transparent rounded-lg border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-amber-700 transition-colors duration-300">{t('home.whatWeDo.solenoidValves')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-lime-50 to-transparent rounded-lg border border-lime-100 hover:border-lime-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-lime-500 to-lime-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-lime-700 transition-colors duration-300">{t('home.whatWeDo.cageControlValve')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-sky-50 to-transparent rounded-lg border border-sky-100 hover:border-sky-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-sky-700 transition-colors duration-300">{t('home.whatWeDo.plugControlValve')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-fuchsia-50 to-transparent rounded-lg border border-fuchsia-100 hover:border-fuchsia-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-fuchsia-700 transition-colors duration-300">{t('home.whatWeDo.seatRingValves')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-emerald-700 transition-colors duration-300">{t('home.whatWeDo.actuatorCylinder')}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Flanges Applications Section */}
                    <section className="mt-10 bg-white p-10 rounded-lg shadow-lg" aria-labelledby="flanges-applications-heading">
                        <div className="text-center mb-8">
                            <h2 id="flanges-applications-heading" className="text-3xl font-bold text-brand-blue mb-3 transition-all duration-300 hover:text-purple-600 hover:scale-105 cursor-pointer inline-block">
                                {t('home.flanges.title')}
                                <div className="w-32 h-1 bg-gradient-to-r from-brand-blue to-purple-500 rounded-full mx-auto mt-2"></div>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-blue-700 transition-colors duration-300">{t('products.flanges.applications.1')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-transparent rounded-lg border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-green-700 transition-colors duration-300">{t('products.flanges.applications.2')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-50 to-transparent rounded-lg border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-purple-700 transition-colors duration-300">{t('products.flanges.applications.3')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-transparent rounded-lg border border-yellow-100 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-yellow-700 transition-colors duration-300">{t('products.flanges.applications.4')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-transparent rounded-lg border border-red-100 hover:border-red-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-red-700 transition-colors duration-300">{t('products.flanges.applications.5')}</span>
                                </div>
                            </div>
                            <div className="group">
                                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-indigo-50 to-transparent rounded-lg border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-300">
                                    <div className="w-3 h-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex-shrink-0"></div>
                                    <span className="font-semibold text-brand-blue group-hover:text-indigo-700 transition-colors duration-300">{t('products.flanges.applications.6')}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Services Section */}
                    <section className="mt-10 bg-gray-50 p-8 rounded-lg" aria-labelledby="services-heading">
                        <div className="text-center mb-6">
                            <h2 id="services-heading" className="text-3xl font-bold text-brand-blue mb-2 transition-all duration-300 hover:text-yellow-500 hover:scale-105 cursor-pointer inline-block">
                                {t('home.services.title')}
                                <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-yellow-500 rounded-full mx-auto mt-2"></div>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            <div className="group relative p-8 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-yellow-300/50 transition-all duration-300">
                                            <span className="text-white text-xl group-hover:scale-110 transition-transform duration-300">★</span>
                                        </div>
                                        <div className="font-bold text-brand-blue text-lg group-hover:text-yellow-600 transition-colors duration-300 leading-tight">{t('home.services.precisionMachining')}</div>
                                    </div>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 ml-16 leading-relaxed">{t('home.services.precisionMachiningDesc')}</p>
                                </div>
                            </div>

                            <div className="group relative p-8 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-blue-300/50 transition-all duration-300">
                                            <span className="text-white text-xl group-hover:scale-110 transition-transform duration-300">★</span>
                                        </div>
                                        <div className="font-bold text-brand-blue text-lg group-hover:text-blue-600 transition-colors duration-300 leading-tight">{t('home.services.customComponents')}</div>
                                    </div>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 ml-16 leading-relaxed">{t('home.services.customComponentsDesc')}</p>
                                </div>
                            </div>

                            <div className="group relative p-8 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-purple-300 transform hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-purple-300/50 transition-all duration-300">
                                            <span className="text-white text-xl group-hover:scale-110 transition-transform duration-300">★</span>
                                        </div>
                                        <div className="font-bold text-brand-blue text-lg group-hover:text-purple-600 transition-colors duration-300 leading-tight">{t('home.services.dieMould')}</div>
                                    </div>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 ml-16 leading-relaxed">{t('home.services.dieMouldDesc')}</p>
                                </div>
                            </div>

                            <div className="group relative p-8 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-green-300 transform hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-green-300/50 transition-all duration-300">
                                            <span className="text-white text-xl group-hover:scale-110 transition-transform duration-300">★</span>
                                        </div>
                                        <div className="font-bold text-brand-blue text-lg group-hover:text-green-600 transition-colors duration-300 leading-tight">{t('home.services.threadingGrooving')}</div>
                                    </div>
                                    <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 ml-16 leading-relaxed">{t('home.services.threadingGrooving')}</p>
                                </div>
                            </div>

                            <div className="group relative p-8 bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl hover:shadow-2xl hover:shadow-yellow-200/50 transition-all duration-500 cursor-pointer border border-gray-100 hover:border-yellow-300 transform hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-yellow-300/50 transition-all duration-300">
                                            <span className="text-white text-xl group-hover:scale-110 transition-transform duration-300">★</span>
                                        </div>
                                        <div className="font-bold text-brand-blue text-lg group-hover:text-yellow-600 transition-colors duration-300 leading-tight">{t('home.services.prototypeDevelopment')}</div>
                                    </div>
                                    <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300 ml-16 leading-relaxed">
                                        <div className="mb-2">{t('home.services.prototypeDevelopmentDesc').split(',')[0] + ','}</div>
                                        <div>{t('home.services.prototypeDevelopmentDesc').split(',')[1]}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Our Expertise Section */}
                    <section className="mt-10 bg-white p-8 rounded-lg shadow-lg" aria-labelledby="expertise-heading">
                        <div className="text-center mb-6">
                            <h2 id="expertise-heading" className="text-2xl font-bold text-brand-blue mb-2 transition-all duration-300 hover:text-purple-600 hover:scale-105 cursor-pointer inline-block">
                                {t('home.expertise.title')}
                                <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-purple-500 rounded-full mx-auto mt-2"></div>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-brand-dark">
                            <div className="group p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300 cursor-pointer border border-purple-200 hover:border-purple-400">
                                <div className="flex items-center mb-2">
                                    <span className="text-purple-600 text-xl mr-3 group-hover:scale-125 transition-transform duration-300">◆</span>
                                    <h3 className="text-lg font-semibold text-purple-700 group-hover:text-purple-900 transition-colors duration-300">{t('home.expertise.machinedComponents')}</h3>
                                </div>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.expertise.machinedComponentsDesc')}</p>
                            </div>

                            <div className="group p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300 cursor-pointer border border-blue-200 hover:border-blue-400">
                                <div className="flex items-center mb-2">
                                    <span className="text-blue-600 text-xl mr-3 group-hover:scale-125 transition-transform duration-300">◆</span>
                                    <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-900 transition-colors duration-300">{t('home.expertise.precisionParts')}</h3>
                                </div>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.expertise.precisionPartsDesc')}</p>
                            </div>

                            <div className="group p-4 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-all duration-300 cursor-pointer border border-indigo-200 hover:border-indigo-400">
                                <div className="flex items-center mb-2">
                                    <span className="text-indigo-600 text-xl mr-3 group-hover:scale-125 transition-transform duration-300">◆</span>
                                    <h3 className="text-lg font-semibold text-indigo-700 group-hover:text-indigo-900 transition-colors duration-300">{t('home.expertise.cncParts')}</h3>
                                </div>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.expertise.cncPartsDesc')}</p>
                            </div>

                            <div className="group p-4 rounded-lg bg-gradient-to-br from-violet-50 to-violet-100 hover:shadow-lg transition-all duration-300 cursor-pointer border border-violet-200 hover:border-violet-400">
                                <div className="flex items-center mb-2">
                                    <span className="text-violet-600 text-xl mr-3 group-hover:scale-125 transition-transform duration-300">◆</span>
                                    <h3 className="text-lg font-semibold text-violet-700 group-hover:text-violet-900 transition-colors duration-300">{t('home.expertise.contractManufacturing')}</h3>
                                </div>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.expertise.contractManufacturingDesc')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="mt-10 bg-gray-50 p-10 rounded-lg" aria-labelledby="why-choose-heading">
                        <div className="text-center mb-8">
                            <h2 id="why-choose-heading" className="text-3xl font-bold text-brand-blue mb-3 transition-all duration-300 hover:text-yellow-500 hover:scale-105 cursor-pointer inline-block">
                                {t('home.highlights.title')}

                                <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-yellow-500 rounded-full mx-auto mt-2"></div>
                            </h2>
                        </div>

                        {/* Key Message - Standalone */}
                        <div className="mb-8 text-center max-w-4xl mx-auto">
                            <div className="flex items-center justify-center space-x-4">
                                <span className="text-2xl text-brand-blue flex-shrink-0">◆</span>
                                <p className="text-2xl font-bold text-brand-blue italic">{t('home.whyChoose.message')}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-brand-dark max-w-6xl mx-auto">
                            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">
                                    <span className="font-bold text-blue-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.experience')}</span> {t('home.whyChoose.experienceDesc')}
                                </p>
                            </div>
                            <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                                <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">
                                    {t('home.whyChoose.markets')}
                                    <span className="font-bold text-green-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.india')}</span>,
                                    <span className="font-bold text-green-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.middleEast')}</span>
                                    <span className="font-bold text-green-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.middleEastCountries')}</span>, and
                                    <span className="font-bold text-green-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.southeastAsia')}</span>
                                    <span className="font-bold text-green-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.southeastAsiaCountries')}</span>.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="w-3 h-3 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">
                                    {t('home.whyChoose.advancedMachinery')} <span className="font-bold text-purple-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.advancedMachineryItem')}</span> and
                                    <span className="font-bold text-purple-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.calibration')}</span> testing.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">
                                    <span className="font-bold text-indigo-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.isoCertified')}</span> processes ensuring quality and consistency.
                                </p>
                            </div>
                            <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                                <div className="w-3 h-3 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm">
                                    <span className="font-bold text-orange-800 bg-yellow-200 px-1 rounded">{t('home.whyChoose.fastTurnaround')}</span> {t('home.whyChoose.turnaroundItem')}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Contact Information Section */}
                    <section className="mt-10 bg-white p-10 rounded-lg shadow-lg text-center" aria-labelledby="contact-heading">
                        <h2 id="contact-heading" className="text-2xl font-bold text-brand-blue mb-6">Get In Touch</h2>
                        <div className="space-y-4 text-brand-dark">
                            <p className="text-lg">📧 Email: <span className="font-semibold">marketing@daneshindustries.com</span></p>
                            <p className="text-lg">📞 Phone: <span className="font-semibold">+91 9884001473 | 8939415026</span></p>
                        </div>
                    </section>

                    {/* Contract Manufacturing Section */}
                    <section className="mt-10 bg-gray-50 p-10 rounded-lg" aria-labelledby="contract-manufacturing-heading">
                        <div className="text-center mb-8">
                            <h2 id="contract-manufacturing-heading" className="text-3xl font-bold text-brand-blue mb-3 transition-all duration-300 hover:text-indigo-600 hover:scale-105 cursor-pointer inline-block">
                                {t('home.contractManufacturing.title')}
                                <div className="w-32 h-1 bg-gradient-to-r from-brand-blue via-indigo-500 to-brand-blue rounded-full mx-auto mt-2"></div>
                            </h2>
                        </div>
                        <div className="text-center mb-8">
                            <p className="text-lg text-brand-dark max-w-4xl mx-auto">
                                {t('home.contractManufacturing.description')}
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.india')}</span>,
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.middleEastCountries').replace(/[()]/g, '').split(', ')[0]}</span>,
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.middleEastCountries').replace(/[()]/g, '').split(', ')[1]}</span>,
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.middleEastCountries').replace(/[()]/g, '').split(', ')[2]}</span>,
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.middleEastCountries').replace(/[()]/g, '').split(', ')[3]}</span>,
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.middleEastCountries').replace(/[()]/g, '').split(', ')[4]}</span>,
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.southeastAsiaCountries').replace(/[()]/g, '').split(', ')[0]}</span>, and
                                <span className="font-bold text-black bg-yellow-100 px-2 py-1 rounded-md border border-yellow-300">{t('home.whyChoose.southeastAsiaCountries').replace(/[()]/g, '').split(', ')[1]}</span>.
                            </p>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-indigo-600 mb-4 relative inline-block transition-all duration-300 hover:text-indigo-800 hover:scale-105 cursor-pointer">
                                {t('home.contractManufacturing.ourCapabilities')}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full"></div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-indigo-400 rounded-full"></div>
                            </h3>
                        </div>
                        <div className="max-w-6xl mx-auto mb-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    <div className="group flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md">
                                        <span className="text-yellow-500 text-xl mr-3 flex-shrink-0 group-hover:text-yellow-600 group-hover:scale-125 transition-all duration-300">★</span>
                                        <div className="text-left">
                                            <div className="font-semibold text-gray-800 mb-1 group-hover:text-yellow-700 transition-colors duration-300">{t('home.contractManufacturing.precisionMachining')}</div>
                                            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.contractManufacturing.precisionMachiningDesc')}</p>
                                        </div>
                                    </div>
                                    <div className="group flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md">
                                        <span className="text-yellow-500 text-xl mr-3 flex-shrink-0 group-hover:text-yellow-600 group-hover:scale-125 transition-all duration-300">★</span>
                                        <div className="text-left">
                                            <div className="font-semibold text-gray-800 mb-1 group-hover:text-yellow-700 transition-colors duration-300">{t('home.contractManufacturing.customEngineering')}</div>
                                            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.contractManufacturing.customEngineeringDesc')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    <div className="group flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md">
                                        <span className="text-yellow-500 text-xl mr-3 flex-shrink-0 group-hover:text-yellow-600 group-hover:scale-125 transition-all duration-300">★</span>
                                        <div className="text-left">
                                            <div className="font-semibold text-gray-800 mb-1 group-hover:text-yellow-700 transition-colors duration-300">{t('home.contractManufacturing.fabrication')}</div>
                                            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.contractManufacturing.fabricationDesc')}</p>
                                        </div>
                                    </div>
                                    <div className="group flex items-start p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 hover:shadow-md">
                                        <span className="text-yellow-500 text-xl mr-3 flex-shrink-0 group-hover:text-yellow-600 group-hover:scale-125 transition-all duration-300">★</span>
                                        <div className="text-left">
                                            <div className="font-semibold text-gray-800 mb-1 group-hover:text-yellow-700 transition-colors duration-300">{t('home.contractManufacturing.qualityAssurance')}</div>
                                            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{t('home.contractManufacturing.qualityAssuranceDesc')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-indigo-600 mb-4 transition-all duration-300 hover:text-indigo-800 hover:scale-105 cursor-pointer inline-block">
                                {t('home.contractManufacturing.ourWorkProcess')}
                                <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mx-auto mt-2"></div>
                            </h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8 max-w-7xl mx-auto">
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer hover:border-yellow-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-violet-800 transition-colors duration-300 mb-2">{t('home.contractManufacturing.discussNeeds')}</div>
                                <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2 group-hover:bg-violet-600 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer hover:border-violet-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-yellow-300 transition-colors duration-300 mb-2">{t('home.contractManufacturing.planQuote')}</div>
                                <div className="w-8 h-8 bg-violet-600 rounded-full mx-auto mb-2 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer hover:border-yellow-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-violet-800 transition-colors duration-300 mb-2">{t('home.contractManufacturing.sourceMaterial')}</div>
                                <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2 group-hover:bg-violet-600 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer hover:border-violet-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-yellow-300 transition-colors duration-300 mb-2">{t('home.contractManufacturing.machineFabricate')}</div>
                                <div className="w-8 h-8 bg-violet-600 rounded-full mx-auto mb-2 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer hover:border-yellow-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-violet-800 transition-colors duration-300 mb-2">{t('home.contractManufacturing.qualityCheck')}</div>
                                <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2 group-hover:bg-violet-600 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer hover:border-violet-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-yellow-300 transition-colors duration-300 mb-2">{t('home.contractManufacturing.assembleFinish')}</div>
                                <div className="w-8 h-8 bg-violet-600 rounded-full mx-auto mb-2 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-yellow-400 hover:text-violet-800 group cursor-pointer hover:border-yellow-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-violet-800 transition-colors duration-300 mb-2">{t('home.contractManufacturing.packDeliver')}</div>
                                <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2 group-hover:bg-violet-600 transition-colors duration-300"></div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-violet-600 hover:text-yellow-300 group cursor-pointer hover:border-violet-300">
                                <div className="text-base font-bold text-gray-800 group-hover:text-yellow-300 transition-colors duration-300 mb-2">{t('home.contractManufacturing.support')}</div>
                                <div className="w-8 h-8 bg-violet-600 rounded-full mx-auto mb-2 group-hover:bg-yellow-400 transition-colors duration-300"></div>
                            </div>
                        </div>

                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-brand-blue mb-4">{t('home.faq.title')}</h3>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">{t('home.faq.q1')}</h4>
                                    <p className="text-brand-dark text-sm">{t('home.faq.a1')}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">{t('home.faq.q2')}</h4>
                                    <p className="text-brand-dark text-sm">{t('home.faq.a2')}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">{t('home.faq.q3')}</h4>
                                    <p className="text-brand-dark text-sm">{t('home.faq.a3')}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">{t('home.faq.q4')}</h4>
                                    <p className="text-brand-dark text-sm">{t('home.faq.a4')}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">{t('home.faq.q5')}</h4>
                                    <p className="text-brand-dark text-sm">{t('home.faq.a5')}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-blue mb-2">{t('home.faq.q6')}</h4>
                                    <p className="text-brand-dark text-sm">{t('home.faq.a6')} <span className="font-semibold">{t('home.faq.email')}</span> {t('home.faq.orCall')} <span className="font-semibold">{t('home.faq.phone')}</span> {t('home.faq.withRequirements')}</p>
                                </div>
                            </div>
                        </div>
                    </section>







			{/* Contact Popup */}
			<ContactPopup
				isOpen={showContactPopup}
				onClose={() => setShowContactPopup(false)}
			/>
		</>
	);
};

export default HomePage;

