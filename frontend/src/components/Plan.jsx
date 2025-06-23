import React from 'react';
import money from '../assets/money.svg';
import guarantee from '../assets/guarantee.webp';
import owner from '../assets/owner.webp';
import { FaStar } from 'react-icons/fa';
import VoucherCard from './VoucherCard';

const Plan = () => {
  return (
    <section className="w-full px-4 py-12 mt-8 bg-white">
      {/* Heading */}
      <div className="text-center mx-auto">
        <h1 className="text-4xl md:text-4xl font-extrabold">
          What’s Included in Plan? Absolutely Everything
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <img src={money} alt="Money icon" className="w-10 h-10" />
          <h2 className="text-xl md:text-4xl underline font-extrabold text-gray-800">
            Without Any High Cost.
          </h2>
        </div>

        <p className="text-lg md:text-xl font-medium text-gray-600 px-4 max-w-5xl py-4 mx-auto">
          Pabbly Connect does not impose any feature restriction on you. For instance, Zapier's ₹6171 per month plan is the only one that includes path/router, unlimited premium applications, and unlimited automation workflows. In contrast, Pabbly Connect includes iterators, unlimited path/router, premium apps, and automated workflows in all of its plans.
        </p>
      </div>

      {/* Testimonial */}
      <div className="flex items-center max-w-8xl justify-center gap-6 bg-gray-50 p-6 mt-6">
        <img src={guarantee} alt="Guarantee" className="w-28 h-28" />
        <div className="flex flex-col gap-2">
          <div className="flex text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar key={i} className="text-xl" />
            ))}
          </div>
          <p className="text-gray-700 text-lg max-w-2xl tracking-wider">
            "Building advanced automation workflows without any feature restrictions is a breeze." - Akshay Ash Goel
          </p>
        </div>
        <img src={owner} alt="Owner" className="w-20 h-20 rounded-full object-cover border-2 border-gray-300" />
      </div>

      {/* Discount Capsule */}
      <div className="flex justify-center my-6 ">
        <div className="inline-flex items-center border-blue-600 border-1 bg-gray-100 rounded-full px-4 py-2 space-x-3 shadow-sm">
          <button className="bg-yellow-400 text-white text-sm font-medium px-6 py-2 cursor-pointer rounded-full hover:bg-yellow-500 transition">
            🔥 10% OFF
          </button>
          <button className="bg-green-500 text-white text-sm font-medium px-6 py-2 cursor-pointer rounded-full hover:bg-green-600 transition">
            🎉 15% OFF
          </button>
          <button className="bg-blue-500 text-white text-sm font-medium px-6 py-2 cursor-pointer rounded-full hover:bg-blue-600 transition">
            🚀 20% OFF
          </button>
        </div>
      </div>

      
      <VoucherCard />
    </section>
  );
};

export default Plan;
