import React from 'react'
import classes from './Category.module.css'
import {Link} from 'react-router-dom'

function CategoryCard({data}) { 

  return (
    <div className={classes.category}>
      <a href={`/category/${data.name}`} >
        <span> 
            <p style={{  fontSize: '14px' , color: 'black'}}>{data.title}</p>
        </span>
        <img src={data.imgLink}  alt="try1"/>
        <p > Shop now</p>
      </a>
    </div>
  )
}

export default CategoryCard
