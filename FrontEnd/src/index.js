import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("9844f2bd88e5f80df7c3b0a87aea8c01")

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
