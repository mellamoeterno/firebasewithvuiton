import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/firestore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//dependencies and libraries



const firebaseConfig = {
  apiKey: "AIzaSyAhqm_7d21ebW4aeIrAnQn5ND7yzjezhIg",
  authDomain: "project-1-78c72.firebaseapp.com",
  projectId: "project-1-78c72",
  storageBucket: "project-1-78c72.appspot.com",
  messagingSenderId: "63337891973",
  appId: "1:63337891973:web:416fd0e450b06af7c581ec",
  measurementId: "G-KB0XVN3NMH"
};

firebase.initializeApp(firebaseConfig)

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//event logs: recommended events: sign_up, shares, tutorial_begin, others.
//Log event

analytics.logEvent('my_event', {
  my_param: 'param_value',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();