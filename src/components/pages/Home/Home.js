import React from 'react';
import homeImg from '../../images/home1.jpg';

const Home = () => {
    return (
        <div>
            <section className='block md:grid grid-cols-2 border-2 rounded-lg m-20 p-8'>
                <div>
                    <img className='border-2 rounded-2xl' src={homeImg} alt="" />
                </div>
                <div className='p-5'>
                    <h2 className='text-4xl font-bold text-center'>
                        Start learning and give a new way to your career.
                    </h2>
                    <p className='text-2xl font-semibold text-center pt-10'>
                        In any country, technical education plays a vital role in human resource development. It produces a skilled workforce, augments productivity and helps improve the quality of life of the people. Producing qualified and capable human resources in this age of science and technology is indispensable.
                    </p>
                </div>
            </section>

            <section className='block md:grid grid-cols-2 border-2 rounded-lg m-20 p-8'>
                <div>

                </div>
                <div>
                    <h3>We will help you learn what you are passionates about</h3>
                    <div>
                        <h3>Maintain your own speed.</h3>
                        <p>You may locate all the appropriate courses for you at your own speed. You may sign up here and learn all the methods you desire.</p>
                        <h3>Experts in the field will teach you.</h3>
                        <p>
                        When you pursue these courses, our industry specialists will advise you at every stage. Additionally, if you run into any problems while doing this, they will direct you to contact.
                        </p>
                       
                    </div>


                </div>
            </section>

        </div>
    );
};

export default Home;