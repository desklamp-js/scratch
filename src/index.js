import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Desklamp } from '../deployment/desklamp';
import Login from './components/Login';
import Profile from './components/Profile';
import Messages from './components/Messages';

ReactDOM.render((
  <Container>
    
  </Container>

), document.getElementById('container'));

console.log(window.location)


Desklamp.updateState({username: 'MichaelK'})
