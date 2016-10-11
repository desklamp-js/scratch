import { Desklamp, Container } from 'desklamp';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Login from './components/Login';
import Posts from './components/Posts';
import Nav from './components/Nav';
import Home from './components/Home';


ReactDOM.render((
  <Container>
    <Home />
    <Login name="new-user-page" />
    <Posts />
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
};

Desklamp.on(initState, funcs, Nav);
