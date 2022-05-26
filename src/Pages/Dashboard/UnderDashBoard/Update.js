import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Update = () => {

    const [user] = useAuthState(auth)
    // react form 
    const { register, handleSubmit, reset } = useForm();

    const [userInfo, setUserInfo] = useState([]);
    const [username, setUserName] = useState([]);

    useEffect(() => {
        fetch(`https://murmuring-basin-10907.herokuapp.com/userProfile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data.user)
                setUserName(data)
            })
    }, [])

    const onSubmit = data => {
        console.log(data)
        fetch('https://murmuring-basin-10907.herokuapp.com/userUpdate', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                    alert('Your Profile is Updated')

                }
            })
    }

    return (
        <div className='p-[30px] '>
            <div className='p-[40px] shadow-xl border-4 border-primary bg-slate-100 rounded-xl'>
                <h2 class=" text-4xl text-center">My Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <input {...register("Name")} type='text' value={username?.name} className="input input-bordered w-full my-[14px]" />
                    {/* email */}
                    <input {...register("email")} type='text' value={user?.email} className="input input-bordered w-full my-[14px]" />
                    {/* Education*/}
                    <input {...register("Education")} placeholder='Education' type='text' className="input input-bordered w-full my-[14px]" />
                    {/*location*/}
                    <input {...register("location")} placeholder='location' type='text' className="input input-bordered w-full my-[14px]" />
                    {/* Phone Number  */}
                    <input {...register("PhoneNumber")} placeholder='Phone Number ' type='text' className="input input-bordered w-full my-[14px]" />
                    {/* profile link */}
                    <input {...register("LinkedInprofilelink")} placeholder='profile link' type='text' className="input input-bordered w-full my-[14px]" />

                    {/* submit btn  */}
                    <div className="mt-[18px] flex justify-center">
                        <div>
                            <input className="btn btn-accent text-white mx-[10px]" type="submit" value='UPDATE' />
                        </div>
                        <div>
                            <Link to='/dashboard'><button className="btn btn-accent text-white mx-[10px]">GO BACK</button></Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Update;