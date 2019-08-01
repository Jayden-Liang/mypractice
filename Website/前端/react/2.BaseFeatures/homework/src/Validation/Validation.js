import React from 'react'

const validation =(props)=>{
  return (
    <div>
    { props.textLength <=5 ?
      <div>text is too short</div> : <div>text length is enough</div>
    }
    </div>
  )
}

export default validation
