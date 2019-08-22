import React from 'react';
import classes from './Burger.module.css'
import Ingredients from './BurgerIngredients/BurgerIngredients'

const burger = (props)=>{
  // Object.keys可以得到object中的keys组成的array
  const allIngres = Object.keys(props.ingres)
  let newdf= allIngres.map((item)=>{
    return [...Array(props.ingres[item])].map((_,i)=>{
      return <Ingredients type={item} key={item+i}/>
    })
  }).reduce((arr, el)=>{
    return arr.concat(el)
  },[])
  if (newdf.length===0){
    newdf='please add ingredients'
  }
  return (
    <div className={classes.Burger}>
    <Ingredients type={'Top'}/>
    {newdf}
    <Ingredients type={'Bottom'}/>
    </div>
  )
}

export default burger

//
