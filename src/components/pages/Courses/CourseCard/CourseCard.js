import React from 'react';
import { Link } from 'react-router-dom';
import CoursesDetails from '../CoursesDetails/CoursesDetails';

const CourseCard = ({ course, id }) => {
    const { name, image } = course;
    const handelDetails = () =>{
        <CoursesDetails></CoursesDetails>
    }

    return (
        <div className="card w-100 bg-base-100 shadow-xl m-5">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                <Link to={`/coursesDetails/${id}`}><button onClick={handelDetails}  className="btn">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;