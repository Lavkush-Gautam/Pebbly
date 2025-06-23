import React from 'react';
import { DockIcon, DollarSign } from 'lucide-react';

const cardData = [
    {
        title: 'Outstanding Order',
        amount: '$0',
        icon: <DockIcon className='text-blue-600' />,
        bg: 'bg-blue-100',
    },
    {
        title: 'Available Credit',
        amount: '$0',
        icon: <DollarSign className='text-green-600' />,
        bg: 'bg-green-100',
    },
    // You can add more cards here easily
];

const Money = () => {
    return (
        <div className='h-full w-full mb-20'>
            {/* Header */}
            <div className='shadow-md bg-white rounded-xl p-6 mb-8'>
                <h1 className='text-2xl font-semibold'>Client Portal</h1>
                <p className='text-sm text-gray-600 mt-1'>
                    Overview of all the data of your account in a single glance.
                </p>
            </div>

            <div className='gap-6 max-w-8xl justify-start items-center flex'>
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-4 md:px-10 py-6 bg-white shadow hover:border  rounded-lg hover:border-blue-300 transition'
                    >
                        <div className={`p-3 rounded-full ${card.bg}`}>
                            {card.icon}
                        </div>
                        <div>
                            <h4 className='text-sm text-gray-500'>{card.title}</h4>
                            <p className='text-xl font-semibold text-gray-800'>{card.amount}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='shadow-md bg-white rounded-xl p-6 mt-8'>
                <h1 className='text-xl font-medium mb-6'>Contact details for Magnet Brains LLC</h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* Column 1 */}
                    <div className='space-y-1'>
                        <p className='text-gray-600 font-semibold'>Name</p>
                        <p className='text-gray-800'>Magnet Brains LLC</p>
                    </div>

                    {/* Column 2 */}
                    <div className='space-y-1'>
                        <p className='text-gray-600 font-semibold'>Email</p>
                        <p className='text-gray-800'>contact@magnetbrains.com</p>
                    </div>

                    {/* Column 3 */}
                    <div className='space-y-1'>
                        <p className='text-gray-600 font-semibold'>Phone</p>
                        <p className='text-gray-800'>(123) 456-7890</p>
                    </div>
                </div>
            </div>

            <div className='relative shadow-md bg-white rounded-xl p-10 mt-8'>

                <button className='md:absolute top-4 right-6 px-2 py-1 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition'>
                    Manage Cards
                </button>
                <h1 className='text-xl font-medium'>Payment Details</h1>

                <div className='items-center font-semibold text-xl justify-center flex'>
                    <p>No cards found yet.</p>
                </div>

            </div>

        </div>
    );
};

export default Money;
