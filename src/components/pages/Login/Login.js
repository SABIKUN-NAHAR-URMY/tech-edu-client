import React, { useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../images/login.png';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handelLogIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handelLogIn} className="card-body">
                        <h1 className="text-5xl font-bold pb-5">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label pt-5">

                                <p>Don't have an account? <Link className="link link-neutral" to='/register'> Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Login</button>
                        </div>
                        <div className="text-red-700">
                            {error}
                        </div>
                    </Form>
                    <div className="divider px-8">OR</div>
                    <button className="btn btn-outline my-6 mx-8"><FaGoogle className='mr-2'></FaGoogle>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;