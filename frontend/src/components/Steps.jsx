import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import setting from '../assets/setting.webp';
import step1 from '../assets/step1.webp';
import step2 from '../assets/step2.webp';
import step3 from '../assets/step3.webp';
import { Check, ThumbsUp } from 'lucide-react';

const Steps = ({ onScrollClick}) => {
  const steps = [
    {
      id: 1,
      image: step1,
      heading: 'Step 1',
      description: 'Start building automation workflow by setting up triggers and actions.',
    },
    {
      id: 2,
      image: step2,
      heading: 'Step 2',
      description: 'Select the apps you would like to integrate into the workflow.',
    },
    {
      id: 3,
      image: step3,
      heading: 'Step 3',
      description: 'Enable your workflow and start saving countless hours of manual work.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white text-gray-800 pt-28 px-6 mb-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 px-4 text-center md:text-left">
        <img src={setting} alt="setting" className="h-12" />

        <div className="flex flex-col items-center md:items-start justify-center gap-2">
          <div className="flex flex-col md:flex-row text-center items-center md:items-end gap-2">
            <h1 className="text-4xl font-extrabold text-black">How Does</h1>
            <h1 className="text-4xl font-extrabold underline text-black">Pabbly Connect Work</h1>
          </div>
          <p className="text-xl font-medium">
            Pabbly Connect's intuitive workflow builder simplifies automation, making it easily accessible to all users.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 w-full max-w-7xl">
        {steps.map((item) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={item.id}
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8 } } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center p-6 rounded-xl  shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-[80%] md:w-[60%] lg:w-[30%]"
            >
              <img
                src={item.image}
                alt={item.heading}
                className="h-[280px] w-[380px] object-cover rounded-lg"
              />
              <div className="flex flex-col mt-4 text-center font-semibold">
                <h2 className="text-2xl font-bold mb-2">{item.heading}</h2>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
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
          <button onClick={ onScrollClick} className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 tracking-wider text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md transition">
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

export default Steps;
