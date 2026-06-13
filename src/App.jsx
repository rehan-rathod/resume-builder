import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import RecentSearches from './components/RecentSearches';
import PopularShortcuts from './components/PopularShortcuts';

function App() {
  const [username, setUsername] = useState('rehan-rathod');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Theme state: default to dark, check localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Manage theme classes on :root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Manage search history in localStorage
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  const addToRecentSearches = useCallback((user) => {
    if (!user || !user.login) return;
    
    setRecentSearches((prev) => {
      // Remove if already exists to move it to the top
      const filtered = prev.filter((item) => item.login.toLowerCase() !== user.login.toLowerCase());
      const updated = [
        {
          login: user.login,
          avatar_url: user.avatar_url,
          name: user.name || user.login
        },
        ...filtered
      ].slice(0, 5); // Limit to top 5
      
      localStorage.setItem('recentSearches', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const fetchGitHubData = useCallback(async (searchQuery) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Fetch User Info
      const userRes = await fetch(`https://api.github.com/users/${searchQuery}`);
      if (!userRes.ok) {
        if (userRes.status === 404) {
          throw new Error('User not found');
        } else {
          throw new Error('Something went wrong. Try again.');
        }
      }
      const userDataJson = await userRes.json();
      setUserData(userDataJson);
      addToRecentSearches(userDataJson);
      
      // Fetch Repositories
      const reposRes = await fetch(`https://api.github.com/users/${searchQuery}/repos?per_page=100`);
      if (reposRes.ok) {
        const reposJson = await reposRes.json();
        // Sort by stargazers_count descending and get top 5
        const topRepos = reposJson
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);
        setRepos(topRepos);
      } else {
        setRepos([]);
      }
    } catch (err) {
      setUserData(null);
      setRepos([]);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [addToRecentSearches]);

  // Fetch initial profile on mount
  useEffect(() => {
    fetchGitHubData(username);
  }, []);

  const handleSearchSubmit = (searchQuery) => {
    setUsername(searchQuery);
    fetchGitHubData(searchQuery);
  };

  const handleShortcutClick = (selectedUsername) => {
    setUsername(selectedUsername);
    fetchGitHubData(selectedUsername);
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <SearchBox onSearch={handleSearchSubmit} error={error} loading={loading} />
        
        <div className="dashboard-grid">
          {/* Main profile and repos column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <ProfileCard user={userData} loading={loading} error={error} />
            {userData && !loading && (
              <RepoList repos={repos} />
            )}
          </div>
          
          {/* Sidebar column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <PopularShortcuts onSelect={handleShortcutClick} />
            <RecentSearches searches={recentSearches} onSelect={handleShortcutClick} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
