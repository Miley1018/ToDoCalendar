import React,{Component} from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import {BrowserRouter,Route} from 'react-router-dom';

import Todo from './components/todo'
import PostsShow from './components/postsShow'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Route exact path='/todo' component={Todo}/>
    <Route path='/posts' component={PostsShow}/>
</div>
</BrowserRouter>
</Provider>
  , document.getElementsByClassName('container')[0]);
