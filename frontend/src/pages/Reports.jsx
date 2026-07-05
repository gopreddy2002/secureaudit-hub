import React from 'react';

const Reports = () => {
  return (
    <div>
      <h1>Audit Reports</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Generate and view audit reports.</p>
      
      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="card-title">Generate New Report</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
          <div className="input-group" style={{ margin: 0, flex: 1 }}>
            <label>Select Standard</label>
            <select className="input-field">
              <option>ISO 27001</option>
              <option>ISO 27002</option>
              <option>ISO 42001</option>
            </select>
          </div>
          <button className="btn btn-primary" style={{ padding: '0.9rem 1.5rem' }}>Generate PDF Report</button>
        </div>
      </div>
      
      <div className="card">
        <h3 className="card-title">Past Reports</h3>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>ISO 27001 Annual Audit Report 2025</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Generated on Oct 15, 2025</div>
            </div>
            <button className="btn" style={{ border: '1px solid var(--glass-border)', background: 'transparent', color: 'white' }}>Download</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
