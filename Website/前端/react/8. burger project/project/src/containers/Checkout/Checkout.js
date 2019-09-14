import React, {Component} from 'react';
// import Burger from '../../components/Burger/Burger'
// import classes from './Checkout.module.css'
// import {Link} from 'react-router-dom'
import ContactInfo from './ContactInfo/ContactInfo'
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {connect} from 'react-redux'

class Checkout extends Component{
  state={
    ingres: null,
    totalPrice:null
  }

  componentWillMount(){
    // console.log('checkout',this.props)
      this.setState({
        ingres:this.props.Ingredients,
        totalPrice: this.props.totalPrice
      })
    }

  

  cancel=()=>{
    this.props.history.goBack()
  }
  continue=()=>{
    this.props.history.replace('/checkout/userInfo')
  }
  render(){

    return (
      <div>
      <h5>checkout page{this.props.totalPrice}</h5>
        <CheckoutSummary cancel={this.cancel} continue={this.continue} ingres={this.state.ingres}/>
        <Route path="/checkout/userInfo"
        render={(props)=>(<ContactInfo ingres={this.state.ingres} price={this.state.totalPrice} {...props} />)} />

      </div>
    )
  }
}


const mapStateToProps=state=>{
  return {
    Ingredients: state.ingres,
    price: state.unitPrice,
    totalPrice: state.totalPrice
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
