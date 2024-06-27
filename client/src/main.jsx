import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const lastVisitedRoute = sessionStorage.getItem('lastVisitedRoute') || '/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter initialEntries={[lastVisitedRoute]}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
