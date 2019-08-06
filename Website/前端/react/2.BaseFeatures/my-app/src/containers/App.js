import React, { Component }from 'react';
// import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import Persons from '../components/Persons/Persons';
import appClasses from './App.module.css';
import Monitor from '../Monitor/Monitor'
import Aux from '../hoc/Aux'
import withClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context.js'

class App extends Component{
  constructor(props){
    super(props);                   //必须要调用super, excute extend的组件
    console.log('[App.js] constructor');
  }

  state = {
    person:[
      {id:'dsdf', name: 'jayden', age: 26},
      {id:'dfsfsaf', name: 'alex', age: 27}
    ],
    otherState: 'some other value',
    renderPerson: false,
    showMonitor: true,
    namechangeCount:0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('App.js getDerivedStateFromProps', props)
    return state                            //return updated state
  }

  componentDidMount(){
    console.log('[app.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  nameChangedHandler = (event, id)=>{   //根据ID来改变name
     const x=this.state.person.findIndex(el => id === el.id)              //这里少写了=,导致bug
     let theOne={...this.state.person[x]}
     theOne.name=event.target.value
     let persons=[...this.state.person]
     persons[x]=theOne
     this.setState((prevState, props)=>{
       return {
         person: persons,
         namechangeCount: prevState.namechangeCount+1
       }
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
    console.log('delete', arr)
    this.setState({
      person:arr
    })
  }

  loginHandler =()=>{
    this.setState({authenticated: true})
  }


  render(){
    console.log('[App.js] render')
    let persons=null;
    if (this.state.renderPerson){
      persons=
        <Persons
            clicked= {this.deleteHandler}
            persons= {this.state.person}
            change = {this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
        />
    }

    // const monitor=
    return (

      <Aux classes={appClasses.App}>
        <button onClick={()=>{this.setState({showMonitor: false})}}>Remove monitor</button>
        <AuthContext.Provider
        value={{
          authenticated:this.state.authenticated,
          login: this.loginHandler
        }}>
        { this.state.showMonitor ? <Monitor
              toggleHandler={this.toggleHandler}
              renderPerson={this.state.renderPerson}
              personsLength={this.state.person.length}
              /> :null}
        {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}


export default withClass(App, appClasses.App);
