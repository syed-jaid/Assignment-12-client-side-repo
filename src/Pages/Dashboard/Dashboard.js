import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../ForAll/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile lg:w-[1170px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h1 className='text-4xl p-[30px]'>DashBoard</h1>
                    <Outlet />
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard'>Add A Review</Link></li>
                        <li><Link to='/dashboard'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard'>Add A Product</Link></li>
                        <li><Link to='/dashboard'>Make Admin</Link></li>
                        <li><Link to='/dashboard'>Manage Products</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;