import React from 'react';
import { Layers } from 'lucide-react';

export default function SummaryForm({ data, onChange }) {
  const charCount = (data || '').length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <p className="form-section-title">
        <Layers size={14} /> Professional Summary
      </p>
      <div className="form-group">
        <label className="form-label">Summary / Bio</label>
        <textarea
          className="form-textarea"
          placeholder="Write a compelling 2-4 sentence summary of your professional background, key strengths, and what makes you stand out..."
          value={data || ''}
          onChange={(e) => onChange(e.target.value)}
          style={{ minHeight: '160px' }}
        />
        <span style={{ fontSize: '0.72rem', color: charCount > 600 ? 'var(--warn)' : 'var(--text-muted)', textAlign: 'right', marginTop: '0.2rem' }}>
          {charCount} / 600 characters
        </span>
      </div>
      <div
        style={{
          padding: '0.75rem',
          background: 'rgba(var(--accent-rgb), 0.06)',
          border: '1px solid rgba(var(--accent-rgb), 0.15)',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.78rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
        }}
      >
        💡 <strong>Tip:</strong> Keep it concise (3–5 sentences). Mention your years of experience, key technologies, and a unique value you bring.
      </div>
    </div>
  );
}
