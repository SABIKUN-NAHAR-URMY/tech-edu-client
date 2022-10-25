import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import FAQ from '../pages/FAQ/FAQ';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Register from '../pages/Register/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])