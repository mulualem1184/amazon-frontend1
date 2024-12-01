import React ,{useContext, useState} from 'react'
import Layout from '../Landing/layOut/layout'
import classes from './Payment.module.css'
import {DataContext } from '../../Componenets/DataProvider/DataProvider'
import ProductCard from '../../Componenets/Products/ProductCard'
import {useStripe,useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Componenets/CurrenceyFormat/CurrencyFormat'
import {axiosInstance} from '../../API/axios'
import {ClipLoader} from 'react-spinners';
import {Type} from '../../utilities/actiontype'
import {db} from '../../utilities/firebase'


function Payment() {
  const [{user,basket}, dispatch]=useContext(DataContext)
  const totalItem= basket?.reduce((amount,item)=>
  {
    return item.amount + amount
  },0)
  const totalPrice = basket?.reduce((amount, item) =>
    { 
   return  amount + item.price
  }
   , 0
);

  const stripe=useStripe()
  const elements=useElements()
  const[cardError, setCardError]=useState()
  const [processing,setProcessing]= useState(false)
  const handleChange=(e)=> {
   
    e?.error?.message? setCardError(e?.error?.message):setCardError("")
  };

  const handlePayment= async(e)=>
  {
    e.preventDefault()
    try {
      setProcessing(true);
      // 1. backend || functions contact to the client secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${totalPrice *100} `,
       

      });
     // console.log(response.data)
      // 2. clientside (react sideconfirmation)
      const clientSecret= response.data?.clientSecret;
      const {paymentIntent} =await stripe.confirmCardPayment 
      (clientSecret,
        {
          payment_method:{
          card: elements.getElement(CardElement),
          },
        }
      );
      console.log(paymentIntent)
     await db.collection("users"). doc(user.uid).collection("orders").doc(paymentIntent.id)
     .set({
      basket: basket,
      amount: paymentIntent.amount,
      created:paymentIntent.created,
     });

     dispatch({type: Type.EMPTY_BASKET})
      setProcessing(false)

    } catch (error) {
      console.log(error.message)
      setProcessing(false)
      
      
    }
    

    // 3. after the confirmation --> order firestore data save, clear basket
  }
  return (
    <div>
      <Layout>
        <div className={classes.payment_header}>
         Checkout ({totalItem}) items
        </div>
        {/* header method */}
        <section className={classes.payment}>
          {/* address */}
        <div className={classes.flex}>
          <h3> Delivery Address</h3>
          <div>
            <div> {user?.email}</div>
            <div> 123 React Lane</div>
            <div> Addis Ababa</div>
          </div>
        </div>
        <hr />
        {/* product*/}
        <div  className={classes.flex}>
          <h3> Review item and delivery</h3>

          <div> 
            {
            basket?.map((item)=><ProductCard prod={item} flex={true} />)
            }
          </div>
        </div>
        <hr />
{/* payment car */}

       
        <div className={classes.flex}>
            <h3> Payment methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details} >
            <form onSubmit={handlePayment}>
              {/* card error */}
              {cardError && <small style={{color:"red"}}> {cardError}</small>}
              {/* card element */}
              <CardElement  onChange={handleChange}/>
              {/* price */}
              <div className={classes.payment_price}>
                <div>
                  <span style={{display:"flex", gap:"10px"}}>
                   <p> Total Order | </p> <CurrencyFormat amount={totalPrice} />
                  </span>
                </div>
                <button type="submit" > 
                {
                  processing? (
                    <div className={classes.loading}>
                     <ClipLoader color="black" size={15} /> 
                     <p> please wait</p>
                   </div>
                
                  ): "Pay Now"
                }
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
        </section>
      </Layout>
    </div>
  )
}

export default Payment
