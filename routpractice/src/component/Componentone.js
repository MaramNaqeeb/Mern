import React from 'react'
import {Link} from '@reach/router';


const Componentone = () => {
  
  return (
    <div>
<p>Welcome</p>

        <Link to ="/:greet">component2 </Link>
        <Link to ="/:greet/:color/:background">component3 </Link>
    </div>
  )
}

export default Componentone
