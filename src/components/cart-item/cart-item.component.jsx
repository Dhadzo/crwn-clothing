import React from 'react';


import { CartItemContainer, NameContainer, PriceContainer, ImageContainer, ItemDetailsContainer } from './cart-item.styles';


const CartItem  = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
      <ImageContainer src={imageUrl} alt="item"/>
      <ItemDetailsContainer>
         <NameContainer>{name}</NameContainer> 
         <PriceContainer>{quantity} * R{price}</PriceContainer>
      </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;