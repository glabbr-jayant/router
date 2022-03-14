import React, { Component } from 'react';
import Navbar from './views/navbar.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './views/home.js';
import About from './views/about.js';
import Contact from './views/contact.js';
import Post from './views/post.js';
import Login from './views/login'


class App extends Component{
  render(){
    return(<BrowserRouter>
        <div >
        <Navbar/>
        <br/>
        <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/about' component={ About }/>
        <Route exact path='/contact' component={ Contact }/>
        <Route exact path='/login' component={Login}/>
        <Route path='/:post_id' component={ Post } />
        </Switch>
        </div>
        </BrowserRouter>
    );
  }
}

export default App