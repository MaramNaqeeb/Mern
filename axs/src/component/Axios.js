import React, { useState,useEffect } from 'react'
import axios from 'axios'
const Axios = (props) => {
      const [responseData, setResponseData] = useState(null);
      const [loaded, setLoaded] = useState(false);
    const[button,setButton]=useState(false);

    const clickbutton=(e)=>{
        setButton(!button)
        // button?setButton(false):setButton(true)
    }
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setResponseData(response.data.results);setLoaded(true)})
    }, []); 
  return (


        <div>
    { button? loaded &&
             responseData.map((ditto, index)=>{
                return (<div key={index}>{ditto.name}</div>)
                
            }) :
            ''
            
        }
           <button style={{margin:"10% 40%"}} onClick={clickbutton}>fetch</button>

        </div>
    )
}


 

export default Axios
