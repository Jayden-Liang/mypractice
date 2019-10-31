import React, {Fragment} from 'react';
import classes from './Layout.module.css'
import burgerLogo from '../../assets/burger-logo.png'
import Nav from './Navigation/Navigation'


// import NavItem from './Navigation/NavItem/NavItem'

const layout = (props)=>{
  return (
    <Fragment>

    <div className={classes.Toolbar}>
    <div onClick={props.toggler} className={classes.Menu}>
       <div></div>
       <div></div>
       <div></div>
    </div>
    <div><img style={{backgroundColor: "#258795", height:'40px'}} src={burgerLogo} alt=""/></div>
    <div className={classes.Nav}>
      <Nav />
    </div>
    </div>
    <main className={classes.main}>{props.children}</main>
    </Fragment>
  )

}

export default layout
