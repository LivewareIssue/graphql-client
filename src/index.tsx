import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
);