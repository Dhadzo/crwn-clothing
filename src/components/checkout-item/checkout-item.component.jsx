import React from 'react';
import {connect} from 'react-redux';
import {removeItem, decreaseItemQuantityFromCart, addItem} from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ImageContainer,
       TextContainer, QuantityContainer, 
       RemoveButtonContainer } from './checkout-item.styles';

const CheckOutItem = ({cartItem, removeItem, decreaseQuantity, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return(
        <CheckoutItemContainer>
            <ImageContainer>
              <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                 <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick = {() => removeItem(cartItem)}>
               &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>

    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: cartItem => dispatch(removeItem(cartItem)),
    decreaseQuantity: cartItem => dispatch(decreaseItemQuantityFromCart(cartItem)),
    addItem: cartItem => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);