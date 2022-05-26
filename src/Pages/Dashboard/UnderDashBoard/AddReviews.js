import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { useState } from 'react';

const AddReviews = () => {

    const [user] = useAuthState(auth)
    // react form 
    const { register, handleSubmit, reset } = useForm();

    const [username, setUserName] = useState([]);

    useEffect(() => {
        fetch(`https://murmuring-basin-10907.herokuapp.com/userProfile/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserName(data)
            })
    }, [])

    const onSubmit = data => {
        const review = {
            Name: data.Name,
            email: data.email,
            discripition: data.Discription,
            raing: data.raing,
            img: user.photoURL
        }
        console.log(review, data)
        fetch('https://murmuring-basin-10907.herokuapp.com/review', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review) // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                    toast.success('Thanks for you Review')

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
                    {/* discripition */}
                    <textarea class="textarea w-full textarea-info" required placeholder="Discription" {...register("Discription")}></textarea>
                    {/* raing */}
                    <select class="select select-info w-full my-[14px]"{...register("raing")}>
                        <option disabled>Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    {/* submit btn  */}
                    <div className="mt-[18px] flex justify-center">
                        <div>
                            <input className="btn btn-accent text-white mx-[10px]" type="submit" value='SUBMIT' />
                        </div>

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReviews;