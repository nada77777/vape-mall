import React from 'react';
import { useNavigate } from 'react-router-dom';

const LiquidItem = ({ item }) => {
    const navigate = useNavigate();
    const goToPage = (item, itemId) => {
        navigate(`/itemInfo/${itemId}`, { state: { item: item } });
    };
    const { image, sale, title, id } = item;
    return (
        <li className='flex flex-col rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105 bg-item-card py-5'
            onClick={() => goToPage(item, id)}>
            <img className=' w-1/2 m-auto rounded-lg ' src={image} alt="itemImg" />
            <div className=' flex flex-col items-center  px-5 mt-5'>
                <h1 className=' text-xs font-bold text-sub-text'>{title}</h1>
                <p className=' font-bold text-main-text '>₩ {sale}</p>
            </div>
        </li>
    );
};

export default LiquidItem;