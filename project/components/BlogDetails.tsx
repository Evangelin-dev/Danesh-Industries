import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import SEO from './SEO';
// Removed: import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Removed: import BlogDetails from "./BlogDetails"; // This was likely a typo or unnecessary import

// Define the type for the blog data based on your successful API response's 'data' object
type Blog = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  time_to_read: string;
};

const BlogDetail = () => {
  const { t, language } = useLanguage();
  // useParams extracts the 'slug' from the URL path (e.g., /blogs/my-blog-slug)
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log("BlogDetail: Component mounted/updated with slug:", slug, "language:", language);

  useEffect(() => {
    // Only fetch if a slug is available
    if (!slug) {
        setLoading(false);
        setError("Error: Blog slug is missing from URL.");
        return;
    }

    const fetchBlog = async () => {
      try {
        // Add language parameter to API request
        const apiUrl = language === 'hi'
          ? `https://portal.botdigitalsolutions.com/api/blogs/${slug}?access_key=42c8e913-0d5d-4e30-817b-adb9261dd3e2&lang=hi`
          : `https://portal.botdigitalsolutions.com/api/blogs/${slug}?access_key=42c8e913-0d5d-4e30-817b-adb9261dd3e2`;

        console.log("BlogDetail: Starting fetch for slug:", slug);
        console.log("BlogDetail: API URL:", apiUrl);
        
        const fetchOptions = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        };

        console.log("BlogDetail: Making fetch request...");
        const response = await fetch(apiUrl, fetchOptions);
        console.log("BlogDetail: Response received, status:", response.status);
        console.log("BlogDetail: Response statusText:", response.statusText);

        if (!response.ok) {
            console.error("BlogDetail: HTTP error, status:", response.status);
            throw new Error(`Failed to fetch blog: HTTP status ${response.status}`);
        }
        
        console.log("BlogDetail: Response is OK, attempting to parse JSON...");
        let jsonResponse;
        try {
          jsonResponse = await response.json();
          console.log("BlogDetail: ✓ JSON parsed successfully");
          console.log("BlogDetail: Response has", Object.keys(jsonResponse || {}).length, "keys");
          console.log("BlogDetail: Keys:", Object.keys(jsonResponse || {}));
        } catch (parseErr) {
          console.error("BlogDetail: ✗ JSON parse failed:", parseErr);
          throw new Error("Failed to parse API response as JSON");
        }

        // Handle different API response structures
        let blogData = null;
        
        // Check if response is the blog object itself
        if (jsonResponse && typeof jsonResponse === 'object' && jsonResponse.id) {
          blogData = jsonResponse;
          console.log("BlogDetail: ✓ Using top-level response as blog data");
          console.log("BlogDetail: Blog ID:", blogData.id);
          console.log("BlogDetail: Blog Title:", blogData.title?.substring(0, 50));
        }
        // Check if response wraps blog in 'result' field
        else if (jsonResponse && jsonResponse.result && typeof jsonResponse.result === 'object' && jsonResponse.result.id) {
          blogData = jsonResponse.result;
          console.log("BlogDetail: ✓ Using response.result as blog data");
        }
        // Check if response wraps blog in 'data' field  
        else if (jsonResponse && jsonResponse.data && typeof jsonResponse.data === 'object' && jsonResponse.data.id) {
          blogData = jsonResponse.data;
          console.log("BlogDetail: ✓ Using response.data as blog data");
        }
        
        if (!blogData) {
          console.error("BlogDetail: ✗ No blog data extracted");
          console.error("BlogDetail: Response structure - type:", typeof jsonResponse);
          console.error("BlogDetail: Response keys:", Object.keys(jsonResponse || {}));
          console.error("BlogDetail: Has .id at top level?", jsonResponse?.id !== undefined);
          console.error("BlogDetail: Has .result?", jsonResponse?.result !== undefined);
          console.error("BlogDetail: Has .data?", jsonResponse?.data !== undefined);
          throw new Error("API response does not contain expected blog data structure");
        }
        
        console.log("BlogDetail: ✓ Setting blog state...");
        setBlog(blogData);
        console.log("BlogDetail: ✓ Blog state set successfully");

      } catch (err) {
        console.error("BlogDetail: ✗✗✗ FETCH FAILED ✗✗✗");
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error("BlogDetail: Error type:", err?.constructor?.name);
        console.error("BlogDetail: Error message:", errorMsg);
        if (err instanceof Error) {
          console.error("BlogDetail: Error stack:", err.stack);
        } else {
          console.error("BlogDetail: Error object:", err);
        }
        console.error("BlogDetail: Current slug:", slug);
        console.error("BlogDetail: Current language:", language);
        setError("Error loading blog. Please check the network connection or slug.");
      } finally {
        console.log("BlogDetail: Finally block - setting loading to false");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug, language]); // Depend on slug and language so the fetch runs when either changes

  // --- Conditional Rendering for States ---

  if (loading) return <p className="text-center py-6">{t('blog.loading') || 'Loading blog...'}</p>;
  if (error) return <p className="text-center text-red-500 font-bold">{error}</p>;
  // Check if blog is null/undefined after loading finishes
  if (!blog) return <p className="text-center">{t('blog.notFound') || 'Blog not found.'}</p>;

  // --- Main Blog Content Rendering ---
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {blog && (
        <SEO
          title={language === 'hi' && (blog as any).title_hi ? (blog as any).title_hi : blog.title}
          description={language === 'hi' && (blog as any).description_hi ? (blog as any).description_hi : blog.description}
          url={`/blogs/${slug}`}
        />
      )}
      
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
      />
      
      {/* Title and Metadata */}
      <h1 className="text-3xl font-bold mt-6">
        {language === 'hi' && (blog as any).title_hi ? (blog as any).title_hi : blog.title}
      </h1>
      <p className="text-gray-500 text-sm mt-2">
        {new Date(blog.date).toLocaleDateString()} • {blog.time_to_read}
      </p>

      {/* Description */}
      <p className="mt-4 text-gray-700 font-semibold">
        {language === 'hi' && (blog as any).description_hi ? (blog as any).description_hi : blog.description}
      </p>

      {/* Language indicator for content */}
      {language === 'hi' && (!((blog as any).title_hi && (blog as any).description_hi && (blog as any).content_hi)) && (
        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-md">
          <p className="text-sm text-orange-800">
            {t('blog.contentInHindi') || 'This content is not yet available in Hindi.'}
          </p>
        </div>
      )}

      <hr className="my-8" />
      
      {/* Full Content (rendered as HTML) */}
      {/* NOTE: Ensure you trust the source of the HTML content before using dangerouslySetInnerHTML */}
      <div
        className="prose prose-lg mt-6"
        dangerouslySetInnerHTML={{
          __html: language === 'hi' && (blog as any).content_hi ? (blog as any).content_hi : blog.content
        }}
      />


      {/* *** IMPORTANT FIX: THE NESTED ROUTER WAS REMOVED HERE *** The following block was the cause of the black page and has been deleted:
        
        <Router>
          <Routes>
            <Route path="/blogs/:slug" element={<BlogDetails />} />
          </Routes>
        </Router>
      */}

    </div>
    
  );
};

export default BlogDetail;