import React from 'react';
import { Check, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = ({ onScrollClick}) => {
    return (
        <div className="w-full h-auto bg-gradient-to-r shadow-2xs from-blue-50  flex flex-col items-center justify-center px-4 py-12">
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-6 justify-center mb-8">
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 w-5" />
                        <p className="text-gray-800 text-lg font-semibold">Easily automate your workflows</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 w-5" />
                        <p className="text-gray-800 text-lg font-semibold">Integrate 1000+ apps in minutes</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 w-5" />
                        <p className="text-gray-800 text-lg font-semibold">Reliable, scalable, and secure</p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 w-5" />
                        <p className="text-gray-800 text-lg tracking-wider font-semibold">No coding required to set up flows</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 w-5" />
                        <p className="text-gray-800 text-lg tracking-wider font-semibold">Detailed analytics and logs</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <Check className="text-blue-600 mt-1 w-5" />
                        <p className="text-gray-800 tracking-wider text-lg font-semibold">Free tier available – get started now!</p>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="flex justify-center mt-10"
            >
                <button onClick={ onScrollClick} className="flex items-center gap-2  bg-blue-600 cursor-pointer hover:bg-blue-700 tracking-wider text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md transition">
                    <ThumbsUp className="w-5 h-5 text-white" />
                    START NOW - IT'S FREE
                </button>

            </motion.div>
            <div className="w-full flex text-center justify-evenly mt-4 mb-6">

                <div className='flex items-center gap-3'><Check className="text-green-600 mt-1 w-4" /> <p className="text-base font-medium text-gray-700">Trusted by 14,099+ Businesses</p></div>

                <div className='flex items-center gap-3'>
                    <Check className="text-green-600 mt-1 w-4" /> <p className="text-base font-medium text-gray-700 ">30-Days Refund Guarantee
                    </p>
                </div>
                <div className='flex items-center gap-3'>
                    <Check className="text-green-600 mt-1 w-4" /> <p className="text-base font-medium text-gray-700">11,000+ Video Tutorials</p>
                </div>
            </div>
        </div >
    );
};

export default Features;
