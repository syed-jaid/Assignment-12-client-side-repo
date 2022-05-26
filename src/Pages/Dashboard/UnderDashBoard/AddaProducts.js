import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddaProducts = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imageStorageKey = 'ebb31a765adbf5e8fa47f725b9c10cab'

    const onSubmit = data => {

        const image = data?.img[0];
        console.log(data)
        const formData = new FormData()
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                if (result.success) {
                    const product = {
                        name: data.name,
                        discription: data.discription,
                        img: img,
                        price: data.price,
                        minOrderquntity: data.minOrderquntity,
                        availqunity: data.availqunity
                    }

                    fetch('https://murmuring-basin-10907.herokuapp.com/productInsert', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(product) // body data type must match "Content-Type" header
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                reset()
                                toast.success('The product is inserted')

                            }
                        })
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

                    <div className="form-control">
                        {/* image */}
                        <label className="label">
                            <span className="label-text font-semibold">image</span>
                        </label>
                        <input {...register("img", {
                            required: {
                                value: true,
                                message: "image is Requierd"
                            }

                        })}
                            type='file' className="input input-bordered" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-[red]">{errors?.image?.message}</span>}
                        </label>
                    </div>

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