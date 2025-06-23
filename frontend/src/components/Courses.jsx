import React from 'react';
import finger from '../assets/thumb.svg';
import VideoFrame from '../components/VideoFrame'; // Adjust the path if needed
import { Check, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import SmallFrame from './SmallFrame';

const Courses = ({onScrollClick}) => {
    return (
        <div className="bg-white text-gray-800 pt-28 px-6 mb-4">
            {/* === Header Section === */}
            <div className="flex flex-row items-center justify-center space-x-4">
                <img src={finger} alt="thumb" className="h-10" />
                <div className='flex md:flex-row flex-col items-center justify-center gap-1'>
                    <h1 className="text-4xl md:text-[35px] tracking-wide font-extrabold underline text-black">
                        Save 1,000+ Work Hours
                    </h1>
                    <h1 className="text-4xl md:text-[35px] tracking-wide font-extrabold text-black">
                        by Automating Tasks!
                    </h1>
                </div>
            </div>

            <p className='text-xl font-medium text-center mt-6'>
                With over 11,000+ automation tutorials, you will be able to easily integrate any business apps.
            </p>

            <div className='flex flex-row items-center tracking-wider min-w-[300px] pr-1 justify-center bg-yellow-300 px-3 max-h-50 py-4 rounded-full pl-2 mt-6 max-w-4xl mx-auto'>
                <p className='font-bold text-sm'>Note:&nbsp;</p>
                <p className='underline font-semibold text-sm'>Every week&nbsp;</p>
                <p className='font-semibold text-sm'>
                    we publish 100+ automation tutorials to teach new ways to automate your business using Pabbly Connect.
                </p>
            </div>

            {/* === Video Frames Section === */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <SmallFrame/>
                 <SmallFrame />
                <SmallFrame />
            </div>

            {/* === CTA Section === */}
            <div className='flex flex-col items-center justify-center mt-10'>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <button onClick={onScrollClick} className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 tracking-wider text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md transition">
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

export default Courses;
