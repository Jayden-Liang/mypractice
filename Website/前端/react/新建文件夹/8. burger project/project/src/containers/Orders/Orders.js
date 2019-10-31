import React, {Component} from 'react';
import Order from '../../components/Order/Order/Order'
import axios from 'axios';
import {connect} from 'react-redux'
import * as orderAction from '../../store/actions/order'

const mapStateToProps=state=>{
  return{
     order: state.orders.order
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
     fetchOrder: ()=> dispatch(orderAction.fetchorder())
  }
}

class Orders extends Component{
  // state={
  //   order: null
  //
  // }

  componentWillMount(){
    this.props.fetchOrder()
    // axios.get('http://hit-the-road.cc/ingre/').then(result=>{
    //   console.log()
    //   this.setState({
    //     order: result.data
    //   })
    // })
  }



  render(){
    // console.log(this.props.order)
    const orders =[]
    if (this.props.order.length>0){
      this.props.order.map((item, index)=>{
        orders.push(
          <Order
          ingres={item.ingredients}
          price={item.price?item.price.toFixed(2):null}
          from={item.customer.name}
          key={index}

          />
        )

      })
    }


    return orders
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
