import React, { Component, Fragment } from 'react';
import Person from '../../components/Person/Person'
import { connect } from 'react-redux'

class Persons extends Component{
  state={
    person:[]
  }
  // onAddPerson=()=>{
  //
  //   updatedState.push(person)
  //   this.setState({
  //     person: updatedState
  //   })
  // }
  render(){
    console.log(this.props.personState)
    return (
      <Fragment>

      <button className='storeButton' onClick={()=>this.props.onAddPerson(this.props.name,this.props.age)} >Add Person</button>
      {this.props.personState.length>0 ?this.props.personState.map(item=>{
        return <Person  clicked={()=>this.props.onDeletePerson(item.id)} key={item.id} name={item.name}  age={item.age}/>
      }):null}
      </Fragment>
    )
  }
}

const mapStateToProps= state =>{
  return {
    personState: state.person.detail
  }
}


const mapDispatchToProps =(dispatch)=>{
  return {
    onAddPerson : (name, age)=> dispatch({type: "ADDPERSON", info:{name: name, age: age}}),
    onDeletePerson: (id)=> dispatch({type: "DELETEPERSON", val: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
