import React from 'react';
import imgBanner1 from '../../images/carousel/3.png'
import imgBanner2 from '../../images/carousel/2.png'
import imgBanner3 from '../../images/carousel/1.png'

const Carousel = () => {
    return (
        <div className='mb-[90px]'>
            <div class="carousel w-full">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={imgBanner3} class="w-full lg:h-[600px] rounded-lg" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={imgBanner2} class="w-full lg:h-[600px] rounded-lg" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={imgBanner1} class="w-full lg:h-[600px] rounded-lg" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={imgBanner3} class="w-full lg:h-[600px] rounded-lg" alt='' />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;