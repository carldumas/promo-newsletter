// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import App from './components/App';
import { CurrentUserProvider } from './components/CurrentUserContext';
//Styles
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>,
  rootElement
);
