import React from 'react';

export default function ResumeEducation({ education }) {
  if (!education?.length) return null;
  return (
    <div>
      <div className="resume-section-title">Education</div>
      {education.map((edu, i) => (
        <div key={i} className="resume-edu-entry">
          <div className="resume-edu-degree">{edu.degree}</div>
          <div className="resume-edu-institution">{edu.institution}</div>
          <div className="resume-edu-meta">
            {[edu.year, edu.grade].filter(Boolean).join(' · ')}
          </div>
        </div>
      ))}
    </div>
  );
}
