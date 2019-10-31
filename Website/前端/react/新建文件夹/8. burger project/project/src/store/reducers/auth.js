


const initialState={
   loading: false
}

const reducer =(state=initialState, action)=>{
  switch(action.type){
    case "AUTH_START":
      return {...state, loading: true}
    case "AUTH_SUCCESS":
    console.log('success')
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }


}

export default reducer
