import React from 'react';

const Evidence = () => {
  return (
    <div>
      <h1>Evidence Repository</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Upload and manage compliance evidence files.</p>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem', border: '2px dashed var(--glass-border)', backgroundColor: 'rgba(30, 41, 59, 0.3)' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>📁</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Drag & Drop Files Here</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>or click to browse from your computer</p>
        <button className="btn btn-primary">Select Files</button>
      </div>
      
      <div className="card">
        <h3 className="card-title">Recent Uploads</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem 0' }}>File Name</th>
              <th style={{ padding: '1rem 0' }}>Related Control</th>
              <th style={{ padding: '1rem 0' }}>Uploaded By</th>
              <th style={{ padding: '1rem 0' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
              <td style={{ padding: '1rem 0', color: 'var(--accent-color)' }}>ISMS_Policy_v2.pdf</td>
              <td style={{ padding: '1rem 0' }}>A.5.1</td>
              <td style={{ padding: '1rem 0' }}>John Doe</td>
              <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>Today, 10:30 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Evidence;
