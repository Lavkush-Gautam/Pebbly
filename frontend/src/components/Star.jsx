import React from 'react';
import { Star as StarIcon } from 'lucide-react';

const Star = () => {
  const testimonials = [
    {
      id: 1,
      text: '"Never going back to zapier away."',
    },
    {
      id: 2,
      text: '"Pabbly Connect is an absolute must have."',
    },
    {
      id: 3,
      text: '"A high value for money Zapier alternative."',
    },
  ];
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {testimonials.map((col) => (
        <div key={col} className="flex flex-col items-center">
          {/* Five Yellow Stars */}
          <div className="flex space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-700">
           {col.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Star;
