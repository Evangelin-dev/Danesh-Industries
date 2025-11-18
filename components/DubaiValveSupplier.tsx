import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";
import ExportCountryPopup from "./CountryPopup";


const DubaiValveSupplier: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showCountryPopup, setShowCountryPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCountryPopup(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(40px); transition: .8s; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .hover-box { transition: .35s; }
        .hover-box:hover { transform: translateY(-6px); box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
      `}</style>

      <div className="bg-brand-light py-20">

        {/* HERO */}
        <section className="relative h-[350px] md:h-[420px] flex items-center justify-center">
          <img src="./uae.jpg" className="absolute inset-0 w-full h-full object-cover reveal" />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <h1 className="text-white text-4xl md:text-5xl font-extrabold relative reveal">
            Valve Supplier for Dubai (UAE)
          </h1>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-5xl reveal hover-box p-6 rounded-xl">
            <p className="text-lg text-brand-gray">
              Danesh Industries exports premium stainless-steel and high-pressure valves across the UAE.
            </p>
          </div>
        </section>

        {/* IMAGE + CONTENT */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 p-6 bg-white rounded-xl hover-box reveal">

            <img src="/flanges.png" className="rounded-lg shadow-lg h-[300px] object-cover reveal" />

            <div className="reveal">
              <h2 className="text-3xl font-bold mb-4">Our Valve Export Range</h2>
              <ul className="text-lg space-y-2">
                <li>• Stainless Steel Valves</li>
                <li>• High-Pressure Gate, Ball & Globe</li>
                <li>• CNC Machined Components</li>
                <li>• Custom Engineered Valves</li>
                <li>• Flanges & Couplings</li>
              </ul>
            </div>

          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-5xl reveal text-center">

            <h2 className="text-3xl font-bold mb-10">Industries We Supply</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

              {[
                "/Oil & Gas.jpg",
                "/Fabrication Units.jpg",
                "/Industrial Machine Shops.jpg",
                "/Construction & Contracting.jpg",
                "/Water Management.jpg",
                "/frims.jpg",
              ].map((img, i) => (
                <div key={i} className="reveal hover-box p-3 bg-gray-50 rounded-xl">
                  <img src={img} className="rounded-lg shadow-md h-[280px] w-full object-cover" />
                  <p className="font-medium mt-2">{[
                      "Oil & Gas",
                      "Fabrication Units",
                      "Machine Shops",
                      "Construction",
                      "Water Management",
                      "Engineering Firms",
                    ][i]}</p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* SHIPPING */}
        <section className="py-16 bg-gray-50 reveal">
          <div className="container mx-auto max-w-5xl">

            <div className="bg-white p-10 rounded-2xl shadow-lg hover-box reveal">

              <h2 className="text-3xl font-bold text-center mb-6">Export & Shipping</h2>

              <p className="text-lg text-center">
                We ship valves across the UAE:
              </p>

              <p className="font-semibold text-center mb-10">
                Dubai • Abu Dhabi • Sharjah • Ajman • RAK • Fujairah
              </p>

              <h3 className="text-2xl font-bold text-center mb-8">Shipping Options</h3>

              <div className="grid md:grid-cols-3 gap-8">

                {/* AIR */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-box reveal text-center">
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="#0067C5" className="mx-auto mb-3">
                    <path d="M2.5 19l7-5 4 6 3-2-3-6 7-5-1-2-8 4-4-7h-2l2 8-8 4z"/>
                  </svg>
                  <p className="text-lg font-semibold">Air Freight</p>
                </div>

                {/* SEA */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-box reveal text-center">
                  <svg width="50" height="50" fill="#0067C5" viewBox="0 0 24 24" className="mx-auto mb-3">
                    <path d="M3 18c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2v-2c-2 0-2 2-4 2s-2-2-4-2-2 2-4 2-2-2-4-2v2zm0-5l2-7h14l2 7h-18z"/>
                  </svg>
                  <p className="text-lg font-semibold">Sea Freight</p>
                </div>

                {/* COURIER */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover-box reveal text-center">
                  <svg width="50" height="50" fill="#0067C5" viewBox="0 0 24 24" className="mx-auto mb-3">
                    <path d="M3 3h15v4h3v13h-3v-2h-2v2h-8v-2h-2v2h-3v-17zm2 5v10h2v-2h10v2h2v-10h-14zm4 6v-4h6v4h-6z"/>
                  </svg>
                  <p className="text-lg font-semibold">Courier Delivery</p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl text-center reveal hover-box p-6 rounded-xl">
            <h2 className="text-3xl font-bold">Request an Export Quote</h2>
            <p className="text-lg mb-6">Share your requirements — reply within 12 hours.</p>

            <a href="/contact" className="px-6 py-3 bg-yellow-500 text-white rounded-md">
              Get a Quote
            </a>
          </div>
        </section>

      </div>

      {/* POPUPS */}
      <ExportCountryPopup isOpen={showCountryPopup} onClose={() => setShowCountryPopup(false)} />
      <ContactPopup isOpen={showContactPopup} onClose={() => setShowContactPopup(false)} />
    </>
  );
};

export default DubaiValveSupplier;
