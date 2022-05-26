import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Spinner from '../../ForAll/Spinner';

const Dashboard = () => {

    const [user, setuser] = useState([])
    const [logUser, Loading] = useAuthState(auth)

    useEffect(() => {
        fetch(`https://murmuring-basin-10907.herokuapp.com/users/${logUser?.email}`)
            .then(res => res.json())
            .then(data => setuser(data))
    }, [])

    if (Loading) {
        return <Spinner></Spinner>
    }
    // ewrusdnei
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
                    {
                        user?.role === 'admin' ? <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                            <li><Link to='/dashboard'>My Profile</Link></li>
                            <li><Link to='/dashboard/manageAllOrders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/addaProducts'>Add A Product</Link></li>
                            <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        </ul> : <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                            <ul className="menu p-4 overflow-y-auto w-48 bg-base-200 text-base-content">
                                <li><Link to='/dashboard'>My Profile</Link></li>
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                                <li><Link to='/dashboard/addReviews'>Add Review</Link></li>
                            </ul>
                        </ul>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;