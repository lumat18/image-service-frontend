import React from 'react';

const TagsInput = (props) => {

    let [tags, setTags] = React.useState([]);

    const addTags = event => {
        if(event.key === ' ' && event.target.value !== ''){
            setTags([...tags, event.target.value]);
            //props.tagValue.push({'tag_name':event.target.value});
            //props.selectedTags([...tags, event.target.value]);
            event.target.value = '';
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    const removeAllTags = () => {
        tags.length=0;
    };
    
    const setTagsInState = () => {
        console.log("hey");
        tags.forEach(tag=> props.tagValue.push({'tag_name':tag}));
    }

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
      <div className='tags-input'>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index} className='tagButton'>
                        <span className='chipText'>{tag}</span>
                        <span className='clearButton' onClick={()=> removeTags(index)}> X</span>
                    </li>
                ))}
            </ul>
            <input
                type='text'
                onKeyUp={event => {addTags(event);
                } 
            }
                placeholder='Press space to add tags'/>
                <button className="submit-button" onClick={()=>{setTagsInState(); removeAllTags();}}>Upload</button>
        </div>
    </form>
    </div>
        
        
    );
};
export default TagsInput;