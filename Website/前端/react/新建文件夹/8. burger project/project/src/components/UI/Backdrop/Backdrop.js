import React from 'react';
import classes from './Backdrop.module.css'

const Backdrop=(props)=>{
  return(
    <div onClick={props.hide} className={props.showOrder ?classes.backdrop:""}>

    </div>
  )
}


export default Backdrop
