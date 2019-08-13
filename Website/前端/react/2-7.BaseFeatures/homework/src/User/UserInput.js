import React from 'react'



const userInput =(props) =>{
  const style={
    width: '400px',
    borderRadius: '12px',
    height: '30px'
  }
  return (
    <div>
      <input style={style} type='text' onChange={props.change} value={props.username}/>
    </div>
  )
}

export default userInput
