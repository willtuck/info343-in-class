import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
    apiKey: "AIzaSyBqE8QVV1DtzIcy-yGKX2Jv9Q9Ptu_wEbs",
    authDomain: "tasks343-cacc6.firebaseapp.com",
    databaseURL: "https://tasks343-cacc6.firebaseio.com",
    projectId: "tasks343-cacc6",
    storageBucket: "tasks343-cacc6.appspot.com",
    messagingSenderId: "17999868142"
  };
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
  .then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  })
  .catch(err => console.error(err));


