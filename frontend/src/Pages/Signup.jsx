import React, { useState } from 'react';
import pabbly from '../assets/Connect-Logo.svg';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match!");
    }

    try {
      const res = await axios.post(
        '/api/user/register',
        formData,
        { withCredentials: true }
      );
      toast.success("Account created successfully! 🎉");
      navigate('/signin');
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative px-4 mt-5">
      <div className="absolute top-6 right-6 text-sm">
        <span className="mr-2">Already have an account?</span>
        <Link to="/signin" className="text-blue-600 px-3 py-2 border cursor-pointer font-semibold">
          Sign In
        </Link>
      </div>

      <div className="mb-10 text-center">
        <img src={pabbly} alt="Pabbly Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Create Your Pabbly Account</h1>
        <p className="text-sm text-gray-500">Start your journey – No credit card required</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg w-full max-w-md h-auto p-8 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <div className="flex items-center rounded-md px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First name"
                className="w-full outline-none text-sm py-1.5"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <div className="flex items-center rounded-md px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last name"
                className="w-full outline-none text-sm py-1.5"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="flex items-center rounded-md px-3 py-2">
            <Mail size={16} className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full outline-none text-sm py-1.5"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="flex items-center rounded-md px-3 py-2 relative">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full outline-none text-sm py-1.5 pr-8"
            />
            <span className="absolute right-3 cursor-pointer text-gray-500" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
          <div className="flex items-center rounded-md px-3 py-2 relative">
            <Lock size={16} className="text-gray-400 mr-2" />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full outline-none text-sm py-1.5 pr-8"
            />
            <span className="absolute right-3 cursor-pointer text-gray-500" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-200 cursor-pointer"
        >
          Create Account
        </button>

        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-500 mr-2">or</span>
        </div>

        {/* Google Signup */}
        <button type="button" className="w-full py-3 flex items-center justify-center gap-2 border rounded-xl hover:bg-gray-100 cursor-pointer transition duration-200">
          <FcGoogle size={20} />
          <span className="text-sm font-medium">Sign up with Google</span>
        </button>

        <p className="text-sm text-center">
          Already have an account? <Link to="/signin" className="text-blue-800">Log In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
