import React, { useState } from 'react';
import { Briefcase, ChevronDown, Plus, Trash2 } from 'lucide-react';

function ExperienceCard({ entry, onUpdate, onRemove }) {
  const [open, setOpen] = useState(true);

  const set = (key, val) => onUpdate({ ...entry, [key]: val });

  const setResp = (idx, val) => {
    const updated = entry.responsibilities.map((r, i) => (i === idx ? val : r));
    set('responsibilities', updated);
  };

  const addResp = () => set('responsibilities', [...entry.responsibilities, '']);
  const removeResp = (idx) =>
    set('responsibilities', entry.responsibilities.filter((_, i) => i !== idx));

  return (
    <div className="accordion-card">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="accordion-header-left">
          <div>
            <div className="accordion-title">{entry.role || 'New Position'}</div>
            <div className="accordion-subtitle">{entry.company || 'Company'}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            className="btn btn-danger-ghost btn-icon"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
          >
            <Trash2 size={13} />
          </button>
          <ChevronDown size={15} className={`accordion-chevron${open ? ' open' : ''}`} />
        </div>
      </div>

      {open && (
        <div className="accordion-body">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Company</label>
              <input className="form-input" value={entry.company} onChange={(e) => set('company', e.target.value)} placeholder="TechCorp Inc." />
            </div>
            <div className="form-group">
              <label className="form-label">Location</label>
              <input className="form-input" value={entry.location} onChange={(e) => set('location', e.target.value)} placeholder="San Francisco, CA" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Role / Job Title</label>
            <input className="form-input" value={entry.role} onChange={(e) => set('role', e.target.value)} placeholder="Senior Software Engineer" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input className="form-input" value={entry.startDate} onChange={(e) => set('startDate', e.target.value)} placeholder="Jan 2022" />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input className="form-input" value={entry.endDate} onChange={(e) => set('endDate', e.target.value)} placeholder="Present" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ marginBottom: '0.4rem' }}>Responsibilities</label>
            <div className="resp-list">
              {entry.responsibilities.map((r, i) => (
                <div key={i} className="resp-item">
                  <textarea
                    rows={2}
                    value={r}
                    onChange={(e) => setResp(i, e.target.value)}
                    placeholder="Describe a key responsibility or achievement..."
                  />
                  <button className="btn btn-danger-ghost btn-icon" onClick={() => removeResp(i)}>
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
            <button className="btn-add" style={{ marginTop: '0.4rem' }} onClick={addResp}>
              <Plus size={13} /> Add Responsibility
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ExperienceForm({ data, onChange }) {
  const addEntry = () => {
    onChange([
      ...data,
      {
        id: Date.now(),
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        location: '',
        responsibilities: [''],
      },
    ]);
  };

  const updateEntry = (idx, updated) => {
    onChange(data.map((e, i) => (i === idx ? updated : e)));
  };

  const removeEntry = (idx) => onChange(data.filter((_, i) => i !== idx));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <p className="form-section-title">
        <Briefcase size={14} /> Work Experience
      </p>
      {data.map((entry, idx) => (
        <ExperienceCard
          key={entry.id || idx}
          entry={entry}
          onUpdate={(updated) => updateEntry(idx, updated)}
          onRemove={() => removeEntry(idx)}
        />
      ))}
      <button className="btn-add" onClick={addEntry}>
        <Plus size={14} /> Add Experience
      </button>
    </div>
  );
}
