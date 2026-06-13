import React from 'react';
import '../../resume.css';
import ResumeHeader from './ResumeHeader';
import ResumeSummary from './ResumeSummary';
import ResumeSkills from './ResumeSkills';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeEducation from './ResumeEducation';

export default function ResumePreview({ resume }) {
  return (
    <div className="resume" id="resume-preview">
      <ResumeHeader personal={resume.personal} />

      <div className="resume-body">
        {/* LEFT SIDEBAR */}
        <div className="resume-sidebar">
          {resume.summary && <ResumeSummary summary={resume.summary} />}
          {resume.skills?.length > 0 && <ResumeSkills skills={resume.skills} />}
          {resume.education?.length > 0 && <ResumeEducation education={resume.education} />}
        </div>

        {/* DIVIDER */}
        <div className="resume-divider" />

        {/* MAIN CONTENT */}
        <div className="resume-main">
          {resume.experience?.length > 0 && <ResumeExperience experience={resume.experience} />}
          {resume.projects?.length > 0 && <ResumeProjects projects={resume.projects} />}
        </div>
      </div>
    </div>
  );
}
