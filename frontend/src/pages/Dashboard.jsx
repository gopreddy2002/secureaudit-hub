import React from 'react';
import { Activity, ShieldAlert, CheckCircle2, FileSymlink, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>Compliance Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Overview of your organization's security posture.</p>
        </div>
        <button className="btn btn-primary">Generate Report</button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        
        <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Overall Compliance</div>
            <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px', color: 'var(--secondary-color)' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary-color)', lineHeight: 1 }}>
            78<span style={{ fontSize: '1.5rem' }}>%</span>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--secondary-color)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={14} /> +4% from last month
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Open Risks</div>
            <div style={{ padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '10px', color: 'var(--warning-color)' }}>
              <ShieldAlert size={20} />
            </div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--warning-color)', lineHeight: 1 }}>
            12
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            3 high priority risks require attention
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Pending Evidence</div>
            <div style={{ padding: '8px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '10px', color: 'var(--accent-color)' }}>
              <FileSymlink size={20} />
            </div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)', lineHeight: 1 }}>
            34
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Awaiting auditor review
          </div>
        </div>

      </div>
      
      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Activity size={24} color="var(--primary-color)" />
          <h3 className="card-title" style={{ margin: 0 }}>Recent Activity</h3>
        </div>
        
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <li style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ marginTop: '2px', color: 'var(--secondary-color)' }}>
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '4px' }}>Evidence uploaded for Control A.5.1</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>2 hours ago by Alex Auditor</div>
            </div>
          </li>
          
          <li style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ marginTop: '2px', color: 'var(--warning-color)' }}>
              <ShieldAlert size={18} />
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '4px' }}>Risk Assessment updated for ISO 42001</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Yesterday at 4:30 PM by Sarah Admin</div>
            </div>
          </li>
          
          <li style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ marginTop: '2px', color: 'var(--primary-color)' }}>
              <FileSymlink size={18} />
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '4px' }}>New comment on Audit Checklist A.6.1.2</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Oct 12, 2026 by John Compliance</div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
