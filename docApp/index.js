import { Desklamp, Container } from './desklamp';
import React from 'react';
import ReactDOM from 'react-dom';

import QuickStart from './components/QuickStart';
import GettingStarted from './components/GettingStarted';
import Nav from './components/Nav';
import Home from './components/Home';

require('./stylesheets/main.scss');

ReactDOM.render((
  <Container>
    <Home />
    <QuickStart name="quick-start" />
    <GettingStarted name="getting-started" />
  </Container>
), document.getElementById('app'));

const initState = {
  quickStart: {},
  GettingStarted: {},
};

Desklamp.defaultRoute('/home');

const funcs = {};

Desklamp.on(initState, funcs, Nav);
