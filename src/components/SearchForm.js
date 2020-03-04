import React from "react";

const SearchForm = props => {
  return (
    <form className="search-form" onSubmit={props.submit}>
      <input
        className="input-box"
        type="text"
        value={props.value}
        placeholder="input tags"
        onChange={props.change}
      />
      <button className="submit-button">Search</button>
    </form>
  );
};

export default SearchForm;
