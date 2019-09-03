import React, { Component }from 'react';
import classes from './BurgerIngredients.module.css'
import PropTypes from "prop-types"

class Ingredients extends Component{
  render(){
    let ingre=null;
    switch (this.props.type) {
      case ('Top'):
        ingre=<div className={classes.Top}></div>;
        break;
      case ('Bottom'):
        ingre =<div className={classes.Bottom}></div>;
        break
      case ('meat'):
        ingre =<div className={classes.meat}></div>;
        break
      case ('salad'):
        ingre =<div className={classes.salad}></div>;
        break
      case ('cheese'):
        ingre =<div className={classes.cheese}></div>;
        break
      default:
        ingre =null;
    }

    return(
      ingre
    )
  }

}

Ingredients.propTypes={
  type: PropTypes.string.isRequired
}

export default Ingredients
