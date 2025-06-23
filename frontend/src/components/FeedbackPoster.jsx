import React from 'react';
import { MessageCircle, Star, Users } from 'lucide-react';
import tick from '../assets/checked1.webp'
import msg from '../assets/Chat-Support.webp'
import play from '../assets/play-button.webp'
import avatar from '../assets/user-new.webp';

const FeedbackPoster = () => {
  return (
    <div className="relative w-full flex justify-center px-4 py-4">
      {/* Parent Container */}
      <div className="bg-blue-900 p-6 w-full max-w-6xl h-[350px] rounded-lg shadow-md mt-10 relative text-white">

        <div className="absolute -top-12 left-4 w-64 p-4 bg-white rounded-lg shadow-lg text-black flex items-start gap-3">
          <img src={tick} alt="tick" className='h-10' />
          <div>
            <p className="font-semibold text-black">Trusted by 14,099+ Businesses</p>
          </div>
        </div>

        <div className="absolute -top-12 right-8 w-64 p-4 bg-white rounded-lg shadow-lg text-black flex items-start gap-3">
          <img src={play} alt="play" className='h-10' />
          <div>
            <p className="font-semibold text-black">11,000+ Video
              Tutorials and Many More </p>
          </div>
        </div>

        <div className="absolute -top-12  left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg shadow-lg text-black flex items-start gap-3">
          <img src={msg} alt="msg" className='h-10' />
          <div>
            <p className="font-semibold text-black">Supports 2,000+ Integrations</p>
          </div>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center '>
        <p className='text-white text-2xl font-semibold text-center leading-relaxed max-w-4xl'>
          “ I moved from Zapier to Pabbly. We’re using ~1.6M tasks per month on Pabbly, and only 150k tasks are billable per month. I highly recommend Pabbly x2 !!!! "</p>
      </div>

      <div className="absolute mt-6 bottom-8 flex flex-col md:flex-row items-center">
        <div className="w-16 h-16 rounded-full bg-white overflow-hidden shadow-md">
          <img src={avatar} alt="User" className="w-full h-full object-cover" />
        </div>
        
        <div className='flex flex-col items-center md:items-start ml-4 text-center md:text-left'>
          <p className="mt-2 text-white font-medium text-lg">Juan Colicchio,</p>
        <p className="text-blue-200 text-sm">LGG Media</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPoster;
