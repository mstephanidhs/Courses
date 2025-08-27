import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './error-boundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1>Error At App Level</h1>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
