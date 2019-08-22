import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
// import classes from './BurgerBuilder.module.css'
import BurgerControl from '../../components/BurgerControl/BurgerControl'

class Builder extends Component{
  state={
    Ingredients:{
      meat: 0,
      cheese:0,
      salad:0
    },
    price:{
      meat: 23.3,
      cheese:12.1,
      salad:5.9
    },
    totalPrice: 0,            // meat:23 , cheese 12 salad:5
    purchasable: false
  }

  checkPurchasable = (ingres)=>{
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
  addHandler=(event, type)=>{
    const ingres = {...this.state.Ingredients}
    ingres[type]+=1
    const newPrice=this.state.totalPrice + this.state.price[type]
    this.setState({
      Ingredients: ingres,
      totalPrice: newPrice,
    })
    this.checkPurchasable(ingres)

  }
  deleteHandler =(event, type)=>{
    const ingres = {...this.state.Ingredients}
    if (ingres[type]>=1){
      ingres[type]-=1
      const newPrice=this.state.totalPrice - this.state.price[type]
      this.setState({
        Ingredients: ingres,
        totalPrice: newPrice,

      })
      this.checkPurchasable(ingres)
    }
  }





  render(){
    const ingre={...this.state.Ingredients}
    const newIngres=Object.keys(ingre)
    newIngres.map(item=>{
      ingre[item] = ingre[item] === 0
    })


    return(
      <Fragment>
      <Burger  ingres={this.state.Ingredients}></Burger>
      <BurgerControl
      Price={this.state.totalPrice}
      deleteClick={this.deleteHandler}
      click={this.addHandler}
      ingres={ingre}
      purchasable={this.state.purchasable}
      />
      </Fragment>
    )
  }
}

export default Builder
