// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Dashboard from './pages/Dashboard';
//import Subscription from './pages/Subscription';
import Billing from './pages/Billing';
import Support from './pages/Support';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          
          <main className={`flex-1 p-6 transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-0'
          }`}>
            <div className="max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;