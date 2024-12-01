import React, { useState, useContext } from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../../Componenets/CurrenceyFormat/CurrencyFormat';
import classes from  './Product.module.css'
import {Link, useHref} from 'react-router-dom'
import {DataContext} from '../DataProvider/DataProvider'
import {Type} from '../../utilities/actiontype'

function ProductCard({prod,flex,rederdec, addbutton}) {
  const [{basket}, dispatch]=useContext(DataContext)


const addtoCart = () => {
  dispatch({
      type: Type.ADD_TO_BASKET,
      item: prod,
  });
  
};

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
         {
         addbutton &&
        <button className={classes.button} onClick = {addtoCart} >Add to Cart</button>
         }
      </div>
    </div>
    </div>
  )
}


export default ProductCard

