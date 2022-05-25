import React from 'react';
import img from '../../images/extra/intro-hero2.jpeg';


const Extar2 = () => {
    return (
        <div className='my-[50px] lg:my-[100px]'>
            <div class="hero min-h-screen" style={{
                backgroundImage: `url(${img})`
            }}>
                <div class="hero-overlay bg-opacity-50"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="lg:w-3/6">
                        <h1 class="mb-5 text-5xl font-bold">THE BEST ONE OF ALL</h1>
                        <p class="mb-5"><span className='font-bold'>What a graphic card does?</span> <br />
                            Image result for graphics card
                            A graphics card (also called a video card, display card, graphics adapter, GPU, VGA card/VGA, video adapter, or display adapter) is an expansion card which generates a feed of output images to a display device (such as a computer monitor).</p>
                        <button class="btn btn-wide btn-outline text-white">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extar2;