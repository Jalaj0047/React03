import React from 'react';
import classes from './Product.module.css';
const product=(props)=>{
    return(
       
        <div className={classes.Product}>
            <h3>Product : {props.productName}</h3>
            <h5>Price : {props.productPrice}</h5>
        </div>
      
    )
}


export default product;