import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [author, setauthor] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(res => {
                setauthor(res.data);
                 setLoaded(true);
            })
    }, [props.id])
    
    const updateauthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => {
                navigate("/")
                }
                )
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
            
        <p>Edit this author:</p>
        {loaded && (
            <>
                <Form
                    onSubmitProp={updateauthor}
                    initialName={author.name}
                    errors={errors}
                />
                {/* <DeleteButton authorId={author._id} successCallback={() => navigate("/")} /> */}
            </>
    )}
    </div>
    )
}

    
export default Update;

