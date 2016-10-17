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
    <Home>
      <Signup name="not-signup">
        <Posts name="not-posts" />
      </Signup>
      <Nav />
    </Home>
    <Login name="new-user-page" />
    <Posts />
  </Container>
), document.getElementById('app'));

const initState = {
  username: '',
  posts: ['post', 'post2'],
  userInfo: {},
};

const funcs = {
  login: (e) => {
    e.preventDefault();
    console.log('e',e);
    const post = 'post3';
    const newPosts = [...Desklamp.showState().posts, post];
    // or [].concat(state.posts), then push post into it.
    // then call
    Desklamp.updateState({ posts: newPosts });
    // $.post('http://localhost:3000/login', { username, password })
    // .done((userData) => {
    //   $.get('http://localhost:3000/posts', (postsData) => {
    //     Desklamp.changeView('posts', {
    //       username: userData.username,
    //       posts: postsData,
    //       userInfo: userData.info,
    //     });
    //   });
    // })
    // .fail((err) => {
    //   return err;
    // });
  },
};

Desklamp.on(initState, funcs, Nav);
