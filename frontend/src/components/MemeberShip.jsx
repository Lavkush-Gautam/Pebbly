import React from 'react';
import bulb from '../assets/bulb.svg';
import membership from '../assets/membersip.webp';
import pabblyLogo from '../assets/Connect-Logo.svg'; // Replace with your actual logo path
import smile from '../assets/smile.webp'; // Replace with your smile icon path

const MemeberShip = ({ onScrollClick }) => {
    return (
        <div className="w-full pb-20 mt-8">
            <div className="flex items-center gap-3 font-bold justify-center">
                <h1 className="text-4xl font-extrabold">
                    Work Better Together with{' '}
                    <span className="underline">Team Members!</span>
                </h1>
                <img src={bulb} alt="bulb" className="h-10 animate-bounce" />
            </div>

            <div className="flex pt-12 flex-wrap justify-center">
                <div className="p-10">
                    <img src={membership} alt="membership" className="max-w-full h-auto" />
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 max-w-md border-blue-700 border-4">
                    <div className="flex items-center gap-3 mb-4">
                        <img src={pabblyLogo} alt="Pabbly Logo" className="h-12" />
                        <h2 className="text-xl font-semibold">Pabbly Connect for Teams</h2>
                    </div>
                    <div className='flex relative md:flex-row gap-3'>
                        <h1 className='text-4xl font-extrabold text-green-700'>$769</h1>
                        <p className='text-xl absolute top-4 left-22 font-semibold  text-green-700 underline'>Every Year</p>
                    </div>


                    <div className='mt-10'>
                        <p className="text-gray-800 tracking-wider text-medium mb-6">
                            Pabbly Connect offers a team member feature as well where you can add team members to your Pabbly Connect with restricted access so that they can create and manage workflows for you.
                        </p>

                        <p className="text-gray-800 tracking-wider text-medium mb-6">
                            The best part about the team member feature is that you can add as many team members to your Pabbly Connect account. There won't be any limitations on adding the team members.
                        </p>
                    </div>

                    <div className='flex gap-4'>
                        <button onClick={onScrollClick} className=" bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 cursor-pointer rounded-lg items-center gap-2">
                            <span className='text-xl tracking-wider font-semibold'>Buy Now</span>
                        </button>
                        <img src={smile} alt="Smile" className="h-15 w-15" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemeberShip;
