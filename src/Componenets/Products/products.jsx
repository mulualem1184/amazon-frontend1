import React, {useEffect,useState}  from 'react';
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
function Products() {
    const [products, setProducts]= useState([])
    useEffect(()=>
    {
        axios.get('https://fakestoreapi.com/products')
        .then((res) =>{
            // console.log(res.data)
            setProducts(res.data)
        }).catch((error)=>{
            console.log(error)
        })

    },[])

    return (
        <div className={classes.products_container}>
            
       
         { 
            products.map((singleproduct, index) => 
                {
                    return <ProductCard prod={singleproduct} key={singleproduct.id}/>;
            
               })
         }
        
       
        </div>
      )
    }
export default Products
