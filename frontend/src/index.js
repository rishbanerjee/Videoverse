import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { Login } from './modules/users/components/Login';
import { Register } from './modules/users/components/register';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);