import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile lg:w-[1170px] mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet />
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mx-[120px]">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                        <li><Link to='/dashboard'>My Profile</Link></li>
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/addReviews'>Add A Review</Link></li>
                        <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                        <li><Link to='/dashboard/addaProducts'>Add A Product</Link></li>
                        <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;