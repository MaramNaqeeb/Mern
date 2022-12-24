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

    const nameValidation=(e)=>{
        if(e.target.value.length<2){
            setHasErrors4("password must be at least 8 characters");
            setName(""); 
        
        }else{
           
            setName(e.target.value);
            <input type="submit"/>
            setHasErrors4("");
        }
    }
    <Form onSubmitProp={props.creatPlayer}  initialName="" initialPosition=""/>

    return (
        <form onSubmit={onSubmitHandler}>
              {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label> Player Name</label><br/>
                <input type="text" onChange={nameValidation} />
            setHasErrors4("password must be at least 8 characters");
                <p>({hasErrors4}   </p>
            </p>
            <p>
                <label> Preffered Position</label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>


        </form>
    )
}
export default Form;
