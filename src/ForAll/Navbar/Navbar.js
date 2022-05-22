import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth)

    const manu = <>
        <li><Link to='/' className='font-semibold text-cyan-500'>HOME</Link></li>
        <li><Link to='/dashboard' className='font-semibold text-cyan-500'>DASHBOARD</Link></li>
        <li><Link to='/blogs' className='font-semibold text-cyan-500'>BLOG</Link></li>
        <li><Link to='/about' className='font-semibold text-cyan-500'>ABOUT ME</Link></li>
    </>
    return (
        <div className="navbar mx-auto lg:px-[180px] bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {manu}
                    </ul>
                </div>
                <p className="font-mono normal-case text-xl font-bold text-cyan-800">PC HEART</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {manu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <p onClick={() => signOut(auth)} className="btn btn-outline font-bold mr-[12px]" to='/logIn'>LOG OUT</p> : <>
                        <Link className="btn btn-outline font-bold mr-[12px]" to='/logIn'>LOG IN</Link>
                        <Link className="btn btn-outline font-bold" to='/signup'>SIGN UP</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;