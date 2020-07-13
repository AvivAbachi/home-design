import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import './assets/slick.css';
import './assets/slick-theme.scss';
import App from './App';
import StoreProvider from './services/StoreContext';
import * as serviceWorker from './serviceWorker';
const baseRoute = window.location.hostname === 'avivabachi.github.io' ? '/shop-web' : '';

ReactDOM.render(
   <StoreProvider>
      <Router basename={baseRoute}>
         <App />
      </Router>
   </StoreProvider>,
   document.getElementById('root')
);

serviceWorker.register();
