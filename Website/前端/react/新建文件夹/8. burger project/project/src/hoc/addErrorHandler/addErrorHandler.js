import React, {Fragment, Component} from 'react';
import Modal from '../../components/UI/Modal/Modal'
import classes from './addErrorHandler.module.css'

//{...props}一定要传入包装组件自己的props
const  addErrorHandler=(WrappedComponent, axios)=>{
  return class extends Component{
    state={
      error: null
    }
    HiddError=()=>{
      this.setState({
        error: null
      })
    }
    componentDidMount(){
      this.reqInterceptor=axios.interceptors.request.use(request=>{
        return request
      }, error=>{
        this.setState({
          error:error.toString()
        })
        return Promise.reject(error)
      })

      this.resInterceptor=axios.interceptors.response.use(response=>{
        return response
      }, error=>{
        this.setState({
          error:error.toString()
        })
        return Promise.reject(error)
      })
    }

    componentWillUnmount(){                             //再不要的时候移除掉，避免内存泄漏
      console.log('will unmount', this.reqInterceptor, this.resInterceptor)
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor)
    }
    render(){
      return (
        <Fragment>
          <WrappedComponent {...this.props}/>
          <div className='erroMsg'>
          {this.state.error?
          <Modal
             showOrder={this.state.error}
             hide ={this.HiddError}
          ><div className={classes.Error}style={{zIndex: 500}}>{this.state.error}</div></Modal>:null}
          </div>
        </Fragment>
      )
    }

  }
}

export default addErrorHandler
