import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-20">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-8">Privacy Policy</h1>
        <p className="mb-6 text-brand-dark">At Danesh Industries, we value your privacy and are committed to protecting your personal information.</p>
        <div className="prose lg:prose-xl max-w-none text-brand-dark space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Personal Information:</strong> Name, email, phone, company details, billing/shipping address.</li>
              <li><strong>Business Information:</strong> Purchase orders, product requirements.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To process inquiries, quotations, and orders.</li>
              <li>To communicate regarding products and services.</li>
              <li>To improve our services and website.</li>
              <li>To comply with legal requirements.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">3. Data Sharing & Disclosure</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>We do not sell or trade your information.</li>
              <li>Shared only with trusted partners for business purposes.</li>
              <li>Disclosed only if required by law.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">4. Data Security</h2>
            <p>We implement safeguards to protect data against unauthorized access.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">5. Cookies & Tracking</h2>
            <p>Our site may use cookies to improve user experience.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">6. Data Retention</h2>
            <p>We retain data only as long as required for business or legal compliance.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">7. Your Rights</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You may request access, correction, or deletion of your data.</li>
              <li>You may opt-out of marketing communications.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">8. Third-Party Links</h2>
            <p>We are not responsible for privacy practices of third-party sites.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">9. Updates</h2>
            <p>This policy may be updated periodically.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">10. Contact Us</h2>
            <p>
              Email: <a href="mailto:marketing@daneshindustries.com" className="text-brand-blue hover:underline">marketing@daneshindustries.com</a><br/>
              Phone: +91 8939 415026 / +91 99623 33220<br/>
              Address: No 906, 10th Cross Street, Venkateswara Nagar, Perungudi, Chennai - 600096, Tamil Nadu, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;