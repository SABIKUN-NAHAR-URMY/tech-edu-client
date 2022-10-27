import React from 'react';
import { Link } from 'react-router-dom';
import DetailsOverall from '../DetailsOverall/DetailsOverall';
import { FaChessKing } from "react-icons/fa";
import CheckOut from '../CheckOut/CheckOut';

const Details = ({ d }) => {

    const { id, name, courses } = d;

    const handelPremiumAccess = () =>{
        <CheckOut></CheckOut>
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>{name}</h2>
            <div className='border-2 rounded-lg py-20 m-20'>
                {
                    courses.map((c) => <DetailsOverall
                    key={c.courseId}
                    c = {c}></DetailsOverall>)
                }
                <div className="card-actions justify-center">
                    <Link to={`/checkOut/${id}`}><button onClick={handelPremiumAccess} className="btn px-20"><FaChessKing className='text-warning mr-4'></FaChessKing>Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Details;