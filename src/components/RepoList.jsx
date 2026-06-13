import React from 'react';
import { Star, GitFork, ExternalLink, Code } from 'lucide-react';

const RepoList = ({ repos }) => {
  if (!repos || repos.length === 0) {
    return (
      <div className="repos-container glass-panel empty-repos animate-fade-in">
        <h3 className="section-title">Top Repositories</h3>
        <p className="no-repos-text">No repositories available for this profile.</p>
      </div>
    );
  }

  // Simple language color map
  const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    PHP: '#4F5D95',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
  };

  return (
    <div className="repos-container glass-panel animate-fade-in">
      <h3 className="section-title">Top Repositories</h3>
      
      <div className="repos-list">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-item-card">
            <div className="repo-main-info">
              <h4 className="repo-name">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.4rem' }}>
                  {repo.name} <ExternalLink size={12} className="external-icon" />
                </a>
              </h4>
              <p className="repo-description">
                {repo.description || 'No description provided for this repository.'}
              </p>
            </div>
            
            <div className="repo-meta-info">
              {repo.language && (
                <span className="meta-badge lang-badge">
                  <span 
                    className="lang-color-dot" 
                    style={{ backgroundColor: languageColors[repo.language] || '#8b949e' }}
                  ></span>
                  {repo.language}
                </span>
              )}
              
              <div className="repo-stats-subset">
                <span className="meta-badge star-badge">
                  <Star size={14} fill="currentColor" className="star-icon" />
                  {repo.stargazers_count}
                </span>
                
                <span className="meta-badge fork-badge">
                  <GitFork size={14} className="fork-icon" />
                  {repo.forks_count}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
