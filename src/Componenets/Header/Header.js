import React, {useContext} from 'react'
import { FiMapPin } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

import LowerHeader from './LowerHeader'
import {Link, useNavigation, useLocation} from 'react-router-dom'
import {DataContext} from '../DataProvider/DataProvider'

import classes from './Header.module.css'
import {auth} from '../../utilities/firebase'
 
function Header() {
  const [{user,basket}, dispatch]=useContext(DataContext)
  const totalized= basket?.reduce((amount,item)=>
  {
    return item.amount + amount
  },0)
  
  return (
    <section className={classes.fixed}>
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
                    <p className={classes.p}>Delivered to</p>
                    <p className={classes.p}> Ethiopia</p>
                 </div> 
                </div>
            </div> 
            {/* second column of the head part */}   
            <div class={classes.search}>
                <select name="" id="" >
                    <option value="">All</option>
                </select>
                <input type="text" name="" id="" placeholder="" />
                <BsSearch size="39" />

            </div>
            {/* third column of the head part */}
            <div class={classes.order_container}>
                <div class={classes.language}>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="" />
                    <select>
                        <option value="">EN</option>
                    </select>

                </div>
              
                
                <Link to={ !user && '/auth'}>
                <div>
                {
                   user? 
                   ( <>
                   <p className={classes.p}> hello {user?.email?.split('@')[0]} , <span  onClick={()=>auth.signOut()} style={{fontSize:'14px'}}> Sign Out</span></p></>)
                    :
                   
                   (<>  <p className={classes.p}> hello, Sign In</p>
                   </>)
                 } 
                
                        <span style={{paddingLeft:'8px'}}>
                            Account& Lists
                            <select class= {classes.ordersbg}></select>
                        </span>
                </div>    
                </Link>
                
                
                {/* order */}
                <Link to='/order'>
                      <p className={classes.p}> Returns</p>
                        <span> & Order </span>  
                </Link>
                
                
                {/* cart */}
                  
                    <Link to="/cart" class= {classes.cart} > 
                        <IoCartOutline size="25"/>
                        <span> {totalized}</span>
                    </Link>
                    
            
            </div>
        </div>
        <LowerHeader />
      </section>
    </section >
  )
}

export default Header
