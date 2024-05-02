// SearchBar.js
import React from 'react';
import {useState} from 'react';
import { useTranslation } from 'react-i18next';

function SearchBar({ onSearch }) {
  const {t} = useTranslation();

  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <span>
      <span className='title'>{t("title")}</span>
      <input 
        type="text" 
        placeholder={t("placeholder")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      <button onClick={handleSearch} className='search-button'>Search</button>
    </span>
  );
}

export default SearchBar;
