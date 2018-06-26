import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { searchRobots } from 'reducers';
import { createStore } from 'redux';
import 'tachyons';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
