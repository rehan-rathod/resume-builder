import React, { useState } from 'react';
import { FolderGit2, ChevronDown, Plus, Trash2, X } from 'lucide-react';

function ProjectCard({ entry, onUpdate, onRemove }) {
  const [open, setOpen] = useState(true);
  const [tagInput, setTagInput] = useState('');

  const set = (key, val) => onUpdate({ ...entry, [key]: val });

  const addTag = () => {
    const t = tagInput.trim();
    if (!t) return;
    set('tags', [...entry.tags, t]);
    setTagInput('');
  };

  const removeTag = (idx) => set('tags', entry.tags.filter((_, i) => i !== idx));

  return (
    <div className="accordion-card">
      <div className="accordion-header" onClick={() => setOpen(!open)}>
        <div className="accordion-header-left">
          <div>
            <div className="accordion-title">{entry.name || 'New Project'}</div>
            <div className="accordion-subtitle">{entry.tags.slice(0, 3).join(', ') || 'No tags yet'}</div>
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
            <label className="form-label">Project Name</label>
            <input className="form-input" value={entry.name} onChange={(e) => set('name', e.target.value)} placeholder="My Awesome Project" />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="form-textarea" value={entry.description} onChange={(e) => set('description', e.target.value)} placeholder="Describe what the project does and the problem it solves..." style={{ minHeight: '80px' }} />
          </div>

          <div className="form-group">
            <label className="form-label">Live / GitHub Link</label>
            <input className="form-input" value={entry.link} onChange={(e) => set('link', e.target.value)} placeholder="github.com/username/project" />
          </div>

          <div className="form-group">
            <label className="form-label">Tech Stack Tags</label>
            <div className="skill-tags-container" style={{ marginBottom: '0.4rem' }}>
              {entry.tags.map((t, i) => (
                <span key={i} className="skill-tag">
                  {t}
                  <button onClick={() => removeTag(i)}><X size={10} /></button>
                </span>
              ))}
            </div>
            <div className="skill-add-row">
              <input
                className="form-input"
                placeholder="Add tag (e.g. React)..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTag()}
              />
              <button className="btn btn-ghost btn-sm" onClick={addTag}><Plus size={13} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsForm({ data, onChange }) {
  const addEntry = () => {
    onChange([...data, { id: Date.now(), name: '', description: '', tags: [], link: '' }]);
  };

  const updateEntry = (idx, updated) => onChange(data.map((e, i) => (i === idx ? updated : e)));
  const removeEntry = (idx) => onChange(data.filter((_, i) => i !== idx));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <p className="form-section-title">
        <FolderGit2 size={14} /> Projects
      </p>
      {data.map((entry, idx) => (
        <ProjectCard key={entry.id || idx} entry={entry} onUpdate={(u) => updateEntry(idx, u)} onRemove={() => removeEntry(idx)} />
      ))}
      <button className="btn-add" onClick={addEntry}>
        <Plus size={14} /> Add Project
      </button>
    </div>
  );
}
