import React, { Component } from "react";
import TagsInput from "./TagsInput";

const Tags = () => {
    const selectedTags = tags => console.log(tags);
    return (
        <div>
            <TagsInput selectedTags={selectedTags}/>
        </div>
    )
};
export default TagsInput;
