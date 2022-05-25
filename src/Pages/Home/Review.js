
import React, { useEffect, useState } from 'react';
// import { FaStar } from "react-icons/fa";
// import { Container, Radio, Rating } from "./RatingStyles";

const Review = () => {
    // const [rate, setRate] = useState();

    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setreviews(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='review-main-div lg:p-0 p-[15px]'>
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
                    <div>
                        <p>Rating : {review?.raing}</p>
                    </div>
                </div>)
            }
            <div>
                {/* <Container>
                    {[...Array(5)].map((item, index) => {
                        const givenRating = index + 1;
                        return (
                            <label>
                                <Radio
                                    type="radio"
                                    value={givenRating}
                                    onClick={() => {
                                        setRate(givenRating);
                                        alert(`Are you sure you want to give ${givenRating} stars ?`);
                                    }}
                                />
                                <Rating>
                                    <FaStar
                                        color={
                                            givenRating < rate || givenRating === rate
                                                ? "000"
                                                : "rgb(192,192,192)"
                                        }
                                    />
                                </Rating>
                            </label>
                        );
                    })}
                </Container> */}
            </div>
        </div>
    );
};

export default Review;