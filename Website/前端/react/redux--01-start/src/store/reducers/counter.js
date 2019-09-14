
import * as actionType from '../actions'

const initialState={
  counter: 1
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

     default:
       return state;

   }

 //
 }

 export default reducer
