import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FaUserAlt } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';
import { FaToggleOff } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const [theme, setTheme] = useState('light-theme');

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        }
        else {
            setTheme('dark-theme')
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])



    return (
        <div className="navbar bg-base-100 font-bold text-stone-600 text-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between" to='/courses'>
                                Courses
                            </Link>
                        </li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <img className='w-16' src={logo} alt="" />
                <Link className="btn btn-ghost normal-case text-stone-600 font-bold text-3xl" to='/'>TechEdu</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/courses'>
                            Courses
                        </Link>
                    </li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>

                </ul>
            </div>
            <div className="navbar-end">

                <Link className='mr-4' to=''>
                    {
                        user?.uid ?
                            <>
                                <span>{user?.displayName}</span>
                                <button onClick={handelLogOut} className='px-2'>LogOut</button>
                            </>
                            :
                            <>
                                <Link className='mr-4' to='/login'>Login</Link>
                                <Link className='mr-4' to='/register'>Register</Link>
                            </>
                    }

                </Link>
                <Link className='mr-4' to=''>
                    {
                        user?.photoURL ?
                            <img className='rounded-full h-10' src={user.photoURL} alt="" />
                            :
                            <FaUserAlt></FaUserAlt>
                    }
                </Link>


                <label className="swap swap-rotate">

                    <button onClick={() => toggleTheme()}><FaToggleOff></FaToggleOff></button>

                </label>
            </div>
        </div>
    );
};

export default Header;