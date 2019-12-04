import React from 'react';


const Search = (props) => {
  return (
    <form onSubmit={props.getSearch}>
      <input type="search" name="searching"/>
      <button>Search</button>
    </form>
  )
}

export default Search;