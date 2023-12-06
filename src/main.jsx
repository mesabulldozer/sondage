import React from 'react';
import ReactDOM from 'react-dom/client';


import './App.css'
import Login from './composants/login/login';
import Logout from './composants/logout/Logout';
import ListTeacher from './composants/pages/ListTeacher/ListTeacher';
import InfraSurvey from './composants/pages/InfraSurvey/InfraSurvey';
import TeacherSurvey from './composants/pages/teacherSurvey/teacherSurvey';
import HomePage from './composants/pages/home/homePage';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import LoginAdmin from './Admin/pages/loginAdmin/loginAdmin';

const router = createBrowserRouter([
    {
      path :'/',
      element: <App/>,
      children: [
        {
          path : '/infraSurvey',
          element : <InfraSurvey/>
        },
    
        {
          path : '/teacherSurvey',
          element : <TeacherSurvey/>
        },

        {
          path : '/homePage',
          element : <HomePage/>
        }

      ]},

      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/logout',
        element : <Logout/>
      },
      {
        path : '/admin',
        element : <LoginAdmin/>
      },

    
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
