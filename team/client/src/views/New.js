import React from 'react'
import Form from '../components/Form';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

import  { useEffect, useState } from 'react';
import axios from 'axios';
const New = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
            
    },[]);
    const creatPlayer = player => {
        axios.post('http://localhost:8000/api/players', player)
            .then(res=>{
              
        setPlayers([...players, res.data],navigate("/"));
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
         <div class="first-header">
            <p>Manage players |</p>
            <p>| Manage player status</p>
            </div>
            <div class="second-header">
            <p><Link to={"/"}>Link |</Link></p>
           <p>| <Link to={"/players/addplayer"}>add an player</Link></p>
            </div>
            
        <p>Add Players:</p>
       <Form onSubmitProp={creatPlayer} initialName="" initialPosition="" errors={errors}  />
    </div>
  )
}

export default New
