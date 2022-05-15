import React from "react";

const SearchBox = ({ onChange }) => {
  return (
    <div className="container input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Search
        </span>
      </div>
      <input
        className="form-control"
        aria-describedby="inputGroup-sizing-default"
        aria-label="Sizing example input"
        type="text"
        placeholder="John Doe"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
