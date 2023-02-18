import React, { useEffect, useState } from 'react';

const CountButton = ({ item, count, onClickPlus, deleteCartItem }) => {
    // const [count, setCount] = useState(1);

    const onClick = (event) => {
        event.preventDefault();
        if (event.target.name === 'plus') {
            onClickPlus(item);
            return
        }
        deleteCartItem(item);
    };

    return (
        <button className=' overflow-hidden rounded-lg mx-1'>
            <span className=' flex justify-center items-center border rounded-lg font-bold border-sub-text p-3'>
                <a onClick={onClick} name='minus' className=' block font-bold px-3' href=" "> - </a>
                {count}
                <a onClick={onClick} name='plus' className=' block font-bold px-3' href=" "> + </a>
            </span>
        </button>
    );
};

export default CountButton;