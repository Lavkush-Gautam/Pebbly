import React from 'react'
import subscriptions from '../../assets/subscription.png'
const Subscrptions = () => {

    const subscribedPlanDetails = [
        {
            title: "Check Subscription Status",
            description: "Check the status of your subscription and the billing dates.",
        },
        {
            title: "Manage Plan",
            description: "Upgrade or downgrade to other plans.",
        },
        {
            title: "Download Invoices",
            description: "You can download the invoices from this section.",
        },
    ];

    return (
        <div className='h-full w-full'>
            {/* Header */}
            <div className='shadow-md bg-white rounded-xl p-6 mb-8'>
                <h1 className='text-2xl font-semibold'>Subscription</h1>
                <p className='text-sm text-gray-600 mt-1'>
                    All the details related to the plan you have subscribed to
                </p>
            </div>



            <div className='relative shadow-md bg-white rounded-xl p-10 mt-8'>


                <h1 className='text-xl font-medium mb-6'>Subscription Details</h1>
                <div className='flex md:flex-row flex-col gap-12'>
                    <img src={subscriptions} alt="subs" className='w-80 h-40' />

                    <div className='bg-white p-6 rounded-xl shadow-md'>
                        <h2 className='text-xl  mb-2'>Subscribed Plan Details</h2>
                        <p className='text-gray-600 mb-6'>
                            Contains all the details of your subscribed plan and billing details.
                        </p>

                        <div className='space-y-8'>
                            {subscribedPlanDetails.map((item, index) => (
                                <div key={index} className=''>
                                    <p className='text-gray-600 mt-1 text-sm'>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Subscrptions