import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/userProfile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data.user)
            })
    }, [])
    return (
        <div className='p-[30px]'>
            <div class="card w-full shadow-xl border-4 border-primary bg-slate-100">
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL} alt="IMG" class="rounded-full border-4 border-primary" />

                </figure>
                <h2 class=" text-3xl text-center">My Profile</h2>
                <div class="card-body ">

                    <p className='font-semibold'>Name : {user?.displayName}</p>
                    <p className='font-semibold'>Email : {user?.email}</p>
                    {
                        userInfo?.Education ? <p className='font-semibold'>Education : {userInfo.Education}</p> : ''
                    }
                    {
                        userInfo?.location ? <p className='font-semibold'>location : {userInfo.location}</p> : ''
                    }
                    {
                        userInfo?.PhoneNumber ? <p className='font-semibold'>Phone Number : {userInfo.PhoneNumber}</p> : ''
                    }
                    {
                        userInfo?.LinkedInprofilelink ? <p className='font-semibold'>LinkedIn profile link : <a href={userInfo.LinkedInprofilelink}>Profile Link</a></p> : ''
                    }

                    <div class="card-actions justify-end">
                        <Link to='/dashboard/update'><button class="btn btn-primary">EDIT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;