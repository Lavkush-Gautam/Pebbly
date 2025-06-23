import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmNewPassword) {
      return toast.error("New passwords do not match");
    }

    try {
      await axios.post(
        '/api/user/update-password',
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        { withCredentials: true }
      );
      toast.success("Password updated successfully");
      setFormData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || "Password update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="flex flex-col gap-6" onSubmit={updatePassword}>
        <input
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          placeholder="Current Password"
          className="border border-gray-200 p-2 rounded-md py-4"
        />
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          placeholder="New Password"
          className="border border-gray-200 p-2 rounded-md py-4"
        />
        <input
          type="password"
          name="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
          placeholder="Confirm New Password"
          className="border border-gray-200 p-2 rounded-md py-4"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
