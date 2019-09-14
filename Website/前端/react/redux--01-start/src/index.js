import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import personReducer from './store/reducers/person'

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
  person:personReducer
});

const logger = store =>{
  return (next)=>{
    return action =>{
      console.log('[Middleware] dispatcging', action)
      const result = next(action)
      console.log('[Middleware] next state', store.getState())
      return result
    }
  }
}


const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store= createStore(rootReducer, composeEnhansers(applyMiddleware(logger, thunk)));   //可以传入多个类似logger的中间件
//reducer 一般存在需要处理的文件之中，

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
