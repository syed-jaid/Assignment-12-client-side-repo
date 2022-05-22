
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='p-[30px]'>
            <div class="card w-full shadow-xl border-4 border-primary bg-slate-100">
                <figure class="px-10 pt-10">
                    <img src={user?.photoURL} alt="Shoes" class="rounded-full border-4 border-primary" />

                </figure>
                <h2 class=" text-3xl text-center">My Profile</h2>
                <div class="card-body ">

                    <p className='font-semibold'>Name : {user?.displayName}</p>
                    <p className='font-semibold'>Email :{user?.email}</p>
                    <p className='font-semibold'>Education :</p>
                    <p className='font-semibold'>location :</p>
                    <p className='font-semibold'>Phone Number :</p>
                    <p className='font-semibold'>LinkedIn profile link :</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;