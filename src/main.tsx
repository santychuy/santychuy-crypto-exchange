import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import { Provider } from 'react-redux';

import './styles/index.css';
import App from './App';
import { store } from './store';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
