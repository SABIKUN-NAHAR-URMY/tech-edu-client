import React from 'react';

const CheckOut = () => {
    
    return (
        <div>
            <div className="card card-compact w-[80%] mx-auto m-9 bg-base-100 shadow-xl">
                <div className='card-header border-2 rounded-lg flex justify-between items-center p-6'>
                    <div className='flex items-center'>
                        <div>
                            <img className='rounded-full mr-2' style={{ height: '60px' }} src="" alt="" />
                        </div>
                        <div>
                            <p className='mb-0 text-xl'>name</p>
                            <p>price</p>
                        </div>
                    </div>
                    
                </div>
                <figure><img className='rounded-lg' src='' alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">title</h2>
                    <p className='text-xl font-semibold'>details</p>
                   
                </div>
                
            </div>
        </div>
    );
};

export default CheckOut;