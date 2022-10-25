import React from 'react';

const CourseCard = ({ course }) => {
    const { name, image } = course;
    return (
        <div className="card w-80 bg-base-100 shadow-xl m-5">
            <figure><img className='' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;