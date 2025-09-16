import React, { useState } from 'react';
import type { JSX } from 'react';

const ContactInfoItem: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-brand-blue">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-brand-dark">{title}</h3>
      <div className="text-brand-dark">{children}</div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
    setFormData({ name: '', email: '', subject: '', message: '' });
  };


  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes contact-slideshow {
            0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
            25% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'); }
            50% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'); }
            75% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'); }
            100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
            opacity: 0;
          }
        `
      }} />
      <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'contact-slideshow 18s infinite' }}>
        <div className="absolute inset-0 bg-white opacity-25"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-brand-dark">Contact Us</h1>
            <p className="mt-4 text-lg text-brand-gray">We're here to help and answer any question you might have.</p>
          </div>

          <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg grid md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Address"
              >
                <p>No 906, 10th Cross Street,</p>
                <p>Venkateswara Nagar, Perungudi,</p>
                <p>Chennai - 600096, Tamil Nadu, India</p>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email"
              >
                <a href="mailto:marketing@daneshindustries.com" className="hover:text-brand-blue transition-colors duration-300">marketing@daneshindustries.com</a>
                <br />
                <a href="mailto:daneshindustries@gmail.com" className="hover:text-brand-blue transition-colors duration-300">daneshindustries@gmail.com</a>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" style={{ animationDelay: '0.5s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Phone"
              >
                <p>Praveen Kumar M: <a href="tel:+918939415026" className="hover:text-brand-blue transition-colors duration-300">+91 8939 415026</a> / <a href="tel:+919962333220" className="hover:text-brand-blue transition-colors duration-300">+91 99623 33220</a></p>
                <p>Arivudainambi D: <a href="tel:+919500071287" className="hover:text-brand-blue transition-colors duration-300">+91 95000 71287</a> / <a href="tel:+919884001473" className="hover:text-brand-blue transition-colors duration-300">+91 98840 01473</a></p>
              </ContactInfoItem>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 animate-fade-in" role="alert">
                  <p className="font-bold">Success!</p>
                  <p>Thank you for your message. We will get back to you shortly.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"/>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-dark">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </form>
              )}
            </div>
          </div>
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">Our Location</h2>
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.301134267781!2d80.2478583152682!3d12.968856990826469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d64758f5555%3A0x95925016e91f2d6f!2sPerungudi%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1628882583568!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Danesh Industries Location"
                  ></iframe>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;