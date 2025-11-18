import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";

const SaudiValveSupplier: React.FC = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContactPopup(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowContactPopup(false);
  }, []);

  // Scroll Reveal
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
      {/* Animation CSS */}
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

        .hover-box {
          transition: all 0.35s ease;
        }
        .hover-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
      `}</style>

      <div className="bg-brand-light">

        {/* HERO SECTION */}
        <section className="relative h-[350px] md:h-[420px] flex items-center justify-center">
          <img
            src="/public/s.jpg"
            className="absolute inset-0 w-full h-full object-cover reveal"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <h1 className="text-white text-4xl md:text-5xl font-extrabold relative reveal">
            Valve Supplier for Saudi Arabia
          </h1>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-5xl reveal hover-box p-6 rounded-xl">
            <p className="text-lg text-brand-gray leading-relaxed">
              Danesh Industries exports high-performance industrial valves and CNC-machined
              components to companies across Saudi Arabia — serving construction firms,
              fabrication units, industrial plants, and engineering contractors.
            </p>

            <p className="text-lg mt-4 text-brand-gray leading-relaxed">
              Our valves are engineered to withstand Saudi climate conditions, including
              extreme heat and demanding industrial environments.
            </p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center hover-box p-6 bg-white rounded-xl reveal">

            <img
              src="/stockvalve.jpg.png"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover object-center reveal"
            />

            <div className="reveal">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">
                Our Products for Saudi Clients
              </h2>

              <ul className="text-lg text-brand-dark space-y-2">
                <li>• Stainless Steel Valves</li>
                <li>• High-Temperature Industrial Valves</li>
                <li>• CNC-Machined Industrial Parts</li>
                <li>• Pressure-Resistant Valve Components</li>
                <li>• Custom-Made Valves for Project Needs</li>
              </ul>
            </div>
          </div>
        </section>

       {/* WHY CHOOSE US */}
<section className="py-16 bg-white">
  <div className="container mx-auto max-w-5xl reveal">

    <h2 className="text-3xl font-bold text-brand-dark mb-10 text-center">
      Why Saudi Companies Trust Us
    </h2>

    {/* Card Grid */}
    <div className="grid md:grid-cols-2 gap-6 ">

      {[
        { text: "High-quality stainless-steel machining" },
        { text: "Long-term durability in harsh climate" },
        { text: "Fast export to Riyadh, Dammam, Jeddah" },
        { text: "Supports bulk industrial projects",  },
        { text: "Experienced engineering support",  },
      ].map((item, index, arr) => (
        <div
          key={index}
          className={`
            bg-gray-50 shadow-md rounded-xl p-6 
            hover:shadow-xl hover:-translate-y-1 
            transition-all duration-300 text-center reveal
            ${index === arr.length - 1 ? "md:col-span-2 md:w-1/2 mx-auto" : ""}
          `}
        >
          
          <p className="text-lg font-semibold text-brand-dark">
            {item.text}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


        {/* SAUDI CITIES */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-6xl text-center">

            <h2 className="text-3xl font-bold text-brand-dark mb-10 reveal">
              Saudi Arabia Locations We Serve
            </h2>

            <div className="bg-white rounded-xl shadow-md p-10 hover-box reveal">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                {[
                  { name: "Riyadh", image: "/riyadh.jpg" },
                  { name: "Jeddah", image: "/Jeddah.jpg" },
                  { name: "Dammam", image: "/Dammam.jpg" },
                  { name: "Yanbu", image: "/Yanbu.jpg" },
                  { name: "Jubail", image: "/Jubail.jpg" },
                  { name: "Al Khobar", image: "/Al Khobar.jpg" },
                ].map((city, i) => (
                  <div key={i} className="reveal hover-box p-3 rounded-xl bg-gray-50">
                    <div className="w-full h-[260px] overflow-hidden rounded-lg shadow-md mb-3">
                      <img
                        src={city.image}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <p className="text-xl font-semibold text-brand-dark text-center">
                      {city.name}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-4xl text-center reveal hover-box p-6 rounded-xl">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Request a Quote for Saudi Projects
            </h2>
            <p className="text-lg text-brand-dark mb-6">
              Share your project requirement — we provide pricing, lead time,
              and export documentation.
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

export default SaudiValveSupplier;
