
export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADD='ADD';
export const SUBTRACT='SUBTRACT';
export const STORECOUNTER='STORECOUNTER';
export const DELETESTORE='DELETESTORE';

//Action Creator 会创造action的object
 //驼峰命名, 可以接收参数
export const increment =()=>{
  return {
    type: INCREMENT
  }
}

export const add =(val)=>{
  return {
    type: ADD,
    val: val

  }
}

export const storeCounter =(val)=>{
  setTimeout(()=>{




  },3000)
  return {
    type: STORECOUNTER,
    val: val

  }
}
