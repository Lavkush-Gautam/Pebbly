import React from 'react';
import { motion } from 'framer-motion'
import { AppWindow, Settings, MessageSquare, FileText, PieChart, Users, Zap, Shield } from 'lucide-react'; // Lucide icons (optional)
import { useNavigate } from 'react-router-dom';

const apps = [
    {
        icon: <AppWindow size={40} />,
        title: 'Email Marketing',
        description: 'Create and manage powerful email campaigns with ease using our intuitive tools.',
    },
    {
        icon: <Settings size={40} />,
        title: 'Subscription Billing',
        description: 'Automate your recurring billing and invoicing with full control and transparency.',
    },
    {
        icon: <MessageSquare size={40} />,
        title: 'Form Builder',
        description: 'Design smart, customizable forms for all business needs — without any coding.',
    },
    {
        icon: <FileText size={40} />,
        title: 'Document Management',
        description: 'Securely store, share, and manage all your important documents in one place.',
    },
    {
        icon: <PieChart size={40} />,
        title: 'Analytics Dashboard',
        description: 'Visualize key metrics and track performance with real-time reports and insights.',
    },
    {
        icon: <Users size={40} />,
        title: 'Team Collaboration',
        description: 'Boost your team’s productivity with seamless collaboration tools.',
    },
    {
        icon: <Zap size={40} />,
        title: 'Automation Suite',
        description: 'Automate repetitive tasks and workflows with our powerful automation engine.',
    },
    {
        icon: <Shield size={40} />,
        title: 'Security Center',
        description: 'Manage permissions, user access, and data privacy with our secure platform.',
    },
];

const AllApps = () => {
    const navigate=useNavigate()

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4 },
        }),
    };
    return (
        <div className="py-12 px-3 h-screen pt-4 max-w-7xl mx-auto gap-4">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">All Pabbly Apps</h1>
                <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto">
                    Click 'Access Now' to start using any Pabbly application. With a single Pabbly Plus plan, you can enjoy full access to all Pabbly apps{' '}
                    <span className="underline text-blue-700 cursor-pointer">Learn More</span>
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
                {apps.map((app, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}
                        className="p-6 rounded-2xl bg-white text-center flex flex-col items-center transition-shadow hover:border-blue-600 hover:border"
                    >
                        <div className="mb-4 text-blue-600">{app.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{app.title}</h2>
                        <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                        <div className="flex gap-2">
                            <button onClick={()=>navigate('/')} className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition cursor-pointer">Access Now</button>
                            <button onClick={()=>navigate('/')} className="border border-blue-500 text-blue-600 px-2 py-1 rounded-md hover:bg-blue-50 transition cursor-pointer">Learn More</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllApps;
