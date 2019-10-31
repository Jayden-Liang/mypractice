import React, {Component} from 'react'
import Input from '../../components/UI/Input/Input'
import classes from './Auth.module.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'



const mapStateToProps = state =>{
  return {
    auth: state.auth
  }
}
const mapDispathToProps=(dispatch)=>{
  return {
    onSubmit : (data)=> dispatch(actions.auth(data))
  }
}

class Auth extends Component{
  state={
    authInfo:{
      email:{
        Type: 'input',
        config:{
          type:'text',
          placeholder:'email'
        },
        validationRule:{
          Required: true,
          minLength: 3,
          maxLength: 30,
          isEmail:true
        },
        touched: false,
        valid: true,
        value:'',
        ErrorMsg: null
      },
      password:{
        Type: 'password',
        config:{
          type:'password',
          placeholder:'password'
        },
        validationRule:{
          Required: true,
          minLength: 3,
        },
        touched: false,
        valid: true,
        value:'',
        ErrorMsg: null
       }
  }
}


checkValidity=(rule, value )=>{

  let isValid=true
  let ErrorMsg=[]
  if (rule.Required){
    isValid = value.trim() !='' && isValid
    if (value.trim() ==''){
      ErrorMsg.push('Data required')
    }

  }
  if (rule.isEmail){
    const pattern =/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g
    isValid = pattern.test(value) && isValid
    if (!pattern.test(value)){
      ErrorMsg.push('wrong format')
    }
  }
  if (rule.minLength){
    isValid = value.length>=rule.minLength && isValid
    if (value.length<rule.minLength){
      ErrorMsg.push('must be more than 3 digits')
    }
  }
  if (rule.maxLength){
    isValid = value.length<=rule.maxLength && isValid
    if (value.length>rule.maxLength){
      ErrorMsg.push('must be less than 30 digits')
    }

    }
    return {
       validProperty: isValid,
       msg: ErrorMsg
    }
  }

  SubmitHandler=()=>{
    const data={}
    for (let item in this.state.authInfo){
      data[item]=this.state.authInfo[item].value
    }
    this.props.onSubmit(data)
  }

  ChangeHandler=(event, item)=>{
       let copyOrder={...this.state.authInfo}
       copyOrder[item].value=event.target.value
       copyOrder[item].touched=true
       const result = this.checkValidity(copyOrder[item].validationRule, event.target.value)
       copyOrder[item].valid=result.validProperty
       copyOrder[item].ErrorMsg=result.msg
       this.setState({
         authInfo:copyOrder
       })
     }


  render(){

    let collection =[]
    for (let item in this.state.authInfo){
      collection.push(<Input key={item} error={this.state.ErrorMsg} Changed={(event)=>this.ChangeHandler(event, item)} infor={{...this.state.authInfo[item], id:item}}/>)
    }

    return (
      <div className={classes.Auth}>
      <form>
      <h2>hello</h2>
      {collection}
      <button onClick={this.SubmitHandler} type='button'>Submmit</button>
      </form>
      </div>
    )

  }
}


export default connect(mapStateToProps, mapDispathToProps)(Auth)
