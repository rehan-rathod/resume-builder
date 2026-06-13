import React, { useState, useEffect, useCallback } from 'react';
import './index.css';
import Header from './components/Header';
import EditorPanel from './components/Editor/EditorPanel';
import ResumePreview from './components/Preview/ResumePreview';
import { defaultResume } from './data/defaultResume';

const STORAGE_KEY = 'resumeforge_data';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function App() {
  const [resume, setResume] = useState(() => loadFromStorage() || defaultResume);
  const [activeTab, setActiveTab] = useState('personal');
  const [saved, setSaved] = useState(false);

  // Theme
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  useEffect(() => {
    const root = document.documentElement;
    theme === 'light' ? root.classList.add('light') : root.classList.remove('light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  // Auto-save after 1.5s debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }, 1500);
    return () => clearTimeout(timer);
  }, [resume]);

  const handleSave = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resume));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }, [resume]);

  const handleExport = () => {
    window.print();
  };

  return (
    <div className="app-wrapper">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onExport={handleExport}
        onSave={handleSave}
        saved={saved}
      />

      <div className="app-body">
        <EditorPanel
          resume={resume}
          onChange={setResume}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="preview-pane">
          <ResumePreview resume={resume} />
        </div>
      </div>
    </div>
  );
}

export default App;
