import React from 'react'
import './Person.css'

const person=(props)=>{
  return (
    <div className="Person">
    <p onClick={props.click}>my name is {props.name}, age={props.age}</p>
    <input type="text" onChange={props.change} value={props.name}/>
    </div>
  )
}

export default person



    // <span>{props.children}</span>
