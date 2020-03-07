import React from "react";

const UploadForm = props => {
  return (
      <form id='search' className="search-form" onSubmit={props.submit}>
      <input 
        className="input-box"
        type="text"
        value={props.linkValue}
        placeholder="input link"
        onChange={props.linkChange}
      />
      <input 
        className="input-box"
        type="text"
        value={props.tagValue}
        placeholder="input link"
        onChange={props.tagChange}
      />
      <button className="submit-button">Upload</button>
    </form>
  );
};

export default UploadForm;