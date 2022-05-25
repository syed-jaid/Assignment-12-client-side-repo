import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddaProducts = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/productInsert', {
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
                    toast.success('The product is inserted')

                }
            })
    }

    return (
        <div className='p-[30px] '>
            <div className='p-[30px] shadow-xl border-4 border-primary bg-slate-100 rounded-xl'>
                <h2 class=" text-4xl text-center">Add A Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Product Name */}
                    <input {...register("name", {
                        required: {
                            value: true
                        }
                    }
                    )} placeholder='Product Name' type='text' className="input input-bordered w-full my-[10px]" />
                    <label className="w-full">
                        {errors.name?.type === 'required' && 'Product Name is Requierd'}
                    </label>

                    {/* img */}
                    <input {...register("img", {
                        required: {
                            value: true
                        }
                    }
                    )} placeholder='Product Img' type='text' className="input input-bordered w-full my-[10px]" />
                    <label className="w-full">
                        {errors.img?.type === 'required' && 'Image is Requierd'}
                    </label>

                    {/* price */}
                    <input {...register("price", {
                        required: {
                            value: true
                        }
                    }
                    )} placeholder='Product price' type='text' className="input input-bordered w-full my-[10px]" />
                    <label className="w-full">
                        {errors.price?.type === 'required' && 'Price is Requierd'}
                    </label>

                    {/* discription  */}
                    <textarea {...register("discription", {
                        required: {
                            value: true
                        }
                    }
                    )} placeholder='Product Discription' type='text' className="textarea w-full textarea-info w-full my-[10px]" />
                    <label className="w-full">
                        {errors.discription?.type === 'required' && 'Discription is Requierd'}
                    </label>

                    {/* availqunity  */}
                    <input {...register("availqunity", {
                        required: {
                            value: true
                        }
                    }
                    )} placeholder='Product Availqunity Quantity' type='text' className="input input-bordered w-full my-[10px]" />
                    <label className="w-full">
                        {errors.availqunity?.type === 'required' && 'Availqunity Quantity is Requierd'}
                    </label>

                    {/* min Order quntity  */}
                    <input {...register("minOrderquntity", {
                        required: {
                            value: true
                        }
                    }
                    )} placeholder='Product Min Order Quantity' type='text' className="input input-bordered w-full my-[10px]" />
                    <label className="w-full">
                        {errors.minOrderquntity?.type === 'required' && 'Availqunity Quantity is Requierd'}
                    </label>

                    {/* submit btn  */}
                    <div className="mt-[18px] flex justify-center">
                        <div>
                            <input className="btn btn-accent text-white px-[50px] mx-[10px]" type="submit" value='UPDATE' />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddaProducts;