import { Desklamp, Container } from './desklamp';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Login from './components/Login';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';

ReactDOM.render((
  <Container>
    <Home name="not-home" />
    <Posts>
      <Login />
      <Signup />
    </Posts>
    <Login>
      <Posts />
    </ Login>
    <Signup />
  </Container>
), document.getElementById('app'));

const initState = {
  username: '',
  posts: ['post', 'post2'],
  userInfo: {},
};

Desklamp.defaultRoute("/home");

const funcs = {
  login: (username, password) => {
    $.post('http://localhost:3000/login', { username, password })
    .done((userData) => {
      $.get('http://localhost:3000/posts', (postsData) => {
        Desklamp.changeView('posts', {
          username: userData.username,
          posts: postsData,
          userInfo: userData.info,
        });
      });
    })
    .fail((err) => {
      return err;
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
  getPosts: () => {
    $.get('http://localhost:3000/posts', (postsData) => {
      Desklamp.updateState({
        posts: postsData,
      });
    });
  },
};

Desklamp.on(initState, funcs, Nav);
