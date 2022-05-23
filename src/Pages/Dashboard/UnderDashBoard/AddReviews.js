import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddReviews = () => {

    const [user] = useAuthState(auth)
    // react form 
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:5000/review', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                    alert('Thanks for you Review')

                }
            })
    }
    return (
        <div className='p-[30px] '>
            <div className='p-[40px] shadow-xl border-4 border-primary bg-slate-100 rounded-xl'>
                <h2 class=" text-4xl text-center">My Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* name */}
                    <input {...register("Name")} type='text' value={user?.displayName} className="input input-bordered w-full my-[14px]" />
                    {/* email */}
                    <input {...register("email")} type='text' value={user?.email} className="input input-bordered w-full my-[14px]" />
                    {/* discripition */}
                    <textarea class="textarea w-full textarea-info" placeholder="Bio"></textarea>
                    {/* raing */}
                    <select class="select select-info w-full my-[14px]"{...register("raing")}>
                        <option selected disabled>Rating</option>
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