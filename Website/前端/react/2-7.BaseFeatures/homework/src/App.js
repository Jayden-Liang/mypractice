import React, { Component }from 'react';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'
import Validation from './Validation/Validation'
import Char from './Validation/Char'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user:['jayden','alice','sam'],
    renderhomeWork2: false,
    renderhomeWork3: true,
    myText: null
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

  changeTextHandler=(event)=>{                           //第三课
     const myText=event.target.value
     this.setState({
       myText: myText
     })
  }
  delText=(event)=>{                                       //第三课
    const textValue=event.target.innerText
    const arr =this.state.myText.split('')
    const index = arr.findIndex(el =>el==textValue)
    arr.splice(index,1)
    this.setState({
      myText: arr.join('')
    })

  }

  render(){
    //第二课作业
    let homeWork2=null;
    if (this.state.renderhomeWork2){
      homeWork2 =(
        <div>
        <UserInput username={this.state.user[this.state.user.length-1]} change={this.inputHandler } />
        <UserOutput username={this.state.user[0]} click={this.userHandler }/>
        <UserOutput username={this.state.user[2]}/>
    </div>)
    }
    //第三课作业
    let homeWork3=null;
    if (this.state.renderhomeWork3){
      homeWork3 =(
        <div>
           <input onChange={(event)=>this.changeTextHandler(event)} type='text' value={this.state.myText}/>
           { this.state.myText ?
             <p>the length is {this.state.myText.length}</p> :null
           }
           <Validation textLength={ this.state.myText ? this.state.myText.length :0 }/>
           { this.state.myText ?
             this.state.myText.split('').map((el, index) =>{
               return <Char
                   piece={el}
                   key={index}
                   click={(event)=>this.delText(event)}
                   />
             }) : null
           }
        </div>

      )
    }



    return (
      <div className="App">
        <header className="App-header">
          {homeWork2}
          {homeWork3}
        </header>
      </div>
    );
  }
}

export default App;
