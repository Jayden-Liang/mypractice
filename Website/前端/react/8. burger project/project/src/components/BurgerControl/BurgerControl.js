import React from 'react';
import classes from './BurgerControl.module.css'
import Controller from './Controller/Controller'

const BurgerControl = (props)=>{
  return (
    <div>
      <h2>Burger Controller</h2>
      <ul className={classes.contoller}>
       <Controller type={"meat"} click={props.click}/>
       <Controller type={"salad"} click={props.click}/>
       <Controller type={"cheese"} click={props.click}/>
      </ul>
    </div>
  )
}


export default BurgerControl
