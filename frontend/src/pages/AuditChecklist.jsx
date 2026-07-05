import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, FileQuestion, AlertCircle } from 'lucide-react';

const AuditChecklist = () => {
  const [audits, setAudits] = useState([]);
  const [controls, setControls] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [auditRes, controlRes] = await Promise.all([
        axios.get('/api/audits'),
        axios.get('/api/controls')
      ]);
      
      const controlMap = {};
      controlRes.data.forEach(c => {
        controlMap[c.id] = c;
      });
      
      setControls(controlMap);
      setAudits(auditRes.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (auditId, newStatus) => {
    try {
      await axios.put(`/api/audits/${auditId}`, { status: newStatus });
      // Update local state
      setAudits(audits.map(a => a.id === auditId ? { ...a, status: newStatus } : a));
    } catch (err) {
      console.error("Error updating audit:", err);
    }
  };

  if (loading) {
    return <div>Loading checklist...</div>;
  }

  return (
    <div>
      <h1>Audit Checklist</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Evaluate controls and mark compliance status.</p>
      
      {audits.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
          No audit checklist items found.
        </div>
      ) : (
        audits.map(audit => {
          const control = controls[audit.control_id] || { control_id: "Unknown", name: "Unknown Control" };
          
          let statusColor = 'var(--text-secondary)';
          let statusBg = 'rgba(148, 163, 184, 0.2)';
          if (audit.status === 'Compliant') {
            statusColor = 'var(--secondary-color)';
            statusBg = 'rgba(16, 185, 129, 0.2)';
          } else if (audit.status === 'Non-Compliant') {
            statusColor = 'var(--danger-color)';
            statusBg = 'rgba(239, 68, 68, 0.2)';
          } else if (audit.status === 'In Progress') {
            statusColor = 'var(--primary-color)';
            statusBg = 'rgba(99, 102, 241, 0.2)';
          }

          return (
            <div className="card" key={audit.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 className="card-title" style={{ margin: 0 }}>
                  <span style={{ color: 'var(--primary-color)', marginRight: '0.5rem' }}>{control.control_id}</span>
                  {control.name}
                </h3>
                <span style={{ padding: '0.4rem 1rem', borderRadius: '20px', backgroundColor: statusBg, color: statusColor, fontWeight: 'bold' }}>
                  {audit.status}
                </span>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileQuestion size={18} color="var(--accent-color)" /> Audit Question:
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'var(--surface-color-light)', borderRadius: '8px', color: 'var(--text-primary)' }}>
                  {audit.audit_question}
                </div>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertCircle size={18} color="var(--warning-color)" /> Evidence Required:
                </div>
                <ul style={{ listStylePosition: 'inside', color: 'var(--text-secondary)' }}>
                  {audit.evidence_required.split(',').map((item, idx) => (
                    <li key={idx} style={{ padding: '4px 0' }}>{item.trim()}</li>
                  ))}
                </ul>
              </div>
              
              <div className="input-group">
                <label>Auditor Comments</label>
                <textarea className="input-field" rows="3" placeholder="Enter your observations here..."></textarea>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button 
                  className="btn" 
                  style={{ backgroundColor: 'var(--secondary-color)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onClick={() => updateStatus(audit.id, 'Compliant')}
                >
                  <CheckCircle size={18} /> Mark as Compliant
                </button>
                <button 
                  className="btn" 
                  style={{ backgroundColor: 'var(--danger-color)', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  onClick={() => updateStatus(audit.id, 'Non-Compliant')}
                >
                  <XCircle size={18} /> Mark as Non-Compliant
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AuditChecklist;
