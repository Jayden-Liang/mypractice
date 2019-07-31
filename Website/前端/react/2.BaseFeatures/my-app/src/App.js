import React, { Component }from 'react';
// import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

// const App = props => {
//   const [personState, setPersonState] = useState({
//     person:[
//       {name: 'jayden', age: 26},
//       {name: 'alice', age: 32}
//     ],
//     otherState: 'some other value'
//   })
//
//   const switchNameHandler =()=>{
//       setPersonState({
//           person:[
//               {name: 'hello', age: 26},
//               {name: 'alice', age: 40}
//             ]
//           })
//         }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Newly react app</h1>
//       </header>
//       <button onClick={switchNameHandler }>switch name </button>
//       < Person name='jayden' age='26' />
//       < Person
//          name ={personState.person[0].name}
//          age='45'>{personState.otherState}
//          click={switchNameHandler}
//       </Person>
//
//     </div>
//   );
//
// }
class App extends Component{
  state = {
    person:[
      {name: 'jayden', age: 26},
      {name: 'alice', age: 32}
    ],
    otherState: 'some other value',
    renderPerson: false
  }


  switchNameHandler =(newName)=>{
      this.setState({
        person:[
          {name: newName, age: 26},
          {name: 'alice', age: 40}
        ]
      })
    }
  nameChangedHandler = (event)=>{
    this.setState({
      person:[
        {name: 'Max ', age: 26},
        {name: event.target.value, age: 40}
      ]
    })
  }

  toggleHandler =()=>{
     this.setState({
       renderPerson: !this.state.renderPerson
     })
  }


  render(){
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      borderRadius:' 12px',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className='App'>
        <button style={style} onClick={ this.toggleHandler }>switch name </button>
        { this.state.renderPerson ?
        <div>
        <Person
           name={this.state.person[0].name}
           age={this.state.person[0].age}
           click={this.switchNameHandler.bind(this, 'jerry')}
          />
        <Person
            click={()=> this.switchNameHandler('pixel') }
            name={this.state.person[1].name}
            change={this.nameChangedHandler}
            age={this.state.person[1].age}>
            <h1>{ this.state.otherState}</h1>
        </Person>
        </div> : null
        }
      </div>
    )
  }
}


export default App;
