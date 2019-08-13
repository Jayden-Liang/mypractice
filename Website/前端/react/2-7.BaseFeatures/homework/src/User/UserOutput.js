import React from 'react'
import './User.css'

const userOutput =(props) =>{
  return (
    <div className='output'>
      <p onClick={props.click}>This is from output.js </p>
      <p> another paragraph , username:{props.username} </p>
    </div>
  )
}

export default userOutput
