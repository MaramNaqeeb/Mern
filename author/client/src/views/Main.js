import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    import Form from '../components/Form'
    import List from '../components/List'

const Main = (props) => {
    const [authors, setAuthors] = useState(null);
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
 
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }
  
   
    

    return (
        <div>
             {loaded && <List authors={authors} removeFromDom={removeFromDom} />}
           <hr/>

           
          
        </div>
    )
}
    
export default Main;

