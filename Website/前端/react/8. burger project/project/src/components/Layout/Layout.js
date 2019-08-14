import React, {Fragment} from 'react';
import classes from './Layout.module.css'

const layout = (props)=>{
  return (
    <Fragment>
    <div>Toolbar, sidebar, backdrop</div>
    <main className={classes.main}>{props.children}</main>
    </Fragment>
  )

}

export default layout
