import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { searchRobots, requestRobots } from 'reducers';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import 'tachyons';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
