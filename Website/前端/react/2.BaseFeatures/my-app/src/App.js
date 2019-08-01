import React, { Component }from 'react';
// import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import appClasses from './App.module.css';

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
      {id:'dsdf', name: 'jayden', age: 26},
      {id:'dfsfsaf', name: 'alex', age: 27}
    ],
    otherState: 'some other value',
    renderPerson: false
  }

  nameChangedHandler = (event, id)=>{   //根据ID来改变name
    console.log(id)
     const x=this.state.person.findIndex(el => id === el.id)              //这里少写了=,导致bug
     console.log(x)
     let theOne={...this.state.person[x]}
     theOne.name=event.target.value
     console.log(theOne)
     let persons=[...this.state.person]
     persons[x]=theOne
     this.setState({
       person: persons
     })
  }

  toggleHandler =()=>{
     this.setState({
       renderPerson: !this.state.renderPerson
     })
  }

  deleteHandler =(index)=>{
    let arr =this.state.person
    arr.splice(index, 1)
    this.setState({
      person:arr
    })
  }


  render(){

    let persons=null;
    let btnClass='';
    if (this.state.renderPerson){
      persons=(
        <div>
        {this.state.person.map((p, index)=> {
          return <Person
               click={this.deleteHandler.bind(this, index)}
               name={p.name}
               age={p.age}
               key={p.id}
               id={p.id}
               change={(event)=>this.nameChangedHandler(event, p.id)}
           />
        })}
        </div>
      )
      btnClass=appClasses.Red

    }

    const classes=[]
    if (this.state.renderPerson){
      classes.push(appClasses.bold)
    }else{
      classes.push(appClasses.red)
    }
    return (
      <div className={appClasses.App}>
        <h4 className={classes.join(' ')}>Hello World</h4>
        <button className={btnClass} onClick={ this.toggleHandler }>switch Person</button>
        {persons}
      </div>
    )
  }
}


export default App;
