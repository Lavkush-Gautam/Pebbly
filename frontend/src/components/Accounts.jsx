import React, { useState } from 'react';
import { MdOutlineAccountCircle, MdOutlineDelete } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import ProfileForm from './ProfileForm';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

;

const Accounts = () => {
  const [selected, setSelected] = useState('Profile');
  const[user,setUser]=useState(null)

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

  const menu = [
    { label: 'Profile', icon: <MdOutlineAccountCircle size={24} /> },
    { label: 'Password', icon: <RiLockPasswordLine size={24} /> },
    { label: 'Delete Account', icon: <MdOutlineDelete size={24} /> },
  ];

  const renderContent = () => {
    switch (selected) {
      case 'Profile':
        return <ProfileForm user={user} />;
      case 'Password':
        return <ChangePassword user={user} />;
      case 'Delete Account':
        return <DeleteAccount user={user} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Account Management</h1>
        <p className="text-lg font-normal tracking-wider text-gray-600">
          View and manage all settings related to your Pabbly account information and security.{' '}
          <span className="underline text-blue-600 cursor-pointer tracking-wider">Learn more</span>
        </p>
      </div>

      {/* Icon Menu */}
      <div className="mt-12 flex md:flex-row flex-col gap-6">
        {menu.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(item.label)}
            className="flex items-center gap-3 cursor-pointer group relative px-4 py-2"
          >
            <div
              className={`text-gray-600 transition duration-300 ${
                selected === item.label ? 'text-blue-600' : 'group-hover:text-blue-600'
              }`}
            >
              {item.icon}
            </div>
            <p className="mt-2 text-sm">{item.label}</p>
            <div
              className={`absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 transition-transform duration-300 origin-bottom ${
                selected === item.label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}
            />
          </div>
        ))}
      </div>

      {/* Dynamic Section Content */}
      <div className="mt-12 shadow-2xl p-6 rounded-md bg-white">
        <p className="text-2xl font-medium mb-4">{selected} Settings</p>
        {renderContent()}
      </div>
    </div>
  );
};

export default Accounts;
