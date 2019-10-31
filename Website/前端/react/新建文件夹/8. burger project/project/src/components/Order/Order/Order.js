import React from 'react';
import classes from './Order.module.css'

const Order=(props)=>{
  const ingre=[]
  if (props.ingres){
    for (let item in props.ingres){
      ingre.push(<span key={item}>{item}({props.ingres[item]})</span>)
    }
  }

  return (
    <div className={classes.Detail}>
       <p><strong>Ingredients:</strong> {ingre}</p>
       <p>Price:  <strong>RMB {props.price}</strong></p>
       <p>From: {props.from}</p>
    </div>
  )
}


export default Order
