import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice 'client' import for React 18
import App from './App';

// Get the root element where you want to mount the app
const rootElement = document.getElementById('root');

// Use ReactDOM.createRoot() to render the app in React 18
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
