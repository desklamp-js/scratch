import userReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const newRouter = routerMiddleware(browserHistory);
const middleware = applyMiddleware(newRouter);

const store = createStore(userReducer, { username: 'initName' }, middleware);


export const history = syncHistoryWithStore(browserHistory, store);
export default store;
