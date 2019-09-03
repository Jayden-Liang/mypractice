import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {Link} from 'react-router-dom'

import './App.css'

class App extends Component {
  render () {
    return (

      <div className="App">

        <header>
           <ul>
             <li><Link to={'/users'}>Users</Link></li>
             <li><Link to={'/courses'}>Courses</Link></li>
           </ul>
        </header>



      </div>

    );
  }
}

export default App;
