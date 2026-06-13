import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const SearchBox = ({ onSearch, error, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !loading) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form glass-panel">
      <div className="search-input-wrapper">
        <Search size={22} className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub username..."
          className="search-input"
          disabled={loading}
        />
      </div>
      
      <div className="search-actions">
        {error && <span className="search-error">{error}</span>}
        <button type="submit" className="search-button flex-center" disabled={loading}>
          {loading ? (
            <Loader2 size={18} className="spinner" />
          ) : (
            'Search'
          )}
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
