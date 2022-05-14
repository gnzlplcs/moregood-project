import React from 'react'

const SearchBox = () => {
  return (
    <div>
      <label htmlFor="search-box">Search a contact</label>
      <input type="text" id="search-box" placeholder='John Doe'/>
    </div>
  )
}

export default SearchBox