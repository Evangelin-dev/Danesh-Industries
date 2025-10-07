import React, { useState } from 'react';

const ContactPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Split name into first and last
    const [first_name, ...lastParts] = formData.name.trim().split(' ');
    const last_name = lastParts.join(' ') || '';

    // Build payload
    const payload = {
      source: 'website',
      location: 'Chennai',
      interested_in: 'Lead Generation',
      Other: '',
      access_key: '42c8e913-0d5d-4e30-817b-adb9261dd3e2',
      first_name,
      last_name,
      email: formData.email,
      phone: formData.phone,
      note: formData.message,
    };

    try {
      const response = await fetch('https://portal.botdigitalsolutions.com/api/lead-generate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Lead generated successfully');
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
          onClose();
        }, 2000);
      } else {
        console.error('Failed to submit lead', await response.text());
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-50 rounded-lg shadow-xl w-full max-w-md p-4">
        <div className="flex justify-between items-center p-6 border-b border-brand-light">
          <div className="flex items-center space-x-3 relative">
            <div className="relative">
              <img
                src="/logos/daneshlogo.jpg"
                alt="Danesh Industries Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-3 -right-3 w-3 h-3 bg-green-500 rounded-full animate-bounce opacity-75"></div>
              <div className="absolute -top-5 -right-5 w-2 h-2 bg-yellow-500 rounded-full animate-pulse opacity-75"></div>
            </div>
            <h3 className="text-xl font-bold text-brand-dark">Contact Us</h3>
          </div>
          <button
            onClick={onClose}
            className="text-brand-gray hover:text-brand-dark text-2xl transition-colors duration-300"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h4 className="text-lg font-semibold text-green-600 mb-2">Thank you!</h4>
              <p className="text-brand-gray">Your message has been sent successfully.</p>
            </div>
          ) : (
            <>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-brand-light rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300 resize-none"
                    placeholder="Enter your message"
                  />
                </div>
              </form>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  form="contact-form"
                  className="flex-1 bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-medium"
                  style={{ minHeight: '44px' }}
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-medium"
                  style={{ minHeight: '44px' }}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
