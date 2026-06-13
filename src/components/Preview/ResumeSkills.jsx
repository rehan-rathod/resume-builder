import React from 'react';

export default function ResumeSkills({ skills }) {
  if (!skills?.length) return null;
  return (
    <div>
      <div className="resume-section-title">Skills</div>
      {skills.map((cat, i) => (
        <div key={i} className="resume-skills-group">
          <div className="resume-skills-cat">{cat.category}</div>
          <div className="resume-skill-pills">
            {cat.items.map((skill, si) => (
              <span key={si} className="resume-skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
