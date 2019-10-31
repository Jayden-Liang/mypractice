import axios from 'axios'

export const authStart=()=>{
  return {
    type: "AUTH_START"
  };
}

export const authSuccess=()=>{
  return {
    type: "AUTH_SUCCESS"
  };
}


export const authFailed=()=>{
  return {
    type: "AUTH_FAILED"
  };
}

export const auth=(data)=>{
  return (dispatch)=>{
    dispatch(authStart())
    axios.post('http://hit-the-road.cc/burger/auth',data)
    .then(result=>{
      console.log(result)
      dispatch(authSuccess)
    })
    .catch(error=>{
      console.log(error)
    })
  }
}
