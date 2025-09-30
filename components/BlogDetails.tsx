import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
  // useParams extracts the 'slug' from the URL path (e.g., /blogs/my-blog-slug)
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Only fetch if a slug is available
    if (!slug) {
        setLoading(false);
        setError("Error: Blog slug is missing from URL.");
        return;
    }

    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://portal.botdigitalsolutions.com/api/blogs/${slug}?access_key=42c8e913-0d5d-4e30-817b-adb9261dd3e2`
        );

        if (!response.ok) {
            // Handle HTTP error statuses (404, 500, etc.)
            throw new Error(`Failed to fetch blog: HTTP status ${response.status}`);
        }
        
        const jsonResponse = await response.json();

        // Check for success flag in the API response structure
        if (!jsonResponse.success || !jsonResponse.data) {
            throw new Error("API response was unsuccessful or data is missing.");
        }

        // Set the blog state to the 'data' field from the API response
        setBlog(jsonResponse.data);

      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error loading blog. Please check the network connection or slug.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]); // Depend on slug so the fetch runs when the slug changes

  // --- Conditional Rendering for States ---

  if (loading) return <p className="text-center py-6">Loading blog...</p>;
  if (error) return <p className="text-center text-red-500 font-bold">{error}</p>;
  // Check if blog is null/undefined after loading finishes
  if (!blog) return <p className="text-center">Blog not found.</p>;

  // --- Main Blog Content Rendering ---

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
      />
      
      {/* Title and Metadata */}
      <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
      <p className="text-gray-500 text-sm mt-2">
        {new Date(blog.date).toLocaleDateString()} • {blog.time_to_read}
      </p>
      
      {/* Description */}
      <p className="mt-4 text-gray-700 font-semibold">{blog.description}</p>

      <hr className="my-8" />
      
      {/* Full Content (rendered as HTML) */}
      {/* NOTE: Ensure you trust the source of the HTML content before using dangerouslySetInnerHTML */}
      <div
        className="prose prose-lg mt-6"
        dangerouslySetInnerHTML={{ __html: blog.content }}
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