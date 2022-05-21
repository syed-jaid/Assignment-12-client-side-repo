import React from 'react';

const Navbar = () => {
    const manu = <>
        <li><a className='font-semibold text-cyan-500'>HOME</a></li>
        <li><a className='font-semibold text-cyan-500'>DASHBOARD</a></li>
        <li><a className='font-semibold text-cyan-500'>BLOG</a></li>
        <li><a className='font-semibold text-cyan-500'>ABOUT ME</a></li>
    </>
    return (
        <div className="navbar mx-auto lg:px-[180px]">
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
                <p className="btn btn-outline font-bold" href='/'>LOG IN</p>
            </div>
        </div>
    );
};

export default Navbar;