import React from 'react';
import CountButton from '../../UI/button/count_button/count_button';
import { RiDeleteBinLine } from 'react-icons/ri';

const CartItem = ({ item, addCartItem, deleteCartItem }) => {

    const { image, price, sale, title, count } = item;

    return (
        <li className=' flex justify-evenly items-center bg-item-card rounded-lg py-5 my-3 border border-zinc-400'>
            <img className=' small:w-40 invisible  small:visible w-20 rounded-lg' src={image} alt="cartItemImg" />
            <div className=' text-left'>
                <h2 className=' small:text-base text-xs  text-main-text font-bold'>{title}</h2>
                <p className=' small:text-base text-xs  text-sub-text font-medium py-1'>Variety: 30ML</p>
                <p className=' small:text-base text-xs text-sub-text font-medium'>₩ {sale} (₩{price})</p>
            </div>
            <CountButton item={item} count={count} onClickPlus={addCartItem} deleteCartItem={deleteCartItem} />
            <button onClick={() => deleteCartItem(item, 'deleteAll')} className=' block bg-sub-text text-white rounded-lg p-2 m-1 hover:bg-gray-500 '><RiDeleteBinLine /></button>

        </li>
    );
};

export default CartItem;