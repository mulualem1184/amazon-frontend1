import React from 'react'
import {data} from './images/data'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Corousel.module.css'

function Carouseleffect() {
  return (
    <div>
        <Carousel  autoPlay={true}
        infiniteLoop= {true}
        showIndicators={false}
        showThumbs={false}>
        { 
        data.map((imageItemLink)=>{
            return <img src={imageItemLink}/>
        })

        }
        </Carousel>
        <div className={classes.hero_img}> </div>
      
    </div>
  )
}

export default Carouseleffect
