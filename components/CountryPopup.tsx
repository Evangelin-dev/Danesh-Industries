import React from "react";
import { Link } from "react-router-dom";

const CountryPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]">
      <div className="bg-white w-96 p-6 rounded-2xl shadow-2xl relative animate-pop">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center mb-5 text-brand-dark">
           Countries We Serve
        </h2>

        <div className="space-y-4">

          <Link
            onClick={onClose}
            to="/valve-supplier-dubai"
            className="block py-3 text-center rounded-xl bg-gray-100 hover:bg-yellow-200 text-brand-dark font-semibold transition-all"
          >
             Dubai (UAE)
          </Link>

          <Link
            onClick={onClose}
            to="/export/saudi-arabia"
            className="block py-3 text-center rounded-xl bg-gray-100 hover:bg-yellow-200 text-brand-dark font-semibold transition-all"
          >
             Saudi Arabia
          </Link>

          <Link
            onClick={onClose}
            to="/export/oman"
            className="block py-3 text-center rounded-xl bg-gray-100 hover:bg-yellow-200 text-brand-dark font-semibold transition-all"
          >
             Oman
          </Link>

        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes popup {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: popup 0.25s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CountryPopup;
