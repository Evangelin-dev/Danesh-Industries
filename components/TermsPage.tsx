import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-brand-light py-20">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-brand-dark mb-8">Terms & Conditions</h1>
        <div className="prose lg:prose-xl max-w-none text-brand-dark space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">1. General</h2>
            <p>Danesh Industries supplies precision machined parts, assemblies, and related engineering services. All quotations, sales, and deliveries are subject to these Terms & Conditions unless otherwise agreed in writing.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">2. Quotations & Orders</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Quotations are valid for 30 days unless otherwise specified.</li>
              <li>Orders are confirmed only upon written acceptance by Danesh Industries.</li>
              <li>Any modifications to orders must be approved in writing.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">3. Pricing & Payment</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Prices are exclusive of taxes, duties, shipping, and insurance unless mentioned.</li>
              <li>Payments are due as per invoice terms (default: 30 days from invoice date).</li>
              <li>Delayed payments may attract interest charges at commercial rates.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">4. Delivery & Risk</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Delivery dates are estimated and subject to material availability and production schedules.</li>
              <li>Risk of loss or damage passes to the customer upon dispatch from our facility.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">5. Quality & Warranty</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Products are warranted to be free from manufacturing defects for 12 months from dispatch.</li>
              <li>Warranty excludes misuse, improper storage, modifications, or normal wear and tear.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">6. Inspection & Acceptance</h2>
            <p>Claims for shortages or defects must be made within 7 working days of delivery.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">7. Returns & Cancellations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Returns accepted only with prior authorization.</li>
              <li>Custom/special-order products are non-returnable.</li>
              <li>Cancellation charges may apply.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">8. Intellectual Property</h2>
            <p>All drawings, designs, and specifications remain the property of Danesh Industries.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">9. Liability</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Liability is limited to the value of goods supplied.</li>
              <li>We are not responsible for indirect or consequential damages.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">10. Governing Law</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Governed by the laws of India.</li>
              <li>Disputes subject to jurisdiction of Chennai, Tamil Nadu.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-brand-yellow">11. Amendments</h2>
            <p>Danesh Industries may update or modify these Terms & Conditions without prior notice.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;