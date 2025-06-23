import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const deleteInfo = [
  {
    title: "Contact Support for Assistance",
    description:
      "If you're considering deleting your account due to an issue, please reach out to our support team for help. You can email us at support@pabbly.com.",
  },
  {
    title: "Irreversible Action",
    description:
      "Account deletion is a permanent action. All data associated with your account will be deleted, and this process cannot be undone.",
  },
  {
    title: "Data from All Applications",
    description:
      "Deleting your account will immediately remove all data from all Pabbly applications.",
  },
  {
    title: "Billing and Payments",
    description:
      "If you have an active subscription, be sure to cancel it before deleting your account to avoid any future charges. You can manage subscriptions from your account settings.",
  },
  {
    title: "Feedback Matters",
    description:
      "If there's anything specific prompting you to delete your account, we'd appreciate your feedback. Your input helps us improve our services for other users.",
  },
];

const DeleteAccount = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!password) {
      return toast.error('Please enter your password to confirm.');
    }

    try {
      await axios.delete('/api/user/delete', {
        data: { password },
        withCredentials: true,
      });

      toast.success('Account deleted successfully.');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Account deletion failed.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-xl text-red-700">
          ⚠️ Points to Remember Before Deleting Your Pabbly Account
        </p>

        {deleteInfo.map((item, index) => (
          <div key={index} className="p-4 border border-red-200 rounded bg-red-50">
            <h3 className="font-semibold text-red-800">{item.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 shadow-2xl flex md:flex-col gap-6 p-3">
        <h1 className="text-2xl font-medium">Delete Account</h1>

        <div className="w-full p-4">
          <input
            type="password"
            placeholder="Confirm your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-200 p-2 rounded-md py-4 w-full"
          />
          <p className="text-xs text-gray-500 mt-2">
            Note: Please confirm your Pabbly account password to delete your account permanently.
            This action cannot be undone. If you've forgotten your password, click here to reset it.
          </p>
        </div>

        <button
          onClick={handleDelete}
          className="mt-4 mb-2 self-start px-3 py-1 border border-red-600 text-white rounded bg-red-600 hover:text-white transition cursor-pointer hover:bg-red-900"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
