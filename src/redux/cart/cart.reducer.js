import CartActionTypes from './cart.types';
import { addItemToCart, decreaseItemQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
       
        case CartActionTypes.TOGGLE_CART_DISPLAY:
           return {
               ...state,
               hidden: !state.hidden 
           };
        case CartActionTypes.TOGGLE_CART_HIDE:
            return {
                ...state,
                hidden: true
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload.id)
            };
        case CartActionTypes.DECREASE_ITEM_QUANTITY_FROM_CART:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

export default cartReducer;