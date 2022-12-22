import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';

import DeleteButton from './DeleteButton';
    
const List = (props) => {
    const [authors, setauthors] = useState([]);
   

    
    return (
        <div class="container">
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>add an author</Link>
            <p>we have quotes by:</p>
            <table border="1">
            <thead>
                <tr>
                    <td>Authors</td>
                    <td>Actions</td>
                 </tr> 
                 </thead>
                 <tbody>
            {props.authors.map((author, idx) => {
                return (
                   
                    <tr key={idx}>
                        
                              <td>{author.name}</td>
                      
                          
                           <td>
                        <Link to={"/edit/" + author._id }>
                            Edit
                        </Link> 
                        ||
                       <DeleteButton authorId={author._id} successCallback={()=>props.removeFromDom(author._id)}/>
                       </td>
                       
                </tr>
          

                   
                )
            })
            
            }
                </tbody>
            
            </table>
        </div>
    );
}
    
export default List;

