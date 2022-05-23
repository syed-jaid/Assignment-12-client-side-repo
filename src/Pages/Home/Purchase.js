import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../ForAll/Navbar/Navbar';

const Purchase = () => {
    const { _id } = useParams()
    const [item, setItem] = useState({})
    const [quantitys, setquntity] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/item/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data);
                setquntity(data.quantity);
            })
    }, [])
    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='lg:w-[1170px] mx-auto'>
                <div class="card w-full shadow-xl border-4 border-primary bg-slate-100 p-[15px] lg:p-[30px]">
                    <div key={item._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                        <figure><img src={item.img} alt="Shoes" /></figure>
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
                </div>
            </div>
        </div>
    );
};

export default Purchase;