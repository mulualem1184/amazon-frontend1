import React, {useState} from 'react'
import Layout from '../Landing/layOut/layout'
import {useParams} from 'react-router-dom'
import {ProductAPI} from '../../API/ProductAPI'
import axios from 'axios'
import classes from './Result.module.css'
import ProductCard from '../../Componenets/Products/ProductCard'
import Loader from '../../Componenets/Loader/Loader'
function Results() {
  const {categoryName}=useParams()
  const [Result, setResult] = useState([])
   const [isLoading, setLoading]= useState(true)
  
  axios.get(`${ProductAPI}/products/category/${categoryName}`)
   .then((res) =>{
    setLoading(false)
    setResult(res.data) 
    
   }).catch((err)=>
   {
    // setLoading(false)
    console.log(err)
   })
 
  return (
    <div>
      <Layout>
         <section>
          <h1 style={{padding: "15px"}}> Result</h1>
          <p style={{padding: "15px",  color:"black"}}> Category </p>
          <hr />
          {isLoading? (<Loader />): (
          <div className = {classes.products_container}>
            
         { 
            Result.map((singleproduct, index) => 
                {
                    return <ProductCard prod={singleproduct} key={singleproduct.id}/>;
            
               })
         }
        
          </div>) }
         </section>
      </Layout>
    </div>
  )
}

export default Results
