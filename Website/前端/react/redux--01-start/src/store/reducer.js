
import * as actionType from './actions.js'

const initialState={
  counter: 1,
  results: []
}

 const reducer =(state=initialState, action)=>{
 //   if (action.type ==='INCREMENT'){             //if 语句太多啦，可以用switch
 //     return {
 //       counter: state.counter+1
 //     }
 //   }
 //   if (action.type ==='DECREMENT'){
 //     return {
 //       counter: state.counter-1
 //     }
 //   }
 //   if (action.type ==='ADD'){
 //     return {
 //       counter: state.counter+action.val
 //     }
 //   }
   switch (action.type) {
     case actionType.INCREMENT:
         // const newState = Object.assign({}, state);
         // newState.counter = state.counter +1
         // return newState
         return {
           ...state,                 //如果不加spread operator，state里面的其他值如 results就会丢失掉
           counter: state.counter+1
         }
    case actionType.DECREMENT:
        return {
          ...state,
          counter: state.counter-1
        }
    case actionType.ADD:
        return {
          ...state,
          counter: state.counter+action.val
       }
    case actionType.SUBTRACT:
       return {
         ...state,
          counter: state.counter-action.val
       }
    case actionType.STORECOUNTER:
        return {
          ...state,
          results: state.results.concat({id: new Date(), value:state.counter})          //用concat方法不会改变原来的array里面的值，这里不要用push
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

 //
 }

 export default reducer
