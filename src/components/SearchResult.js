import React from "react";

const SearchResult = props => {
  const { images } = props.resultdata;
  console.log('dsfsdfds');
  let content = [];
    for(let i=0; i<content.length; i++){
      var newImg = document.createElement('img');
      console.log('hey');
      newImg.href = images[i].href;
      newImg.alt="";
      content.push(newImg);
    }
  return content;
};

export default SearchResult;
