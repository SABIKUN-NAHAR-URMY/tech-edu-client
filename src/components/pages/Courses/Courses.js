import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className=' block md:grid grid-cols-12 gap-4'>
            <div className='col-span-6 border-2'>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
                <h1>this is details</h1>
            </div>
            <div className='col-span-6 border-2'>
                <h2 className='text-2xl font-bold text-center'>All courses: {allCourses.length}</h2>
                <div className='block md:grid grid-cols-2'>
                    {
                        allCourses.map(course => <CourseCard
                            key={course.id}
                            course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;