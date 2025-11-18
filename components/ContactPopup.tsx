import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const [first_name, ...lastParts] = formData.name.trim().split(' ');
    const last_name = lastParts.join(' ') || '';

    const payload = {
      source: 'website',
      location: formData.location,
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
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', phone: '', location: '', message: '' });
          onClose();
        }, 2000);
      } else {
        const errorText = await response.text();
        window.alert(errorText || 'Something went wrong. Try again.');
      }
    } catch (error: any) {
      window.alert(error?.message || 'Network error. Try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform animate-[slideUp_0.3s_ease-out] overflow-hidden">

        {/* HEADER (compact) */}
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 px-5 py-5">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/logos/daneshlogo.jpg"
                alt="Danesh Industries Logo"
                className="w-12 h-12 rounded-full bg-white p-1.5 shadow"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{t('contactPopup.title')}</h3>
                <p className="text-blue-100 text-xs">We'd love to hear from you</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-all"
            >
              ✕
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="p-5">

          {isSubmitted ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{t('contactPopup.successTitle')}</h4>
              <p className="text-gray-600 text-base">{t('contactPopup.successMessage')}</p>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-3">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* NEW: LOCATION FIELD */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:border-blue-500"
                  placeholder="City / Country"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border rounded-lg focus:border-blue-500 resize-none"
                  placeholder="Write your message"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : t('contactPopup.sendMessage')}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>
    </div>
  );
};

export default ContactPopup;
