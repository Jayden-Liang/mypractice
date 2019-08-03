import React, { Component }from 'react';
// import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import Persons from '../components/Persons/Persons';
import appClasses from './App.module.css';
import Monitor from '../Monitor/Monitor'

class App extends Component{
  state = {
    person:[
      {id:'dsdf', name: 'jayden', age: 26},
      {id:'dfsfsaf', name: 'alex', age: 27}
    ],
    otherState: 'some other value',
    renderPerson: false
  }

  nameChangedHandler = (event, id)=>{   //根据ID来改变name
     const x=this.state.person.findIndex(el => id === el.id)              //这里少写了=,导致bug
     let theOne={...this.state.person[x]}
     theOne.name=event.target.value
     let persons=[...this.state.person]
     persons[x]=theOne
     this.setState({
       person: persons
     })
  }

  toggleHandler =()=>{
     this.setState({
       renderPerson: !this.state.renderPerson
     })
  }

  deleteHandler =(index)=>{
    let arr =this.state.person
    arr.splice(index, 1)
    this.setState({
      person:arr
    })
  }


  render(){
    let persons=null;
    if (this.state.renderPerson){
      console.log('yes')
      persons=
        <Persons
            clicked= {this.deleteHandler}
            persons= {this.state.person}
            change = {this.nameChangedHandler}
        />
    }

    const monitor=<Monitor
          toggleHandler={this.toggleHandler}
          renderPerson={this.state.renderPerson}
        />
    return (
      <div className={appClasses.App}>
        {monitor}
        {persons}
      </div>
    )
  }
}


export default App;
