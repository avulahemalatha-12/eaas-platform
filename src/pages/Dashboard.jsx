// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Battery, Sun, Zap, TrendingDown } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import EnergyFlowChart from '../components/dashboard/EnergyFlowChart';
import EnvironmentalImpact from '../components/dashboard/EnvironmentalImpact';
import NotificationsList from '../components/dashboard/NotificationsList';

const Dashboard = () => {
  // State for real-time energy data
  const [energyData, setEnergyData] = useState({
    currentUsage: 3.2,
    solarGeneration: 18.7,
    gridConsumption: 5.8,
    batterySoc: 85,
    dailyUsage: 24.5,
    carbonSaved: 125.5,
    moneySaved: 2340
  });

  // Simulate real-time updates (like IoT data stream)
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(prev => ({
        ...prev,
        currentUsage: parseFloat((prev.currentUsage + (Math.random() - 0.5) * 0.5).toFixed(1)),
        solarGeneration: parseFloat((prev.solarGeneration + (Math.random() - 0.5) * 0.3).toFixed(1)),
        batterySoc: Math.min(100, Math.max(0, prev.batterySoc + (Math.random() - 0.5) * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statsCards = [
    {
      icon: Zap,
      title: 'Current Usage',
      value: `${energyData.currentUsage} kW`,
      subtitle: 'Live',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Sun,
      title: 'Solar Generated',
      value: `${energyData.solarGeneration} kWh`,
      subtitle: 'Today',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Battery,
      title: 'Battery Charge',
      value: `${energyData.batterySoc}%`,
      subtitle: 'Status',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingDown,
      title: 'Money Saved',
      value: `₹${energyData.moneySaved}`,
      subtitle: 'This Month',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome back, Rajesh!
          </h2>
          <p className="text-gray-600 mt-1">
            Here's your energy overview for today
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-lg shadow">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          System Online
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, index) => (
          <StatsCard key={index} {...card} />
        ))}
      </div>

      {/* Energy Flow and Environmental Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EnergyFlowChart energyData={energyData} />
        <EnvironmentalImpact carbonSaved={energyData.carbonSaved} />
      </div>

      {/* Notifications */}
      <NotificationsList />
    </div>
  );
};

export default Dashboard;