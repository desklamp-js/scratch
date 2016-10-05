import React from 'react';
import ReactDOM from 'react-dom';
import { Desklamp, funcs } from '../deployment/desklamp';
import Login from './components/Login';
import Profile from './components/Profile';
import Messages from './components/Messages';

ReactDOM.render((
  <Desklamp>
    <Login />
    <Profile />
    <Messages />
  </Desklamp>
), document.getElementById('container'));

console.log(funcs.showState());
