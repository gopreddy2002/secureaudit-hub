import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Compliance Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card">
          <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Overall Compliance</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>78%</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Open Risks</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--warning-color)' }}>12</div>
        </div>
        <div className="card">
          <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Pending Evidence</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>34</div>
        </div>
      </div>
      
      <div className="card">
        <h3 className="card-title">Recent Activity</h3>
        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
          <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>• Evidence uploaded for Control A.5.1</li>
          <li style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>• Risk Assessment updated for ISO 42001</li>
          <li style={{ padding: '0.75rem 0' }}>• New comment on Audit Checklist A.6.1.2</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
