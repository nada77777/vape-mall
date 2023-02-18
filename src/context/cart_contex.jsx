import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart_reducer";

const CartContext = createContext();

export function CartContextProvider({ children }) {
    const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [], subTotal: 0, totalPrice: 2000 });

    const addCartItem = (item, fromInfoPage = false) => {
        dispatch({ type: 'addCartItem', item, fromInfoPage });
    };

    const deleteCartItem = (item, deleteAll = false) => {
        dispatch({ type: 'deleteCartItem', item, deleteAll });
    };


    const cartItemsInfo = {
        items: cartState.cartItems,
        subTotal: cartState.subTotal,
        totalPrice: cartState.totalPrice,
    };

    return (
        <CartContext.Provider value={{ cartItemsInfo, addCartItem, deleteCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCartContext() {
    return useContext(CartContext);
};