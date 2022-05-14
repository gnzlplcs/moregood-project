import React from 'react'

const SearchBox = ({ onChange }) => {
  return (
    <div>
      <input type="text" id="search-box" placeholder='Search a contact' onChange={onChange}/>
    </div>
  )
}

export default SearchBox