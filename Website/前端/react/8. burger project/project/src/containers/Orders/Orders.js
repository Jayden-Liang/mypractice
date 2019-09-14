import React, {Component} from 'react';
import Order from '../../components/Order/Order/Order'
import axios from 'axios';


class Orders extends Component{
  state={
    order: null

  }

  componentDidMount(){
    axios.get('http://hit-the-road.cc/ingre/').then(result=>{
      console.log()
      this.setState({
        order: result.data
      })
    })
  }
  render(){
    console.log(this.state)
    const orders =[]
    if (this.state.order){
      this.state.order.map((item, index)=>{
        console.log(item)
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
    console.log(orders)

    return orders
  }
}

export default Orders
