import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../UI/button/button';


const Banner = (props) => {
    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/');
    };

    return (
        <section className=' small:flex relative bg-main-color '>
            {/* <div className=' absolute flex justify-center items-center  w-full h-full text-white bg-black opacity-50 z-10 text-4xl font-bold'>page</div> */}
            <div className=' flex flex-col justify-center items-center w-1/2 m-auto small:items-start  small:pl-56 small:m-0 '>
                <h1 className=' small:text-4xl text-2xl font-medium text-white'>SUMMER SALE</h1>
                <span className=' small:text-4xl text-2xl font-bold text-main-text mt-2 small:mb-10'>40% OFF</span>
                <Button styles={'bannerBtn'}><h1 onClick={goToMainPage} className=' bg-main-text text-white font-medium hover:bg-gray-900 px-12 py-3 '>HOME</h1></Button>
            </div>
            <div className=' w-1/2 overflow-hidden m-auto  '>
                <img className='w-full -rotate-12   ' src={'img/banner.jpg'} alt="banner" />
            </div>
        </section>
    );
};

export default Banner;
