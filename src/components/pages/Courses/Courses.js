import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className=' block md:grid grid-cols-12 gap-4 m-5'>
            <div className='col-span-3 border-2 rounded-lg'>
                {
                    courses.map(course => <p className='border-2 p-6 m-6'
                        key={course.id}>
                            <Link className='link link-neutral' to=''>{course.name}</Link>
                        </p>)
                }
            </div>
            <div className='col-span-9 border-2 rounded-lg'>
                <h2 className='text-4xl font-bold text-center'>All Courses: {courses.length}</h2>
                <div className='block md:grid grid-cols-2'>
                    {
                        courses.map(course => <CourseCard
                            key={course.id}
                            course={course}></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;