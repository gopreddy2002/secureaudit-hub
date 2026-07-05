import React from 'react';

const SOA = () => {
  return (
    <div>
      <h1>Statement of Applicability (SoA)</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Manage the applicability of controls.</p>
      
      <div className="card" style={{ marginTop: '2rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
              <th style={{ padding: '1rem 0' }}>Control ID</th>
              <th style={{ padding: '1rem 0' }}>Applicable?</th>
              <th style={{ padding: '1rem 0' }}>Justification</th>
              <th style={{ padding: '1rem 0' }}>Implementation Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
              <td style={{ padding: '1rem 0' }}>A.5.1</td>
              <td style={{ padding: '1rem 0', color: 'var(--secondary-color)' }}>Yes</td>
              <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>Required by law.</td>
              <td style={{ padding: '1rem 0' }}>Implemented</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SOA;
