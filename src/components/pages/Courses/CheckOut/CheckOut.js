import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutDetails from './CheckOutDetails/CheckOutDetails';

const CheckOut = () => {
    const courseItems = useLoaderData();
    return (
        <div className='border-2 rounded-lg bg-slate-300 p-10 m-10 mx-auto w-[40%]'>
           <h1 className='text-4xl text-center my-3'>Welcome,<br /> Thank You For Enrollment</h1>
           {
            courseItems.map(ci => <CheckOutDetails
            key={ci.id}
            ci = {ci}></CheckOutDetails>)
           }
        </div>
    );
};

export default CheckOut;