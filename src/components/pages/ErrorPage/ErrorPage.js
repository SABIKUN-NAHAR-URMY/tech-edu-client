import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header></Header>
            <div className='border-2 rounded-lg w-[60%] mx-auto m-10 p-10 text-center'>
                <h2 className='text-2xl font-semibold'>Ops!An Error Ocurred!!..</h2>
                <br />
                <div>
                    <p className='text-xl font-semibold'>{error.statusText}</p>
                    <p className='text-lg'>{error.status}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;