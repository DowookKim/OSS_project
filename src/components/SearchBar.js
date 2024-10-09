import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchWord);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)} 
        placeholder="Search..." 
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
