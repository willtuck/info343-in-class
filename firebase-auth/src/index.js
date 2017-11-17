import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyB7s90DQgB1S1xyBoKLG73nkrcld0MIPGI",
    authDomain: "info343-demo-e8991.firebaseapp.com",
    databaseURL: "https://info343-demo-e8991.firebaseio.com",
    projectId: "info343-demo-e8991",
    storageBucket: "info343-demo-e8991.appspot.com",
    messagingSenderId: "533347737997"
  };
  firebase.initializeApp(config);
  
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
