import React from 'react';
import axios from 'axios';

import { Link } from '@reach/router';
const List = (props) => {
  
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                props.removeFromDom(productId)

            })
            .catch(err => console.error(err));
        // console.log("hiiii")

    }
    
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" +product._id}>
                        {product.title},{product.price}, {product.description}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
    
export default List;



