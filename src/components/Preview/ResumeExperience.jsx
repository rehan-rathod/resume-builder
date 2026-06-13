import React from 'react';

export default function ResumeExperience({ experience }) {
  if (!experience?.length) return null;
  return (
    <div>
      <div className="resume-section-title">Work Experience</div>
      {experience.map((exp, i) => (
        <div key={i} className="resume-entry">
          <div className="resume-entry-header">
            <span className="resume-entry-title">{exp.role}</span>
            <span className="resume-entry-date">{exp.startDate}{exp.startDate && exp.endDate ? ' – ' : ''}{exp.endDate}</span>
          </div>
          <div className="resume-entry-subtitle">
            {exp.company}{exp.location ? ` · ${exp.location}` : ''}
          </div>
          {exp.responsibilities?.filter(Boolean).length > 0 && (
            <ul className="resume-entry-list">
              {exp.responsibilities.filter(Boolean).map((r, ri) => (
                <li key={ri}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
