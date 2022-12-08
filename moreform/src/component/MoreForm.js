import React,{useState} from 'react'

const MoreForm = (props) => {
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");
    const[hasErrors,setHasErrors]=useState(false);
    const[hasErrors2,setHasErrors2]=useState(false);
    const[hasErrors3,setHasErrors3]=useState(false);
    const[hasErrors4,setHasErrors4]=useState(false);
    const[hasErrors5,setHasErrors5]=useState(false);

    const create=(e)=>{
e.preventDefault();
 const newUser={fname,lname,email,password,confirm};
 setHasErrors(true);
    }

    const message=(e)=>{
      
        if(e.target.value.length<2){
            setHasErrors("First name must be at least 2 characters");
            setFname(""); 
        
        }else{
           
            setFname(e.target.value);
            setHasErrors("");
        }
    }
        const message2=(e)=>{
    
        if(e.target.value.length<2){
            setHasErrors2("Last name must be at least 2 characters");
            setLname(""); 
        
        }else{
           
            setLname(e.target.value);
            setHasErrors2("");
        }
    }
    const message3=(e)=>{
        if(e.target.value.length<2){
            setHasErrors3("Email must be at least 2 characters");
            setEmail(""); 
        
        }else{
           
            setEmail(e.target.value);
            setHasErrors3("");
        }
    }
    const message4=(e)=>{
        if(e.target.value.length<8){
            setHasErrors4("password must be at least 8 characters");
            setPassword(""); 
        
        }else{
           
            setPassword(e.target.value);
            setHasErrors4("");
        }
    }
    const message5=(e)=>{
        if(e.target.value!= password){
            setHasErrors5("The password must match");
            setConfirm(""); 
        
        }else{
           
            setConfirm(e.target.value);
            setHasErrors5("");
        }
    }
  return (
    <div >
      <form  onSumbit={create}>
        <div class="information">
      
       <p > First Name<input type="text" onChange={message}/></p> 
       <p>{hasErrors}</p>
        </div>
        <div class="information">
            <p>Last Name<input type="text" onChange={message2}/></p>
            <p>{hasErrors2}</p>
        </div>
        <div class="information">
            <p>Email<input type="text" onChange={message3}/></p>
              <p>{hasErrors3}</p>
        </div>
        <div class="information">
            <p>Pssword<input type="password" onChange={message4}/></p>
            <p>{hasErrors4}</p>
        </div>
        <div class="information">
            <p >Confirm Password<input type="password" onChange={message5}/></p>
            <p>{hasErrors5}</p>
        </div>
      </form>
      <div class="info">
      <h5>  Your Form Data</h5>
      <p>First Name: {fname}</p>
      <p>Last Name: {lname}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirm}</p>
      </div>
    </div>

  )
}

export default MoreForm
