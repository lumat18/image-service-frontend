import React from "react";

const SearchResult = props => {
  let content = (
    <div>
      {props.images.map((image, i) => (
        <img src={image.href} alt="" key={i} />
      ))}
    </div>
  );

  return content;
};

export default SearchResult;
