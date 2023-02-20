import React from 'react';
import CartItem from '../../components/cart_item/cart_item';
import { useCartContext } from '../../context/cart_contex';
import ButtonYellow from '../../UI/button/button_yellow/button_yellow';

const CartPage = (props) => {
    const SHTIPPING_COST = '+ ₩ 5000';
    const DISCOUNT = '- ₩ 3000';
    const { cartItemsInfo: { items, subTotal, totalPrice }, addCartItem, deleteCartItem } = useCartContext(); //context에서 cartItems 정보, 추가, 삭제 객체 가져오기
    const itemsLength = items.length > 0

    const PriceComponent = () => {  //연속되는 div 태그 함수로 생성
        const priceList = [{ name: 'subTotal', price: subTotal },
        { name: 'Shipping Cost', price: SHTIPPING_COST },
        { name: 'Discount', price: DISCOUNT },
        { name: 'Total', price: totalPrice }];

        return (
            priceList.map((item, index) =>
                <div key={index} className=' flex justify-between items-center'>
                    <span className=' text-sub-text text-text font-semibold'>{item.name}</span>
                    <span className=' text-cart-price font-semibold'>{item.price}</span>
                </div>)
        );
    };

    return (
        <section className=' bg-white rounded-lg small:px-28 px-10 py-5 mb-36 max-w-6xl m-auto'>
            <h1 className='text-main-text text-2xl font-extrabold py-10'>My Cart</h1>
            {!itemsLength && <h1 className='text-main-text text-xl font-semibold py-16'>장바구니가 비어있습니다.</h1>}
            <ul className=' px-1 mb-20 max-h-96 overflow-y-scroll '>
                {itemsLength && items.map((item) => <CartItem key={item.id} item={item} addCartItem={addCartItem} deleteCartItem={deleteCartItem} />)}
            </ul>
            <div className=' max-w-2xl m-auto mb-5 cursor-default'>
                <h1 className=' text-main-text font-semibold text-2xl text-left mb-5'>Order Info</h1>
                <PriceComponent />
            </div>
            <ButtonYellow name='CHECKOUT' />
        </section>
    );
}

export default CartPage;