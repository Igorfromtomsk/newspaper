import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import library from './fontAwesome';
import {checkNewDocumentStylesUpdate} from './utils/newDocumentStyles';

checkNewDocumentStylesUpdate();

library.add();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more AboutPage service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
