import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const CoursesDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            {
                details.map(d => <Details
                key={d.id}
                d={d}></Details>)
            }
        </div>
    );
};

export default CoursesDetails;