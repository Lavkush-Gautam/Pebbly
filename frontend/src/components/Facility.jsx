import React from 'react';
import star from '../assets/star.svg'; // Use actual path
import { CheckCircle } from 'lucide-react'; // or use any icon set
import { ThumbsUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  "Unlimited Triggers", "Internal Tasks", "Webhooks Support", "Multi-step Workflows",
  "Email Parser", "Unlimited Paths", "Delayed Actions", "Formatters",
  "Data Forwarding", "API Module", "Conditional Logic", "Router Support",
  "Unlimited Apps", "Bulk Uploads", "Error Handlers", "Scheduling",
  "Auto Retry", "Webhook Response", "Filters & Conditions", "Unlimited Runs",
  "Multi-user Access", "Unlimited Connections", "Custom Apps", "Inbuilt Tools",
];

const Facility = () => {
  return (
    <div className="w-full px-6 py-16 bg-gray-50 text-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Unlike Competitors, Triggers and Internal Tasks are{' '}
          <span className="underline text-green-600">FREE in Pabbly Connect</span>
        </h1>
        <img src={star} alt="star" className="mx-auto h-8" />
        <p className='text-xl font-medium'>Only action steps will consume your task count. This means that your monthly task allowance will take you a lot further.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 bg-white rounded-xl shadow-sm border border-gray-200 p-4 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <span className="text-xs mb-0 font-bold text-green-800 bg-green-100 px-2 py-1 rounded-full">
              FREE
            </span>

            <div className="text-left">
              <CheckCircle className="text-blue-600 w-5 h-5 mb-1" />
              <p className="text-sm font-medium text-gray-700">{feature}</p>
            </div>
          </div>
        ))}
      </div>
       <div className='flex flex-col items-center justify-center mt-10'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <button className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 tracking-wider text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md transition">
                        <ThumbsUp className="w-5 h-5 text-white" />
                        START NOW - IT'S FREE
                    </button>
                </motion.div>

                {/* === Trust Indicators === */}
                <div className="w-full flex flex-col md:flex-row justify-center text-center gap-4 mt-4 mb-6">
                    <div className='flex items-center gap-2 justify-center'>
                        <Check className="text-green-600 w-4 h-4" />
                        <p className="text-base font-medium text-gray-700">Trusted by 14,099+ Businesses</p>
                    </div>
                    <div className='flex items-center gap-2 justify-center'>
                        <Check className="text-green-600 w-4 h-4" />
                        <p className="text-base font-medium text-gray-700">30-Days Refund Guarantee</p>
                    </div>
                    <div className='flex items-center gap-2 justify-center'>
                        <Check className="text-green-600 w-4 h-4" />
                        <p className="text-base font-medium text-gray-700">11,000+ Video Tutorials</p>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Facility;
