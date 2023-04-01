import React from "react";
import { useState } from "react";

function Search({ onSearch }) {
  //1. Tao state quan ly gia tri input
  const [searchString, setSearchString] = useState("");

  //2.
  const handleChange = (evt) => {
    setSearchString(evt.target.value);
  };

  return (
    <div className="w-25 d-flex my-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search By Name"
        value={searchString}
        onChange={handleChange}
      />
      <button
        className="btn btn-warning ms-2"
        onClick={() => onSearch(searchString)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
