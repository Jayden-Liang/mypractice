import React, { Component } from 'react';


const asyncComponent =(importComponent)=>{
  return class extends Component{
    state={
      component:null
    }

    componentDidMount(){
      importComponent()               //需要是一个函数
      .then(cmp=>{
        this.setState({component: cmp.default})
      })
    }



    render(){
      const C =this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
}


export default asyncComponent;
