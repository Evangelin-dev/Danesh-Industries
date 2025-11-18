import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";

const OmanValveSupplier: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContactPopup(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowContactPopup(false);
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("active");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* Reveal + Hover Effect Styles */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .container-effect {
          transition: all 0.35s ease;
          cursor: default;
        }
        .container-effect:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 28px rgba(0,0,0,0.12);
        }
      `}</style>

      <div className="bg-brand-light">

        {/* HERO SECTION */}
        <section className="relative h-[350px] md:h-[420px] flex items-center justify-center">
          <img
            src="/public/oman.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <h1 className="text-white text-4xl md:text-5xl font-extrabold relative reveal">
            CNC Machining & Valve Supplier for Oman
          </h1>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-5xl reveal">
            <p className="text-lg text-brand-gray leading-relaxed">
              Danesh Industries exports CNC-machined components, stainless-steel valves,
              and custom metal parts to industries across Oman.
            </p>

            <p className="text-lg mt-4 text-brand-gray leading-relaxed">
              We support small and large projects with precise machining,
              competitive pricing, and reliable export delivery.
            </p>
          </div>
        </section>

        {/* WHAT WE SUPPLY */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto max-w-5xl reveal">

            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
              What We Supply to Oman
            </h2>

            <div className="bg-white rounded-xl shadow-md p-10 container-effect">
              <div className="grid md:grid-cols-2 gap-10 items-center">

                <img
                  src="/ss304slip.png"
                  className="rounded-lg shadow-md w-full h-[260px] object-cover object-center"
                />

                <ul className="text-lg text-brand-dark space-y-3 leading-relaxed">
                  <li>CNC Turning & Milling Components</li>
                  <li>Stainless Steel Industrial Valves</li>
                  <li>Custom Valve Components</li>
                  <li>Industrial Fittings & Connectors</li>
                  <li>Prototyping & Batch Production</li>
                </ul>

              </div>
            </div>

          </div>
        </section>

        {/* WHY OMAN BUYERS CHOOSE US */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-5xl reveal">

            <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">
              Why Oman Buyers Choose Us
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Precision machining quality",
                "Skilled engineering & support",
                "Export-ready safe packaging",
                "Competitive pricing compared to local manufacturers",
                "Quick delivery to Muscat & Sohar",
              ].map((point, index, arr) => (
                <div
                  key={index}
                  className={`
                    bg-[#FFF8E7] shadow-md rounded-xl p-6 text-brand-dark 
                    text-lg text-center reveal container-effect
                    ${index === arr.length - 1 ? "md:col-span-2 md:w-1/2 mx-auto" : ""}
                  `}
                >
                  {point}
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* OMAN LOCATIONS */}
        <section className="py-16" style={{ backgroundColor: "#ffffffff" }}>
          <div className="container mx-auto max-w-6xl text-center">

            <h2 className="text-3xl font-bold text-brand-dark mb-10 reveal">
              Oman Locations We Serve
            </h2>

            <div className="bg-white rounded-xl shadow-md p-10 container-effect">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                {[
                  { name: "Muscat", image: "/Muscat.jpg" },
                  { name: "Sohar", image: "/Sohar.jpg" },
                  { name: "Salalah", image: "/Salalah.jpg" },
                  { name: "Nizwa", image: "/Nizwa.jpg" },
                  { name: "Sur", image: "/Sur.jpg" },
                ].map((city, i, arr) => {

                  const isLastTwo = i >= arr.length - 2;

                  return (
                    <div
                      key={i}
                      className={`reveal ${isLastTwo ? "md:col-span-1 mx-auto" : ""}`}
                    >
                      <div className="group transition-all duration-300 container-effect">
                        <img
                          src={city.image}
                          className="
                            rounded-lg shadow-md mb-3 w-full h-[260px] 
                            object-cover object-center
                            transition-transform duration-300 
                            group-hover:scale-105 group-hover:shadow-xl 
                            group-hover:brightness-105
                          "
                        />
                        <p className="text-xl font-semibold text-brand-dark text-center">
                          {city.name}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl text-center reveal">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Get a Quote for Oman Orders
            </h2>

            <p className="text-lg text-brand-dark mb-6">
              Upload your drawing or requirement — we’ll share pricing & delivery
              timeline within 12 hours.
            </p>

            <a
              href="/contact"
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-lg font-medium transition"
            >
              Get a Quote
            </a>
          </div>
        </section>

      </div>

      {/* POPUP */}
      <ContactPopup
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
      />
    </>
  );
};

export default OmanValveSupplier;
