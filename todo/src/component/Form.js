import React, { useState } from 'react'

const Form = (props) => {
    // const [form,setForm]=useState("");
    // const  [list,setList]=useState([]);
    // const [complete, setComplete] = useState(false);
    const  [todo,setTodo]=useState({});
    

    const create=(e)=>{
        e.preventDefault();
        setTodo({
            // id:props.todos.length,
            text:e.target.value,
            completed:false,
        })

    
        // const deleteItem=(e,x)=>{
        //         // setList([ ...list.slice(0, x), ...list.slice(x+1) ]);
        //         setList(list => list.filter(list => list !== e));

                }
                const hasFormSubmit=(e)=>{
                    e.preventDefault();
                    props.myfun(todo);
                }
                
  return (
    <div className='form'>
    <form onSubmit={hasFormSubmit} >
  
    
    <p> <input type="text" onChange={create}/></p> 
    <input type="submit" value="Add"></input>
    
    </form>

 
    </div>
  )
}

export default Form

