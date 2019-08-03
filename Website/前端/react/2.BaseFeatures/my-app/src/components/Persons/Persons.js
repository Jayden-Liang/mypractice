import React from 'react'
import Person from './Person/Person'

const persons = (props)=> {
  return props.persons.map((p, index)=> {
  return <Person
       click={() => props.clicked(index)}
       name={p.name}
       age={p.age}
       key={p.id}
       id={p.id}
       change={(event)=>props.change(event, p.id)} />
     })}

export default persons
