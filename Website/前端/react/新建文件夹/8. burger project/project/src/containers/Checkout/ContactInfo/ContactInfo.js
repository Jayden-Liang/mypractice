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
            Required: true,
            isEmail: true
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
            Required: true,
            minLength: 3
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
            Required: true,
            minLength: 3
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
            Required: true,
            minLength: 3
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
        ErrorMsg.push('must be less than 20 digits')
      }

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
