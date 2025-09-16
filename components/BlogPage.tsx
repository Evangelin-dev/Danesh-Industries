import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <svg className="mx-auto h-24 w-24 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v11.494m-9-5.747h18" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.439 12c0 4.1-3.328 7.439-7.439 7.439S4.561 16.1 4.561 12 7.889 4.561 12 4.561s7.439 3.328 7.439 7.439z" />
                    </svg>

                    <h1 className="text-4xl font-extrabold text-brand-dark mt-8 mb-4">Industry Insights Coming Soon!</h1>
                    <p className="mt-4 text-lg text-brand-gray mb-8">
                        We are currently curating valuable content, including industry trends, product application guides, and technical articles on valves, flanges, and fittings. Please check back later to explore our blog.
                    </p>
                    <Link 
                        to="/" 
                        className="bg-brand-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;