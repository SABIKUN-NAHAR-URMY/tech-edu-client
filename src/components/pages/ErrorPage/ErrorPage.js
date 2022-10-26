import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h2 className='text-2xl font-semibold mt-28'>Ops!An Error Ocurred!!..</h2>
            <br />
            <div>
                <p className='text-xl font-semibold'>{error.statusText}</p>
                <p className='text-lg'>{error.status}</p>
            </div>
        </div>
    );
};

export default ErrorPage;