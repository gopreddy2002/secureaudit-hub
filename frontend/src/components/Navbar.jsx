import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.substring(1) || 'Home';
  const title = path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');

  return (
    <div style={{ height: 'var(--navbar-height)', backgroundColor: 'var(--surface-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', borderBottom: '1px solid var(--glass-border)' }}>
      <h2 style={{ color: 'var(--text-primary)', margin: 0 }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
          AU
        </div>
        <div>
          <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Auditor User</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Compliance Officer</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
