import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactPopup from './ContactPopup';
import { useLanguage } from '../contexts/LanguageContext';

// Translation function for blog content
const translateBlogContent = (blogs: any[], t: (key: string) => string) => {
  return blogs.map((blog: any) => {
    // If API already provides Hindi content, use it
    if (blog.title_hi && blog.description_hi) {
      return blog;
    }

    // Otherwise, return original content (for now)
    // In a production environment, you would implement:
    // 1. Google Translate API integration
    // 2. Azure Translator Text API
    // 3. AWS Translate
    // 4. Or maintain manual translations

    return {
      ...blog,
      title_hi: blog.title, // Fallback to original
      description_hi: blog.description, // Fallback to original
    };
  });
};



//const BlogPage: React.FC = () => {




//const BlogPage = () => {
const BlogPage: React.FC = () => {
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




  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Add language parameter to API request
        const apiUrl = language === 'hi'
          ? "https://portal.botdigitalsolutions.com/api/blogs/?access_key=42c8e913-0d5d-4e30-817b-adb9261dd3e2&lang=hi"
          : "https://portal.botdigitalsolutions.com/api/blogs/?access_key=42c8e913-0d5d-4e30-817b-adb9261dd3e2";

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(t('blog.error') || "Failed to fetch blogs");
        }
        const data = await response.json();

        // Translate blog content if API doesn't support Hindi
        let blogsData = data.results || [];
        if (language === 'hi' && blogsData.length > 0) {
          blogsData = translateBlogContent(blogsData, t);
        }

        setBlogs(blogsData);
      } catch (err) {
        setError(t('blog.error') || "Error loading blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [language, t]);

  if (loading) return <p className="text-center py-6">{t('blog.loading') || 'Loading blogs...'}</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // ✅ Show fallback if no blogs
  if (blogs.length === 0) {
    return (
      <div
        className="relative min-h-screen py-20"
        style={{
          backgroundImage: "url(/logos/Industrial-Valves-manufacturers.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <svg
              className="mx-auto h-24 w-24 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 6.253v11.494m-9-5.747h18"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19.439 12c0 4.1-3.328 7.439-7.439 7.439S4.561 16.1 4.561 12 7.889 4.561 12 4.561s7.439 3.328 7.439 7.439z"
              />
            </svg>

            <h1 className="text-4xl font-extrabold text-white mt-8 mb-4">
              {t('blog.comingSoon.title') || 'Industry Insights Coming Soon!'}
            </h1>
            <p className="mt-4 text-lg text-gray-200 mb-8">
              {t('blog.comingSoon.description') || 'We are currently curating valuable content, including industry trends, product application guides, and technical articles on valves, flanges, and fittings. Please check back later to explore our blog.'}
            </p>
            <Link
              to="/"
              className="bg-brand-yellow hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block"
            >
              {t('blog.returnHome') || 'Return to Home'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Page Header */}
      <div className="py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          {t('blog.companyName') || 'Danesh Industries'}
        </h1>
        <h2 className="text-3xl mt-2 font-serif">{t('blog.title') || 'Blog'}</h2>
      </div>

      {/* Blog Cards */}
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white text-black rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Blog Image */}
              <div className="md:w-1/3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="md:w-2/3 p-6">
                <p className="text-sm text-gray-500 flex items-center gap-3">
                  {new Date(blog.date).toLocaleDateString()} • {blog.time_to_read}
                </p>
                <h2 className="text-xl font-semibold mt-2">
                  {language === 'hi' && blog.title_hi ? blog.title_hi : blog.title}
                </h2>
                <p className="text-gray-700 mt-2 line-clamp-3">
                  {language === 'hi' && blog.description_hi ? blog.description_hi : blog.description}
                </p>
                {/* Language indicator */}
                {language === 'hi' && (!blog.title_hi || !blog.description_hi) && (
                  <p className="text-xs text-orange-600 mt-1">
                    {t('blog.englishContent') || 'This content is in English.'}
                  </p>
                )}
                {/* <Link to={`/blogs/${blog.slug}`}

                  className="text-blue-600 font-medium mt-3 inline-block hover:underline"
                key={blog.id}>
                  Read more
                </Link> */}

  <Link to={`/blogs/${blog.slug}`} style={{ color: 'blue' }}>
    {t('blog.readMore') || 'Read More'}
  </Link>

{/* 
{blogs.map(blog => (
  <Link to={`/blogs/${blog.slug}`} key={blog.id}>
    Read More
  </Link>
))} */}



              </div>
            </div>
          </div>
        ))}
      </div>
      			{/* Contact Popup */}
			<ContactPopup
				isOpen={showContactPopup}
				onClose={() => setShowContactPopup(false)}
			/>

    </div>
  );
};

export default BlogPage;
