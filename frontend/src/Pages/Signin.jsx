import React, { useState } from 'react';
import pabbly from '../assets/Connect-Logo.svg';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        '/api/user/login',
        { email: formData.email, password: formData.password },
        { withCredentials: true }
      );

      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed!');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 relative px-4">
      <div className="absolute top-6 right-6 text-sm">
        <span className="mr-2">Don't have an account?</span>
        <button onClick={() => navigate('/signup')} className="text-green-600 px-3 py-2 border cursor-pointer font-semibold">
          Create Account
        </button>
      </div>

      <div className="mb-10 text-center">
        <img src={pabbly} alt="Pabbly Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Welcome Back to Pabbly</h1>
        <p className="text-sm text-gray-500">Please sign in to your account. No credit card required.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg w-full max-w-md h-auto p-8 space-y-6">
        <div className='space-y-4'>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center border rounded-md px-3 py-4">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                name='email'
                onChange={handleChange}
                value={formData.email}
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="flex items-center border rounded-md px-3 py-4 relative">
              <Lock size={16} className="text-gray-400 mr-2" />
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                onChange={handleChange}
                value={formData.password}
                placeholder="Enter your password"
                className="w-full outline-none text-sm pr-8"
              />
              <div
                className="absolute right-3 cursor-pointer text-gray-500 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-md transition duration-200 py-4">
            Sign In
          </button>

          {/* OR */}
          <div className="flex items-center justify-center">
            <span className="text-sm text-gray-500 mr-2">or</span>
          </div>

          {/* Google Auth */}
          <button type="button" className="w-full py-3 flex items-center justify-center gap-2 border rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer">
            <FcGoogle size={20} />
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>

          {/* Forgot Password */}
          <p className="text-black text-sm text-center">
            Unable to Login? <Link to="/" className="text-blue-800">Forgot Password</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
