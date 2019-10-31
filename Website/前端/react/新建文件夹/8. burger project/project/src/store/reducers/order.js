const initialState={
  order:[]
}


const reducer =(state=initialState, action)=>{
  switch (action.type) {
    case "FETCHORDER":
        console.log('reducer here', action.data)
        return{
          ...state,
          order:state.order.concat(action.data)
        }

      default:
        return state

  }
}

export default reducer
