import React, {Component} from 'react';
// import Burger from '../../components/Burger/Burger'
// import classes from './Checkout.module.css'
// import {Link} from 'react-router-dom'
import ContactInfo from './ContactInfo/ContactInfo'
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

class Checkout extends Component{
  // state={
  //   ingres: null,
  //   totalPrice:null
  // }
  //
  // componentWillMount(){
  //   // console.log('checkout',this.props)
  //     this.setState({
  //       ingres:this.props.Ingredients,
  //       totalPrice: this.props.totalPrice
  //     })
  //   }



  cancel=()=>{
    this.props.history.goBack()
  }
  continue=()=>{
    this.props.history.replace('/checkout/userInfo')
  }
  render(){
    let checkout=null
    if (this.props.totalPrice){
      checkout=<div>
        <CheckoutSummary cancel={this.cancel} continue={this.continue} ingres={this.props.Ingredients}/>
        <Route path="/checkout/userInfo"
        render={(props)=>(<ContactInfo ingres={this.props.Ingredients} price={this.props.totalPrice} {...props} />)} />

      </div>
    }else{
      checkout=<Redirect to="/" />
    }

    return checkout
  }
}


const mapStateToProps=state=>{
  return {
    Ingredients: state.bugerbuilder.ingres,
    price: state.bugerbuilder.unitPrice,
    totalPrice: state.bugerbuilder.totalPrice
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
