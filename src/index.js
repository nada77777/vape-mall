import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ItemInfo from './pages/item_info/item_info';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/itemInfo/:itemId',
    element: <ItemInfo />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
