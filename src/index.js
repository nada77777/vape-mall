import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main_page/main_page';
import ItemInfo from './pages/item_info/item_info';
import CartPage from './pages/cart_page/cart_page';
import SearchResult from './pages/search_result/search_result';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/iteminfo',
        element: <ItemInfo />,
      },
      {
        path: '/searchResult',
        element: <SearchResult />,
      },
      {
        path: '/cartpage',
        element: <CartPage />,
      }
    ],
  },


]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
