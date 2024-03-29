import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import Navbar from './Navigation/Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import Counter from './components/counter';
// import Movies from './components/movies';
import 'font-awesome/css/font-awesome.css';
// import Counters from './components/counters';


console.log(process.env);
console.log("SUPERMAN", process.env.REACT_APP_NAME);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <Navbar/> */}
    <App />
    {/* <Counter /> */}
    {/* <Movies /> */}
    {/* <Counters /> */}
  </BrowserRouter>
  // </React.StrictMode>
);

// const element = <h1>Hello World!!</h1>;
// ReactDOM.render(element, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
