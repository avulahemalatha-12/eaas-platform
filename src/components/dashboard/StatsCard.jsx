// src/components/dashboard/StatsCard.jsx
import React from 'react';

const StatsCard = ({ icon: Icon, title, value, subtitle, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-3">
        <Icon className="w-8 h-8 opacity-80" />
        <span className="text-sm opacity-80 bg-white/20 px-2 py-1 rounded">
          {subtitle}
        </span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{title}</div>
    </div>
  );
};

export default StatsCard;