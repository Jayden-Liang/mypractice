import axios from 'axios';




export const getorder=(result)=>{
  return {
    type: 'FETCHORDER',
    data: result
  }
}

export const fetchorder=()=>{
  return dispatch=>{
    console.log('data')
    axios.get("http://hit-the-road.cc/ingre/")
    .then(result=>{
      dispatch(getorder(result.data))
    })
  }
}



//如果获取数据失败，就dispatch，不同的action，然后reducer中返回不同的state
