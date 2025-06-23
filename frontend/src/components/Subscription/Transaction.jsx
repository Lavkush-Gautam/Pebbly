import React from 'react'
import { ShoppingBag, AlertTriangle } from 'lucide-react';

const Transaction = () => {
  return (
    <div className='h-full w-full'>

      <div className='shadow-md bg-white rounded-xl p-6 mb-8'>
        <h1 className='text-2xl font-semibold'>Transactions</h1>
        <p className='text-sm text-gray-600 mt-1'>
          All the payments success/failed and refunds are displayed here.
        </p>
      </div>

      <div className='relative shadow-md bg-white rounded-xl p-10 mt-8 text-center'>
        <div className="relative flex justify-center items-center mb-4 gap-0">
          <ShoppingBag className="text-black mr-2" size={40} />
          <AlertTriangle className="absolute mt-6 ml-6 text-yellow-500" size={20} />
        </div>
        <p className='text-gray-500 mb-1 text-xl font-semibold'>Sorry, no matching results found.</p>
        <p className='text-gray-500'>You might want to expand the date range or search for something else.</p>
      </div>

    </div>
  )
}

export default Transaction