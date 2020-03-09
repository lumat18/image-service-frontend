import React from "react";
import TagsInput from "./TagsInput";

const UploadForm = props => {
  return (
    <TagsInput 
          tagValue={props.tagValue} 
          submit={props.submit}
          linkValue={props.linkValue}
          linkChange={props.linkChange}/>
  );
};

export default UploadForm;