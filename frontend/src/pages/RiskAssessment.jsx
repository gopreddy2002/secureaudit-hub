import React from 'react';

const RiskAssessment = () => {
  return (
    <div>
      <h1>Risk Assessment</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Identify, analyze, and evaluate information security risks.</p>
      
      <div className="card">
        <h3 className="card-title">New Risk Entry</h3>
        <div className="input-group">
          <label>Related Control</label>
          <select className="input-field" style={{ appearance: 'none' }}>
            <option>Select a control...</option>
            <option>A.5.1 Policies for Information Security</option>
            <option>A.6.1 Internal Organization</option>
          </select>
        </div>
        
        <div className="input-group">
          <label>Risk Description</label>
          <textarea className="input-field" rows="3"></textarea>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className="input-group" style={{ flex: 1 }}>
            <label>Likelihood</label>
            <select className="input-field">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <label>Impact</label>
            <select className="input-field">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
        
        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Add Risk</button>
      </div>
    </div>
  );
};

export default RiskAssessment;
