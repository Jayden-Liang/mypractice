
import * as actionType from '../actions.js'

const initialState={
  results: []
}

 const reducer =(state=initialState, action)=>{

   switch (action.type) {
    case actionType.STORECOUNTER:
        return {
          ...state,
          results: state.results.concat({id: new Date(), value:action.val})          //这里引用了counter,因为多个reducer最终会汇集成一个，所以会有counter
        }
    case actionType.DELETESTORE:
        // console.log(state.results[0].id, action.elID)
        const updatedArray = state.results.filter(result => result.id !== action.elID)
        console.log(updatedArray)
        return {
          ...state,
          results: updatedArray
        }
     default:
       return state;

   }

 }

 export default reducer
