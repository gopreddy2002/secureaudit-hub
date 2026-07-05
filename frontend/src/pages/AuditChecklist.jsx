import React from 'react';

const AuditChecklist = () => {
  return (
    <div>
      <h1>Audit Checklist</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Evaluate controls and mark compliance status.</p>
      
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 className="card-title" style={{ margin: 0 }}>A.5.1 Policies for Information Security</h3>
          <span style={{ padding: '0.4rem 1rem', borderRadius: '20px', backgroundColor: 'rgba(56, 189, 248, 0.2)', color: 'var(--accent-color)', fontWeight: 'bold' }}>In Progress</span>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Audit Question:</div>
          <div style={{ padding: '1rem', backgroundColor: 'var(--surface-color-light)', borderRadius: '8px', color: 'var(--text-primary)' }}>
            Are the information security policies approved by management, published and communicated to employees and relevant external parties?
          </div>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Evidence Required:</div>
          <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)' }}>
            <li>Copy of information security policy</li>
            <li>Meeting minutes showing management approval</li>
            <li>Communication records to staff</li>
          </ul>
        </div>
        
        <div className="input-group">
          <label>Auditor Comments</label>
          <textarea className="input-field" rows="4" placeholder="Enter your observations here..."></textarea>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--secondary-color)' }}>Mark as Compliant</button>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--danger-color)' }}>Mark as Non-Compliant</button>
          <button className="btn" style={{ backgroundColor: 'transparent', border: '1px solid var(--glass-border)', color: 'white' }}>Request More Evidence</button>
        </div>
      </div>
    </div>
  );
};

export default AuditChecklist;
