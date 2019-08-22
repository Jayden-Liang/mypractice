import React from 'react';
import classes from './BurgerControl.module.css'
import Controller from './Controller/Controller'

const BurgerControl = (props)=>{
  return (
    <div>
      <h2>Burger Controller</h2>
      <p>Total Price:{props.Price.toFixed(2)}</p>
      <div className={classes.contoller}>
       <Controller type={"meat"} deleteClick={props.deleteClick} ingres={props.ingres} click={props.click}/>
       <Controller type={"salad"} deleteClick={props.deleteClick} ingres={props.ingres} click={props.click}/>
       <Controller type={"cheese"} deleteClick={props.deleteClick} ingres={props.ingres} click={props.click}/>
      </div>
      <button disabled={!props.purchasable} className={classes.button} type="button">Purchase</button>
    </div>
  )
}


export default BurgerControl
