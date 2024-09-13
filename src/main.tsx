// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './examples/AddMore';
import './css/style.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}
