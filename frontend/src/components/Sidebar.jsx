import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: 'var(--sidebar-width)', backgroundColor: 'var(--surface-color)', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem', borderRight: '1px solid var(--glass-border)', height: '100vh', position: 'fixed', left: 0, top: 0 }}>
      <h2 style={{ color: 'var(--accent-color)', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold', fontSize: '1.5rem' }}>SecureAudit Hub</h2>
      
      <NavLink to="/dashboard" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        Dashboard
      </NavLink>
      <NavLink to="/iso27001" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        ISO 27001
      </NavLink>
      <NavLink to="/iso27002" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        ISO 27002
      </NavLink>
      <NavLink to="/iso42001" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        ISO 42001
      </NavLink>
      <NavLink to="/audit-checklist" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        Audit Checklist
      </NavLink>
      <NavLink to="/evidence" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        Evidence
      </NavLink>
      <NavLink to="/risk-assessment" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        Risk Assessment
      </NavLink>
      <NavLink to="/soa" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        Statement of Applicability
      </NavLink>
      <NavLink to="/reports" style={({ isActive }) => ({ padding: '10px 15px', borderRadius: '8px', color: isActive ? 'white' : 'var(--text-secondary)', backgroundColor: isActive ? 'var(--primary-color)' : 'transparent', textDecoration: 'none', transition: 'all 0.3s' })}>
        Reports
      </NavLink>
    </div>
  );
};

export default Sidebar;
