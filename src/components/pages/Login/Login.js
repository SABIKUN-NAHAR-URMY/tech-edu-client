import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../images/login.png';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold pb-5">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label pt-5">
                                <p>Don't have an account? <Link className="link link-neutral" to='/register'> Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Login</button>
                        </div>
                    </form>
                    <div className="divider px-8">OR</div>
                <button className="btn btn-outline my-6 mx-8"><FaGoogle className='mr-2'></FaGoogle>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;