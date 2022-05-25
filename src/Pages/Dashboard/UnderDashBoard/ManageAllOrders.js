import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const ManageAllOrders = () => {
    const navigate = useNavigate('')
    const [items, setitems] = useState([])

    const { data, } = useQuery('itmes', fetch(`http://localhost:5000/Orders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
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
        .then(data => setitems(data)))

    // useEffect(() => {
    //     fetch(`http://localhost:5000/Orders`, {
    //         method: 'GET',
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             if (res.status === 403) {
    //                 signOut(auth);
    //                 localStorage.removeItem('accessToken')
    //                 navigate('/login')
    //             }
    //             else if (res.status === 401) {
    //                 signOut(auth);
    //                 localStorage.removeItem('accessToken')
    //                 navigate('/login')
    //             }
    //             return res.json()
    //         })
    //         .then(data => setitems(data))
    // }, [])

    const updataShiping = (props) => {

        fetch(`http://localhost:5000/orderUpdate/${props}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    alert('Order is Updated')
                }
            })
    }


    // delete Item api call
    const deleteItem = (props) => {
        console.log(props)
        const confirm = window.confirm('Do you want to Remove it')
        if (confirm) {
            fetch(`http://localhost:5000/orders/${props}`, {
                method: 'Delete',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaing = items.filter(itme => itme._id !== props)
                        setitems(remaing)
                    }
                })
        }
    }

    return (
        <div>
            <h2 class=" text-3xl text-center">All Orders</h2>
            <div className='all-items-div-order'>
                {items?.map(item => <div key={item?._id} class="card w-full lg:w-80 my-[35px] mx-auto bg-base-100 shadow-xl">
                    <figure><img src={item?.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Product Name : {item?.itemName}
                        </h2>
                        <div className='flex justify-end'>
                            {
                                item?.paid === 'panding' && <p className='my-[6px] font-semibold badge badge-primary'>Unpaid</p>
                            }
                            {
                                item?.paid === 'paid' && <p className='my-[6px] font-semibold badge badge-primary'>panding</p>
                            }
                            {
                                item?.paid === 'shipped' && <p className='my-[6px] font-semibold badge badge-primary'>shipped</p>
                            }
                        </div>

                        <div class=" justify-start">
                            {
                                item?.transactionId && <small className='font-bold'>Transaction Id:

                                    {item.transactionId}</small>
                            }
                            <p className='my-[6px] font-semibold'>Totul Price : {parseFloat(item?.price) * parseFloat(item.quentity)}</p>
                            <p className='my-[6px] font-semibold'>Quentity : {item?.quentity}</p>
                            <p className='my-[6px] font-semibold'>Reciver Name : {item?.ReciverName} - <small>{item.Address}</small></p>
                            <small className='mb-[6px] font-semibold'>User-email:{item?.email}</small>
                            <p className='my-[6px] font-semibold'></p>
                            <p className='my-[6px] font-semibold'>Phone Number : <small>{item?.PhoneNumber}</small></p>

                            <div className='flex justify-between'>
                                <div>
                                    {
                                        item?.paid === 'paid' && <button class="btn btn-outline" onClick={() => updataShiping(item._id)}>Shippe Now</button>

                                    }
                                    {
                                        item?.paid === 'panding' && <button class="btn btn-outline" onClick={() => deleteItem(item._id)}>Clear Order</button>
                                    }
                                </div>

                            </div>

                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ManageAllOrders;