import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyBNC0YvaY5ieAEdy5-02eZDggkKQChNsS0",
    authDomain: "website-f3b9d.firebaseapp.com",
    databaseURL: "https://website-f3b9d.firebaseio.com",
    projectId: "website-f3b9d",
    storageBucket: "website-f3b9d.appspot.com",
    messagingSenderId: "142909325166",
    appId: "1:142909325166:web:487d4e84482a15fd"
  };

  firebase.initializeApp(config);

ReactDOM.render(<Dashboard />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
