import React from 'react'
import {Link} from '@reach/router';



const Componenttwo = (props) => {
  return (
    <div>
             
<p>{isNaN(props.greet)?<p> it is String {props.greet}</p>:<p> it is Number{props.greet}</p> }</p>



    <Link to="/home">component1 </Link>
    <Link to ="/:greet/:color/:background">component3 </Link>

        </div>
  )
}

export default Componenttwo
