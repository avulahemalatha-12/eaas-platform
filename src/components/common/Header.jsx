// src/components/common/Header.jsx
import React from 'react';
import { Bell, Zap, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const userData = {
    name: 'Rajesh Kumar',
    notifications: 3
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Energy as a Service
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">
                  Powered by Clean Energy
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Notifications and Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
              <Bell className="w-5 h-5 text-gray-600" />
              {userData.notifications > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                  {userData.notifications}
                </span>
              )}
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-semibold text-gray-800">
                  {userData.name}
                </div>
                <div className="text-xs text-gray-600">Premium Member</div>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg cursor-pointer hover:shadow-lg transition">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;