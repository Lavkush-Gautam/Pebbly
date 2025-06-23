import React from 'react';
import { FaClock } from 'react-icons/fa';

const VoucherCard = () => {
  return (
    <div className="bg-gradient-to-r border border-dashed from-pink-500 via-red-500 to-yellow-500 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between gap-4 max-w-3xl mx-auto my-6 animate-pulse">
      
      <div className="text-2xl">
        <FaClock />
      </div>

      <div className="text-center flex-1">
        <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide">
          LIMITED TIME OFFER
        </h2>
        <p className="text-sm md:text-base font-medium mt-1">
          Get <span className="font-bold text-white">15% DISCOUNT</span> with the Yearly plan today!
        </p>
      </div>

     
      <button className="bg-white text-pink-600 font-semibold px-4 py-2 rounded-md hover:bg-yellow-100 transition">
        Claim Now
      </button>
    </div>
  );
};

export default VoucherCard;
