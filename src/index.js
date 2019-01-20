import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from './store';
import ContactPage from './ContactPage';

ReactDOM.render(
<Provider store = {store}>
<ContactPage/>
</Provider>,

 document.getElementById('root'));