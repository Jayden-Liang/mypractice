import React, {Component, Fragment} from 'react';
import Burger from '../../components/Burger/Burger'
// import classes from './BurgerBuilder.module.css'
import BurgerControl from '../../components/BurgerControl/BurgerControl'
import OrderSummary from '../../components/Burger/Summary/Summary'
import Modal from '../../components/UI/Modal/Modal'
import Sidebar from '../../components/Layout/Sidebar/Sidebar'
import Layout from '../../components/Layout/Layout'
import axios from '../../axios'
import Spinner from '../../components/UI/Spinner/Spinner'
import addErrorHandler from '../../hoc/addErrorHandler/addErrorHandler'

class Builder extends Component{
  state={
    Ingredients:{
      meat: 0,
      cheese:0,
      salad:0
    },
    price:{
      meat: 23.3,
      cheese:12.1,
      salad:5.9
    },
    totalPrice: 0,            // meat:23 , cheese 12 salad:5
    purchasable: false,
    showOrder: false,
    showSidebar: false,
    showSpinner: false
  }

  checkPurchasable = (ingres)=>{
    const arr = Object.keys(ingres).map(
      item=>{
        return ingres[item]
      }
    )
    const sum=arr.reduce((x,y)=>{
      return x+y
    })
    this.setState({
      purchasable: sum>0
    })
  }
  addHandler=(event, type)=>{
    const ingres = {...this.state.Ingredients}
    ingres[type]+=1
    const newPrice=this.state.totalPrice + this.state.price[type]
    this.setState({
      Ingredients: ingres,
      totalPrice: newPrice,
    })
    this.checkPurchasable(ingres)

  }
  deleteHandler =(event, type)=>{
    const ingres = {...this.state.Ingredients}
    if (ingres[type]>=1){
      ingres[type]-=1
      const newPrice=this.state.totalPrice - this.state.price[type]
      this.setState({
        Ingredients: ingres,
        totalPrice: newPrice,

      })
      this.checkPurchasable(ingres)
    }
  }

  goCheckout=()=>{
    this.setState({
      showOrder: true
    })
  }
  backdrop=()=>{
    this.setState({
      showOrder: false,
      showSpinner:false
    })
  }
  hideSidebar=()=>{
    this.setState({
      showSidebar: false
    })
  }

  SidebarToggler =()=>{
    this.setState((prevState)=>{
      return {
        showSidebar: !prevState.showSidebar
      }
    })
  }


  checkoutHandler=()=>{
    this.setState({
      showSpinner: true
      // showOrder: false
    })
    const orders={
      ingredients:this.state.Ingredients,
      price: this.state.totalPrice,
      customer:{
        name:'jayden',
        address:{
          street:'fff',
          zipcode:'000'
        },
        email:'dfqq.com'
      },
      delivermethod:"fastest"
    }
    axios.post('/df', orders)
    .then(res=>{
      this.setState({
        showSpinner: false,
        showOrder: false
      })
      console.log(res)
    })
    .catch(error=>{
      this.setState({
        showSpinner: false,
        showOrder: false
      })
    })
  }

  render(){
    const ingre={...this.state.Ingredients}
    const newIngres=Object.keys(ingre)
    newIngres.map(item=>{
      ingre[item] = ingre[item] === 0
      return null
    })

   let order =<OrderSummary
                showOrder={this.state.showOrder}
                ingres={this.state.Ingredients}
                price={this.state.price}
                totalPrice={this.state.totalPrice}
                hide={this.backdrop}
                checkout={this.checkoutHandler}
              />

    if (this.state.showSpinner){
      order = <Spinner  showSpinner={this.state.showSpinner}/>
    }


    return(
      <Fragment>
      <Layout toggler={this.SidebarToggler}></Layout>

      <Modal hide={this.hideSidebar} showOrder={this.state.showSidebar}>
         <Sidebar
           showEl={this.state.showSidebar}
         />
      </Modal>
      <Modal hide={this.backdrop} showOrder={this.state.showOrder} showSpinner={this.state.showSpinner}>
        {order}
      </Modal>
      <Burger  ingres={this.state.Ingredients}></Burger>
      <BurgerControl
      Price={this.state.totalPrice}
      deleteClick={this.deleteHandler}
      click={this.addHandler}
      ingres={ingre}
      purchasable={this.state.purchasable}
      goCheckout={this.goCheckout}
      />
      </Fragment>
    )
  }
}

export default addErrorHandler(Builder, axios)
