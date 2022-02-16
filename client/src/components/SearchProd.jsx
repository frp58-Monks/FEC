import React, { useState } from 'react';

const SearchProductBar = (props) => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <form onSubmit={(e) => {e.preventDefault(); console.log('you clicked on Search!')}}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {setSearchInput(e.target.value)}}
        placeholder="Search for a Product"
      />
      <input
        type="submit"
        value="Search"
      />
    </form>
  );
}

export default SearchProductBar;