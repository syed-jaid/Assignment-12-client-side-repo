import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Navbar from '../../ForAll/Navbar/Navbar';

const Purchase = () => {
    const { _id } = useParams()
    const [item, setItem] = useState({})
    const [quantitys, setquntity] = useState('')

    const [user] = useAuthState(auth)
    // react form 
    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        fetch(`http://localhost:5000/item/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data);
                setquntity(data.quantity);
            })
    }, [])

    const onSubmit = data => { }

    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:w-[1170px] mx-auto'>
                {/* main  */}
                <div class="card w-full shadow-xl border-4 border-[#545964] bg-slate-100 p-[15px] lg:p-[25px]">

                    <div className='lg:flex'>
                        {/* items info  */}
                        <div key={item._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl border-4 border-[#d2d4e3]">
                            <figure><img src={item.img} alt="" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {item.name}
                                    <div class="badge badge-primary">NEW</div>
                                </h2>
                                <div class=" justify-start">
                                    <p >{item.discription}Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className='my-[6px] font-bold'>Price : {item.price}</p>
                                    <p>Available Quantity : {item.availqunity}</p>
                                    <p> Minimum Order quantity : {item.minOrderquntity}</p>

                                </div>
                            </div>
                        </div>
                        {/* form for the pay */}
                        <div className=' lg:p-[30px]'>
                            <div className='p-[20px] shadow-xl border-4 border-[#d2d4e3] bg-slate-100 rounded-xl'>
                                {/* user info */}
                                <div className='bg-[#ffffff] p-[10px] lg:flex lg:justify-start justify-between'>
                                    <div class="flex items-center">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img className='border-4 border-[#d2d4e3]' src={user.photoURL} alt="Img" />
                                            </div>
                                        </div>
                                        <div className=' mx-[20px]'>
                                            <span class="badge badge-ghost badge-sm">Email</span>
                                            <br />
                                            <div class="font-bold">{user.displayName}</div>
                                        </div>
                                    </div>
                                    <div className='lg:mx-[20px]  my-[10px] lg:my-[0]'>
                                        <span class="badge badge-ghost badge-sm">Email</span>
                                        <br />
                                        {user.email}</div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* name */}
                                    <input {...register("Name")} type='text' hidden value={user?.displayName} className="input input-bordered w-full my-[10px]" />
                                    {/* email */}
                                    <input {...register("email")} type='text' hidden value={user?.email} className="input input-bordered w-full my-[10px]" />
                                    {/* Education*/}
                                    <input {...register("Education")} placeholder='Education' type='text' className="input input-bordered w-full my-[10px]" />
                                    {/*location*/}
                                    <input {...register("location")} placeholder='location' type='text' className="input input-bordered w-full my-[10px]" />
                                    {/* Phone Number  */}
                                    <input {...register("PhoneNumber")} placeholder='Phone Number ' type='text' className="input input-bordered w-full my-[10px]" />
                                    {/* profile link */}
                                    <input {...register("LinkedInprofilelink")} placeholder='profile link' type='text' className="input input-bordered w-full my-[10px]" />

                                    {/* submit btn  */}
                                    <div className="mt-[18px] flex justify-center">
                                        <div>
                                            <input className="btn btn-accent text-white mx-[10px]" type="submit" value='UPDATE' />
                                        </div>
                                        <div>
                                            <Link to='/dashboard'><button className="btn btn-accent text-white mx-[10px]">ClEAR</button></Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Purchase;