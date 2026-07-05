import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Shield, ShieldCheck, FileCheck, FileText, AlertTriangle, FileBadge, BarChart3 } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/iso27001', label: 'ISO 27001', icon: Shield },
    { path: '/iso27002', label: 'ISO 27002', icon: ShieldCheck },
    { path: '/iso42001', label: 'ISO 42001', icon: FileCheck },
    { path: '/audit-checklist', label: 'Audit Checklist', icon: FileText },
    { path: '/evidence', label: 'Evidence', icon: FileBadge },
    { path: '/risk-assessment', label: 'Risk Assessment', icon: AlertTriangle },
    { path: '/soa', label: 'SOA', icon: FileCheck },
    { path: '/reports', label: 'Reports', icon: BarChart3 },
  ];

  return (
    <div style={{ 
      width: 'var(--sidebar-width)', 
      backgroundColor: 'var(--surface-color)', 
      padding: '2rem 1.5rem', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0.5rem', 
      borderRight: '1px solid var(--glass-border)', 
      height: '100vh', 
      position: 'fixed', 
      left: 0, 
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', paddingLeft: '0.5rem' }}>
        <div style={{ 
          width: '36px', height: '36px', 
          background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
          borderRadius: '10px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px var(--accent-glow)'
        }}>
          <Shield color="white" size={20} />
        </div>
        <h2 style={{ 
          color: 'var(--text-primary)', 
          fontWeight: '800', 
          fontSize: '1.4rem',
          letterSpacing: '-0.03em',
          margin: 0
        }}>SecureAudit</h2>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {navItems.map((item) => (
          <NavLink 
            key={item.path}
            to={item.path} 
            style={({ isActive }) => ({ 
              padding: '0.85rem 1rem', 
              borderRadius: '10px', 
              color: isActive ? 'white' : 'var(--text-secondary)', 
              backgroundColor: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent', 
              textDecoration: 'none', 
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontWeight: isActive ? '600' : '500',
              border: isActive ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid transparent',
              position: 'relative',
              overflow: 'hidden'
            })}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div style={{ 
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', 
                    background: 'linear-gradient(to bottom, var(--primary-color), var(--accent-color))',
                    borderRadius: '4px 0 0 4px'
                  }} />
                )}
                <item.icon size={20} color={isActive ? 'var(--primary-color)' : 'currentColor'} />
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
