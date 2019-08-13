import React, { Component, Fragment } from 'react'
import classes from './Person.module.css'
// import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/WithClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'


class Person extends Component {
  constructor(props){
    super(props)
    this.inputElementRef = React.createRef()
  }
  componentDidMount(){
    // this.inputElement.focus()
    this.inputElementRef.current.focus()                   //access current reference, current element stored the input element
  }

  render(){
    return (
      <Fragment>
      <AuthContext.Consumer>
       {context=>
         context.authenticated ? <p>the user is authenticated</p> :<p>please login</p>
       }
      </AuthContext.Consumer>
      <p onClick={this.props.click}>my name is {this.props.name}, age={this.props.age}</p>
      <input
      type="text"
      id={this.props.id }
      onChange={this.props.change}
      value={this.props.name}
      ref ={this.inputElementRef}
      // ref={(el)=>{
      //   this.inputElement=el
      // }}
      />

      </Fragment>
    )
  }
  }
Person.propTypes={
  click: PropTypes.func,       //表示function
  name: PropTypes.string,
  age: PropTypes.number,
  change:PropTypes.func
};   //会给出warning如果给出错误的prop
export default withClass(Person, classes.Person)
