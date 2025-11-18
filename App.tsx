import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
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
import BlogDetail from "./components/BlogDetails";
// new pages
import DubaiValveSupplier from "./components/DubaiValveSupplier";
import SaudiValveSupplier from "./components/SaudiValveSupplier";
import OmanValveSupplier from "./components/OmanValveSupplier";
// Country popup component (create src/components/CountryPopup.tsx as instructed)
import CountryPopup from "./components/CountryPopup";


// Define the steps for the quote conversation flow
type ChatStep = 'INITIAL' | 'AWAITING_PHONE' | 'AWAITING_EMAIL' | 'COMPLETED_QUOTE';
type Message = { text: string; isUser: boolean };

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
  const [showCountryPopup, setShowCountryPopup] = useState(false);

  // New state for conversational flow
  const [chatStep, setChatStep] = useState<ChatStep>('INITIAL');
  const [quoteData, setQuoteData] = useState<{ phone: string; email: string }>({ phone: '', email: '' });
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<NodeJS.Timeout | null>(null);

  // --- Utility Functions for Validation and State Management ---

  const isValidPhone = (str: string) => /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(str.replace(/\s+/g, ''));
  const isValidEmail = (str: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str.trim());

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowChat(false);
    }, 30000); // 30 seconds inactivity timeout
  };

  const initialGreeting: Message = {
    text: "Hello! I'm the Danesh Assistant. We are online, chat with us! I can help with: **Get a quote**, **Browse our products**, or **Browse our services**.",
    isUser: false,
  };

  const handleToggleChat = () => {
    const shouldShow = !showChat;
    setShowChat(shouldShow);
    if (shouldShow && messages.length === 0) {
      // Add initial greeting when chat is first opened
      setMessages([initialGreeting]);
      resetTimer();
    }
  };

  // --- Chatbot Logic: Generating Responses and Managing State ---

  const getBotResponseAndNextStep = (userMessage: string, currentStep: ChatStep) => {
    const msg = userMessage.toLowerCase().trim();
    let response = '';
    let nextStep: ChatStep = currentStep;
    let quoteUpdate = { phone: quoteData.phone, email: quoteData.email };

    // 1. Handle Quote Flow Steps
    if (currentStep === 'AWAITING_PHONE') {
      if (isValidPhone(msg)) {
        response = "Thanks, share your **email id** now.";
        nextStep = 'AWAITING_EMAIL';
        quoteUpdate.phone = userMessage;
      } else {
        response = "That doesn't look like a valid phone number. Please provide your **Phone Number** so our team can reach you.";
      }
    } else if (currentStep === 'AWAITING_EMAIL') {
      if (isValidEmail(msg)) {
        response = "Thank you! Our team will reach out to you shortly. You can ask another question, or type **'start'** for main options.";
        nextStep = 'COMPLETED_QUOTE';
        quoteUpdate.email = userMessage;
        // Reset state after a slight delay
        setTimeout(() => setChatStep('INITIAL'), 2000);
      } else {
        response = "Thanks, share your **email id** now."; // Repeat prompt on invalid email
      }
    } 
    
    // 2. Handle Initial State / General Queries
    else { 
      if (msg.includes('quote') || msg.includes('get a quote')) {
        response = "Great! Please share your **Phone Number** so our team can contact you.";
        nextStep = 'AWAITING_PHONE';
        setQuoteData({ phone: '', email: '' }); // Reset quote data
      } else if (msg.includes('browse product') || msg.includes('products link')) {
        response = "Click on the link to know more about products: [Browse our products](/products)";
      } else if (msg.includes('browse service') || msg.includes('services link')) {
        response = "Click on the link to know more about our services: [Browse our services](/services)";
      } else if (msg.includes('start') || msg.includes('home') || msg.includes('option')) {
        response = "I can help with: **Get a quote**, **Browse our products**, or **Browse our services**. How can I help you?";
      } 
      
      // Existing static responses (modified slightly to be more action-oriented)
      else if (msg.includes('product') || msg.includes('flange') || msg.includes('fitting') || msg.includes('valve')) {
        response = "We offer a wide range of precision machined parts. [Browse our products](/products) for details!";
      } else if (msg.includes('contact') || msg.includes('phone') || msg.includes('email') || msg.includes('address')) {
        response = "You can contact us at marketing@daneshindustries.com or call +91 8939 415026. [Visit our Contact Us page](/contact) for full details.";
      } else if (msg.includes('about') || msg.includes('company') || msg.includes('danesh')) {
        response = "Danesh Industries is a leading manufacturer of precision machined parts. [Learn more on our About Us page](/about).";
      } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        response = "Hello! I'm the Danesh Assistant. I can help with: **Get a quote**, **Browse our products**, or **Browse our services**.";
      } else if (msg.includes('thank') || msg.includes('thanks')) {
        response = "You're welcome! Feel free to ask more questions!";
      } else {
        response = "I'm here to help with information about Danesh Industries. Try asking about our Products, Services, or start a task like **'Get a quote'**.";
      }
    }

    return { response, nextStep, quoteUpdate };
  };


  const handleSend = () => {
    if (input.trim()) {
      const userMessage = input.trim();
      
      // 1. Add user message
      setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
      setInput('');

      // 2. Process message and determine next state
      const { response, nextStep, quoteUpdate } = getBotResponseAndNextStep(userMessage, chatStep);

      // 3. Update quote data and chat step immediately
      setQuoteData(quoteUpdate);
      setChatStep(nextStep);

      // 4. Respond with bot message after a delay
      setTimeout(() => {
        setMessages(prev => {
          // Check if we need to display a special message based on the step transition
          let finalResponse = response;
          if (nextStep === 'COMPLETED_QUOTE') {
            // Optional: Log or send quote data externally here
            console.log("Quote Submitted:", quoteUpdate); 
          }

          // Simple markdown rendering for links (replace [Text](url) with HTML link)
          const renderedText = finalResponse.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (match, text, url) => {
            return `<a href="${url}" class="text-brand-blue underline hover:text-blue-700" onclick="document.querySelector('.chatbot-close-button').click();">${text}</a>`;
          });

          return [...prev, { text: renderedText, isUser: false }];
        });
        resetTimer();
      }, 500);

      resetTimer();
    }
  };


  // --- Hooks for Timers and Cleanup ---

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

  // --- Render Component ---

  return (
    <HelmetProvider>
      <LanguageProvider>
        {/* Defined a custom CSS color for branding for demonstration */}
        <style>{`
          .bg-brand-dark { background-color: #1a365d; } /* Dark Blue/Navy */
          .text-brand-dark { color: #1a365d; }
          .text-brand-blue { color: #3b82f6; } /* Standard Blue */
          .bg-brand-blue { background-color: #3b82f6; }
          .bg-brand-light { background-color: #f7f7f9; }
        `}</style>
        <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-brand-light font-sans">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Keeping existing routes as defined in the user's request */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:categoryId" element={<ProductsPage />} />
              <Route path="/products/:categoryId/:productId" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/capabilities" element={<CapabilitiesPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/valve-supplier-dubai" element={<DubaiValveSupplier />} />
              <Route path="/export/saudi-arabia" element={<SaudiValveSupplier />} />
              <Route path="/export/oman" element={<OmanValveSupplier />} />
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
          
 {/* Floating Country Popup Button */}
<div className="fixed top-32 right-4 z-50">
  <div className="relative">
    {/* Pulsing ring */}
    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
    
    <button
      onClick={() => setShowCountryPopup(true)}
      className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 via-green-400 to-blue-500 hover:from-blue-500 hover:via-green-500 hover:to-blue-600 shadow-2xl flex items-center justify-center text-2xl transition-all hover:scale-110 overflow-hidden group"
      title="Countries we serve"
    >
      <span className="relative z-10 filter drop-shadow-md">🌍</span>
      
      {/* Glossy overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-full"></div>
      
      {/* Hover glow */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-all duration-300"></div>
    </button>
  </div>
</div>

          {/* Doll Chatbot */}
          <div className="fixed bottom-4 right-1 z-50">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleToggleChat}
            >
              <img src="/boticon1.png" alt="Chatbot Doll" className="w-24 h-24 object-contain mx-auto" />
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
                    className="chatbot-close-button text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* Chat Display Area */}
                <div className="flex-1 overflow-y-auto mb-4 p-2 border rounded flex flex-col-reverse">
                  {messages.length === 0 && (
                    <p className="text-gray-500 text-center">Click the doll icon to start chatting!</p>
                  )}
                  {messages.slice().reverse().map((msg, index) => (
                    <div key={messages.length - 1 - index} className={`mb-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
                      {/* Using dangerouslySetInnerHTML to render simple HTML links for browsing, and bolding */}
                      <span
                        className={`inline-block px-3 py-2 rounded-lg text-sm max-w-[85%] ${msg.isUser ? 'bg-brand-blue text-white' : 'bg-gray-200 text-black'}`}
                        dangerouslySetInnerHTML={{
                          __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1')
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* Input Area */}
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
                    placeholder={chatStep === 'AWAITING_PHONE' ? "Enter phone number..." : chatStep === 'AWAITING_EMAIL' ? "Enter email ID..." : "Type your question..."}
                  />
                  <button
                    onClick={handleSend}
                    className="px-4 py-2 bg-brand-blue text-white rounded-r-md hover:bg-blue-600"
                  >
                    Send
                  </button>
                </div>
                {chatStep !== 'INITIAL' && chatStep !== 'COMPLETED_QUOTE' && (
                  <p className="text-xs text-red-500 mt-2 text-center">
                    **Active conversation: Please enter your {chatStep === 'AWAITING_PHONE' ? 'phone number' : 'email ID'}.**
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Country Popup */}
          <CountryPopup
            isOpen={showCountryPopup}
            onClose={() => setShowCountryPopup(false)}
          />
        </div>
      </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
