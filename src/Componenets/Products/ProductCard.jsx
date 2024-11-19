import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../../Componenets/CurrenceyFormat/CurrencyFormat';
import classes from  './Product.module.css'
import {Link} from 'react-router-dom'
function ProductCard({prod,flex,rederdec}) {
  return ( 
    <div className={`${classes.card_container} ${flex? classes.product_flexed:''}`}>
      <Link to ={`/products/${prod.id}`}>
        <img src={prod.image} alt="" />
      </Link>
      <div>
        <p style={{color:"black"}}> {prod.title}</p>
        {rederdec && <div> <br /> {prod.description} </div>}
        <div className={classes.rating}>
        {/* rating */}
        
        <Rating value={prod.rating.rate} precision={0.1}/>
        <small>{prod.rating.count}</small>
        {/* rating count */}
      </div>
      <div>
         {/* price */}
        <CurrencyFormat amount={prod.price}/>
        <button className={classes.button} >Add to Cart</button>
      </div>
    </div>
    </div>
  )
}

export default ProductCard
