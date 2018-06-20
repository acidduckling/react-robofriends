import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import registerServiceWorker from  './registerServiceWorker';
import 'tachyons';
React.createElement()
ReactDOM.render(<Hello greeting={'React ' + 'React Ninja'} />, document.getElementById('root'));
registerServiceWorker();