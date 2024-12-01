import React, { useContext } from 'react'
import Layout from '../Landing/layOut/layout'
import {DataContext} from '../../Componenets/DataProvider/DataProvider'
import ProductCard from '../../Componenets/Products/ProductCard'
import classes from './Cart.module.css'
import CurrencyFormat from '../../Componenets/CurrenceyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import {Type} from '../../utilities/actiontype'
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

function Cart() {
  const [state, dispatch]= useContext(DataContext)
  const total = state.basket.reduce((amount, item) =>
    { 
   return  amount + item.price
  }
   , 0
);
const increament=(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item
})
}
const decreament =(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASKET,
  id
})
}

  return (
    <div>
      <Layout>
        <section className={classes.container}> 
          <div className={classes.cart_container}> 
            <br/>
            <br/>
            Hello,
            <br/>
            <br/>
            <h4> Your shopping Basket</h4>
            <br/>
            
            <hr />
             
            {
            state.basket?.length==0? ( <p className={classes.p}>Opps! No item in your cart </p> ) :
            (state.basket?.map((item)=>{
              console.log (item)
              return <section className={classes.cart_product}> 
              <ProductCard prod= {item}
              renderDesc={true}
              flex={true} 
              addbutton={false}
              rederdec={true}
            />
            <div className={classes.btn_container}>
              <button className={classes.btn} onClick={()=>increament(item)}> <FaChevronUp size={10}/> </button>
              <span> {item.amount }</span>
              <button className={classes.btn} onClick={()=>decreament(item.id)}> <FaAngleDown size={10}/> </button>
            </div>
            </section>
          })
          )
          }
          </div>
          {state.basket?.length!== 0 &&(
         <div className={classes.subtotal}>
          <div>
            
            
            
           <p> Subtotal ({state.basket?.length} item) </p>
            <CurrencyFormat amount={total} />

          </div>
          <span>
            <input type="checkbox" />
            <small> this order contains a gift</small>
          </span>
          <br/>
          <Link to="/payment"> Continue to checkout </Link>
     </div> )}
        </section>
      </Layout>
    </div>
  )
}

export default Cart
