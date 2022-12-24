import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { playerId, successCallback } = props;
    
    const deleteplayer = e => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deleteplayer}>
            Delete
        </button>
    )
}

