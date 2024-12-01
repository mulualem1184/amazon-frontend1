import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Auth from './Pages/Auth/Auth';
import Cart from './Pages/Cart/Cart';
import Result from './Pages/Results/Result';
import Payment from './Pages/Payment/Payment';
import  Order from './Pages/Orders/Order';
import ProductDetail from './Pages/ProductDetails/ProductDetail'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './Componenets/ProtectedRoute/ProtectedRoute'

const stripePromise = loadStripe('pk_test_51QOWS9Ka1BwWA7kqf65QDZBfCBjL4iq8zdU9096wUyWouArrChzADT2gJoyWW342pM6IU9pNSedeZPQM5z884O4o00hyqR3r0N');

function Routing() {

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Landing />}/>    
            <Route path='/auth' element={<Auth />}/>    
            <Route path="/cart" element={<Cart />}/>  
            <Route path='category/:categoryName' element={<Result />}/>
            <Route path='products/:ProductId' element={<ProductDetail /> } />  
              
            
            <Route path='/payment/' element={
              <ProtectedRoute msg={"you must login to pay"} redirect="/payment">
                <Elements stripe={stripePromise}> 

                      <Payment />
                </Elements>
              </ProtectedRoute>
              }/> 
            <Route path='/order' element={
              <ProtectedRoute msg={"you must login to access your orders"} redirect="/order">
              <Order />
              </ProtectedRoute>
              }/>   
           
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
