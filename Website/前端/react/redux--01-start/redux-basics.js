
//也可以用react的import，这里是用node的方式引入
const redux = require('redux');
const createStore = redux.createStore;

const initialState ={
  star: 0
}
//Reducer        update state的唯一方法
const rootReducer =(state=initialState, action )=>{    //接受两个参数，第一个是current state
  if (action.type ==='INC_STAR'){
    return {
      ...state,                      //state的值不能改变
      star:state.star+1
    }
  }
  if (action.type ==='ADD_STAR'){
    return {
      ...state,
      star:state.star+action.value
    }
  }
  return state         //返回更新过的state, 这里返回的是old state
}
//store
const store = createStore(rootReducer);

console.log(store.getState())

//Subscription    使用Subscription不需要自己手动获取getState，需放在dispatch action前
store.subscribe(()=>{         //当state更新，也就是action到达reducer时候，传入subscribe的函数参数被调用
  console.log('[Subscription]', store.getState())
})
//Dispatching Action

store.dispatch({type: 'INC_STAR'})   //参数object必须包含type, 常规是全部大写
store.dispatch({type: 'ADD_STAR',value: 10})   //可以添加其他想要的参数

console.log(store.getState())
