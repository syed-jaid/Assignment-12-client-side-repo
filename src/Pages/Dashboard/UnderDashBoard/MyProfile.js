
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    console.log(user?.photoURL)
    return (
        <div className='p-[30px]'>

            <div class="card w-full bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={user.photoURL} alt="Shoes" class="rounded-full border-4 border-cyan-500" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">My Profile</h2>
                    <p>Name : {user?.displayName}</p>
                    <p>Email :{user.email}</p>
                    <p>Education :</p>
                    <p>location :</p>
                    <p>Phone Number :</p>
                    <p>LinkedIn profile link :</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">UPDATE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;