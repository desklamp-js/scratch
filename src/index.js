import React from 'react';
import ReactDOM from 'react-dom';
import { Desklamp, funcs } from './components/Desklamp';
import Login from './components/Login';
import Profile from './components/Profile';


console.log(Desklamp)
console.log(funcs);

ReactDOM.render((
  <Desklamp>
    <Login />
    <Profile />
  </Desklamp>
), document.getElementById('container'));

