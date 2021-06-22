import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD4ESpxTeRryF6MWAEdGVej7wndPaEk_eM",
  authDomain: "cart-d7ab0.firebaseapp.com",
  projectId: "cart-d7ab0",
  storageBucket: "cart-d7ab0.appspot.com",
  messagingSenderId: "593545321677",
  appId: "1:593545321677:web:d3d86fa6cbc5e8f9ea5d84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


