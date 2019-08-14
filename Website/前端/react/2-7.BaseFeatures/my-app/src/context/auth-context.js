import React from 'react'

const authContext = React.createContext({
  authenticated: false,
  login:()=>{
    
  }
})       //可以初始化

export default authContext
