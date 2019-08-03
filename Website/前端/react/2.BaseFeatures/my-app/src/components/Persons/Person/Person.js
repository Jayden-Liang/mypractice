import React from 'react'
import classes from './Person.module.css'

const person=(props)=>{
  return (
    <div className={classes.Person}>
    <p onClick={props.click}>my name is {props.name}, age={props.age}</p>
    <input type="text" id={props.id } onChange={props.change} value={props.name}/>
    </div>
  )
}

export default person
