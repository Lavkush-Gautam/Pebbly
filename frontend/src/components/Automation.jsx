import React from 'react'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.webp'
import { ThumbsUp, Check, Star } from 'lucide-react'
import men from '../assets/men.webp'
import { motion } from 'framer-motion';

const Automation = () => {
    const features = [
        {
            src: p1,
            desc: 'Integromat consumes 3 tasks, but Pabbly Connect consumes only 1 task to execute the same workflow..',
        },
        {
            src: p2,
            desc: 'Zapier charges 2 tasks, where as Pabbly Connect only charges 1 task for the same workflow.',
        },
        {
            src: p3,
            desc: 'For the same workflow, Pabbly Connect consumes just 1 task compared to Integromat (3 tasks) and Zapier (2 tasks).',
        },
    ]
    return (
        <div className="px-6 py-12 bg-white text-gray-800">
            <div className="text-center max-w-4xl mx-auto mb-10">
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
                    Same Automation Workflows <span className="underline text-blue-800">Fewer Tasks Used</span>
                </h1>
                <p className="mt-4 text-xl font-semibold text-gray-600">
                    Triggers and Internal Steps don’t use up your monthly task allowance in Pabbly Connect.
                    This gives you up to 3 times more workflow executions compared to competitors.
                </p>
            </div>
            <div className="flex md:flex-col  items-center justify-center w-full gap-6">

                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group max-w-4xl h-[150px] overflow-hidden rounded-lg shadow cursor-pointer"
                    >
                        <img
                            src={item.src}
                            alt={`Automation ${idx + 1}`}
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-900 bg-opacity-75 text-white px-4 py-8  opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-sm">{item.desc}</p>
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
                    <button className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-700 tracking-wider text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-md transition">
                        <ThumbsUp className="w-5 h-5 text-white" />
                        START NOW - IT'S FREE
                    </button>
                </motion.div>

                {/* === Trust Indicators === */}
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

            <div className="w-auto items-center bg-white shadow-lg mt-5 rounded-xl p-6 h-auto flex flex-row justify-center gap-6">

                <img
                    src={men}
                    alt="Person"
                    className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-white"
                />

                <div className="flex flex-col justify-between h-full py-2">

                    <div className="flex text-yellow-500 text-lg">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" stroke="none" className="w-5 h-5" />
                        ))}
                    </div>

                    <p className="text-gray-700 mt-2 tracking-wider max-w-2xl text-sm font-semibold">
                        "If you love Zapier but hate its expensive monthly subscription fee, then this is the answer! I have never had to pay for Zap subscription after I discovered the application existed!"
                    </p>

                    <div className="mt-4">
                        <h3 className="text-base font-semibold">Benjie Malinao, Automate8</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Automation
