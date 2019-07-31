import React, { Component }from 'react';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user:['jayden','alice','sam']
  }

  userHandler =() =>{
    this.setState({
      user:['jayden','alice','jerry']
    })
  }

  inputHandler =(event) =>{
    this.setState({
      user: ['jayden','alice',event.target.value]
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <UserInput username={this.state.user[this.state.user.length-1]} change={this.inputHandler } />
          <UserOutput username={this.state.user[0]} click={this.userHandler }/>
          <UserOutput username={this.state.user[2]}/>
        </header>
      </div>
    );
  }
}

export default App;
