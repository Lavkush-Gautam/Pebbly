import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search as SearchIcon, X, Settings, Link2, SplitSquareVertical, Layers, Zap, FileText } from 'lucide-react';
import logo from '../assets/Connect-Logo.svg';
import SearchBox from '../Pages/SearchBox';
import { useAuth } from '../Provider/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { user } = useAuth()
  const navigate = useNavigate()

  const handleClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/signup');
    }
  };

  const features = [
    {
      title: 'Pabbly Connect',
      description: 'Integrate different applications and start automating your work.',
      icon: <Settings className="w-5 h-5 text-blue-600" />,
    },
    {
      title: 'App Integrations',
      description: 'Connect your favorite apps seamlessly and sync data across platforms.',
      icon: <Link2 className="w-5 h-5 text-green-600" />,
    },
    {
      title: 'Conditional Logic',
      description: 'Use conditions to create intelligent, dynamic workflows with precision.',
      icon: <SplitSquareVertical className="w-5 h-5 text-purple-600" />,
    },
    {
      title: 'Multi-Step Actions',
      description: 'Chain multiple actions in one automation to streamline your processes.',
      icon: <Layers className="w-5 h-5 text-yellow-600" />,
    },
    {
      title: 'Instant Triggers',
      description: 'React instantly to events and keep your systems always up to date.',
      icon: <Zap className="w-5 h-5 text-pink-600" />,
    },
    {
      title: 'Detailed Logs',
      description: 'Track every step and monitor your automations with complete visibility.',
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
    },
  ];

  return (
    <nav className="bg-white w-full space-y-2 md:pt-[74px] pt-[260px] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="w-36" />
        </div>

        <div className="hidden md:flex flex-1 mx-6">
          <SearchBox />
        </div>

        <div className="hidden md:flex items-center space-x-8 mr-54">
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-gray-700 hover:text-blue-600 font-medium hover:underline focus:outline-none flex items-center space-x-1"
            >
              Product ▾
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-3 md:w-[550px] bg-white border border-gray-200 shadow-2xl rounded-xl p-6 z-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore Features</h2>
                <p className="text-xl font-medium text-gray-600 mb-6">
                  Discover powerful tools to automate your work efficiently.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03]"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {feature.icon}
                        <h4 className="text-base font-semibold text-gray-700">{feature.title}</h4>
                      </div>
                      <p className="text-sm tracking-wider text-gray-500 leading-snug">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/signin" className="text-gray-700 hover:text-blue-600 font-medium">Sign In</Link>
          <button
            onClick={handleClick}
            className="block bg-green-600 text-white text-center px-4 py-4 rounded hover:bg-green-700 transition"
          >
            Sign Up Free
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">

          <SearchBox />

          <div className="space-y-2">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full text-left text-gray-700 font-medium cursor-pointer"
            >
              Product ▾
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-3 md:w-[550px] bg-white border-gray-200 shadow-2xl rounded-xl p-6 z-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore Features</h2>
                <p className="text-xl font-medium text-gray-600 mb-6">
                  Discover powerful tools to automate your work efficiently.
                </p>

                <div className="flex flex-col gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 hover:bg-gray-50 transition-all duration-200 p-2 rounded"
                    >
                      <div>{feature.icon}</div>
                      <div>
                        <h4 className="text-base font-semibold text-gray-700">
                          {feature.title}
                        </h4>
                        <p className="text-sm tracking-wider text-gray-500 mt-1 leading-snug">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <Link to="/signin" className="block text-gray-700 hover:text-blue-600 font-medium">Sign In</Link>
            <button
              onClick={handleClick}
              className="block bg-green-600 text-white text-center px-4 py-4 rounded hover:bg-green-700 transition"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
