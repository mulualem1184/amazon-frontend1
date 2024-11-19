import React, {useState, useEffect} from 'react'
import Layout from '../Landing/layOut/layout'
import {useParams} from 'react-router-dom';
import axios from 'axios'
import {ProductAPI} from '../../API/ProductAPI'
import ProductCard from '../../Componenets/Products/ProductCard'
import Loader from '../../Componenets/Loader/Loader'

function ProductDetail() {
  const {ProductId}= useParams()
  const [Product,setProduct]=useState({
    "id": null,
  "title": " ",
  "price": 22.3,
  "description": "",
  "category": "",
  "image": "",
  "rating": {
    "rate": 4.1,
    "count": 259
  }
  })
  const [isLoading, setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
   axios.get(`${ProductAPI}/products/${ProductId}`)
   .then((res)=>{
    setProduct(res.data)
    setLoading(false)
   }).catch((err)=>
  {
    setLoading(false)
    console.log(err)
  })
  },[])
  console.log(Product)
  return (
    <div>
      <Layout>
        {isLoading ? (<Loader />) : 
              (<div  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding : "10%", }} >
                  <ProductCard prod={Product} flex={true} rederdec={true}/>
              </div>)}
      </Layout>
      
    </div>
  )
}

export default ProductDetail
