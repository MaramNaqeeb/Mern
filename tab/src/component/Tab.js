import React, { useState } from 'react'

const Tab = () => {
    const [tabs,setTabs]=useState("");
    const alltabs=([{label:'Tab1',content:'welcome1'},{label:'Tab2',content:'welcome2'},{label:'Tab3',content:'welcome3'}]);

    const fun = (e,x)=>{
        e.preventDefault();
        setTabs(x.content);
       
        
    }
  return (
    <div>

    { alltabs.map( (item, i) => 

        <button  className='tabs' onClick={(e)=>fun(e,item)}key={i} >{item.label}</button>
      
        ) }
     

<div className='content'><p >{tabs} </p></div>



    </div>
  )
}

export default Tab
