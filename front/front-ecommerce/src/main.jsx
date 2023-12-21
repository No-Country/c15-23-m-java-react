import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// import './index.css';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
