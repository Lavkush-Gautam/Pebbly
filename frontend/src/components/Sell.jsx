import React from 'react';
import summer from '../assets/summer.webp';
import { FaHandPointRight } from 'react-icons/fa';

const Sell = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white flex md:flex-row flex-col items-center justify-between px-6 py-6 md:py-2 animate-pulse">

      {/* Image */}
      <img
        src={summer}
        alt="Summer Sale"
        className="h-16 w-auto md:ml-20 mb-2 md:mb-0"
      />

      {/* Text Content */}
      <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
        <h1 className="font-bold text-xl text-yellow-300">
          🎉 DON'T MISS OUT
        </h1>
        <p className="text-sm font-semibold text-white">
          - Use <span className="text-amber-300">Pabbly Connect</span> for One Time Price. No Recurring Fees Ever.
        </p>
      </div>

      {/* CTA Button */}
      <button className="bg-amber-400 font-bold text-black px-4 py-2 rounded shadow-md hover:bg-amber-500 transition cursor-pointer md:mr-20 mt-4 md:mt-0 flex items-center gap-2">
        <FaHandPointRight className="text-xl text-black animate-bounce" />
        VIEW OFFER
      </button>
    </div>
  );
};

export default Sell;
