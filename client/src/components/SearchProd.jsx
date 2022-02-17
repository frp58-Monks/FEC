import React, { useState } from 'react';

const SearchProductBar = (props) => {
  const [searchInput, setSearchInput] = useState('');

  // if (props.allProducts) {
  //   console.log({'Searchbar all products prop': props.allProducts});
  // }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('You Clicked on Search!');
      props.searchForProducts(1000, searchInput);
    }}>
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