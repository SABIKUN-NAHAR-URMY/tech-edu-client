import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../images/register.png';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const Register = () => {
    const {createUser , providerLogin} = useContext(AuthContext);

    const handelRegister = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset('');
        })
        .catch(error => console.error(error))
    }

    const handelLogin = () => {
        providerLogin(provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={registerImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelRegister} className="card-body">
                        <h1 className="text-5xl font-bold pb-5">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photourl' type="text" placeholder="photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label pt-5">
                                <p>Already have an account?? <Link className="link link-neutral" to='/login'> Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Register</button>
                        </div>
                    </form>
                    <div className="divider px-8">OR</div>
                    <button onClick={handelLogin} className="btn btn-outline my-6 mx-8"><FaGoogle className='mr-2'></FaGoogle>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;