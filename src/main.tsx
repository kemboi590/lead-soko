import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import SuccessStories from './pages/success stories/SuccessStories';
import Hero from './pages/landing page/1.Hero';
import ScheduleCall from './pages/schedulecall/ScheduleCall';
import MoreNews from './pages/landing page/News/MoreNews';

// Define your routes here
const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />,
    errorElement: <Error />
  },
  {
    path: 'success-stories',
    element: <SuccessStories />,
    errorElement: <Error />
  },
  {
    path: 'schedule-call',
    element: <ScheduleCall />,
    errorElement: <Error />
  },
  {
    path: 'more-news',
    element: <MoreNews/>,
    errorElement: <Error />
  }


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);