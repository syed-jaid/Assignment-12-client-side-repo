import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckourForm from './CheckourForm';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../ForAll/Spinner';


const stripePromise = loadStripe('pk_test_51L2ipMDt0edBLOcihLqAb6NGfaTxuA5pvxmXUANSlLmdlhHqjeGGLKpMiDDcDJk7khGEzbnUFm6DO6TWlcAJjlCT00aDyJGtIu');

const Payment = () => {

    const navigate = useNavigate('')
    const { _id } = useParams()
    console.log(_id)

    const { data: item, isLoading } = useQuery('items', () => fetch(`http://localhost:5000/OrderItem/${_id}`, {
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
        }))
    console.log(item)

    if (isLoading) {
        <Spinner></Spinner>
    }

    return (
        <div>
            {/* main  */}
            <div class="card w-full shadow-xl bg-slate-100 p-[15px] lg:p-[25px] lg:w-[1200px] mx-auto">
                <div className='lg:flex justify-around'>
                    <div class="card bg-base-100 shadow-xl border-4 border-[#d2d4e3] ">

                        <div class="card-body font-semibold">

                            <p className='text-2xl'>Ordred By : {item?.Name}</p>
                            <small>Email : {item?.email}</small>
                            <p className='text-2xl'>Ordering For </p>
                            <p>Product ID : {item?._id}</p>
                            <p>Product Name : {item?.itemName}</p>
                            <p>Quentity : <span className=''>{item?.quentity}</span> Totul Price : {item?.quentity * item?.price}</p>
                            <p>Reciver Info : {item?.ReciverName} <small>Phone:{item?.PhoneNumber}</small></p>
                        </div>

                    </div>

                    {/* add to card  */}
                    <div>
                        <h1 className='text-center text-1xl text-[#1736cb] font-bold m-[7px]'>Add to card</h1>
                        <Elements stripe={stripePromise}>
                            <CheckourForm item={item} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;