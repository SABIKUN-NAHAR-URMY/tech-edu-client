import React from 'react';
import DetailsOverall from '../DetailsOverall/DetailsOverall';

const Details = ({ d }) => {

    const { name, courses } = d;

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>{name}</h2>
            <div className=''>
                {
                    courses.map((c) => <DetailsOverall
                    key={c.courseId}
                    c = {c}></DetailsOverall>)
                }
            </div>
        </div>
    );
};

export default Details;