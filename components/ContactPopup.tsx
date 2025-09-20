import React, { useState, useEffect } from 'react';

const ContactPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-full max-w-md p-4">
        <div className="flex justify-between items-center p-6 border-b border-brand-light">
          <h3 className="text-xl font-bold text-brand-dark">Contact Us</h3>
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
                  className="flex-1 bg-brand-blue text-white py-2 px-4 rounded-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-medium"
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
