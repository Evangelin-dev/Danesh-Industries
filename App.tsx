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
  const [showTooltip, setShowTooltip] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowChat(false);
    }, 30000);
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

  // Auto-blink tooltip every minute
  useEffect(() => {
    const startTooltipCycle = () => {
      // Show tooltip for 3 seconds
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    };

    // Start first cycle immediately
    startTooltipCycle();

    // Repeat every 30 seconds
    tooltipRef.current = setInterval(startTooltipCycle, 30000);

    return () => {
      if (tooltipRef.current) {
        clearInterval(tooltipRef.current);
      }
    };
  }, []);

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

          {/* WhatsApp Icon with Sparks Effect */}
          <div className="fixed bottom-32 right-4 z-50">
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes spark {
                  0% { transform: scale(0) rotate(0deg); opacity: 1; }
                  50% { transform: scale(1) rotate(180deg); opacity: 0.8; }
                  100% { transform: scale(0) rotate(360deg); opacity: 0; }
                }
                @keyframes sparkle {
                  0%, 100% { opacity: 0; transform: scale(0); }
                  50% { opacity: 1; transform: scale(1); }
                }
                .spark-container::before,
                .spark-container::after {
                  content: '';
                  position: absolute;
                  width: 4px;
                  height: 4px;
                  background: #fbbf24;
                  border-radius: 50%;
                  animation: spark 2s infinite;
                }
                .spark-container::before {
                  top: -8px;
                  right: 8px;
                  animation-delay: 0s;
                }
                .spark-container::after {
                  bottom: -8px;
                  left: 8px;
                  animation-delay: 1s;
                }
                .sparkle-1, .sparkle-2, .sparkle-3 {
                  position: absolute;
                  width: 3px;
                  height: 3px;
                  background: #fbbf24;
                  border-radius: 50%;
                  animation: sparkle 1.5s infinite;
                }
                .sparkle-1 {
                  top: 2px;
                  right: -6px;
                  animation-delay: 0.3s;
                }
                .sparkle-2 {
                  bottom: -6px;
                  right: 2px;
                  animation-delay: 0.6s;
                }
                .sparkle-3 {
                  top: -6px;
                  left: 2px;
                  animation-delay: 0.9s;
                }
                @keyframes blink {
                  0%, 50%, 100% { opacity: 1; }
                  25%, 75% { opacity: 0.3; }
                }
                .whatsapp-blink {
                  animation: blink 3s infinite;
                }
              `
            }} />
            <div className="relative">
              <a
                href="https://wa.me/918939415026?text=Hello%20Danesh%20Industries,%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="relative spark-container whatsapp-blink block w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
                onMouseEnter={() => setWhatsappHovered(true)}
                onMouseLeave={() => setWhatsappHovered(false)}
              >
                <div className="sparkle-1"></div>
                <div className="sparkle-2"></div>
                <div className="sparkle-3"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              {whatsappHovered && (
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-green-600 text-white text-sm rounded shadow-lg whitespace-nowrap">
                  Whatsapp Us
                </div>
              )}
            </div>
          </div>

          {/* Doll Chatbot */}
          <div className="fixed bottom-4 right-1 z-50">

          {/* <img src="/boticon1.png" alt="Chatbot Doll" className="w-24 h-24 object-contain mx-auto" /> */}

            <div
            
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setShowChat(true)}
            >
                        <img src="/boticon1.png" alt="Chatbot Doll" className="w-24 h-24 object-contain mx-auto" />

              {/* <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 drop-shadow-lg hover:scale-110 transition-transform duration-300"
                xmlns="http://www.w3.org/2000/svg"
                
                
              > */}
                {/* Robot Doll Style */}

                          {/* <img src="/boticon1.png" alt="Chatbot Doll" className="w-24 h-24 object-contain mx-auto" /> */}

                {/* <rect x="35" y="25" width="30" height="25" fill="#e5e7eb" stroke="#374151" strokeWidth="2" rx="5" />
                <rect x="40" y="30" width="20" height="15" fill="#3b82f6" stroke="#1e40af" strokeWidth="1" rx="2" />
                <circle cx="45" cy="37" r="2" fill="#ffffff" />
                <circle cx="55" cy="37" r="2" fill="#ffffff" />
                <rect x="47" y="42" width="6" height="3" fill="#374151" rx="1" />
                <rect x="42" y="50" width="16" height="25" fill="#6b7280" stroke="#374151" strokeWidth="2" rx="3" />
                <rect x="38" y="55" width="6" height="15" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" rx="2" />
                <rect x="56" y="55" width="6" height="15" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" rx="2" />
                <circle cx="41" cy="72" r="3" fill="#374151" />
                <circle cx="59" cy="72" r="3" fill="#374151" />
                
              </svg>  */}
              {(isHovered || showTooltip) && (
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black text-white text-sm rounded shadow-lg whitespace-nowrap animate-pulse">
                  How can I help you?
                </div>
              )}
            </div>
          </div>

          {/* Chatbot Modal */}
          {showChat && (
            <div className="fixed bottom-20 right-1 z-50">
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