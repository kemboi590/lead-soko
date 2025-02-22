import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import App from './App';

// Define your routes here
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'navbar',
        element: <Navbar />,
      },
      // Add other routes here
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>


    <RouterProvider router={router} />


  </React.StrictMode>
);