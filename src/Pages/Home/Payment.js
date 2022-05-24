import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckourForm from './CheckourForm';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51L2ipMDt0edBLOcihLqAb6NGfaTxuA5pvxmXUANSlLmdlhHqjeGGLKpMiDDcDJk7khGEzbnUFm6DO6TWlcAJjlCT00aDyJGtIu');

const Payment = () => {
    return (
        <div>
            <h1 className='text-center text-1xl text-[#1736cb] font-bold m-[7px]'>Pay by card</h1>
            <Elements stripe={stripePromise}>
                <CheckourForm />
            </Elements>
        </div>
    );
};

export default Payment;