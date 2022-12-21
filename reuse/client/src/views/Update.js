import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState("");
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + props.id)
            .then(res => {
                setProduct(res.data);
                 setLoaded(true);
            })
    }, [props.id])
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res));
    }
    
    return (
        
        <div>
        <h1>Update a Product</h1>
        {loaded && (
            <>
                <Form
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                

                />
                <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
            </>
    )}
    </div>
    )
}

    
export default Update;

