import React, { useState, useContext } from 'react';
import './style.css';
import { AppContext } from './App.jsx';

const SearchProductBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const { searchForProducts } = useContext(AppContext);

  return (
    <form className="search" onSubmit={(e) => {
      e.preventDefault();
      console.log('Search is loading...loading...loading...');
      searchForProducts(1000, searchInput.toLowerCase());
    }}>
      <input
        className="searchForm"
        type="text"
        value={searchInput}
        onChange={(e) => {setSearchInput(e.target.value)}}
        placeholder="search for a product..."
      />
      <input
        className="searchButton"
        type="submit"
        value="Search"
      />
    </form>
  );
}

export default SearchProductBar;