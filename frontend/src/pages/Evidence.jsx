import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const Evidence = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchEvidence();
  }, []);

  const fetchEvidence = async () => {
    try {
      const res = await axios.get('/api/evidence');
      setFiles(res.data);
    } catch (err) {
      console.error("Error fetching evidence:", err);
    }
  };

  const handleFileChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const selectedFile = e.target.files[0];
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    // Hardcoding IDs for demo purposes, since auth/checklists aren't wired fully
    formData.append('checklist_id', 1);
    formData.append('uploaded_by', 1);

    try {
      await axios.post('/api/evidence/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      fetchEvidence();
    } catch (err) {
      console.error("Error uploading file:", err);
    } finally {
      setUploading(false);
      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <h1>Evidence Repository</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Upload and manage compliance evidence files.</p>
      
      <div 
        className="card" 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem', border: '2px dashed var(--primary-color)', backgroundColor: 'rgba(99, 102, 241, 0.05)', cursor: 'pointer' }}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload size={48} color="var(--primary-color)" style={{ marginBottom: '1rem' }} />
        <h3 style={{ marginBottom: '0.5rem' }}>{uploading ? 'Uploading...' : 'Click to Upload Files'}</h3>
        <p style={{ color: 'var(--text-secondary)' }}>Supported formats: PDF, DOCX, JPG, PNG</p>
        <input 
          type="file" 
          style={{ display: 'none' }} 
          ref={fileInputRef} 
          onChange={handleFileChange}
          disabled={uploading}
        />
      </div>
      
      <div className="card">
        <h3 className="card-title">Recent Uploads</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem 0' }}>File Name</th>
              <th style={{ padding: '1rem 0' }}>Related Checklist</th>
              <th style={{ padding: '1rem 0' }}>Date</th>
              <th style={{ padding: '1rem 0' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                <td style={{ padding: '1rem 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={16} color="var(--accent-color)" /> {file.file_name}
                </td>
                <td style={{ padding: '1rem 0' }}>ID: {file.checklist_id}</td>
                <td style={{ padding: '1rem 0', color: 'var(--text-secondary)' }}>{new Date(file.uploaded_at).toLocaleString()}</td>
                <td style={{ padding: '1rem 0' }}>
                  <a href={`http://127.0.0.1:8000${file.file_path}`} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 'bold' }}>
                    View File
                  </a>
                </td>
              </tr>
            ))}
            {files.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)' }}>No evidence uploaded yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Evidence;
