import React from 'react';
import { FaFileDownload, FaStar, FaEye } from "react-icons/fa";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const DetailsOverall = ({ c }) => {

    const { author, details, image_url, rating, title, total_view } = c;
  
    return (
        <div>

            <div ref={ref} className="card card-compact w-[80%] mx-auto m-9 bg-base-100 shadow-xl">
                <div className='card-header border-2 rounded-lg flex justify-between items-center p-6'>
                    <div className='flex items-center'>
                        <div>
                            <img className='rounded-full mr-2' style={{ height: '60px' }} src={author.img} alt="" />
                        </div>
                        <div>
                            <p className='mb-0 text-xl'>{author.name}</p>
                            <p>{author.price}</p>
                        </div>
                    </div>
                    <div>
                        <Pdf targetRef={ref} filename="Courses.pdf">
                            {({ toPdf }) => <button onClick={toPdf}><FaFileDownload></FaFileDownload></button>}
                        </Pdf>

                    </div>
                </div>
                <figure><img className='rounded-lg' src={image_url} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p className='text-xl font-semibold'>{details}</p>
                </div>
                <div className='card-footer border-2 rounded-lg flex justify-between p-6'>
                    <div className='flex items-center mr-5'>
                        <FaStar className='text-warning mr-2'></FaStar>
                        {rating.number}
                    </div>
                    <div className='flex items-center mr-5'>
                        <FaEye className='mr-2'></FaEye>
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsOverall;