import React from 'react';
import DetailsOverall from '../DetailsOverall/DetailsOverall';

const Details = ({ d }) => {

    const { name, courses } = d;

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>{name}</h2>
            <div>
                {
                    courses.map((c,idx) => <DetailsOverall
                    key={idx}
                    c = {c}></DetailsOverall>)
                }
            </div>
        </div>
    );
};

export default Details;