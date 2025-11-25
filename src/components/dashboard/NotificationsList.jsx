// src/components/dashboard/NotificationsList.jsx
import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';

const NotificationsList = () => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      message: 'Your solar system generated 25 kWh today! That\'s 15% above average.',
      time: '2 hours ago',
      icon: CheckCircle
    },
    {
      id: 2,
      type: 'info',
      message: 'Monthly bill generated: ₹1,450. View billing details.',
      time: '1 day ago',
      icon: Info
    },
    {
      id: 3,
      type: 'warning',
      message: 'Grid outage detected at 3:45 PM. Battery backup activated automatically.',
      time: '3 days ago',
      icon: AlertCircle
    },
    {
      id: 4,
      type: 'success',
      message: 'Maintenance check completed successfully. All systems optimal.',
      time: '5 days ago',
      icon: CheckCircle
    }
  ];

  const getNotificationStyle = (type) => {
    const styles = {
      success: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        text: 'text-green-800'
      },
      info: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        text: 'text-blue-800'
      },
      warning: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        text: 'text-orange-800'
      }
    };
    return styles[type] || styles.info;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <Bell className="w-5 h-5 text-blue-600" />
        Recent Notifications
        <span className="ml-auto text-sm font-normal text-gray-600">
          {notifications.length} new
        </span>
      </h3>

      <div className="space-y-3">
        {notifications.map((notif) => {
          const style = getNotificationStyle(notif.type);
          const Icon = notif.icon;
          
          return (
            <div 
              key={notif.id} 
              className={`flex items-start gap-3 p-4 ${style.bg} border ${style.border} rounded-lg hover:shadow-md transition-all cursor-pointer`}
            >
              <Icon className={`w-5 h-5 ${style.icon} mt-0.5 flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${style.text} font-medium`}>
                  {notif.message}
                </p>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  {notif.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium hover:bg-blue-50 rounded-lg transition">
        View All Notifications
      </button>
    </div>
  );
};

export default NotificationsList;