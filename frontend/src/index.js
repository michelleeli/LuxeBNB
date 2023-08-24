import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { restoreSession } from './store/csrf';
import { ModalProvider } from './context/Modal';

const store = configureStore();

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