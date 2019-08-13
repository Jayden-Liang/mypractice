import React from 'react'

const char=(props)=>{
  const style={
    display: "inline-block",
    padding: "8px",
  }
  return (
    <div style={style}><p onClick={props.click}>{props.piece}</p></div>
  )
}

export default char
