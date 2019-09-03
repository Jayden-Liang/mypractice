import React, {Fragment, Component} from 'react';
import Backdrop from '../Backdrop/Backdrop'
// import classes from './Modal.module.css'

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.showOrder !== this.props.showOrder || nextProps.children !== this.props.children
  }
  // componentWillUpdate(){
  //   console.log('[Modal] will update')
  // }
  render(){
    return (
      <Fragment>
      <Backdrop hide={this.props.hide} showOrder={this.props.showOrder} />

          {this.props.children}


      </Fragment>
    )
  }

}

export default Modal
