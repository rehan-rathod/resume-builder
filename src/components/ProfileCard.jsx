import React from 'react';
import { MapPin, Link as LinkIcon, Building, Calendar, Users, FolderGit } from 'lucide-react';

// Inline SVG for Twitter logo to replace missing lucide-react brand icons
const TwitterIcon = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const ProfileCard = ({ user, loading, error }) => {
  // 1. Loading State (Skeleton Screen)
  if (loading) {
    return (
      <div className="profile-card glass-panel loading-card">
        <div className="profile-header">
          <div className="avatar-wrapper skeleton"></div>
          <div className="header-info">
            <div className="skeleton-line title skeleton"></div>
            <div className="skeleton-line handle skeleton"></div>
            <div className="skeleton-line date skeleton"></div>
          </div>
        </div>
        
        <div className="profile-bio skeleton-line bio skeleton"></div>
        <div className="profile-bio skeleton-line bio-short skeleton"></div>
        
        <div className="profile-stats skeleton"></div>
        
        <div className="profile-links-grid">
          <div className="skeleton-line link skeleton"></div>
          <div className="skeleton-line link skeleton"></div>
          <div className="skeleton-line link skeleton"></div>
          <div className="skeleton-line link skeleton"></div>
        </div>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="profile-card glass-panel error-card flex-center">
        <div className="error-content">
          <div className="error-icon-wrapper">⚠️</div>
          <h3>User not found</h3>
          <p>We couldn't retrieve information for this GitHub username. Please check your spelling and try again.</p>
        </div>
      </div>
    );
  }

  // 3. Empty State (No search performed yet)
  if (!user) {
    return (
      <div className="profile-card glass-panel empty-card flex-center">
        <p className="empty-text">Search for a developer profile to see their details</p>
      </div>
    );
  }

  // Formatting Date
  const dateObj = new Date(user.created_at);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="profile-card glass-panel animate-fade-in">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={user.avatar_url} alt={`${user.name || user.login}'s avatar`} className="avatar-img" />
        </div>
        <div className="header-info">
          <h2 className="profile-name">
            {user.name ? (
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.name}
              </a>
            ) : (
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            )}
          </h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="profile-handle">
            @{user.login}
          </a>
          <p className="profile-joined">
            <Calendar size={14} className="joined-icon" />
            Joined {formattedDate}
          </p>
        </div>
      </div>

      <p className={`profile-bio ${!user.bio ? 'no-bio' : ''}`}>
        {user.bio || 'This profile has no bio'}
      </p>

      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-label">
            <FolderGit size={14} /> Repos
          </span>
          <span className="stat-value">{user.public_repos}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">
            <Users size={14} /> Followers
          </span>
          <span className="stat-value">{user.followers}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">
            <Users size={14} /> Following
          </span>
          <span className="stat-value">{user.following}</span>
        </div>
      </div>

      <div className="profile-links-grid">
        <div className={`link-item ${!user.location ? 'disabled' : ''}`}>
          <MapPin size={18} />
          <span>{user.location || 'Not Available'}</span>
        </div>
        
        <div className={`link-item ${!user.blog ? 'disabled' : ''}`}>
          <LinkIcon size={18} />
          {user.blog ? (
            <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer">
              {user.blog.replace(/https?:\/\/(www\.)?/, '')}
            </a>
          ) : (
            <span>Not Available</span>
          )}
        </div>
        
        <div className={`link-item ${!user.twitter_username ? 'disabled' : ''}`}>
          <TwitterIcon size={18} />
          {user.twitter_username ? (
            <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noopener noreferrer">
              @{user.twitter_username}
            </a>
          ) : (
            <span>Not Available</span>
          )}
        </div>
        
        <div className={`link-item ${!user.company ? 'disabled' : ''}`}>
          <Building size={18} />
          <span>{user.company || 'Not Available'}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
