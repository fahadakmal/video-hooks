import React, { useState } from "react";
const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>SEARCH</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
