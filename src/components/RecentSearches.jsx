import React from 'react';
import { History } from 'lucide-react';

const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) {
    return null; // Don't render if there's no history
  }

  return (
    <div className="recent-searches glass-panel animate-fade-in">
      <div className="section-header flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
        <History size={16} className="section-icon" />
        <h3 className="section-title" style={{ margin: 0, fontSize: '1.1rem' }}>Recent Searches</h3>
      </div>
      
      <div className="recent-list">
        {searches.map((item) => (
          <button
            key={item.login}
            onClick={() => onSelect(item.login)}
            className="recent-item"
            title={`View profile for ${item.name}`}
          >
            <img 
              src={item.avatar_url} 
              alt={item.name} 
              className="recent-avatar" 
            />
            <div className="recent-info">
              <span className="recent-name">{item.name}</span>
              <span className="recent-login">@{item.login}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentSearches;
