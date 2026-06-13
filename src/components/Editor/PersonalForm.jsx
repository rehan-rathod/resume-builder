import React from 'react';
import { User, Mail, Phone, MapPin, Link2, GitFork, Globe } from 'lucide-react';

const fields = [
  { key: 'fullName', label: 'Full Name', placeholder: 'e.g. Alex Johnson', icon: User, span: 2 },
  { key: 'jobTitle', label: 'Job Title', placeholder: 'e.g. Senior Software Engineer', icon: null, span: 2 },
  { key: 'email', label: 'Email', placeholder: 'alex@email.com', icon: Mail, span: 2 },
  { key: 'phone', label: 'Phone', placeholder: '+1 (555) 123-4567', icon: Phone },
  { key: 'location', label: 'Location', placeholder: 'San Francisco, CA', icon: MapPin },
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'username', icon: Link2 },
  { key: 'github', label: 'GitHub', placeholder: 'username', icon: GitFork },
  { key: 'website', label: 'Website', placeholder: 'yoursite.dev', icon: Globe },
];

export default function PersonalForm({ data, onChange }) {
  const set = (key, val) => onChange({ ...data, [key]: val });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <p className="form-section-title">
        <User size={14} /> Personal Information
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {fields.map(({ key, label, placeholder, icon: Icon, span }) => (
          <div
            key={key}
            className="form-group"
            style={{ gridColumn: span === 2 ? '1 / -1' : undefined }}
          >
            <label className="form-label">{label}</label>
            <div style={{ position: 'relative' }}>
              {Icon && (
                <Icon
                  size={13}
                  style={{
                    position: 'absolute',
                    left: '0.65rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-muted)',
                    pointerEvents: 'none',
                  }}
                />
              )}
              <input
                className="form-input"
                type="text"
                placeholder={placeholder}
                value={data[key] || ''}
                onChange={(e) => set(key, e.target.value)}
                style={{ paddingLeft: Icon ? '2rem' : undefined }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
