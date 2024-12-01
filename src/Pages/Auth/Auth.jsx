import React, {useState, useContext} from 'react'
import classes from './Signup.module.css'
import Layout from '../Landing/layOut/layout'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {auth} from '../../utilities/firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from '../../Componenets/DataProvider/DataProvider'
import {Type} from '../../utilities/actiontype'
import {ClipLoader} from 'react-spinners';


function Auth() {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [error,setError]= useState("")
  const [loading,setLoading]= useState({
    signIn:false,
    signUp:false,
  })
  const [{user}, dispatch]=useContext(DataContext)
  const navigate=useNavigate()
  const navStateData=useLocation()
  console.log(navStateData?.state?.msg)
  const authHandler=async(e)=>
  {

   e.preventDefault();
   setError(false)
   
   if(e.target.name==="signin")
   {

    setLoading({...loading, signIn:true})
    signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
     dispatch({
      type:Type.SET_USER,
      user:userInfo.user,
     })
     
     navigate(navStateData?.state?.redirect || "/")
     
     setLoading({...loading, signIn:false})
     //console.log(loading.signIn)
    }).catch((err) =>{
      // setLoading({...loading, singIn:false})
      console.log(err.message)
      setError(err.message)
      setLoading({...loading, signIn:false})
    })

  //   // firebase auth

   }
   else{
    setLoading({...loading, signUp:true})

    createUserWithEmailAndPassword(auth,email,password).then((userInfo) =>{
      dispatch({
        type:Type.SET_USER,
        user:userInfo.user,
       })
       navigate(navStateData?.state?.redirect || "/")
    setLoading({...loading, singUp:false})
    }
  ).catch((err)=>{
    setLoading({...loading, singUp:false})
    setError(err.message)
   })
   
    }
  }
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to="/">
      <img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png" alt="" srcset="" />
      </Link>

      {/* form */}
        <div className={classes.login_container}>
          <form action="">
          <h1>Signin</h1>
          {
            navStateData?.state?.msg && (
              <small
              style={{
                padding: "5px",
                textAlign: "center",
                color:"red",
                fontWeight:"bold",              }}>
               {navStateData?.state?.msg}

              </small>
            )

          }
              <div>
              <label htmlfor="email"> Email</label>
              <input value={email} type="email" id="email" onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
              <label htmlfor="password"> Password</label>
              <input value={password}type="password" id="password" onChange= {(e)=>setPassword(e.target.value)}></input>
              
            </div>
            <button type= "submit" name="signin" onClick= {authHandler} className={classes.login_container_signinbtn}>
              {
                //console.log(loading.signIn)
                loading.signIn ? (<ClipLoader color="#000" size={15} />):("Sign in")
              }
            </button>
            
          </form>
          {/* agreement  */}
          <p>
            by signing in you agree to the AMAZON KAKE Condition of Use & sale. Please see our Primary Notice, our Cookies Notice and our Interest. Based Ads Notice
          </p>
            <button type="submit" name="signup" onClick={authHandler} className={classes.login_registerButton}>
            {
                loading.signUp ? (<ClipLoader color="#000" size={15}></ClipLoader>):("Create your Amazon Account")
              } 
            </button>
            {
              error && <small style={{color:'red', padding: '10px'}}>{error}</small>
            }
        </div>
      
    </section>
  )
}

export default Auth
