import React from 'react';
import power from '../assets/power.svg';

// Example icons (replace with actual imports or image paths)
import calender from '../assets/calender.svg';
import setting from '../assets/settin.svg';
import aiIcon from '../assets/ai.svg';
import email from '../assets/email.svg';
import time from '../assets/time.svg';
import iterator from '../assets/iterator.svg';
import coding from '../assets/coding.svg';
import advance from '../assets/advance.svg';
import { Check, ThumbsUp } from 'lucide-react';
import {motion} from 'framer-motion'

const features = [
    { icon: calender, title: 'Schedule Workflows', description: 'Set up a date and time at which you want the workflow to be executed. Like on a specific day, once in a day, and every min/hour/day/week.' },

    { icon: setting, title: 'Connect Any Application', description: 'Integrate to any application with an API using API modules. This module offers custom options and supports many different API structures.' },

    { icon: aiIcon, title: 'AI Assistant (Pabbly)', description: 'AI Assistant by Pabbly lets you create, update, and interact with intelligent assistants that can process custom knowledge and automate dynamic conversations within your workflows.' },

    { icon: email, title: 'Email Parser', description: 'Email Parser automatically extracts data from the incoming emails like email name, subject, the body of the email, attachments, etc. which can be processed further.' },
    { icon: time, title: 'Delay Workflows', description: 'Delay step allows you to delay performing the next action for a specified amount of period. The period can be either mins/hours/days/weeks or any specific date and time.' },
    { icon: iterator, title: 'Iterator', description: 'Iterator divides a collection of data into numerous values, which are then processed one by one until the last value is reached. Each value can be passed to other action steps added after the Iterator step.' },

    { icon: coding, title: 'Code by Pabbly', description: 'Code by Pabbly empowers you to run custom JavaScript or Python scripts within workflows, enabling advanced logic, data transformation, and tailored automation.' },

    { icon: advance, title: 'Advance Workflows', description: 'Create advanced workflows with the help of routers/paths. With the help of a router, you will be able to execute different actions based on the filter conditions you set.' },
];

const Tools = ({onScrollClick={handleScroll}}) => {
    return (
        <div className="px-6 py-12 bg-white text-gray-800">
           
            <div className="flex flex-row items-center justify-center gap-x-4 mb-8 flex-wrap text-center md:text-left">
                <img src={power} alt="Power Icon" className="w-16 h-16" />
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider">
                    Pabbly Connect Has All <span className="underline">The Features You Need</span>
                </h1>
            </div>


            <p className="text-center max-w-2xl text-xl font-medium mx-auto text-gray-600 mb-12">
                Easy-to-use built-in tools that help you create workflows with advanced capabilities like scheduling, delay, router, and many more.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl w-full mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-6 bg-gray-100 p-8 rounded-xl shadow hover:shadow-2xl transition">
                        <img src={feature.icon} alt={feature.title} className="w-13 h-13" />

                        <div className='gap-4'>
                            <h3 className="text-lg font-bold tracking-wider">{feature.title}</h3>
                            <p className='text-sm leading-loosed font-medium tracking-wider'>{feature.description}</p>
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
    );
};

export default Tools;
