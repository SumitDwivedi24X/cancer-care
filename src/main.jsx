import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { PrivyProvider } from '@privy-io/react-auth';

const root = createRoot(document.getElementById('root'));
root.render(
  <PrivyProvider
    appId="clzpm88fq0203skuidqbhm4ng"
    config={{
      // Customize Privy's appearance in your app
      appearance: {
        theme: 'light',
      },
    }}
  >
    <Router>
      <App />
    </Router>
  </PrivyProvider>
);
