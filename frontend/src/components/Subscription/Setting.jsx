import React from 'react'
import Accounts from '../Accounts'

const Setting = () => {
  return (
    <div className='h-full w-full'>
     
      <div className='shadow-md bg-white rounded-xl p-6 mb-8'>
        <h1 className='text-2xl font-semibold'>Profile Settings</h1>
        <p className='text-sm text-gray-600 mt-1'>
          Option to change profile settings of your account.
        </p>
      </div>
      <Accounts/>
    </div>
  )
}

export default Setting