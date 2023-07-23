import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { csrfFetch } from './store/csrf';
import * as sessionActions from './store/session';
import { restoreSession } from './store/csrf';
import { ModalProvider } from './context/Modal';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function initializeApp() {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ModalProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ModalProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

restoreSession().then(initializeApp);