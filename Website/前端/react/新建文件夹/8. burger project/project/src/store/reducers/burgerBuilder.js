const initialState={
   ingres:{
     meat: 0,
     cheese:0,
     salad:0
   },
   unitPrice:{
     meat: 23.3,
     cheese:12.1,
     salad:5.9
   },
   totalPrice: 0

}



const reducer =(state=initialState, action)=>{
switch (action.type) {
  case "ADDINGRE":
    const ingres = {...state.ingres}
    ingres[action.ingreType]+=1
    const newPrice=state.totalPrice + state.unitPrice[action.ingreType]
    action.func(ingres)                  //这里传入的是burgerbuilder 的checkPurchasable函数，更新local state的purchasable
    return {
      ...state,
      totalPrice: newPrice,
      ingres: ingres
    }

  case "DELETEINGRE":
    const ingresdel = {...state.ingres}
    ingresdel[action.ingreType]-=1
    action.func(ingresdel)                  //这里传入的是burgerbuilder 的checkPurchasable函数，更新local state的purchasable
    return {
      ...state,
      totalPrice: state.totalPrice - state.unitPrice[action.ingreType],
      ingres: ingresdel
    }



  default:
    return state
}
 return state
}


export default reducer

// checkoutHandler=()=>{
//   let arr=[]
//
//   for (let x in this.state.Ingredients){
//     arr.push(encodeURIComponent(x)+'='+encodeURIComponent(this.state.Ingredients[x]))       //encodeURIComponent用来编码
//   }
//   arr.push(`price=${this.state.totalPrice}`)
//   const IngreParam='?'+arr.join('&')
//
//   this.props.history.push(
//     {pathname:'/checkout',
//     search: IngreParam,
//   }
//   )
//
// }
