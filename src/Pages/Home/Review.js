import React, { useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const Review = () => {

    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch('https://murmuring-basin-10907.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setreviews(data)
            })
    }, [])

    return (
        <div>
            <h1 className='font-sans text-3xl lg:text-5xl font-semibold tracking-tight text-center  mt-[50px] mb-[10px]'>Reviews</h1>
            <div className='review-main-div lg:p-0 p-[15px] mt-[20px]'>
                {
                    reviews.map(review => <div key={review?._id} className='card w-full bg-base-100 shadow-xl p-[12px] border-2 border-inherit lg:mx-[5px] my-[20px]'>
                        <div class="flex items-center ">
                            <div class="avatar">
                                <div class="mask mask-squircle w-12 h-12">
                                    <img src={review?.img} />
                                </div>
                            </div>
                            <div className='mx-[9px]'>
                                <div class="font-bold">{review?.Name}</div>
                                <small className="badge badge-ghost badge-sm">Email:{review?.email}</small>
                            </div>
                        </div>
                        <div>
                            <h1>{review?.discripition}</h1>
                        </div>
                        <div className='flex '>
                            <p>Rating : {review?.raing} </p>

                            {
                                review?.raing === '5' &&
                                <div className='flex mt-[2px] mx-[7px]'><BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                </div>
                            }
                            {
                                review?.raing === '4' &&
                                <div className='flex mt-[2px] mx-[7px]'>
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                </div>
                            }
                            {
                                review?.raing === '3' &&
                                <div className='flex mt-[2px] mx-[7px]'>
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                </div>
                            }
                            {
                                review?.raing === '2' &&
                                <div className='flex mt-[2px] mx-[7px]'>
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                </div>
                            }
                            {
                                review?.raing === '1' &&
                                <div className='flex mt-[2px] mx-[7px]'>
                                    <BsFillStarFill className='m-[3px] text-[#f2ce06]' />
                                </div>
                            }

                        </div>

                    </div>
                    )

                }
            </div>
        </div >
    );
};

export default Review;