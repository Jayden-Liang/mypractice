import React, {Fragment} from 'react';
import classes from './CheckoutSummary.module.css'
import Burger from '../../Burger/Burger'

const CheckoutSummary =(props)=>{
  // console.log(props)
  return (
    <Fragment>
    <h2>We hope it tastes well</h2>
    {props.ingres ?<Burger ingres={props.ingres}/>:<h1>Please go select your ingredients</h1>}
    <div className={classes.checkoutButton}>
        <button onClick={props.cancel} type="button">CANCEL</button>
        <button onClick={props.continue} type="button">Continue</button>
    </div>
    </Fragment>
  )
}

export default CheckoutSummary
