import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, BarChart3, ChevronRight, Lock } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: 'calc(100vh - var(--navbar-height) - 5rem)', 
      position: 'relative'
    }}>
      {/* Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <div style={{ textAlign: 'center', zIndex: 1, position: 'relative', marginBottom: '4rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '20px', border: '1px solid rgba(99, 102, 241, 0.2)', marginBottom: '1.5rem', color: 'var(--primary-color)', fontSize: '0.85rem', fontWeight: '600' }}>
          <Lock size={14} /> Enterprise Security Platform
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
          Compliance Management <br/> <span className="text-gradient">Simplified.</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Your central platform for managing risk assessments, evidence, and audits for ISO 27001, ISO 27002, and ISO 42001 standards.
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', zIndex: 1, position: 'relative', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className="card" style={{ width: '320px', cursor: 'pointer', padding: '2rem' }} onClick={() => navigate('/dashboard')}>
          <div style={{ 
            width: '56px', height: '56px', 
            borderRadius: '16px', 
            background: 'rgba(99, 102, 241, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'var(--primary-color)'
          }}>
            <BarChart3 size={28} />
          </div>
          <h3 className="card-title" style={{ fontSize: '1.4rem' }}>Dashboard</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>View your overall compliance posture, open risks, and active audit tasks.</p>
          <div style={{ display: 'flex', alignItems: 'center', color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.9rem' }}>
            Go to Dashboard <ChevronRight size={16} style={{ marginLeft: '4px' }} />
          </div>
        </div>
        
        <div className="card" style={{ width: '320px', cursor: 'pointer', padding: '2rem' }} onClick={() => navigate('/iso27001')}>
          <div style={{ 
            width: '56px', height: '56px', 
            borderRadius: '16px', 
            background: 'rgba(16, 185, 129, 0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'var(--secondary-color)'
          }}>
            <ShieldCheck size={28} />
          </div>
          <h3 className="card-title" style={{ fontSize: '1.4rem' }}>ISO Standards</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>Browse and manage controls across ISO 27001, 27002, and 42001 frameworks.</p>
          <div style={{ display: 'flex', alignItems: 'center', color: 'var(--secondary-color)', fontWeight: '600', fontSize: '0.9rem' }}>
            View Controls <ChevronRight size={16} style={{ marginLeft: '4px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
