import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import Signup from './Pages/Auth/Signup';
import Cart from './Pages/Cart/Cart';
import Result from './Pages/Results/Result';
import Payment from './Pages/Payment/Payment';
import  Order from './Pages/Orders/Order';
import ProductDetail from './Pages/ProductDetails/ProductDetail'


function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Landing />}/>    
            <Route path='/signup' element={<Signup />}/>    
            <Route path="/cart" element={<Cart />}/>  
            <Route path='category/:categoryName' element={<Result />}/>
            <Route path='products/:ProductId' element={<ProductDetail />}/>   
            <Route path='/payment/' element={<Payment />}/> 
            <Route path='/order' element={<Order />}/>   
           
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
