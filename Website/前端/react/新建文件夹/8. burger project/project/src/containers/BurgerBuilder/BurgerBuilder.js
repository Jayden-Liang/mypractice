import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
// import classes from './BurgerBuilder.module.css'
import BurgerControl from '../../components/BurgerControl/BurgerControl'
import OrderSummary from '../../components/Burger/Summary/Summary'
import Modal from '../../components/UI/Modal/Modal'
// import Layout from '../../components/Layout/Layout'
import axios from '../../axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import addErrorHandler from '../../hoc/addErrorHandler/addErrorHandler'
import {connect} from 'react-redux'
import * as BurgerBuilderActions from '../../store/actions/index'


const mapStateToProps=state=>{
  return {
    Ingredients: state.bugerbuilder.ingres,
    price: state.bugerbuilder.unitPrice,
    totalPrice: state.bugerbuilder.totalPrice
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
     addHandler: (func, ingretype)=> dispatch(BurgerBuilderActions.addhandler(func, ingretype)),
     deleteHandler: (func, ingretype)=> dispatch(BurgerBuilderActions.removehandler(func, ingretype)),

  }
}
class Builder extends Component{
  state={
    // Ingredients:{
    //   meat: 0,
    //   cheese:0,
    //   salad:0
    // },
    // price:{
    //   meat: 23.3,
    //   cheese:12.1,
    //   salad:5.9
    // },
    totalPrice: 0,            // meat:23 , cheese 12 salad:5
    purchasable: false,
    showOrder: false,
    showSpinner: false
  }

  // componentDidMount(){
  //   console.log('i mounted')
  // }

  checkPurchasable = (ingres)=>{
    console.log('purchasable', ingres)
    const arr = Object.keys(ingres).map(
      item=>{
        return ingres[item]
      }
    )
    const sum=arr.reduce((x,y)=>{
      return x+y
    })
    this.setState({
      purchasable: sum>0
    })
  }



  goCheckout=()=>{
    this.setState({
      showOrder: true
    })
  }
  backdrop=()=>{
    this.setState({
      showOrder: false,
      showSpinner:false
    })
  }



  checkoutHandler=()=>{
    this.props.history.push('/checkout')

  }

  render(){
    const ingre={...this.props.Ingredients}
    const newIngres=Object.keys(ingre)
    newIngres.map(item=>{
      ingre[item] = ingre[item] === 0
      return null
    })

   let order =<OrderSummary
                showOrder={this.state.showOrder}
                ingres={this.props.Ingredients}
                price={this.props.price}
                totalPrice={this.props.totalPrice}
                hide={this.backdrop}
                checkout={this.checkoutHandler}
              />

    if (this.state.showSpinner){
      order = <Spinner  showSpinner={this.state.showSpinner}/>
    }


    return(
      <Fragment>


      <Modal hide={this.backdrop} showOrder={this.state.showOrder} showSpinner={this.state.showSpinner}>
        {order}
      </Modal>
      <Burger  ingres={this.props.Ingredients}></Burger>
      <BurgerControl
      Price={this.props.totalPrice}
      deleteClick={this.props.deleteHandler}
      click={this.props.addHandler}
      checkPurchasable={this.checkPurchasable}
      ingres={ingre}
      purchasable={this.state.purchasable}
      goCheckout={this.goCheckout}
      />
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(addErrorHandler(Builder, axios))
