import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckourForm = ({ item }) => {

    // const [cardError, setCardError] = useState('');
    // const stripe = useStripe();
    // const elements = useElements();
    // const [clientSecret, setClientSecret] = useState('');
    // const [success, setSuccess] = useState('');
    // const [transactionId, setTransactionId] = useState('');
    // const [processing, setProcessing] = useState(false);

    // const { _id, price } = item;

    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.clientSecret) {
    //                 setClientSecret(data.clientSecret);
    //             }
    //         });

    // }, [price])

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     const card = elements.getElement(CardElement);
    //     if (card === null) {
    //         return;
    //     }

    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card
    //     });

    //     setCardError(error?.message || '');

    //     const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                     name: '',
    //                     email: ''
    //                 },
    //             },
    //         },
    //     );

    //     if (intentError) {
    //         setCardError(intentError?.message);
    //         setProcessing(false);
    //     }
    //     else {
    //         setCardError('');
    //         setTransactionId(paymentIntent.id);
    //         console.log(paymentIntent);
    //         setSuccess('Congrats! Your payment is completed.')

    //     }

    // }
    return (
        <div className='shadow-xl lg:w-[300px] border-1 rounded-lg border-2 border-sky-200 p-[15px] mx-auto'>
            {/* <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm my-[3px] px-[15px]" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form> */}
            {/* {
                cardError && <p className='text-red-500'>{cardError}</p>
            } */}
        </div>
    );
};

export default CheckourForm;