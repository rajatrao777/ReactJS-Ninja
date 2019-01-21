import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Provider } from "react-redux";
import store from './store';
// import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

ReactDOM.render(
<Provider store = {store}>
{/* <LoginPage/> */}
<SignUpPage/>
</Provider>,

 document.getElementById('root'));
 