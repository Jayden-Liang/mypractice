import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(<BrowserRouter>
  <div>
    <App />

    <Switch>

    <Route path='/users' exact component={Users} />
    <Route path='/courses'  component={Courses} />
    <Redirect from="/all-courses" to="/courses" ></Redirect>
    <Route render={()=> <h1>404, Not Found</h1>} />

    </Switch>


  </div>
  </BrowserRouter> , document.getElementById('root'));
registerServiceWorker();
