import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';
const Form = () => {
  const items = [
    'people',
    'planets',
];
  const[selectedItem,setSelectedItem]=useState(items[0]);
  const [responseData, setResponseData] = useState("");
  const [id, setId] = useState(0);
    //   const [loaded, setLoaded] = useState(false);
const[button,setButton]=useState(false);
      const [loaded, setLoaded] = useState(false);



 
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate(`/${selectedItem}/${id}`)
  }


  
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
            <select value={selectedItem} onChange={(e)=>setSelectedItem(e.target.value)}>
                { items.map( (items, idx) => 
                    <option key={idx} value={items}>{items}</option>
                )}
            </select>
            <input type="number" onChange={(e)=>setId(e.target.value)}></input>

          <button>Search</button>
            
       
           
            </form>
            
    </div>
  )
}

export default Form
