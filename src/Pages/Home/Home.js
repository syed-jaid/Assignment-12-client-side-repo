import React from 'react';
import Carousel from './Carousel';
import Items from './Items';
import './Home.css'

const Home = () => {
    return (
        <div className='lg:w-[1200px] mx-auto'>
            {/* Carousel part  */}
            <Carousel></Carousel>
            {/* all  Items  */}
            <Items></Items>
            {/* extra part  */}

        </div>
    );
};

export default Home;