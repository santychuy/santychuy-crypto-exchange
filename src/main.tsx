import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import 'normalize.css';

import './styles/index.css';
import App from './App';
import { store } from './store';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="bottom-right" />
      <App />
    </Provider>
  </React.StrictMode>
);
