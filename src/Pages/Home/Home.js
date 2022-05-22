import React from 'react';
import Carousel from './Carousel';
import Navbar from '../../ForAll/Navbar/Navbar';
import Items from './Items';
import './Home.css'
import Extra1 from './Extra1';
import Footer from '../../ForAll/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:w-[1170px] mx-auto'>
                {/* Carousel part  */}
                <Carousel></Carousel>
                {/* all  Items  */}
                <h1 className='font-sans text-3xl lg:text-5xl font-semibold tracking-tight text-center text-teal-300 mt-[120px] mb-[70px]'>MSI BEST GRAPHIES CARDS</h1>
                <Items></Items>
                {/* extra part  */}
                <Extra1></Extra1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;