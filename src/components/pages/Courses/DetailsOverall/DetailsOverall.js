import React from 'react';

const DetailsOverall = ({ c }) => {
    console.log(c);
    const { author, details, image_url, rating, title, total_view } = c;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className='card-header border-2 flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='rounded-full mr-2' style={{ height: '60px' }} src={author.img} alt="" />
                    </div>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            <div className='card-footer border-2'>
                <h2>This is footer</h2>
            </div>
        </div>
    );
};

export default DetailsOverall;