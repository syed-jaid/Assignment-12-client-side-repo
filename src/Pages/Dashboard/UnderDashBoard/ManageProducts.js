import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageProducts = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://murmuring-basin-10907.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    // delete Item api call
    const deleteItem = (props) => {
        console.log(props)
        fetch(`https://murmuring-basin-10907.herokuapp.com/items/${props}`, {
            method: 'Delete',
        })
            .then(response => response.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaing = items.filter(itme => itme._id !== props)
                    setItems(remaing)
                    toast('Product is deleted')
                }
            })
    }
    console.log(items)

    return (
        <div>
            <h2 class=" text-3xl text-center">All Orders</h2>
            <div className='all-items-div-order'>
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
                            {/* <!-- Put this part before </body> tag --> */}
                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box ">
                                    <h3 class="font-bold text-lg text-center p-[10px]">Sir do you want to delete the Product</h3>
                                    <div class="card-actions justify-center">
                                        <button class="btn btn-outline" onClick={() => deleteItem(item._id)}>Delete Product</button>
                                        <label for="my-modal-6" class="btn">Clear</label>
                                    </div>

                                </div>
                            </div>
                            <div class="card-actions justify-center">

                                {/* <!-- The button to open modal --> */}
                                <label for="my-modal-6" class="btn btn-wide">Delete</label>

                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};

export default ManageProducts;