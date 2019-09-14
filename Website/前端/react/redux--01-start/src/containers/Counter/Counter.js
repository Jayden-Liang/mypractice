import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css'
import * as actionVar from '../../store/actions.js'
import Persons from '../Persons/Persons'
import * as actionCreators from "../../store/actions"

class Counter extends Component {
    state = {            //仍然使用
        name: '',
        age: ''
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    onNameChange=(event)=>{
      this.setState({name: event.target.value})
    }
    onAgeChange=(event)=>{
      this.setState({age: event.target.value})
    }



    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncreCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <button className='storeButton' onClick={()=>this.props.onStoreCounter(this.props.ctr)} >Store Result</button>


                <div>
                    <ul>
                    { (this.props.result.length>0)?
                      this.props.result.map((item,index) =>{
                        return <li onClick={(id)=>this.props.onDeleteCounter(item.id)} key={index}>{item.value}</li>
                      }):null
                    }

                    </ul>
                </div>
                <input type='text' name='name' value={this.state.name} onChange={(event)=>this.onNameChange(event)} placeholder='name'/>
                <input type='text' value={this.state.age} onChange={(event)=>this.onAgeChange(event)} placeholder='age'/>

                <Persons name={this.state.name} age={this.state.age}/>
            </div>
        );
    }
}

const mapStateToProps= state =>{
  return {
    ctr: state.ctr.counter,     //reducer 里面那个state,得到global state
    result: state.res.results
  }       //returns a js object which is a map of prop names and slices of the state stored
}            //store instructions how the state managed by redux

const mapDispatchToProps =(dispatch)=>{

  return {

    onIncreCounter : ()=> dispatch(actionCreators.increment()),
    onDecreCounter: ()=> dispatch({type: actionVar.DECREMENT}),
    onAddCounter: ()=> dispatch(actionCreators.add(5)),
    onSubCounter: ()=> dispatch({type: actionVar.SUBTRACT, val: 5}),
    onStoreCounter: (result)=> dispatch(actionCreators.storeCounter(result)),
    onDeleteCounter: (ID)=> dispatch({type: actionVar.DELETESTORE, elID: ID}),


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);        //it's a function returns high order function, 参数的位置是固定的，第一个没有就传入null
