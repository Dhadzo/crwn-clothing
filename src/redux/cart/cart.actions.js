import CartActionTypes from './cart.types';


export const toggleCartDisplay = () => ({
    type: CartActionTypes.TOGGLE_CART_DISPLAY
})

export const toggleCartHide = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDE
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const decreaseItemQuantityFromCart = item => ({
    type: CartActionTypes.DECREASE_ITEM_QUANTITY_FROM_CART,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});
