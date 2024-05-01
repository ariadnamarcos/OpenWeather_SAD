// SearchBar.js
import React from 'react';
import {useState} from 'react';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
