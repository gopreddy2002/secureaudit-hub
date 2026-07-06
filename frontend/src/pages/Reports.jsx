import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [generating, setGenerating] = useState(false);
  const [selectedStandard, setSelectedStandard] = useState(1); // Default standard ID

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get('/api/reports');
      setReports(res.data);
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  const handleGenerate = async () => {
    setGenerating(true);
    const formData = new FormData();
    formData.append('standard_id', selectedStandard);
    formData.append('generated_by', 1);

    try {
      await axios.post('/api/reports/generate', formData);
      fetchReports();
    } catch (err) {
      console.error("Error generating report:", err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div>
      <h1>Audit Reports</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Generate and view audit reports.</p>

      <div className="card" style={{ marginTop: '2rem' }}>
        <h3 className="card-title">Generate New Report</h3>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
          <div className="input-group" style={{ margin: 0, flex: 1 }}>
            <label>Select Standard</label>
            <select
              className="input-field"
              value={selectedStandard}
              onChange={(e) => setSelectedStandard(e.target.value)}
            >
              <option value={1}>ISO 27001 (Standard ID 1)</option>
              <option value={2}>ISO 27002 (Standard ID 2)</option>
              <option value={3}>ISO 42001 (Standard ID 3)</option>
            </select>
          </div>
          <button
            className="btn btn-primary"
            style={{ padding: '0.9rem 1.5rem' }}
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating ? 'Generating...' : 'Generate Text Report'}
          </button>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Past Reports</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {reports.map(report => (
            <li key={report.id} style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px', color: 'var(--secondary-color)' }}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{report.summary}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Generated on {new Date(report.created_at).toLocaleString()}</div>
                </div>
              </div>
              <a
                href={`http://127.0.0.1:8000${report.file_path}`}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ border: '1px solid var(--primary-color)', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary-color)', textDecoration: 'none' }}
              >
                <Download size={16} /> View Report
              </a>
            </li>
          ))}
          {reports.length === 0 && (
            <li style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              No reports generated yet.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Reports;
