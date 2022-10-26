import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const details = useLoaderData();
    return (
        <div>
            {details.map(d => <p>{d.length}</p>)}
        </div>
    );
};

export default CoursesDetails;