import React from 'react'
import {Link} from '@reach/router';

const Componentthree = (props) => {
  return (

    <div>
   <p style={{color:props.color,background:props.background}}>{props.greet}</p>
<Link to ="/:greet">component2 </Link>
<Link to="/home">component1 </Link>
    </div>

  )
}

export default Componentthree
