import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../UI/button/button';


const ItemInfo = (props) => {
    const item = useLocation().state.item;
    console.log(item);
    const { title, price, sale, description, image, percent, company } = item;
    return (
        <section className='flex flex-col  pt-32 px-12'>
            <div className='  basis-1/2  p-10 rounded-lg bg-item-card  '>
                <div className=' bg-white rounded-lg'>
                    <img className=' max-w-xs max-h-80 m-auto rounded-lg ' src={image} alt="itemInfoImg" />
                </div>
            </div>
            <div className=' basis-1/2 flex flex-col bg-white rounded-3xl p-5 shadow-shadow relative -top-6'>
                <div className='flex justify-between items-center'>
                    <span className=' text-text-company font-semibold'>{company}</span>
                    <span className='text-main-text font-bold'>⭐ 5.5</span>
                </div>
                <h1 className=' text-lg text-main-text font-bold py-5'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <p className=' text-sm text-sub-text font-semibold'>{description}</p>
                    <div>
                        <h2 className='  text-2xl text-main-text font-bold'>₩ {sale}</h2>
                        <p className='text-sm text-sub-text font-semibold line-through'>₩ {price}</p>
                    </div>
                </div>
                <div className=''>
                    <span className='flex text-sm text-main-text font-bold py-2'>Variety</span>
                    <div>
                        <Button><span className='flex text-sm bg-item-card p-3 transition-all hover:bg-main-text hover:text-white'>30 ML</span></Button>
                        <Button><span className='flex text-sm bg-item-card p-3 transition-all hover:bg-main-text hover:text-white'>60 ML</span></Button>
                        <Button><span className='flex text-sm bg-item-card p-3 transition-all hover:bg-main-text hover:text-white'>90 ML</span></Button>
                    </div>
                </div>
                <div className=' mt-5'>
                    <Button>
                        <span className=' flex items-center border rounded-lg font-bold border-sub-text p-3'>
                            <a className=' block font-bold px-3' href=" "> - </a>1<a className=' block font-bold px-3' href=" "> + </a>
                        </span>
                    </Button>
                    <Button>
                        <span className='flex bg-main-color py-3 px-10 text-base text-main-text font-bold'>ADD TO CART</span>
                    </Button>
                </div>
            </div>
        </section >
    );
};

export default ItemInfo;