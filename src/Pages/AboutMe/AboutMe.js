import React from 'react';
import img from '../../images/my.jpg';

const AboutMe = () => {
    return (
        <div className='lg:w-[1170px] mx-auto'>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <div>
                            <p className='porfile-info'>
                                <span className='text-2xl'>It’s me Syed Jahid</span>. I have completed my SSC in 2021. After completing my SSC I stope my study only because of learning programming. And I am determined to continue my learning and struggle until become successful in this digital world.  I am trying to give laser focus on this sector.

                                Programming seemed very incomprehensible to me before joining Programming Hero now my Point of view is completely opposite. Now I am Optimistic and l think I can do something good by learning programming.

                                I can understand the importance to become skillful for changing the economic situation of my family as well as my carrier. I trust my hardworking ability and my patience.

                                Since I have to earn money along with my academic education, my short-term goal is to become a freelancer or a part-time worker.

                                My quick learning ability will help me to deal with any adverse situation.

                                As I am a person who is positive about every aspect of life, I believe something very special is waiting for me. Insa-Allah.
                                <br />
                                Thank you..
                            </p>
                            <h1 className='text-[18px]'>I  have learn some thing from here : <span className='text-[19px]'>1.HTML 2.CSS 3.JavaScript 4.git 5.Node.js 6.React 7.React Route 8.es6 9.Express.js 10.Mongodb 11.jwt 12.Google firebase 13.Netlify 14.Heroku .</span></h1>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            <img className='w-full' src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutMe;