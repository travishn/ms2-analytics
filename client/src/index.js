import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root.jsx';
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
