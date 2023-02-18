import React from 'react';
import { useNavigate } from 'react-router-dom';

const LiquidItem = ({ item }) => {
    const navigate = useNavigate();
    const goToPage = (item, itemId) => {
        navigate(`/iteminfo`, { state: { item: item } });
    };
    const { image, sale, title, id } = item;
    return (
        <li className='flex flex-col scree rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105 bg-item-card py-5 h-96'
            onClick={() => goToPage(item, id)}>
            <img className='md:w-4/5 lg:h-3/5 w-1/2 h-1/2 m-auto rounded-lg ' src={image} alt="itemImg" />
            <div className=' flex flex-col items-center  px-5 mt-5'>
                <h1 className=' text-xs font-bold text-sub-text'>{title}</h1>
                <p className=' font-bold text-main-text '>₩ {sale}</p>
            </div>
        </li>
    );
};

export default LiquidItem;
