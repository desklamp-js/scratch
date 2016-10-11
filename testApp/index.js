import { Desklamp, Container } from 'desklamp';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import Nav from './components/Nav';

ReactDOM.render((
  <Container>
    <Home name="not-home" />
    <Login />
    <Signup />
    <Posts locked="true" redir="home" />
    <CreatePost locked="true" redir="home" />
  </Container>
), document.getElementById('app'));

const initState = {
  username: '',
  posts: [],
  userInfo: {},
};

const funcs = {
  login: (username, password) => {
    $.post('http://localhost:3000/login', { username, password })
    .done((data) => {
      console.log('login data', data);
      $.get('http://localhost:3000/posts', (data) => {
        console.log('getting posts', data);
        Desklamp.changeView('posts', { posts: data });
      });
    })
    .fail((err) => {
      console.log('Error on login post req', err);
    });
  },
  signup: (username, password) => {
    $.post('http://localhost:3000/signup', { username, password })
    .done((data) => {
      console.log('signup data', data);
      $.get('http://localhost:3000/posts', (data) => {
        console.log('getting posts', data);
        Desklamp.changeView('posts', { posts: data });
      });
    })
    .fail((err) => {
      console.log('Error on login post req', err);
    });
  },
  createPost: (post) => {
    $.post('http://localhost:3000/newPost', { post }, (data) => {
      console.log('Successful post creation!');
      Desklamp.changeView('posts', { posts: data.posts });
    });
  },
};

Desklamp.on(initState, funcs, Nav);
