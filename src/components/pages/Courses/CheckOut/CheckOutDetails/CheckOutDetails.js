import React from 'react';

const CheckOutDetails = ({ ci }) => {
    const {name, courses } = ci;
    return (
        <div>
            <div className='text-2xl font-bold text-center bg-slate-800 p-8 text-slate-50'>{name}</div>
            {
                courses.map(course => {
                    return <div key={course.id} className='m-7 border-2 p-3 text-xl font-semibold rounded-lg'>
                        <p>Course Name: {course.title}</p>
                        <p>Author Name: {course.author.name}</p>
                        <p>Price: {course.author.price}</p>
                    </div>
                }
                )
            }
        </div>
    );
};

export default CheckOutDetails;