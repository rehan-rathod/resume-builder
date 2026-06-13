import React from 'react';
import { Sparkles } from 'lucide-react';

const PopularShortcuts = ({ onSelect }) => {
  const popularUsers = [
    { name: 'Linus Torvalds', username: 'torvalds' },
    { name: 'Dan Abramov', username: 'gaearon' },
    { name: 'Rehan Rathod', username: 'rehan-rathod' },
    { name: 'Evan You', username: 'yyx990803' },
    { name: 'K. C. Dodds', username: 'kentcdodds' }
  ];

  return (
    <div className="popular-shortcuts glass-panel animate-fade-in">
      <div className="section-header flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
        <Sparkles size={16} className="section-icon sparkles-icon" />
        <h3 className="section-title" style={{ margin: 0, fontSize: '1.1rem' }}>Popular Profiles</h3>
      </div>
      
      <div className="shortcuts-grid">
        {popularUsers.map((user) => (
          <button
            key={user.username}
            onClick={() => onSelect(user.username)}
            className="shortcut-btn"
          >
            <span className="shortcut-name">{user.name}</span>
            <span className="shortcut-username">@{user.username}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularShortcuts;
