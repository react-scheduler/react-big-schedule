import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from './Basic';
import '../css/style.css';

createRoot(document.getElementById('app')).render(<Example />);
