import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname.substring(1) || 'Home';
  const title = path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div style={{ 
      height: 'var(--navbar-height)', 
      backgroundColor: 'rgba(24, 24, 27, 0.7)', 
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '0 2.5rem', 
      borderBottom: '1px solid var(--glass-border)',
      position: 'sticky',
      top: 0,
      zIndex: 5
    }}>
      <h2 style={{ 
        color: 'var(--text-primary)', 
        margin: 0,
        fontWeight: '700',
        fontSize: '1.25rem'
      }}>{title}</h2>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
          <button style={{ background: 'transparent', border: 'none', color: 'currentColor', cursor: 'pointer', display: 'flex' }}>
            <Search size={20} />
          </button>
          <button style={{ background: 'transparent', border: 'none', color: 'currentColor', cursor: 'pointer', display: 'flex', position: 'relative' }}>
            <Bell size={20} />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: 'var(--danger-color)', borderRadius: '50%', border: '2px solid var(--surface-color)' }}></span>
          </button>
        </div>

        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--glass-border)' }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)' }}>Alex Auditor</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Compliance Officer</div>
          </div>
          <div style={{ 
            width: '42px', height: '42px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 0 0 2px var(--surface-color), 0 0 0 4px rgba(99, 102, 241, 0.3)',
            transition: 'box-shadow 0.3s ease'
          }}>
            AA
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
