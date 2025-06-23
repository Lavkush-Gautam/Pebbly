import React from 'react';
import plane from '../assets/1f680.svg';
import review from '../assets/review.webp';

const Review = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-12 mt-20 gap-6 text-center">

      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Build Powerful Automations with{' '}
          <span className="text-blue-600 underline">No Code</span>
        </h1>
        <img src={plane} alt="rocket" className="h-10 animate-bounce" />
      </div>
      <p className="text-xl font-semibold text-gray-700 max-w-2xl">
        Our beautiful workflow builder makes automation accessible to everyone.
      </p>
      <img
        src={review}
        alt="review"
        className="max-w-3xl w-full rounded-xl shadow-lg"
      />
    </div>
  );
};

export default Review;
