import React, { useState } from 'react'


const Form = (props) => {
    const[color,setColor]=useState("");
    const[box,setBox]=useState([]);

    const create=(e)=>{
        e.preventDefault();
        setColor(color);
        props.fun2((box)=>[...box,color])
        props.fun(color);
        
            }
  return (
    <div>
    <form onSubmit={create} >
  
    
    <p> Color<input type="text" onChange={(e)=> setColor(e.target.value)}/></p> 
    <input type="submit" value="Add"></input>
    
    </form>
  </div>
  )
}

export default Form

