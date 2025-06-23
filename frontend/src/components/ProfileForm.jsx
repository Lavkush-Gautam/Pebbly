import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ProfileForm = ({ user }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    mobile: '',
    state: ''
  });


  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstname: user.firstname || '',
        lastname: user.lastname || ''
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/user/update', formData, { withCredentials: true });
      toast.success('Profile updated successfully!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Update failed!');
      console.error(err);
    }
  };

  return (
    <div className="w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-md shadow-md"
      >
        {/* Name Fields */}
        <div className="flex flex-col gap-5 md:flex-row">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-200 p-2 py-4 rounded-md w-full"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-200 p-2 py-4 rounded-md w-full"
          />
        </div>

        {/* Location Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="border border-gray-200 py-4 p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="border border-gray-200 py-4 p-2 rounded-md w-full"
          />
        </div>

        {/* Mobile Number & State */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
            className="border border-gray-200 py-4 p-2 rounded-md w-full"
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            className="border border-gray-200 p-2 py-4 rounded-md w-full"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
