import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

import store, { history } from './redux/store';
import Wrapper from './redux/wrapper';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Wrapper}>
        <IndexRoute component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'));
