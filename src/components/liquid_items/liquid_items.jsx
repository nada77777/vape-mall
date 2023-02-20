import React, { useEffect, useState } from 'react';
import { loadItems } from '../../firebase/loadData';
import LiquidItem from '../liquid_item/liquid_item';

const LiquidItems = ({ dataType }) => {

    const [items, setItems] = useState([]);
    const itemsLength = items.length > 0;
    useEffect(() => {
        loadItems(dataType).then(result => setItems(result)); //컴포넌트 마운트 시 loadItems이용해 dataType에 따라 해당 data 받아오기
    }, [dataType]);

    const LiquidItems = items.map((item) => <LiquidItem key={item.id} item={item} />);

    return (
        <section>
            {!itemsLength &&
                <div className=' flex justify-center'>
                    <h1 className='font-bold  text-main-text '>Loading...</h1>
                    <div className='border-4 border-t-sky-300 border-bg-indigo-500 mx-2 w-7 h-7 rounded-full animate-spin'></div>
                </div>}
            {itemsLength &&
                <ul className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-4'>
                    {items && LiquidItems}
                </ul>
            }
        </section>
    );
};

export default LiquidItems;