import React, { useState } from 'react';
import './style.css';

const SearchProductBar = (props) => {
  const [searchInput, setSearchInput] = useState('');

  // if (props.allProducts) {
  //   console.log({'Searchbar all products prop': props.allProducts});
  // }

  return (
    <form className="search" onSubmit={(e) => {
      e.preventDefault();
      console.log('Search is loading...loading...loading...');
      props.searchForProducts(1000, searchInput.toLowerCase());
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