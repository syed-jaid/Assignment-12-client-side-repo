import React from 'react';
import img from '../../images/extra/ASUS-GeForce-GTX-1660-SUPER-Series_Banner_1200x628.jpg'

const Extra1 = () => {
    return (
        <div className="hero min-h-screen  lg:mt-[90px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="lg:w-[600px] lg:h-[400px] rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold ">The GAMING You Know & Trust</h1>
                    <p className="py-6">The latest iteration of MSI’s iconic GAMING series once again brings performance, low-noise efficiency, and aesthetics that hardcore gamers have come to recognize and trust.</p>
                    <button className="btn btn-wide"><a href="https://web.programming-hero.com/dashboard">Read MORE</a></button>
                </div>
            </div>
        </div>
    );
};

export default Extra1;