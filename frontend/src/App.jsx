import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ISO27001 from './pages/ISO27001';
import ISO27002 from './pages/ISO27002';
import ISO42001 from './pages/ISO42001';
import AuditChecklist from './pages/AuditChecklist';
import Evidence from './pages/Evidence';
import RiskAssessment from './pages/RiskAssessment';
import SOA from './pages/SOA';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="page-content glass-panel" style={{ margin: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/iso27001" element={<ISO27001 />} />
              <Route path="/iso27002" element={<ISO27002 />} />
              <Route path="/iso42001" element={<ISO42001 />} />
              <Route path="/audit-checklist" element={<AuditChecklist />} />
              <Route path="/evidence" element={<Evidence />} />
              <Route path="/risk-assessment" element={<RiskAssessment />} />
              <Route path="/soa" element={<SOA />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
