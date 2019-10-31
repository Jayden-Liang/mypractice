import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { BrowserRouter } from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Sidebar from './components/Layout/Sidebar/Sidebar'
import Modal from './components/UI/Modal/Modal'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'

class App extends Component {

  state={
    showSidebar: false
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
  render(){

    return (
      <BrowserRouter>
      <div className="App">
       <Layout toggler={this.SidebarToggler}></Layout>
       <Modal hide={this.hideSidebar} showOrder={this.state.showSidebar}>
          <Sidebar
            showEl={this.state.showSidebar}
          />
       </Modal>
         <Switch>
            <Route path='/checkout'  component={Checkout} />
            <Route path='/' exact  component={BurgerBuilder} />
            <Route path='/orders' exact  component={Orders} />
            <Route path='/auth' exact component={Auth} />



         </Switch>
      </div>
       </BrowserRouter>
    );
  }

}

export default App;
