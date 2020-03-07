import React from "react";

const UploadForm = props => {
  return (
      <div>
        <h3>Upload new Photo and Tag it!</h3>
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
        placeholder="input tag"
        onChange={props.tagChange}
      />
      <button className="submit-button">Upload</button>
    </form>
    </div>
  );
};

export default UploadForm;