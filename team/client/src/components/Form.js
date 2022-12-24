import React, { useState } from 'react'
import { navigate } from '@reach/router';

const Form= (props) => {

    const { initialName,initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const[hasErrors4,setHasErrors4]=useState(false);

    const [position, setPosition] = useState(initialPosition);

    // const [errors, setErrors] = useState([]); no need for this as i sent props from one of the files in the views
   

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name,position});

    }

    <Form onSubmitProp={props.creatPlayer}  initialName="" initialPosition=""/>

    return (
        <form onSubmit={onSubmitHandler}>
              {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label> Player Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label> Preffered Position</label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <input type="submit"/>


        </form>
    )
}
export default Form;
