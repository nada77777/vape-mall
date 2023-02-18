import React from 'react';
import CartItem from '../../components/cart_item/cart_item';
import { useCartContext } from '../../context/cart_contex';
import ButtonYellow from '../../UI/button/button_yellow/button_yellow';

const CartPage = (props) => {
    const { cartItemsInfo: { items, subTotal, totalPrice }, addCartItem, deleteCartItem } = useCartContext();
    const itemsLength = items.length > 0

    return (
        <section className=' bg-white rounded-lg small:px-28 px-10 py-5 mb-36 max-w-6xl m-auto'>
            <h1 className='text-main-text text-2xl font-extrabold py-10'>My Cart</h1>
            {!itemsLength && <h1 className='text-main-text text-xl font-semibold py-16'>장바구니가 비어있습니다.</h1>}
            <ul className=' px-1 mb-20 max-h-96 overflow-y-scroll '>
                {itemsLength && items.map((item) => <CartItem key={item.id} item={item} addCartItem={addCartItem} deleteCartItem={deleteCartItem} />)}
            </ul>
            {/* {items.map((item) => <CartItem key={item.id} item={item} />)} */}
            <div className=' max-w-2xl m-auto mb-5 cursor-default'>
                <h1 className=' text-main-text font-semibold text-2xl text-left mb-5'>Order Info</h1>
                <div className=' flex justify-between items-center '>
                    <span className=' text-sub-text text-text font-semibold'>Subtotal</span>
                    <span className=' text-cart-price font-semibold'>{subTotal}</span>
                </div>
                <div className=' flex justify-between items-center '>
                    <span className=' text-sub-text font-semibold'>Shipping Cost</span>
                    <span className=' text-cart-price font-semibold'>+ ₩ 5000</span>
                </div>
                <div className=' flex justify-between items-center '>
                    <span className=' text-sub-text font-semibold'>Discount</span>
                    <span className=' text-cart-price font-semibold'>- ₩ 3000</span>
                </div>
                <div className=' flex justify-between items-center '>
                    <span className=' text-sub-text font-semibold'>Total</span>
                    <span className=' text-cart-price font-semibold'>{totalPrice}</span>
                </div>
            </div>
            <ButtonYellow name='CHECKOUT' />
        </section>
    );
}

export default CartPage;