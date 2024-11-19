import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import LowerHeader from './LowerHeader'
import {Link} from 'react-router-dom'

import classes from './Header.module.css'
 
function Header() {
  return (
    <>
      <section>
      <div class={classes.header_container}>
            {/* first column of the head part */}
            <div class={classes.logo_container}>
               <Link to='/' >
                <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
                </Link>
               <div class={classes.delivery}>
                 <div>
                <span>
                <FiMapPin color="white"/>
                </span>
                </div>
                <div>
                    <p>Delivered to</p>
                    <p>Ethiopia</p>
                 </div> 
                </div>
            </div> 
            {/* second column of the head part */}   
            <div class={classes.search}>
                <select name="" id="" >
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder="" />
                <BsSearch size="25" />

            </div>
            {/* third column of the head part */}
            <div class={classes.order_container}>
                <div class={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="" />
                    <select>
                        <option value="">EN</option>
                    </select>

                </div>
                
                <Link to='/order'>
                    
                        <p> Sign In</p>
                        <span>
                            Account& Lists
                            <select class= {classes.ordersbg}></select>
                        </span>
                    
                </Link>
                
                
                {/* order */}
                <Link to='/signup'>
                      <p> Returns</p>
                        <span> & Order </span>  
                </Link>
                
                
                {/* cart */}
                  
                    <Link to="/cart" class= {classes.cart} > 
                        <IoCartOutline size="25"/>
                        <span> 0</span>
                    </Link>
                    
            
            </div>
        </div>
        <LowerHeader />
      </section>
    </>
  )
}

export default Header
