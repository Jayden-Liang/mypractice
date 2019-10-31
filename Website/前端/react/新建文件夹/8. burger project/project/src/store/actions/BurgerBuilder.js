export const addhandler=(func, ingretype)=>{
  return {
    type: 'ADDINGRE',
    func: func,
    ingreType: ingretype
  }
}



export const removehandler=(func, ingretype)=>{
  return {
    type: 'DELETEINGRE',
    func: func,
    ingreType: ingretype
  }
}
