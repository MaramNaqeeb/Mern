import React from 'react'
import Form from '../components/Form';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

import  { useEffect, useState } from 'react';
import axios from 'axios';
const New = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
            
    },[]);
    const creatAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
              
                setAuthors([...authors, res.data],navigate("/"));
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                
                setErrors(errorArr);
            })
    }
  return (
    <div>
         <h1>Favorite Authors</h1>
            <Link to={"/"}>Home</Link>
            
        <p>Add a new author:</p>
       <Form onSubmitProp={creatAuthor} initialName=""  errors={errors} />
    </div>
  )
}

export default New
