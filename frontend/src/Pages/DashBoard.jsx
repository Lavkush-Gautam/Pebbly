import React, { useState } from 'react';
import { IoAppsSharp } from "react-icons/io5";
import { AiTwotoneAppstore } from "react-icons/ai";
import { MdOutlineAccountBox } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import logo from '../assets/Connect-Logo.svg';
import AllApps from '../components/AllApps';
import Accounts from '../components/Accounts';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const [user, setUser] = useState(false);
  const[content,setContent]=useState(true)

  const navigate=useNavigate()
  const [showAppsDropdown, setShowAppsDropdown] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
const apps = [
  { icon: <IoAppsSharp />, name: 'Email Marketing' },
  { icon: <MdOutlineAccountBox />, name: 'Form Builder' },
  { icon: <ImProfile />, name: 'Billing' },
  { icon: <IoAppsSharp />, name: 'Automation' },
  { icon: <MdOutlineAccountBox />, name: 'Analytics' },
  { icon: <IoAppsSharp />, name: 'CRM' },
  { icon: <MdOutlineAccountBox />, name: 'Webhooks' },
  { icon: <ImProfile />, name: 'Affiliate Management' },
  { icon: <IoAppsSharp />, name: 'Invoice Generator' },
  { icon: <MdOutlineAccountBox />, name: 'Lead Capture' },
];

 const fetchProfile = async () => {
    try {
      const res = await axios.get('/api/user/profile', { withCredentials: true });
      setUser(res?.data?.user);

    } catch (err) {
      console.log(err.message)
      toast.error(err.response?.data?.message || 'Failed to load profile');
    }
  };

useEffect(()=>{
  fetchProfile()
},[])

const Logout = async () => {
  try {
    await axios.post('/api/user/logout', {}, { withCredentials: true });
    setUser(null);
    toast.success('Logout Successfully');
    navigate('/')
  } catch (error) {
    toast.error('Logout failed');
    console.error('Logout error:', error);
  }
};



  const filteredApps = apps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" relative flex h-screen w-full border border-dotted bg-blue-50">
      {/* Sidebar */}
      <div className="w-[80px] border-dashed border bg-gray-900 text-white flex flex-col items-center py-10 gap-6">
        <div onClick={() => setContent(true)} className='flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded'>
          <IoAppsSharp size={30} title="All Apps" className='text-blue-800' />
          <p className='text-xs'> All Apps</p>
        </div>
        <div onClick={() => setContent(!content)} className='flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded'>
          <MdOutlineAccountBox size={24} title="Accounts" />
          <p className='text-xs'>Accounts</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Topbar */}
        <div className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
          <img src={logo} alt="logo" className='h-12' />

          <div className="flex items-center gap-6 relative">
            {/* Apps Dropdown Trigger */}
            <div
              className='h-8 w-8 bg-gray-200 flex items-center justify-center cursor-pointer shadow-2xs rounded'
              onClick={() => {
                setShowAppsDropdown(!showAppsDropdown);
                setShowProfileDropdown(false);
              }}
            >
              <AiTwotoneAppstore size={24} className="text-green-600" />
            </div>

            {/* Profile Dropdown Trigger */}
            <div
              className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:scale-105'
              onClick={() => {
                setShowProfileDropdown(!showProfileDropdown);
                setShowAppsDropdown(false);
              }}
            >
              <ImProfile size={22} className="text-gray-600" />
            </div>

            {/* Apps Dropdown */}
            {showAppsDropdown && (
              <div className="absolute top-14 right-20 w-70 bg-white shadow-lg rounded-xl p-4 z-50">
                <p className='text-l text-gray-400 pt-2'>Search Applications</p>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-1 mb-3 border-gray-300 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="h-full overflow-y-clip flex flex-col gap-2">
                  {filteredApps.map((app, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-300 rounded cursor-pointer">
                      <span>{app.icon}</span>
                      <p className='text-sm font-semibold'>{app.name}</p>
                    </div>
                  ))}
                  {filteredApps.length === 0 && <p className="text-gray-400">No apps found</p>}
                </div>
              </div>
            )}

            {/* Profile Dropdown */}
            {showProfileDropdown && (
              <div className="absolute top-14 mx-auto right-4 w-72 bg-white shadow-lg rounded-xl p-6  z-50 flex flex-col gap-3 items-center">
                {/* Profile Info */}
                <div className="justify-center rounded items-center gap-3  pb-3">
                  
                  <div className='flex items-center ml-8 h-20 w-20 rounded-full border justify-center'>
                    <ImProfile size={50} className="text-gray-700" />
                  </div>
                  <div className='mt-6'>
                    <p className="font-semibold">{user?.firstname + " " + user?.lastname }</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {/* Options */}
                <button onClick={()=>navigate('/account')} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md cursor-pointer">My Account</button>

                <button onClick={()=>navigate('/subscription')} className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-md cursor-pointer">Subscription</button>

                {/* Logout */}
                
                <div className='w-full mt-10'>
                    <button onClick={Logout} className="mt-2 w-full px-3 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 font-medium cursor-pointer">Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {content ? <AllApps /> : <Accounts />}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
