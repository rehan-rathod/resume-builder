import React from 'react';

export default function ResumeSummary({ summary }) {
  if (!summary) return null;
  return (
    <div className="resume-summary">
      <div className="resume-section-title">About</div>
      <p>{summary}</p>
    </div>
  );
}
