import React, { useState } from 'react';
import { Star, Plus, Trash2, X } from 'lucide-react';

const CATEGORY_SUGGESTIONS = ['Frontend', 'Backend', 'Database', 'DevOps', 'Mobile', 'Tools', 'Languages', 'Other'];

export default function SkillsForm({ data, onChange }) {
  const [newSkillInputs, setNewSkillInputs] = useState({});
  const [newCat, setNewCat] = useState('');

  const addCategory = () => {
    const name = newCat.trim();
    if (!name) return;
    if (data.find((c) => c.category.toLowerCase() === name.toLowerCase())) return;
    onChange([...data, { category: name, items: [] }]);
    setNewCat('');
  };

  const removeCategory = (idx) => {
    onChange(data.filter((_, i) => i !== idx));
  };

  const addSkill = (catIdx) => {
    const skill = (newSkillInputs[catIdx] || '').trim();
    if (!skill) return;
    const updated = data.map((cat, i) =>
      i === catIdx ? { ...cat, items: [...cat.items, skill] } : cat
    );
    onChange(updated);
    setNewSkillInputs((prev) => ({ ...prev, [catIdx]: '' }));
  };

  const removeSkill = (catIdx, skillIdx) => {
    const updated = data.map((cat, i) =>
      i === catIdx ? { ...cat, items: cat.items.filter((_, si) => si !== skillIdx) } : cat
    );
    onChange(updated);
  };

  const updateCatInput = (catIdx, val) => {
    setNewSkillInputs((prev) => ({ ...prev, [catIdx]: val }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <p className="form-section-title">
        <Star size={14} /> Skills
      </p>

      {data.map((cat, catIdx) => (
        <div key={catIdx} className="skill-category-card">
          <div className="skill-category-header">
            <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {cat.category}
            </span>
            <button
              className="btn btn-danger-ghost btn-icon"
              onClick={() => removeCategory(catIdx)}
              title="Remove category"
            >
              <Trash2 size={13} />
            </button>
          </div>

          <div className="skill-tags-container">
            {cat.items.map((skill, si) => (
              <span key={si} className="skill-tag">
                {skill}
                <button onClick={() => removeSkill(catIdx, si)}>
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>

          <div className="skill-add-row">
            <input
              className="form-input"
              placeholder="Add skill..."
              value={newSkillInputs[catIdx] || ''}
              onChange={(e) => updateCatInput(catIdx, e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addSkill(catIdx)}
            />
            <button className="btn btn-ghost btn-sm" onClick={() => addSkill(catIdx)}>
              <Plus size={13} />
            </button>
          </div>
        </div>
      ))}

      {/* Add new category */}
      <div
        style={{
          padding: '0.85rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}
      >
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          Add Category
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.2rem' }}>
          {CATEGORY_SUGGESTIONS.filter(
            (s) => !data.find((c) => c.category.toLowerCase() === s.toLowerCase())
          ).map((s) => (
            <button
              key={s}
              className="btn btn-ghost btn-sm"
              style={{ fontSize: '0.72rem' }}
              onClick={() => {
                onChange([...data, { category: s, items: [] }]);
              }}
            >
              + {s}
            </button>
          ))}
        </div>
        <div className="skill-add-row">
          <input
            className="form-input"
            placeholder="Custom category name..."
            value={newCat}
            onChange={(e) => setNewCat(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addCategory()}
          />
          <button className="btn btn-ghost btn-sm" onClick={addCategory}>
            <Plus size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
