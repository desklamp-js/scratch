import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function username(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return Object.assign({}, state, { username: action.username });

    default:
      return state;
  }
}

function password(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_PASSWORD':
      return Object.assign({}, state, { username: action.password });

    default:
      return state;
  }
}

const userReducer = combineReducers({ username, password, routing: routerReducer });

export default userReducer;
