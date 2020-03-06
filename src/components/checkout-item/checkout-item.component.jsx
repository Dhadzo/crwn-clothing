import React from 'react';
import {connect} from 'react-redux';
import {removeItem, decreaseItemQuantityFromCart, addItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem, removeItem, decreaseQuantity, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <div className="checkout-item">
            <div className="image-container">
            <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
               <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
               <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick = {() => removeItem(cartItem) }>
            &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    decreaseQuantity: cartItem => dispatch(decreaseItemQuantityFromCart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);