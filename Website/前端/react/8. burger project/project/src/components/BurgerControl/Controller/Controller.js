import React,{Fragment} from 'react';
import classes from './Control.module.css'

const control = (props)=>{
  return (
    <Fragment>
    <div className={classes.controlGroup}>
    <div>{props.type}</div>
      <button  disabled={props.ingres[props.type]}  onClick={()=>props.deleteClick(props.checkPurchasable, props.type) }>-</button>
      <button className={classes.button2} onClick={()=>props.click(props.checkPurchasable, props.type) }>+</button>
    </div>

    </Fragment>
  )
}

export default control
