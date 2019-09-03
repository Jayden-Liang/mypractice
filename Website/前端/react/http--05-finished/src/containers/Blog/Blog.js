import React, { Component } from 'react';
// import axios from '../../axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Posts from '../Posts/Posts'
import asyncComponent from '../../hoc/asyncComponent'
import NewPost from '../NewPost/NewPost'
import './Blog.css';

const asyncNewPost=asyncComponent(()=>{
  return import('../NewPost/NewPost')
})

class Blog extends Component {
    state={
      authenticated: true
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }


    render () {

        return (
            <div>
                <section className='Header'>
                    <ul>
                      <li><NavLink to='/posts' exact activeClassName="my-active" activeStyle={{color:'#fa923f',textDecoration:'underline'}}>Home</NavLink></li>
                      <li><NavLink to={{
                        pathname:'/new-post',
                        hash:'#submit',
                        search: '?quick-submit=true'
                      }}>New Post</NavLink></li>
                    </ul>
                </section>

                {/*<Route path="/" exact render={()=> <h1>fuck you</h1>}/>
                <Route path="/" exact render={()=> <h1>fdfk you</h1>}/>*/}
                <Switch>
                { this.state.authenticated ?<Route path='/new-post' component={NewPost}/>:null }
                <Route path='/posts'  component={Posts} />
                <Route render={()=> <h1>404, Not Found</h1>} />


                {/*
                  <Route path='/'  component={Posts} />
                  <Redirect from="/" to="/posts" />*/}
                </Switch>

            </div>
        );
    }
}

export default Blog;
