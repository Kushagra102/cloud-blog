import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBcIWTxAaOeF1JqPtkIYGK6fR1Irdp8i0Q",
  authDomain: "cloud-blog-7ae6a.firebaseapp.com",
  projectId: "cloud-blog-7ae6a",
  storageBucket: "cloud-blog-7ae6a.appspot.com",
  messagingSenderId: "535130294182",
  appId: "1:535130294182:web:af3661493134f85bd03167",
  measurementId: "G-LZBQ0CPP0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


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
