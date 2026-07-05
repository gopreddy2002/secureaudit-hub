import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to SecureAudit-Hub</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
          Your central platform for managing compliance, risk assessments, and audits for ISO 27001, ISO 27002, and ISO 42001 standards.
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div className="card" style={{ width: '300px', cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
          <h3 className="card-title">Dashboard</h3>
          <p style={{ color: 'var(--text-secondary)' }}>View your compliance posture and active audits.</p>
        </div>
        
        <div className="card" style={{ width: '300px', cursor: 'pointer' }} onClick={() => navigate('/iso27001')}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
          <h3 className="card-title">ISO Standards</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Browse controls for ISO 27001, 27002, and 42001.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
