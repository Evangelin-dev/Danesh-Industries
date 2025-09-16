import React, { useState } from 'react';

const testimonials = [
    {
        quote: "Thanks for the fast delivery within a short span.",
        author: "Arun Kumar",
        company: "Flowserve Sanmar Ltd",
        logo: "/logos/flowserve-sanmar.jpeg" // Updated with logo from logos.docx
    },
    {
        quote: "The supply of materials we received was timely and of high quality. The consistency in your deliveries has helped us maintain our production schedule smoothly. Keep up the good work!",
        author: "Karthick",
        company: "Armstrong International Pvt Ltd",
        logo: "/logos/armstrong-international.png" // Updated with logo from logos.docx
    },
    {
        quote: "Danesh Industries has been a reliable partner for our critical valve components. Their precision machining is top-notch.",
        author: "Priya Singh",
        company: "IGP Engineers",
        logo: "/logos/priyasingh.jpeg" // Updated with logo from logos.docx
    },
    {
        quote: "The quality of the flanges we ordered exceeded our expectations. Excellent service and support from their team.",
        author: "Rajesh Menon",
        company: "VK Fasteners",
        logo: "/logos/vkfasteners.jpeg" // Updated with logo from logos.docx
    },
    {
        quote: "We appreciate the custom solutions and the attention to detail. Danesh Industries is our go-to for specialized fittings.",
        author: "Anjali Verma",
        company: "Autosys Pvt Ltd",
        logo: "/logos/autosys.jpeg" // Updated with logo from logos.docx
    }
];

const TestimonialsPage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-brand-dark">Clientele & Testimonials</h1>
                    <p className="mt-4 text-lg text-brand-gray">Trusted by leading clients in oil & gas, valves, pumps, and engineering sectors.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative h-80">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between h-full">
                                    <div className="flex-grow">
                                        <svg className="w-10 h-10 text-brand-blue mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                            <path d="M9.333 22.583c0 2.25 1.042 4.125 3.125 5.625l2.208-2.833c-1.042-.667-1.583-1.625-1.583-2.875 0-.917.333-1.625 1-2.125.667-.5 1.5-1.042 2.5-1.625 1.25-.75 2.167-1.542 2.75-2.375.583-.833.875-1.833.875-3 0-2.417-.917-4.417-2.75-6S15.417 1 13 1c-2.417 0-4.417.875-6 2.625S4 7.583 4 10.333c0 3.083.833 5.75 2.5 8 1.667 2.25 3.833 3.25 3.833 4.25zM22.333 22.583c0 2.25 1.042 4.125 3.125 5.625l2.208-2.833c-1.042-.667-1.583-1.625-1.583-2.875 0-.917.333-1.625 1-2.125.667-.5 1.5-1.042 2.5-1.625 1.25-.75 2.167-1.542 2.75-2.375.583-.833.875-1.833.875-3 0-2.417-.917-4.417-2.75-6S28.417 1 26 1c-2.417 0-4.417.875-6 2.625s-2.333 3.958-2.333 6.75c0 3.083.833 5.75 2.5 8 1.667 2.25 3.833 3.25 3.833 4.25z"></path>
                                        </svg>
                                        <p className="text-brand-dark text-lg italic mb-6">"{testimonial.quote}"</p>
                                    </div>
                                    <div className="text-right">
                                        <div className={`mb-2 ${testimonial.company === "Armstrong International Pvt Ltd" ? "flex flex-col items-end" : "text-right"}`}>
                                            <p className="font-bold text-brand-blue">{testimonial.author}</p>
                                            {testimonial.logo && (
                                                <img src={testimonial.logo} alt={testimonial.company} className={`mt-2 ml-auto block ${testimonial.company === "VK Fasteners" ? "w-30 h-20" : testimonial.company === "Flowserve Sanmar Ltd" ? "w-48 h-20" : testimonial.company === "Armstrong International Pvt Ltd" ? "w-32 h-10" : "w-16 h-8"}`} />
                                            )}
                                        </div>
                                        <p className="text-sm text-brand-gray">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handlePrev}
                        aria-label="Previous testimonial"
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                    >
                        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next testimonial"
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
                    >
                        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsPage;
