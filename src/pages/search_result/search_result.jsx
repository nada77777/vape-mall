import React from 'react';
import { useLocation } from 'react-router-dom';
import LiquidItem from '../../components/liquid_item/liquid_item';


const SearchResult = (props) => {
    const location = useLocation();
    const items = location.state.items;
    const itemsLength = items.length > 0;

    return (
        <section className=' rounded-lg  bg-white p-7 mb-36'>
            <h1 className=' font-bold text-xl text-main-text text-left pb-7'>Search Result</h1>
            {!itemsLength && <h1 className='text-main-text text-xl font-semibold pt-16 pb-32'>찾으시는 상품이 없습니다.</h1>}
            <ul className='grid grid-cols-1 md:grid-cols-5 lg-grid-cols-4 gap-4'>
                {itemsLength && items && items.map((item) => <LiquidItem key={item.id} item={item} />)}
            </ul>
        </section>
    );
};

export default SearchResult;