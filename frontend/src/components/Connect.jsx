import React from 'react';
import { Plane } from 'lucide-react'; // Lucide airplane icon
import plane from '../assets/1f680.svg'; // Importing the plane image

const Connect = () => {
  return (
    <div className="bg-white text-gray-800 py-2 px-4">
      <div className="flex items-center flex-col justify-center space-x-2 mb-4 pt-3">
        <h1 className="md:text-[52px] tracking-wide font-extrabold text-black-600 text-4xl">Easily Connect Multiple Applications & </h1>
       
       <span className='flex flex-row gap-3'> <img src={plane} alt="plane" className='h-16 w-auto pt-3  ' />
      <h2 className="md:text-[52px] tracking-wide font-extrabold text-center underline decoration-black-300 text-4xl">
       Automate your Tasks!
      </h2></span>
      </div>
    
      <p className="max-w-2xl tracking-wide font-medium text-[24px] mx-auto text-center text-gray-700 md:text-base">
       Connect your favorite applications within minutes and say goodbye to manual work
      </p>
    </div>
  );
};

export default Connect;
