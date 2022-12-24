import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    import Form from '../components/Form'
    import List from '../components/List'

const Main = (props) => {
    const [players, setplayers] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    // const [errors, setErrors] = useState([]);
    
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setplayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
 
    const removeFromDom = playerId => {
        setplayers(players.filter(player => player._id != playerId))
    }
  
   
    

    return (
        <div>
            
             {loaded && <List players={players} removeFromDom={removeFromDom} />}
           <hr/>

           
          
        </div>
    )
}
    
export default Main;

