import React from "react";

const SearchResult = props => {
  const { image } = props.resultdata;

  let content = null;

  content = (
    <div>
      <img src={image} alt="" />
    </div>
  );
  return content;
};

export default SearchResult;
