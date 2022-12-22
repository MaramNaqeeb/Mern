import React, { useState } from 'react'
import { navigate } from '@reach/router';

const Form= (props) => {

    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    // const [errors, setErrors] = useState([]); no need for this as i sent props from one of the files in the views
   

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
    <Form onSubmitProp={props.creatAuthor} initialName="" />

    return (
        <form onSubmit={onSubmitHandler}>
              {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>

            <input type="submit"/>
            <button onClick={()=>navigate("/")} >Cancel</button>

        </form>
    )
}
export default Form;
