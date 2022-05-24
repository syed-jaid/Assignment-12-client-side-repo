import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {
    const { _id } = useParams()
    const [item, setItem] = useState({})

    const navigate = useNavigate('')

    const [user] = useAuthState(auth)

    // react form 
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    useEffect(() => {
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                else if (res.status === 401) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/login')
                }
                return res.json()
            })
            .then(data => {
                setItem(data);
            })
    }, [])


    const onSubmit = data => {
        console.log()
        const order = {
            Name: data.Name,
            email: data.email,
            quentity: data.quentity,
            ReciverName: data.ReciverName,
            Address: data.Address,
            PhoneNumber: data.PhoneNumber,
            itemName: item.name,
            discription: item.discription,
            img: item.img,
            price: item.price,
            paid: 'panding'
        }
        const inputQunentity = parseFloat(data.quentity);
        const minOrderquntity = item.minOrderquntity;
        const availqunity = item.availqunity;

        if (inputQunentity < minOrderquntity) {
            alert("You can not order lase then 1 pic")
        }
        else if (inputQunentity > availqunity) {
            alert("You can not order more then 12 pic")
        }
        else {
            // /order
            fetch('http://localhost:5000/order', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        reset()
                        // alert('Thanks for you Order')
                        toast.success('Order is taken')
                    }
                })
        }
    }

    return (
        <div>
            <div className='lg:w-[1170px] mx-auto'>
                {/* main  */}
                <div class="card w-full shadow-xl bg-slate-100 p-[15px] lg:p-[25px]">

                    <div className='lg:flex'>
                        {/* items info  */}
                        <div key={item?._id} class="card  lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl border-4 border-[#d2d4e3]">
                            <figure><img src={item?.img} alt="" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {item?.name}
                                    <div class="badge badge-primary">NEW</div>
                                </h2>
                                <div class=" justify-start">
                                    <p >{item?.discription}Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <p className='my-[6px] font-bold'>Price : {item?.price}</p>
                                    <p>Available Quantity : {item?.availqunity}</p>
                                    <p> Minimum Order quantity : {item?.minOrderquntity}</p>

                                </div>
                            </div>


                        </div>
                        {/* form for the pay */}
                        <div className=' lg:p-[30px]'>
                            <div className='p-[20px] shadow-xl border-4 border-[#d2d4e3] bg-slate-100 rounded-xl'>
                                {/* user info */}
                                <div className='bg-[#ffffff] p-[10px] lg:flex lg:justify-start justify-between mb-[12px]'>
                                    <div class="flex items-center">
                                        <div class="avatar">
                                            <div class="mask mask-squircle w-12 h-12">
                                                <img className='border-4 border-[#37cdbe]' src={user?.photoURL} alt="Img" />
                                            </div>
                                        </div>
                                        <div className=' mx-[20px]'>
                                            <span class="badge badge-ghost badge-sm">Email</span>
                                            <br />
                                            <div class="font-bold">{user?.displayName}</div>
                                        </div>
                                    </div>
                                    <div className='lg:mx-[20px]  my-[10px] lg:my-[0]'>
                                        <span class="badge badge-ghost badge-sm">Email</span>
                                        <br />
                                        {user?.email}</div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className='lg:w-[670px]'>
                                    {/* name */}
                                    <input {...register("Name")} type='text' hidden value={user?.displayName} className="input input-bordered w-full my-[10px]" />
                                    {/* email */}
                                    <input {...register("email")} type='text' hidden value={user?.email} className="input input-bordered w-full my-[10px]" />

                                    {/* quentity  */}
                                    <input {...register("quentity", {
                                        required: {
                                            value: true
                                        }
                                    }
                                    )} placeholder='Quntity' type='number' className="input input-bordered w-full my-[10px]" />

                                    {/* Reciver Name */}
                                    <input {...register("ReciverName", {
                                        required: {
                                            value: true
                                        }
                                    }
                                    )} placeholder='Reciver Name' type='text' className="input input-bordered w-full my-[10px]" />
                                    <label className="w-full">
                                        {errors.ReciverName?.type === 'required' && 'Reciver Name is Requierd'}
                                    </label>
                                    {/*location*/}
                                    <input {...register("Address", {
                                        required: {
                                            value: true
                                        }
                                    })} placeholder='Address' type='text' className="input input-bordered w-full my-[10px]" />
                                    <label className="w-full">
                                        {errors.Address?.type === 'required' && 'Address is Requierd'}
                                    </label>
                                    {/* Phone Number  */}
                                    <input {...register("PhoneNumber", {
                                        required: {
                                            value: true
                                        }
                                    })} placeholder='Phone Number ' type='text' className="input input-bordered w-full my-[10px]" />
                                    <label className="w-full">
                                        {errors.PhoneNumber?.type === 'required' && 'Phone Number is Requierd'}
                                    </label>

                                    {/* submit btn  */}
                                    <div className="mt-[18px] flex justify-center">
                                        <div>
                                            <input className="btn btn-wid px-[50px] text-white mx-[10px]" type="submit" value='Order' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Purchase;