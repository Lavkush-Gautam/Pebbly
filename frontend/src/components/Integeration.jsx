import React from 'react';
import bulb from '../assets/bulb.svg';
import integration from '../assets/integration.webp';
import Star from './Star';

const Integration = () => {
  return (
    <div className="relative bg-blue-900 text-white w-full">
      {/* Blue Section */}
      <div className="flex flex-col justify-center items-center px-6 pt-12 pb-48 gap-6 text-center min-h-[650px]">
        {/* Heading */}
        <div className="flex items-center gap-3 font-bold justify-center">
          <h1 className="text-4xl font-extrabold">
            Build Powerful Automations with{' '}
            <span className="underline">No Code</span>
          </h1>
          <img src={bulb} alt="bulb" className="h-10 animate-bounce" />
        </div>

        {/* Paragraph */}
        <p className="text-xl font-medium max-w-3xl">
          Pabbly Connect supports more than 2,000+ applications for seamless real-time data transfer.
          <br />
          For example: When new sales happen on WooCommerce, add customer details to Google Sheets.
        </p>

        {/* Integration Image */}
        <img
          src={integration}
          alt="integration"
          className="max-w-4xl w-full rounded-xl shadow-lg mb-6"
        />
      </div>
       
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-6xl px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Star />
        </div>
      </div>
    </div>
  );
};

export default Integration;
