import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();