import React from 'react';
import { FcGlobe, FcComboChart } from "react-icons/fc";
import { FaPeopleArrows } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";


const Summery = () => {
    return (
        <div className='lg:mt-[100px] lg:mb-[100px] mt-[50px] '>
            <h1 className='text-center text-5xl font-semibold font-sans mb-[40px]'>WE PROVIDED THE CUSTOMERS MILLIONS OF SERVICES </h1>
            <div className='lg:flex justify-between' >
                <div className='text-center  p-[20px] rounded-lg border-4 border-[#333333]  lg:border-[#ffffff] my-[30px]'>
                    <FcGlobe className='text-7xl mx-auto' />
                    <h1 className='text-4xl font-bold font-sans'>94</h1>
                    <h1 className='text-4xl font-bold font-sans text-[#37cdbe]'>Cousntries</h1>
                </div>
                <div className='text-center  p-[20px] rounded-lg border-4 border-[#333333]  lg:border-[#ffffff] my-[30px]'>
                    <FaPeopleArrows className='text-7xl mx-auto' />
                    <h1 className='text-4xl font-bold font-sans'>3.1 Br</h1>
                    <h1 className='text-4xl font-bold font-sans text-[#37cdbe]'>CUSTOMERS</h1>
                </div>
                <div className='text-center  p-[20px] rounded-lg border-4 border-[#333333]  lg:border-[#ffffff] my-[30px]'>
                    <VscFeedback className='text-7xl mx-auto' />
                    <h1 className='text-4xl font-bold font-sans'>2.4 Br</h1>
                    <h1 className='text-4xl font-bold font-sans text-[#37cdbe]'>REVIEWS</h1>
                </div>
                <div className='text-center  p-[20px] rounded-lg border-4 border-[#333333]  lg:border-[#ffffff] my-[30px]'>
                    <FcComboChart className='text-7xl mx-auto' />
                    <h1 className='text-4xl font-bold font-sans'>1.4 tr</h1>
                    <h1 className='text-4xl font-bold font-sans text-[#37cdbe]'>BRAND VALUE</h1>
                </div>
            </div>
            <div class="divider">AND</div>
            <div class="card w-full border-2 border-[#333333] my-[50px] shadow-lg shadow-[#71adca]">
                <div class="card-body ">
                    <h2 class="card-title text-[#37cdbe]">For any kind of help !</h2>
                    <p className='flex justify-start lg:pr-[200px]'>We are using cookies for no reason. Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit aut voluptates non animi quasi iure! Neque nihil doloremque recusandae velit ex eaque esse aperiam odio repudiandae ullam, quis voluptate.</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Request For Quote</button>
                        <button class="btn btn-outline btn-accent">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summery;