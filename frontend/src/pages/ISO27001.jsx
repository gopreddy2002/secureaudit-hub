import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ISO27001 = () => {
  const [controls, setControls] = useState([]);

  useEffect(() => {
    axios.get('/api/controls')
      .then(res => setControls(res.data))
      .catch(err => console.error("Error fetching controls:", err));
  }, []);

  return (
    <div>
      <h1>ISO/IEC 27001 Controls</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Information security management systems (ISMS) requirements.</p>
      
      <div className="card">
        <h3 className="card-title">Control Domains</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem 0' }}>Control ID</th>
              <th style={{ padding: '1rem 0' }}>Name</th>
              <th style={{ padding: '1rem 0' }}>Category</th>
              <th style={{ padding: '1rem 0' }}>Status</th>
              <th style={{ padding: '1rem 0' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {controls.map(control => (
              <tr key={control.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1rem 0', fontWeight: 'bold' }}>{control.id}</td>
                <td style={{ padding: '1rem 0' }}>{control.name}</td>
                <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>{control.category}</td>
                <td style={{ padding: '1rem 0' }}>
                  <span style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    backgroundColor: control.status === 'Compliant' ? 'rgba(16, 185, 129, 0.2)' : control.status === 'Non-Compliant' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(148, 163, 184, 0.2)',
                    color: control.status === 'Compliant' ? 'var(--secondary-color)' : control.status === 'Non-Compliant' ? 'var(--danger-color)' : 'var(--text-secondary)'
                  }}>
                    {control.status}
                  </span>
                </td>
                <td style={{ padding: '1rem 0' }}>
                  <button className="btn btn-primary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ISO27001;
