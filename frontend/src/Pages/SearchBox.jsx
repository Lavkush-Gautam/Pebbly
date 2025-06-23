import React, { useState } from 'react';
import { Search, AppWindow, Mail, Sheet, ShoppingCart, Slack, Trello, Cloud, Video } from 'lucide-react';

const mockApps = [
  { name: "Google Sheets", icon: <Sheet className="w-5 h-5 text-blue-500" /> },
  { name: "Slack", icon: <Slack className="w-5 h-5 text-purple-500" /> },
  { name: "Gmail", icon: <Mail className="w-5 h-5 text-red-500" /> },
  { name: "Zoom", icon: <Video className="w-5 h-5 text-blue-600" /> },
  { name: "Notion", icon: <AppWindow className="w-5 h-5 text-black" /> },
  { name: "Dropbox", icon: <Cloud className="w-5 h-5 text-blue-400" /> },
  { name: "Trello", icon: <Trello className="w-5 h-5 text-cyan-500" /> },
  { name: "Shopify", icon: <ShoppingCart className="w-5 h-5 text-green-600" /> },
  { name: "Salesforce", icon: <Cloud className="w-5 h-5 text-sky-500" /> },
];

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === '') {
      setFilteredApps([]);
    } else {
      const results = mockApps.filter((app) =>
        app.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredApps(results);
    }
  };

  return (
    <div className="relative w-60 mx-auto">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-500" />
      </span>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by App..."
        className="w-full pl-10 pr-4 py-2 border text-black text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {filteredApps.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 gap-5 max-h-60 overflow-y-auto">
          {filteredApps.map((app, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 transition-all"
              onClick={() => {
                setSearch(app.name);
                setFilteredApps([]);
              }}
            >
              <div className="flex-shrink-0">{app.icon}</div>
              <span>{app.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
