import React, { Component } from 'react'
import Person from './Person/Person'



class Persons extends Component {
  static getDerivedStateFromProps(props, state){
    console.log('[Persons.js] getDerivedStateFromProps')
    return state;
  }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props)
  // }
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate')
  //   if (nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked){
  //     return true
  //   }else{
  //     return false
  //   }
    // return true;           //如果让React继续更新则true,不然就false, 一般会添加些条件来判断,如return this.props
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate')
    return {message: 'Snapshot!'}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot)
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount' )
  }



  render(){
    console.log('[Persons.js] is rendering')
    return this.props.persons.map((p, index)=> {
    return <Person
         click={() => this.props.clicked(index)}
         name={p.name}
         age={p.age}
         key={p.id}
         id={p.id}
         change={(event)=>this.props.change(event, p.id)}
         />

       })
  }
  }

export default Persons
