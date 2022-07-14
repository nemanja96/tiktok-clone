import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Friends from './friends.js';
import Inbox from './inbox.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="friends" element={<Friends />} />
      <Route path="inbox" element={<Inbox />} />
    </Routes>
  </BrowserRouter>
);