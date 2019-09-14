import React, {Component} from 'react';
import axios from '../../../axios'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import classes from './ContactInfo.module.css'

class ContactInfo extends Component{
  state={
      orderInfo:{
        name:{
          Type: 'input',
          config:{
            type:'text',
            placeholder:'your name'
          },
          validationRule:{
            Required: true,
            minLength: 3,
            maxLength:10
          },
          touched: false,
          valid: true,
          value:'',
          ErrorMsg: null
         },
        email:{
          Type: 'input',
          config:{
            type:'text',
            placeholder:'your email'
          },
          validationRule:{
            Required: true
          },
          touched: false,
          valid: true,
          value:'',
          ErrorMsg: null

        },
        street:{
          Type: 'input',
          config:{
            type:'text',
            placeholder:'street'
          },
          validationRule:{
            Required: true
          },
          touched: false,
          valid: true,
          value:'',
          ErrorMsg: null

        },
        postal:{
          Type: 'input',
          config:{
            type:'text',
            placeholder:'post code'
          },
          validationRule:{
            Required: true
          },
          touched: false,
          valid: true,
          value:'',
          ErrorMsg: null

        },
        country:{
          Type: 'input',
          config:{
            type:'text',
            placeholder:'your country'
          },
          value:'',
          ErrorMsg: null,
          touched: false,
          valid: true,
          validationRule:{
            Required: true
          }

        },
        delivery:{
          Type: 'select',
          config:{
            option:[
              {value:'fastest', displayValue:'Fastest'},
              {value:'cheapest', displayValue:'Cheapest'}
          ]
          },
          validationRule:{
            Required: true
          },
          touched: true,
          valid: true,
          value:'',
          ErrorMsg: null

        },
      },
      showSpinner: false,
      Orderable: false


  }
  checkButtonState=()=>{
    const validArr=[]
    for (let item in this.state.orderInfo){
      validArr.push(this.state.orderInfo[item].valid && this.state.orderInfo[item].touched)
    }
    console.log(validArr)
    if (!validArr.includes(false)){
      console.log('无误')
      this.setState({
        Orderable: true
      })
    }
    if (validArr.includes(false) && this.state.Orderable===true){
      this.setState({
        Orderable: false
      })
    }
  }

  orderHandler=(event)=>{
    event.preventDefault()
    this.setState({
      showSpinner: true
      // showOrder: false
    })
    const orders={
      ingredients:this.props.ingres,
      price: this.props.price,
      delivermethod:"fastest",
      customer:{
        name:this.state.orderInfo.name.value,
        address:{
          street:this.state.orderInfo.street.value,
          zipcode:this.state.orderInfo.postal.value
        },
        email:this.state.orderInfo.email.value,
        country:this.state.orderInfo.country.value
      }

    }

    axios.post('/', orders)
    .then(res=>{
      this.setState({
        showSpinner: false

      })

      console.log(res)
      this.props.history.push('/')
    })
    .catch(error=>{
      this.setState({
        showSpinner: false
      })
    })
  }

  setErrorMsg=(isValid, msg)=>{
    if (!isValid){
      return msg
  }
}

  checkValidity=(rule, value )=>{

    let isValid=true
    let ErrorMsg=null
    if (rule.Required){
      isValid = Boolean(value) && isValid
      ErrorMsg=this.setErrorMsg(Boolean(value), 'Data required') || ErrorMsg
    }
    if (rule.minLength){
      isValid = value.length>=rule.minLength && isValid
      ErrorMsg=this.setErrorMsg(value.length>=rule.minLength, 'Must be more than 3 digits') || ErrorMsg
      console.log(ErrorMsg)
    }
    if (rule.maxLength){
      isValid = value.length<=rule.maxLength && isValid
      ErrorMsg=this.setErrorMsg(value.length<=rule.maxLength, 'Must be less than 10 digits') || ErrorMsg

      }
      return {
         validProperty: isValid,
         msg: ErrorMsg
      }
    }



  ChangeHandler=(event, item)=>{
       let copyOrder={...this.state.orderInfo}
       copyOrder[item].value=event.target.value
       copyOrder[item].touched=true
       const result = this.checkValidity(copyOrder[item].validationRule, event.target.value)
       copyOrder[item].valid=result.validProperty
       copyOrder[item].ErrorMsg=result.msg
       this.setState({
         orderInfo:copyOrder
       })
       this.checkButtonState()

  }
  render(){
    let collection =[]
    for (let item in this.state.orderInfo){
      collection.push(<Input key={item} error={this.state.ErrorMsg} Changed={(event)=>this.ChangeHandler(event, item)} infor={{...this.state.orderInfo[item], id:item}}/>)
    }


    return(

      <div>
      {this.state.showSpinner ?<Spinner/>:null}

      <form className={classes.Form}>
      <h2>Please enter your info</h2>
          {collection}
          <button  disabled={!this.state.Orderable} onClick={this.orderHandler}>ORDER</button>
      </form>
      </div>


    )
  }
}

export default ContactInfo
