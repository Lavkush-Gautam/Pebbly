import React from 'react';
import star from '../assets/star.svg';
import productImg from '../assets/product.webp'; // Replace with your actual image
import { Check, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    { id: 1, title: 'Trigger Step', description: 'Select an application that initiates your workflow when data is received..' },
    { id: 2, title: 'Action Step', description: 'Select the application that you would like to transfer the data to.' },
    { id: 3, title: 'Enable Workflow', description: 'Once trigger and action steps are set, simply enable your automation workflow..' },
];

const Product = ({ onScrollClick}) => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 px-6 py-12">
            <div className="text-center mb-12 max-w-2xl">
                <img src={star} alt="star" className="mx-auto mb-4 h-10" />
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                    Boost Productivity <span className="text-blue-600 underline">by Automating Repetitive Work</span>
                </h1>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-10">
                
                <div className="flex flex-col gap-8 w-full lg:w-1/2">
                    {steps.map((step) => (
                        <div key={step.id} className="flex items-start gap-4">
                            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-600 text-white font-bold text-sm">
                                {step.id}
                            </div>
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        </div>
                    ))}

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

                {/* Right - Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={productImg}
                        alt="product demo"
                        className="w-full max-w-xl rounded-xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
