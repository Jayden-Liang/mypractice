import React from 'react'
import NavItem from './NavItem/NavItem'
import classes from './Navigation.module.css'

const Nav = (props)=>{
  return (
    <ul className={classes.Nav}>
     <NavItem link='/'>Burger Builder</NavItem>
     <NavItem link='/orders'>Orders</NavItem>
     <NavItem link='/auth'>Authentication</NavItem>
    </ul>

  )
}

export default Nav
