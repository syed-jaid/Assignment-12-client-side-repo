import React, { useEffect, useState } from 'react';
import { BsShop } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className='all-items-div'>
            {items?.map(item =>
                <div key={item?._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                    <figure><img src={item?.img} alt="Shoes" /></figure>
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

                        <div class="card-actions justify-center">
                            <Link to={'/purchase/' + item?._id}><button class="btn btn-outline w-full" >Purchase <BsShop className='mx-[7px] text-lg' /></button></Link>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Items;