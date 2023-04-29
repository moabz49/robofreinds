import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/app';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// super() --> is used when extending a { component } within a constructor() it is used to communicate with the PARENT.
// {} --> destructure because has no 'default' export.  We need to use all robots in the object array.
//One thing you will notice with React is that because we always have to return 
//just one element from a component, we end up wrapping a lot of our components in <div></div>.
// STATE is the an object that describes your application. Exmaple getting 'robots' and adding a 'SearchField on the card.'
// Props is the passing down of properties from parents to child and can not be changed. e.g robots and CardList.
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
