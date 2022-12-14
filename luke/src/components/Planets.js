import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { navigate } from '@reach/router'



const Planets = (props) => {
    const [responseData, setResponseData] = useState("");
//   const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
                axios.get(`https://swapi.dev/api/planets/${props.id}`)
                    .then(response=>{setResponseData(response.data)})
        .catch ( () => navigate("/error") );

            }, [props.id]);
  return (
    <div>
       <h3>{responseData.name}</h3>
       <p> Climate: {responseData.climate}</p>
      <p> Terrain: {responseData.terrain}</p>
      <p>Surface water: {responseData.surface_water}</p>
      <p> Population: {responseData.population}</p>
    </div>
  )
}

export default Planets
