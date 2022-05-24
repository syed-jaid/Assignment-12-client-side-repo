import React from 'react';
import Carousel from './Carousel';
import Items from './Items';
import './Home.css'
import Extra1 from './Extra1';
import Footer from '../../ForAll/Footer/Footer';
import Summery from './Summery';

const Home = () => {
    return (
        <div>
            <div className='lg:w-[1170px] mx-auto'>
                {/* Carousel part  */}
                <Carousel></Carousel>
                {/* all  Items  */}
                <h1 className='font-sans text-3xl lg:text-5xl font-semibold tracking-tight text-center  mt-[120px] mb-[70px]'>MSI BEST GRAPHIES CARDS</h1>
                <Items></Items>
                {/* extra part  */}
                <Extra1></Extra1>
                {/* Business Summery  */}
                <Summery></Summery>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;