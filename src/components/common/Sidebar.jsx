// src/components/common/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Sun, CreditCard, AlertCircle, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/subscription', icon: Sun, label: 'Subscription' },
    { path: '/billing', icon: CreditCard, label: 'Billing' },
    { path: '/support', icon: AlertCircle, label: 'Support' }
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-lg z-50
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64
      `}>
        <div className="p-4">
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg lg:hidden"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Navigation */}
          <nav className="space-y-2 mt-8 lg:mt-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* System Status */}
          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-green-800">
                System Online
              </span>
            </div>
            <p className="text-xs text-green-700">
              All services operational
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="text-xs text-blue-600 mb-1">Today's Generation</div>
            <div className="text-2xl font-bold text-blue-800">18.7 kWh</div>
            <div className="text-xs text-blue-600 mt-2">Battery: 85%</div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;