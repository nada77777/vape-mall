export function cartReducer(state, action) {

    switch (action.type) {
        case 'addCartItem': {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.item.id);
            const cartItem = state.cartItems[itemIndex];

            if (cartItem) {
                const itemCount = action.fromInfoPage ? action.item.count : cartItem.count / cartItem.count;
                const updatedItem = action.fromInfoPage ? { ...cartItem, count: cartItem.count + itemCount } : { ...cartItem, count: cartItem.count + itemCount };
                const updatedItems = [...state.cartItems];
                updatedItems[itemIndex] = updatedItem;

                return {
                    cartItems: updatedItems,
                    totalPrice: state.totalPrice + (updatedItem.sale * itemCount),
                    subTotal: state.subTotal + (updatedItem.sale * itemCount)
                };
            }
            return {
                cartItems: [...state.cartItems, action.item],
                totalPrice: state.totalPrice + action.item.sale * action.item.count,
                subTotal: state.subTotal + action.item.sale * action.item.count
            };
        };
        case 'deleteCartItem': {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.item.id);
            const cartItem = state.cartItems[itemIndex];

            if (action.deleteAll || cartItem.count === 1) {
                const updatedItems = state.cartItems.filter(item => item.id !== action.item.id);
                return {
                    cartItems: updatedItems,
                    totalPrice: state.totalPrice - (action.item.sale * action.item.count),
                    subTotal: state.subTotal - (action.item.sale * action.item.count)
                };
            };
            const updatedItem = { ...cartItem, count: cartItem.count - 1 };
            const updatedItems = [...state.cartItems];
            updatedItems[itemIndex] = updatedItem;
            return {
                cartItems: updatedItems,
                totalPrice: state.totalPrice - action.item.sale,
                subTotal: state.subTotal - action.item.sale
            };
        };
        default:
            throw new Error('aaa');
    }
}