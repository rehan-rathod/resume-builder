import React, { useState } from 'react';
import { GraduationCap, ChevronDown, Plus, Trash2 } from 'lucide-react';

function EduCard({ entry, onUpdate, onRemove }) {
  const [open, setOpen] = useState(true);
  const set = (key, val) => onUpdate({ ...entry, [key]: val });

  return (
    <div className="accordion-card">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="accordion-header-left">
          <div>
            <div className="accordion-title">{entry.degree || 'Degree'}</div>
            <div className="accordion-subtitle">{entry.institution || 'Institution'}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button className="btn btn-danger-ghost btn-icon" onClick={(e) => { e.stopPropagation(); onRemove(); }}>
            <Trash2 size={13} />
          </button>
          <ChevronDown size={15} className={`accordion-chevron${open ? ' open' : ''}`} />
        </div>
      </div>

      {open && (
        <div className="accordion-body">
          <div className="form-group">
            <label className="form-label">Institution / University</label>
            <input className="form-input" value={entry.institution} onChange={(e) => set('institution', e.target.value)} placeholder="MIT, Stanford, etc." />
          </div>
          <div className="form-group">
            <label className="form-label">Degree</label>
            <input className="form-input" value={entry.degree} onChange={(e) => set('degree', e.target.value)} placeholder="B.Sc. Computer Science" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Year</label>
              <input className="form-input" value={entry.year} onChange={(e) => set('year', e.target.value)} placeholder="2015 – 2019" />
            </div>
            <div className="form-group">
              <label className="form-label">Grade / GPA</label>
              <input className="form-input" value={entry.grade} onChange={(e) => set('grade', e.target.value)} placeholder="GPA: 3.8 / 4.0" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EducationForm({ data, onChange }) {
  const addEntry = () => {
    onChange([...data, { id: Date.now(), institution: '', degree: '', year: '', grade: '' }]);
  };

  const updateEntry = (idx, updated) => onChange(data.map((e, i) => (i === idx ? updated : e)));
  const removeEntry = (idx) => onChange(data.filter((_, i) => i !== idx));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <p className="form-section-title">
        <GraduationCap size={14} /> Education
      </p>
      {data.map((entry, idx) => (
        <EduCard key={entry.id || idx} entry={entry} onUpdate={(u) => updateEntry(idx, u)} onRemove={() => removeEntry(idx)} />
      ))}
      <button className="btn-add" onClick={addEntry}>
        <Plus size={14} /> Add Education
      </button>
    </div>
  );
}
