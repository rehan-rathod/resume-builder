import React from 'react';
import { FileText, Moon, Sun, Download, Save } from 'lucide-react';

export default function Header({ theme, toggleTheme, onExport, onSave, saved }) {
  return (
    <header className="app-header">
      <div className="app-header-brand">
        <div className="brand-icon">
          <FileText size={16} />
        </div>
        <div>
          <h1>ResumeForge</h1>
          <span>Professional Resume Builder</span>
        </div>
      </div>

      <div className="app-header-actions">
        {saved && (
          <span style={{ fontSize: '0.75rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            ✓ Auto-saved
          </span>
        )}
        <button className="btn btn-ghost btn-icon" onClick={toggleTheme} title="Toggle theme">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="btn btn-ghost" onClick={onSave} title="Save to localStorage">
          <Save size={14} />
          Save
        </button>
        <button className="btn btn-primary" onClick={onExport} title="Download as PDF">
          <Download size={14} />
          Download PDF
        </button>
      </div>
    </header>
  );
}
