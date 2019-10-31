import React,{Fragment} from 'react';
import classes from './Control.module.css'

const control = (props)=>{
  return (
    <Fragment>
    <div className={classes.controlGroup}>
    <div className={classes.type}>{props.type}</div>
      <button className={classes.button1} disabled={props.ingres[props.type]}  onClick={()=>props.deleteClick(props.checkPurchasable, props.type) }>-</button>
      <button className={classes.button2} onClick={()=>props.click(props.checkPurchasable, props.type) }>+</button>
    </div>

    </Fragment>
  )
}

export default control
