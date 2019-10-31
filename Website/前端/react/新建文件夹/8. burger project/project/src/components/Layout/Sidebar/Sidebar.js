import React from 'react';
import classes from './Sidebar.module.css'
import burgerLogo from '../../../assets/burger-logo.png'
import Nav from '../Navigation/Navigation'

const Sidebar=(props)=>{
  return (
    <div className={classes.Sidebar} style={{
      transform: props.showEl ? "translateX(0)":"translateX(-200%)"
    }}>
      <div><img style={{backgroundColor: "#258795", height:'40px'}} src={burgerLogo} alt=""/></div>
      <div className={classes.sidebarNav}><Nav /></div>
    </div>
  )
}

export default Sidebar
