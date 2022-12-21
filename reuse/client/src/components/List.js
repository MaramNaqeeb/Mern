import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';

import DeleteButton from './DeleteButton';
    
const List = (props) => {
    const [products, setProducts] = useState([]);
   

    
    return (
        <div>
            {props.products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + product._id}>
                            {product.title},{product.price},{product.description} 
                        </Link>
                        |
                        <Link to={"/products/" + product._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton productId={product._id} successCallback={()=>props.removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    );
}
    
export default List;

