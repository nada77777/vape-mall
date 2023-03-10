import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCartContext } from '../../context/cart_contex';
import Button from '../../UI/button/button';
import ButtonYellow from '../../UI/button/button_yellow/button_yellow';
import CountButton from '../../UI/button/count_button/count_button';


const ItemInfo = (props) => {

    const { addCartItem } = useCartContext();
    const item = useLocation().state.item;  //useNavigate로 할당 받은 item location으로 이용
    const { title, price, sale, description, image, company } = item;
    const [cartItem, setCartItem] = useState(item);

    const plusCount = () => {
        const updatedItem = { ...cartItem, count: cartItem.count + 1 };
        setCartItem(updatedItem);
    };

    const minusCount = () => {
        if (cartItem.count === 1) {
            return
        }
        const updatedItem = { ...cartItem, count: cartItem.count - 1 };
        setCartItem(updatedItem);
    };

    const MlButton = () => {    //연속되는 ML버튼 함수로 생성
        const capacity = ['30 ML', '60 ML', '90 ML'];
        return (
            capacity.map((ml) =>
                <Button><span className='flex text-sm bg-item-card p-3 transition-all hover:bg-main-text hover:text-white'>{ml}</span></Button>
            )
        );
    };
    return (
        <section className=' relative small:flex   p-12 bg-main-color '>
            <div className='  basis-1/2  p-10 rounded-lg bg-item-card shadow-shadow '>
                <div className=' bg-white rounded-lg p-5'>
                    <img className=' small:max-w-xs small:max-h-80 m-auto rounded-lg ' src={image} alt="itemInfoImg" />
                </div>
            </div>
            <div className=' basis-1/2 flex flex-col bg-white rounded-3xl p-5 shadow-shadow relative -top-5  small:-left-6 small:top-0'>
                <div className='flex justify-between items-center'>
                    <span className=' text-text-company font-semibold'>{company}</span>
                    <span className='text-main-text font-bold'>⭐ 5.5</span>
                </div>
                <h1 className=' text-lg text-main-text font-bold py-5'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <p className=' text-sm text-sub-text font-semibold text-left w-4/5 '>{description}</p>
                    <div>
                        <h2 className='  text-2xl text-main-text font-bold'>₩ {sale}</h2>
                        <p className='text-sm text-sub-text font-semibold line-through'>₩ {price}</p>
                    </div>
                </div>
                <div className=' text-left'>
                    <span className='flex text-sm text-main-text font-bold py-2'>Variety</span>
                    <div>
                        <MlButton />
                    </div>
                </div>
                <div className=' mt-7'>
                    <CountButton count={cartItem.count} onClickPlus={plusCount} deleteCartItem={minusCount} />
                    <ButtonYellow name='ADD TO CART' onClick={addCartItem} fromInfoPage='true' item={cartItem} />
                </div>
            </div>
        </section >
    );
};

export default ItemInfo;