import React from 'react';

export default function ResumeProjects({ projects }) {
  if (!projects?.length) return null;
  return (
    <div>
      <div className="resume-section-title">Projects</div>
      {projects.map((proj, i) => (
        <div key={i} className="resume-project">
          <div className="resume-project-name">{proj.name}</div>
          {proj.description && <div className="resume-project-desc">{proj.description}</div>}
          {proj.tags?.length > 0 && (
            <div className="resume-project-tags">
              {proj.tags.map((t, ti) => (
                <span key={ti} className="resume-project-tag">{t}</span>
              ))}
            </div>
          )}
          {proj.link && <span className="resume-project-link">🔗 {proj.link}</span>}
        </div>
      ))}
    </div>
  );
}
