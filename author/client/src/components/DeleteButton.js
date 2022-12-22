import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { authorId, successCallback } = props;
    
    const deleteauthor = e => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deleteauthor}>
            Delete
        </button>
    )
}

