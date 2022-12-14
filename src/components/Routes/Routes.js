import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';
import CheckOut from '../pages/Courses/CheckOut/CheckOut';
import Courses from '../pages/Courses/Courses';
import CoursesDetails from '../pages/Courses/CoursesDetails/CoursesDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FAQ from '../pages/FAQ/FAQ';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Main from '../pages/Main/Main';
import Register from '../pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://tech-edu-server-psi.vercel.app/courses')
            },
            {
                path:'/coursesDetails/:id',
                element: <CoursesDetails></CoursesDetails>,
                loader: ({params}) => fetch(`https://tech-edu-server-psi.vercel.app/courses/${params.id}`)
            },
            {
                path:'/checkOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://tech-edu-server-psi.vercel.app/courses/${params.id}`)
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