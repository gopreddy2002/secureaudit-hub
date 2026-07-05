import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ISO27001 = () => {
  const [controls, setControls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/controls')
      .then(res => setControls(res.data))
      .catch(err => console.error("Error fetching controls:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading controls...</div>;
  }

  return (
    <div>
      <h1>ISO/IEC 27001 Controls</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Information security management systems (ISMS) requirements.</p>
      
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <ShieldCheck size={24} color="var(--primary-color)" />
          <h3 className="card-title" style={{ margin: 0 }}>Control Domains</h3>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem 0' }}>Control ID</th>
              <th style={{ padding: '1rem 0' }}>Name</th>
              <th style={{ padding: '1rem 0' }}>Category</th>
              <th style={{ padding: '1rem 0' }}>Status</th>
              <th style={{ padding: '1rem 0', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {controls.map(control => {
              let statusColor = 'var(--text-secondary)';
              let statusBg = 'rgba(148, 163, 184, 0.2)';
              if (control.status === 'Compliant') {
                statusColor = 'var(--secondary-color)';
                statusBg = 'rgba(16, 185, 129, 0.2)';
              } else if (control.status === 'Non-Compliant') {
                statusColor = 'var(--danger-color)';
                statusBg = 'rgba(239, 68, 68, 0.2)';
              } else if (control.status === 'In Progress') {
                statusColor = 'var(--primary-color)';
                statusBg = 'rgba(99, 102, 241, 0.2)';
              }

              return (
                <tr key={control.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '1.25rem 0', fontWeight: 'bold', color: 'var(--primary-color)' }}>{control.control_id}</td>
                  <td style={{ padding: '1.25rem 0', color: 'var(--text-primary)' }}>{control.name}</td>
                  <td style={{ padding: '1.25rem 0', color: 'var(--text-secondary)' }}>{control.category}</td>
                  <td style={{ padding: '1.25rem 0' }}>
                    <span style={{ 
                      padding: '0.4rem 0.8rem', 
                      borderRadius: '20px', 
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      backgroundColor: statusBg,
                      color: statusColor
                    }}>
                      {control.status}
                    </span>
                  </td>
                  <td style={{ padding: '1.25rem 0', textAlign: 'right' }}>
                    <button className="btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      View <ArrowRight size={14} />
                    </button>
                  </td>
                </tr>
              )
            })}
            {controls.length === 0 && (
              <tr>
                <td colSpan="5" style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>
                  No controls found. Please run the seed script.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ISO27001;
