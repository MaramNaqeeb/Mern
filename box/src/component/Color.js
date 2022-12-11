import React from 'react'

const Color = (props) => {

  
  return (
    <div style={{display:'flex' ,flexWrap:'wrap'}}>
        {props.data2.map((item,i)=>
 <p style={{backgroundColor:item,width:'100px',height:'100px', margin:'20px', border:'2px solid black'}}>{item}</p>
 )}
    </div>
       
  ) 
}

export default Color


