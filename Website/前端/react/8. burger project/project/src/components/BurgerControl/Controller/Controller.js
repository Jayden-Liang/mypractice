import React from 'react';
import classes from './Control.module.css'

const control = (props)=>{
  return (
    <li><span>{props.type}</span>
    <button onClick={(event)=>props.click(event, props.type) }>-</button>
    <button className={classes.button2}onClick={(event)=>props.click(event, props.type) }>+</button>
    </li>
  )
}

export default control
