import React, {useState} from 'react'

const Form = (props) => {
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirm,setConfirm]=useState("");

    const create=(e)=>{
e.preventDefault();
 const newUser={fname,lname,email,password,confirm};
    }
  return (
    <div >
      <form  onSumbit={create}>
        <div class="information">
      
       <p > First Name<input type="text" onChange={(e)=> setFname(e.target.value)}/></p> 
        </div>
        <div class="information">
            <p>Last Name<input type="text" onChange={(e)=>setLname(e.target.value)}/></p>
        </div>
        <div class="information">
            <p>Email<input type="text" onChange={(e)=>setEmail(e.target.value)}/></p>
        </div>
        <div class="information">
            <p>Pssword<input type="text" onChange={(e)=>setPassword(e.target.value)}/></p>
        </div>
        <div class="information">
            <p >Confirm Password<input type="text" onChange={(e)=>setConfirm(e.target.value)}/></p>
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

export default Form
