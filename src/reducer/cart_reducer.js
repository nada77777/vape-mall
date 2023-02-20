export function cartReducer(state, action) {

    switch (action.type) {
        case 'addCartItem': {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.item.id);//가존에 아이템 유뮤 확인 위해 findIndex사용
            const cartItem = state.cartItems[itemIndex];//cartItems배열의 index순서가 cartItem

            if (cartItem) {
                //count증가는 addCartItem 호출 위치가 infopage이면(인자로 받는 infopage가 true) action 객체의 count만큼 증가 아닐 시 기존 아이템의 count가 1개씩 증가  
                const itemCount = action.fromInfoPage ? action.item.count : cartItem.count / cartItem.count;
                const updatedItem = action.fromInfoPage ? { ...cartItem, count: cartItem.count + itemCount } : { ...cartItem, count: cartItem.count + itemCount };
                const updatedItems = [...state.cartItems]; //cartItems를 복사해서 updateItems에 새로운 참조값으로 할당 
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
            const itemIndex = state.cartItems.findIndex(item => item.id === action.item.id); //삭제하려는 해당 아이템 찾기 확인 위해 findIndex사용
            const cartItem = state.cartItems[itemIndex];//cartItems배열의 index순서가 cartItem

            if (action.deleteAll || cartItem.count === 1) { //인자로 받는 deleteAll이 true이거나 cartItem의 count가 1일 시 해당 cartItem을 cartItems에서 삭제
                const updatedItems = state.cartItems.filter(item => item.id !== action.item.id);
                return {
                    cartItems: updatedItems,
                    totalPrice: state.totalPrice - (action.item.sale * action.item.count),
                    subTotal: state.subTotal - (action.item.sale * action.item.count)
                };
            };
            const updatedItem = { ...cartItem, count: cartItem.count - 1 }; //deleteCartItem 호출 시 cartItem의 count가 한 개씩 감소
            const updatedItems = [...state.cartItems]; //cartItems를 복사해서 updateItems에 새로운 참조값으로 할당 
            updatedItems[itemIndex] = updatedItem;
            return {
                cartItems: updatedItems,
                totalPrice: state.totalPrice - action.item.sale,
                subTotal: state.subTotal - action.item.sale
            };
        };
        default:
            throw new Error('Cart_reducer Error');
    }
}