import React, { useState, useEffect } from 'react';
import { MdSpaceDashboard, MdOutlineSubscriptions } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import logo from '../assets/Connect-Logo.svg';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Subscrptions from '../components/Subscription/Subscrptions';
import Money from '../components/Subscription/Money';
import Invoice from '../components/Subscription/Invoice';
import Transaction from '../components/Subscription/Transaction';
import Affiliate from '../components/Subscription/Affiliate';
import Setting from '../components/Subscription/Setting';
import SearchDays from '../components/Subscription/SearchDays';

const MySubscription = () => {
    const [user, setUser] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const res = await axios.get('/api/user/profile', { withCredentials: true });
            setUser(res?.data?.user);
        } catch (err) {
            toast.error(err.response?.data?.message || 'Failed to load profile');
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const Logout = async () => {
        try {
            await axios.post('/api/user/logout', {}, { withCredentials: true });
            setUser(null);
            toast.success('Logout Successfully');
            navigate('/');
        } catch (error) {
            toast.error('Logout failed');
        }
    };

    const sidebarItems = [
        { key: 'dashboard', label: 'Dashboard', icon: <MdSpaceDashboard size={24} />, component: <Money /> },
        { key: 'subscription', label: 'Subscription', icon: <MdOutlineSubscriptions size={24} />, component: <Subscrptions /> },
        { key: 'invoice', label: 'Invoice', icon: <FaFileInvoiceDollar size={24} />, component: <Invoice /> },
        { key: 'transaction', label: 'Transaction', icon: <BsBank2 size={24} />, component: <Transaction /> },
        { key: 'affiliate', label: 'Affiliate', icon: <RiShareForwardLine size={24} />, component: <Affiliate /> },
        { key: 'setting', label: 'Setting', icon: <IoSettingsOutline size={24} />, component: <Setting /> },
    ];

    return (
        <div className="relative flex h-screen w-full border border-dotted bg-blue-50">
            {/* Sidebar */}
            <div className="w-[90px] border-dashed border bg-gray-900 text-white flex flex-col items-center py-10 gap-6">
                {sidebarItems.map((item) => (
                    <div
                        key={item.key}
                        onClick={() => setActiveTab(item.key)}
                        className={`flex flex-col items-center gap-2 cursor-pointer p-2 rounded hover:bg-gray-800 ${activeTab === item.key ? 'bg-blue-800' : ''
                            }`}
                        title={item.label}
                    >
                        <div className="text-blue-400 gap-1">{item.icon}</div>
                        <p className="text-xs">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                {/* Topbar */}
                <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
                    <img src={logo} alt="logo" className="h-12" />

                    <div className="hidden md:flex flex-1 mx-6">
                        <SearchDays />
                    </div>

                    <div className="flex items-center gap-6 relative">
                        {/* Profile Avatar */}
                        <div
                            className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:scale-105"
                            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                        >
                            <ImProfile size={22} className="text-gray-600" />
                        </div>

                        {/* Dropdown */}
                        {showProfileDropdown && (
                            <div className="absolute top-14 right-4 w-72 bg-white shadow-lg rounded-xl p-6 z-50 flex flex-col gap-3 items-center">
                                {/* Profile Info */}
                                <div className="justify-center items-center pb-3">
                                    <div className="flex items-center ml-8 h-20 w-20 rounded-full border justify-center">
                                        <ImProfile size={50} className="text-gray-700" />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <p className="font-semibold">
                                            {user?.firstname + " " + user?.lastname}
                                        </p>
                                        <p className="text-sm text-gray-500">{user?.email}</p>
                                    </div>
                                </div>

                                {/* Options */}
                                <button onClick={() => navigate('/')} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md">
                                    My Account
                                </button>
                                <button className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md">
                                    Subscription
                                </button>

                                {/* Logout */}
                                <div className="w-full mt-10">
                                    <button
                                        onClick={Logout}
                                        className="w-full px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Page Content */}
                {/* Page Content */}
                <div className="flex-1 p-6 overflow-y-auto">
                    {sidebarItems.find(item => item.key === activeTab)?.component}
                </div>

            </div>
        </div >
    );
};

export default MySubscription;
