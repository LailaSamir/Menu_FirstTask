import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

//import Product from './Product';
//import ShopingCart from './Components/shoppingCart';
import App from './components/app';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


ReactDOM.render( <BrowserRouter>
                        <App/> 
                 </BrowserRouter> ,document.querySelector("#root"));

