import React from "react";

const SearchResult = props => {

  let content = (
    <div>
    {props.images.map(image =>(
    <img src={image.href} alt=""/>
  ))}
  </div>
  );


  


  return content; 
};

export default SearchResult;
