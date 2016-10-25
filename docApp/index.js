import { Desklamp, Container } from 'desklamp';
import React from 'react';
import ReactDOM from 'react-dom';

import QuickStart from './components/QuickStart';
import CreateRoutes from './components/CreateRoutes';
import Nav from './components/Nav';
import Home from './components/Home';
import BuiltInComponents from './components/BuiltInComponents';
import BuiltInFunctions from './components/BuiltInFunctions';
import Extras from './components/Extras';
import InitState from './components/InitState';
import CustomNav from './components/CustomNav';
import Appinit from './components/Appinit';

require('./stylesheets/main.scss');

ReactDOM.render((
  <Container>
    <Home />
    <QuickStart name="quick-start" />
    <BuiltInFunctions />
    <BuiltInComponents />
    <CreateRoutes />
    <Extras />
    <InitState />
    <CustomNav />
    <Appinit />
  </Container>
), document.getElementById('app'));

const initState = {
  quickStart: { history: ['/'], route: '/', i: 0 },
  GettingStarted: {},
};

Desklamp.defaultRoute('/home');

const funcs = {};

funcs.arrowClick = function (e) {
  const oldState = Desklamp.showState();
  const oldStart = oldState.quickStart;
  if (e.target.className === 'arrow') {
    if (oldStart.history[oldStart.i + 1]) {
      oldStart.route = oldStart.history[oldStart.i + 1];
      oldStart.i++;
    }
  } else if (e.target.className === 'left-arrow arrow') {
    if (oldStart.history[oldStart.i - 1]) {
      oldStart.route = oldStart.history[oldStart.i - 1];
      oldStart.i--;
    }
  }
  Desklamp.updateState({ oldStart });
};

funcs.console = function () {
  console.log(this.state.views);
};

funcs.anchorCLick = function (e) {
  const oldState = Desklamp.showState();
  const oldStart = oldState.quickStart;
  oldStart.history.push(`/${e.target.innerHTML}`);
  oldStart.route = `/${e.target.innerHTML}`;
  oldStart.i++;
  Desklamp.updateState({ oldStart });
};

Desklamp.on(initState, funcs, Nav);
