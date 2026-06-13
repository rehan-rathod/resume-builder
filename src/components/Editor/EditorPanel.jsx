import React from 'react';
import { User, Layers, Star, Briefcase, FolderGit2, GraduationCap } from 'lucide-react';

import PersonalForm from './PersonalForm';
import SummaryForm from './SummaryForm';
import SkillsForm from './SkillsForm';
import ExperienceForm from './ExperienceForm';
import ProjectsForm from './ProjectsForm';
import EducationForm from './EducationForm';

const TABS = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'summary', label: 'Summary', icon: Layers },
  { id: 'skills', label: 'Skills', icon: Star },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

export default function EditorPanel({ resume, onChange, activeTab, setActiveTab }) {
  const handleSection = (section, value) => {
    onChange({ ...resume, [section]: value });
  };

  return (
    <aside className="editor-panel">
      <nav className="editor-tab-bar">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`editor-tab${activeTab === id ? ' active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </nav>

      <div className="editor-content fade-in" key={activeTab}>
        {activeTab === 'personal' && (
          <PersonalForm data={resume.personal} onChange={(v) => handleSection('personal', v)} />
        )}
        {activeTab === 'summary' && (
          <SummaryForm data={resume.summary} onChange={(v) => handleSection('summary', v)} />
        )}
        {activeTab === 'skills' && (
          <SkillsForm data={resume.skills} onChange={(v) => handleSection('skills', v)} />
        )}
        {activeTab === 'experience' && (
          <ExperienceForm data={resume.experience} onChange={(v) => handleSection('experience', v)} />
        )}
        {activeTab === 'projects' && (
          <ProjectsForm data={resume.projects} onChange={(v) => handleSection('projects', v)} />
        )}
        {activeTab === 'education' && (
          <EducationForm data={resume.education} onChange={(v) => handleSection('education', v)} />
        )}
      </div>
    </aside>
  );
}
