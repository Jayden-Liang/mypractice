

const initialState={
  detail: []
}

const reducer =(state=initialState, action)=>{
  switch (action.type){
    case 'ADDPERSON':
       const person ={
         id: Math.random(),
         name: action.info.name,
         age: action.info.age
       }
        return {
          ...state,
          detail: state.detail.concat(person)
    }
    case 'DELETEPERSON':
       return{
         ...state,
         detail: state.detail.filter(item=>item.id !== action.val)
       }
}
return state
}
export default reducer
