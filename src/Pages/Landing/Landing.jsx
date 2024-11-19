import React from 'react'
// import Header from './Componenets/Header/Header';
import Carousel from '../../Componenets/Carousel/Carousel.js'
import Category from '../../Componenets/Categories/Category';
import Products from '../../Componenets/Products/products.jsx'
import Layout from './layOut/layout.jsx';
function Landing() {
  return (
    <Layout>
        <Carousel />
        <Category />
        <Products />
    </Layout>
  )
}

export default Landing
