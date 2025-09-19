import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProductsPage from './components/ProductsPage';
// import ProductDetailPage from './components/ProductDetailPage';
import ServicesPage from './components/ServicesPage';
import TechnologyPage from './components/TechnologyPage';
// import TestimonialsPage from './components/TestimonialsPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import CapabilitiesPage from './components/CapabilitiesPage';
import CertificationsPage from './components/CertificationsPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import AdminPanel from './components/AdminPanel';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowChat(false);
    }, 5000);
  };

  useEffect(() => {
    if (showChat) {
      resetTimer();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showChat]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('product') || msg.includes('flange') || msg.includes('fitting') || msg.includes('valve')) {
      return "We offer a wide range of precision machined parts including flanges, fittings, valves, and more. Visit our Products page for details!";
    }
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address')) {
      return "You can contact us at marketing@daneshindustries.com or call +91 8939 415026. Visit our Contact Us page for full details.";
    }
    if (msg.includes('about') || msg.includes('company') || msg.includes('danesh')) {
      return "Danesh Industries is a leading manufacturer of precision machined parts, flanges, fittings, and valves for industrial applications. Learn more on our About Us page.";
    }
    if (msg.includes('service') || msg.includes('machining') || msg.includes('engineering')) {
      return "We provide precision machining, reverse engineering, and custom manufacturing services. Visit our Services page for more info.";
    }
    if (msg.includes('location') || msg.includes('chennai') || msg.includes('india')) {
      return "We are located in Chennai, Tamil Nadu, India. Find us on the map in our Contact section.";
    }
    if (msg.includes('home')) {
      return "Welcome to our Home page! Here you can learn about our company and offerings.";
    }
    if (msg.includes('capability') || msg.includes('capabilities')) {
      return "Explore our manufacturing capabilities including CNC machining and more. Visit our Capabilities page.";
    }
    if (msg.includes('technolog') || msg.includes('tech')) {
      return "Learn about the advanced technologies we use in our manufacturing processes. Check out our Technology page.";
    }
    if (msg.includes('certification') || msg.includes('certify')) {
      return "We hold various industry certifications. Visit our Certifications page for details.";
    }
    if (msg.includes('blog')) {
      return "Read our latest updates and industry insights on our Blog page.";
    }
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! How can I help you learn more about Danesh Industries? Ask about our products, services, contact, or any page!";
    }
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Feel free to ask more questions.";
    }
    return "I'm here to help with information about Danesh Industries. Try asking about our Products, Services, Contact Us, Technology, or any other page!";
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, isUser: true }]);
      const response = getBotResponse(input);
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, isUser: false }]);
        resetTimer();
      }, 500);
      setInput('');
      resetTimer();
    }
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-brand-light font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:categoryId" element={<ProductsPage />} />
              <Route path="/products/:categoryId/:productId" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/capabilities" element={<CapabilitiesPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>
          <Footer />

          {/* Doll Chatbot */}
          <div className="fixed bottom-4 right-4 z-50">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowChat(true)}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 drop-shadow-lg hover:scale-110 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="30" r="15" fill="#ffdbac" stroke="#000" strokeWidth="1" />
                <rect x="40" y="45" width="20" height="30" fill="#ff69b4" stroke="#000" strokeWidth="1" />
                <circle cx="35" cy="50" r="5" fill="#ffdbac" stroke="#000" strokeWidth="1" />
                <circle cx="65" cy="50" r="5" fill="#ffdbac" stroke="#000" strokeWidth="1" />
                <circle cx="45" cy="75" r="5" fill="#ffdbac" stroke="#000" strokeWidth="1" />
                <circle cx="55" cy="75" r="5" fill="#ffdbac" stroke="#000" strokeWidth="1" />
                <circle cx="48" cy="28" r="2" fill="#000" />
                <circle cx="52" cy="28" r="2" fill="#000" />
                <path d="M45 35 Q50 38 55 35" stroke="#000" strokeWidth="2" fill="none" />
              </svg>
              {isHovered && (
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-sm rounded shadow-lg whitespace-nowrap">
                  How can I help you?
                </div>
              )}
            </div>
          </div>

          {/* Chatbot Modal */}
          {showChat && (
            <div className="fixed bottom-20 right-4 z-50">
              <div className="bg-white rounded-lg p-6 w-80 max-w-sm shadow-lg flex flex-col h-96">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-brand-dark">Danesh Assistant</h3>
                  <button
                    onClick={() => setShowChat(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto mb-4 p-2 border rounded flex flex-col-reverse">
                  {messages.length === 0 && (
                    <p className="text-gray-500 text-center">Ask me anything about Danesh Industries!</p>
                  )}
                  {messages.slice().reverse().map((msg, index) => (
                    <div key={messages.length - 1 - index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                      <span className={`inline-block px-3 py-2 rounded-lg ${msg.isUser ? 'bg-brand-blue text-white' : 'bg-gray-200 text-black'}`}>
                        {msg.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                      resetTimer();
                    }}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Type your question..."
                  />
                  <button
                    onClick={handleSend}
                    className="px-4 py-2 bg-brand-blue text-white rounded-r-md hover:bg-blue-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
