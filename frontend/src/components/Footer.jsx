import React from 'react';
import pabbly from '../assets/Connect-Logo.svg';
import { Mail, Phone, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Quick Links */}
        <div>
          <h4 className="text-lg underline font-semibold mb-4">Quick Links</h4>
          <p className="mb-2 cursor-pointer hover:text-green-400">Dashboard</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Pricing</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Features</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Integrations</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Tutorials</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">FAQs</p>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 underline">About Us</h4>
          <p className="mb-2 cursor-pointer hover:text-green-400">About Pabbly</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Contact Us</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Privacy Policy</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Terms of Service</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Blog</p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold mb-4 underline">Explore</h4>
          <p className="mb-2 cursor-pointer hover:text-green-400">Affiliate Program</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Case Studies</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Webinars</p>
          <p className="mb-2 cursor-pointer hover:text-green-400">Community</p>
        </div>

<div>
  <img src={pabbly} alt="Pabbly Logo" className="w-32 mb-4" />
  <p className="text-sm mb-2 hover:text-green-400">
    Pabbly Connect – Automation for your workflows
  </p>
  <p className="text-sm mb-2 flex items-center gap-2 hover:text-green-400">
    <Mail size={16} /> support@pabbly.com
  </p>
  <p className="text-sm mb-2 flex items-center gap-2 hover:text-green-400">
    <Phone size={16} /> +1 123-456-7890
  </p>
  <p className="text-sm flex items-center gap-2 hover:text-green-400">
    <Copyright size={16} /> {new Date().getFullYear()} Pabbly. All rights reserved.
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;
