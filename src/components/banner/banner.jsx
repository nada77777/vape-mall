import React from 'react';
import Button from '../../UI/button/button';

const Banner = (props) => {
    return (
        <section className='flex bg-main-color'>
            <div className=' flex flex-col justify-center items-start w-1/2  pl-56 '>
                <h1 className=' text-4xl font-medium text-white'>SUMMER SALE</h1>
                <span className=' text-4xl font-bold text-main-text mt-2 mb-10'>40% OFF</span>
                <Button styles={'bannerBtn'}><h1 className=' bg-main-text text-white font-medium px-12 py-3 '>EXPLORE</h1></Button>
            </div>
            <div className=' w-1/2 overflow-hidden'>
                <img className='w-full -rotate-12' src="img/banner.jpg" alt="banner" />
            </div>
        </section>
    );
};

export default Banner;

// background-color: #2A343D;
// padding: 12px;
// border-radius: 6px;
// margin: 0 10px;
// color: white;