import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
    
const Detail = (props) => {
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/'+props.id)
            .then(res => {setProduct(res.data);console.log(res.data);setLoaded(true);})
            .catch(err => console.error(err));
    }, [props.id]);
    
    if(loaded){
    return (

       (<div>
            
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>

            <Link to={"/products/" + product._id +"/edit"}><button>  
           Update </button></Link>

        </div>)
    )
}
else{return (<div></div>)}
}
export default Detail;

