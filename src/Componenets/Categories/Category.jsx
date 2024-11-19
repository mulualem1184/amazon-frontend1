import React from 'react';
import {CategoryInfo} from './Categoryinfo'
import CategoryCard from './CategoryCard';
import classes from './Category.module.css';

function Category() {
  
  return (
    <div>
        
    <section className={classes.category_container}>
     { 
        CategoryInfo.map((infos, index) => 
            {
                return <CategoryCard data={infos}/>;
        
           })
     }
     {/* <CategoryCard data={CategoryInfo[0]}/> */}
    </section>
    </div>
  )
}

export default Category
