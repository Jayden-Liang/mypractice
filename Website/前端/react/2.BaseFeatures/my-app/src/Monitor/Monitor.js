import React from 'react'
import monitorClasses from './Monitor.module.css'


const monitor=(props)=>{

  let btnClass='';

  const classes=[]
  if (props.renderPerson){
    classes.push(monitorClasses.bold)
  }else{
    classes.push(monitorClasses.red)
  }
  if (props.renderPerson){
    btnClass=monitorClasses.Red
  }
  //这里返回两个标签,加个外div包住
  return (
    <div className={monitorClasses.Monitor}>
    <h4 className={classes.join(' ')}>Hello World</h4>
    <button className={btnClass} onClick={ props.toggleHandler }>switch Person</button>
    </div>
  );
}

export default monitor
