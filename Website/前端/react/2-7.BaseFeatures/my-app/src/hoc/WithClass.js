import React from 'react'

const WithClass = (WrappedComponent, className)=>{       //WrappedComponent可以是任何,但是首字母必须大写,根据需要传入其他参数,如className
  return props =>(
    <div className={className}>
       <WrappedComponent {...props} />
    </div>
  )

}

export default WithClass
