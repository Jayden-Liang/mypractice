import React from 'react';
// import classes from './Person.module.css'
import './Person.module.css'


const Person=(props)=>{
  return (
    <div className='Person' onClick={props.clicked}>
      <h2>{props.name}</h2>
      <p>age: {props.age}</p>
    </div>
  )
}



export default Person
