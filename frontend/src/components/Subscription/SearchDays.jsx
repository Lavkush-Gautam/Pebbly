import React, { useState } from 'react';
import { Search, CalendarDays } from 'lucide-react';

const mockApps = [
    { name: "Last 30 Days" },
    { name: "Last 7 Days" },
    { name: "Last Month" },
    { name: "This Month" },
    { name: "All Time" },
    { name: "Today" },
    { name: "Yesterday" },
    { name: "Custom Range" },
];

const SearchDays = () => {
    const [search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSelect = (name) => {
        setSearch(name);
        setShowDropdown(false);
    };

    return (
        <div className="relative w-72 mx-auto">
            {/* Search Box */}
            <div className="relative flex items-center">
                <span className="absolute left-3 text-gray-500">
                    <Search className="w-5 h-5" />
                </span>
                <input
                    type="text"
                    value={search}
                    placeholder="Select Date Range"
                    className="w-full pl-10 pr-10 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    readOnly
                />
                {/* Calendar Icon Trigger */}
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="absolute right-3 text-gray-600 hover:text-blue-600"
                >
                    <CalendarDays className="w-5 h-5" />
                </button>
            </div>

            {/* Dropdown */}
            {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
                    {mockApps.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => handleSelect(option.name)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 transition"
                        >
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchDays;
