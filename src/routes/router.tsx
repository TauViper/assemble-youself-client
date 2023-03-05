import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { Home } from 'pages/Home';
import { LogIn } from 'pages/LogIn';
import { SignUp } from 'pages/SignUp';
import { Course } from 'pages/Course';

import { publicRoutePaths } from './constants';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: publicRoutePaths.home,
        element: <Home />
      },
      {
        path: publicRoutePaths.logIn,
        element: <LogIn />
      },
      {
        path: publicRoutePaths.signUp,
        element: <SignUp />
      },
      {
        path: publicRoutePaths.course,
        element: <Course />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
