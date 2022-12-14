import { navigate } from '@reach/router';
import axios from 'axios'
import React, { useState,useEffect } from 'react'
// import { navigate } from '@reach/router'


const People = (props) => {
  const [responseData, setResponseData] = useState("");
  // const [error, setError] = useState("hhhhhhh");
  //   const [loaded, setLoaded] = useState(false);



    useEffect(()=>{
               axios.get(`https://swapi.dev/api/people/${props.id}`)
                    .then(response=>{setResponseData(response.data)})
        .catch ( () => navigate("/error" ));

            }, [props.id]); 
  return (
    <div>
      <h3>{responseData.name}</h3>
      <p>Height: {responseData.height}</p>

      <p> Mass: {responseData.mass}</p>

      <p>Hair Color: {responseData.hair_color}</p>
      <p> Skin Color: {responseData.skin_color}</p>


    </div>
  )
}

export default People
