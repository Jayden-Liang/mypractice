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
    }
  }
  addHandler=(event, type)=>{
    const ingres = {...this.state.Ingredients}
    ingres[type]+=1
    this.setState({
      Ingredients: ingres
    })

  }
  render(){
    console.log(this.state.Ingredients['meat'])
    return(
      <Fragment>
      <Burger  ingres={this.state.Ingredients}></Burger>
      <BurgerControl click={this.addHandler} ingres={this.state.Ingredients}/>
      </Fragment>
    )
  }
}

export default Builder
