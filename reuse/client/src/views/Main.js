import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    import Form from '../components/Form'
    import List from '../components/List'

const Main = (props) => {
    const [products, setProducts] = useState(null);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);
    
 
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }
  
    const creatProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }
    

    return (
        <div>
            <Form onSubmitProp={creatProduct} initialTitle="" initialPrice="" initialDescription=""/>
           <hr/>
           {loaded && <List products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
    
export default Main;

