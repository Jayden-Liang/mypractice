import React from 'react'
import classes from './NavItem.module.css'
const NavItem =(props)=>{
  return (
    <li className={classes.navli}><a className={classes.navitem} href={props.link}>{props.children}</a></li>
  )
}


export default NavItem
