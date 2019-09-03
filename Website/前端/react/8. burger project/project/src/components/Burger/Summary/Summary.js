import React,{Component} from 'react';
import classes from './Summary.module.css'

class OrderSummary extends Component {
  // componentWillUpdate(){
  //   console.log('[OrderSummary] will update')
  // }
  render(){
    const arr = Object.keys(this.props.ingres).map(item=>{
      if (this.props.ingres[item]>0){
        return (
          (<ul key={item}>
             <li>{item}</li>
             <li>{this.props.price[item].toFixed(2)}</li>
             <li>{this.props.ingres[item]}</li>
             <li>{(this.props.price[item]*this.props.ingres['meat']).toFixed(2)}</li>
          </ul>)
        )
      }else{
        return null
      }
    })
    return (

      <div className={classes.order} style={{
        transform: this.props.showOrder ? "translateY(50%)": "translateY(-200vh)"

      }}>

        <h2>商品详情</h2>
        <div>
        <ul>
           <li>商品</li>
           <li>单价</li>
           <li>数量</li>
           <li>总价</li>
        </ul>
        {arr}
        <hr />
        <ul>
           <li></li>
           <li></li>
           <li></li>
           <li>{this.props.totalPrice.toFixed(2)}</li>
        </ul>
        <div>
          <button onClick={this.props.checkout} className={classes.summaryButton} type="button">Checkout</button>
          <button onClick={this.props.hide} className={classes.summaryButton} type="button">Cancel</button>
        </div>
        </div>
      </div>
    )
  }

}


export default OrderSummary
