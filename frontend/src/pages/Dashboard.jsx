import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Activity, ShieldAlert, CheckCircle2, FileSymlink, TrendingUp, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    overall_compliance: 0,
    open_risks: 0,
    pending_evidence: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await axios.get('/api/dashboard/stats');
      setStats(res.data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ marginBottom: '0.5rem' }}>Compliance Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Overview of your organization's security posture.</p>
        </div>
        <button className="btn btn-primary" onClick={fetchStats}>Refresh Data</button>
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
            {stats.overall_compliance}<span style={{ fontSize: '1.5rem' }}>%</span>
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Percentage of compliant controls
          </div>
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Open Risks (High/Critical)</div>
            <div style={{ padding: '8px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '10px', color: 'var(--warning-color)' }}>
              <ShieldAlert size={20} />
            </div>
          </div>
          <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--warning-color)', lineHeight: 1 }}>
            {stats.open_risks}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            {stats.open_risks > 0 ? "High priority risks require attention" : "No high priority risks found!"}
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
            {stats.pending_evidence}
          </div>
          <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Controls currently "In Progress"
          </div>
        </div>

      </div>
      
      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <Activity size={24} color="var(--primary-color)" />
          <h3 className="card-title" style={{ margin: 0 }}>System Notifications</h3>
        </div>
        
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
          
          <li style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
            <div style={{ marginTop: '2px', color: 'var(--secondary-color)' }}>
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '4px' }}>System Initialized</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Database seeded successfully.</div>
            </div>
          </li>
          
          {stats.open_risks > 0 && (
            <li style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
              <div style={{ marginTop: '2px', color: 'var(--warning-color)' }}>
                <AlertTriangle size={18} />
              </div>
              <div>
                <div style={{ color: 'var(--text-primary)', fontWeight: '500', marginBottom: '4px' }}>Attention Required</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>You have {stats.open_risks} open risks that require treatment.</div>
              </div>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
