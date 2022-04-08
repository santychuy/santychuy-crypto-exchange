import React from 'react';
import ReactDOM from 'react-dom';
import { MantineProvider } from '@mantine/core';

import App from './App';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
