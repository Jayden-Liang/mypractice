import React, { useEffect, useRef } from 'react'
import monitorClasses from './Monitor.module.css'
import AuthContext from '../context/auth-context'

const Monitor=(props)=>{

  const toggleBtnRef = useRef(null)   //不仅是access到DOM元素, 甚至可以存其他的值在这里

  useEffect(()=>{
    toggleBtnRef.current.click()
  },[])

  let btnClass='';
  // useEffect(()=>{
  //   console.log('[Monitor.js] useEffect')
  //   setTimeout(()=>{                    //比如这里发送http请求,保存数据
  //     alert('saved data to cloud!!')
  //   }, 1000)
  //   return () =>{
  //     console.log('[Monitor.js] clean up in useEffect')
  //   }
  // }, [props.personsLength]);        //只有persons改变了才会调用useEffect

  useEffect(()=>{
    console.log('[Monitor.js] 2nd useEffect')
    return () =>{
      console.log('[Monitor.js] clean up in 2nd useEffect')
    }

  })


  // useEffect()  可以根据需要有多个useEffect


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
    <button ref={toggleBtnRef} className={btnClass} onClick={ props.toggleHandler }>switch Person</button>
    <AuthContext.Consumer>
      {context=> <button onClick={context.login}>LOGIN IN</button>}
    </AuthContext.Consumer>
    </div>
  );
}

export default React.memo(Monitor)
