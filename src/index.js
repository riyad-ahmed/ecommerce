import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Login from './component/login';
import './index.css';
import Header from './component/header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    <Header />
  </React.StrictMode>
);

