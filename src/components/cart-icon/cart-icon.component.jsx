import React from 'react';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.reselectors';
import {toggleCartDisplay, toggleCartHide} from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect';
import {CartIconContainer,ItemCountContainer, ShoppingIcon} from './cart-icon.styles';


const CartIcon = ({toggleCartDisplay, itemCount}) => (
    <CartIconContainer  onClick={toggleCartDisplay}>
        <ShoppingIcon/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);



const mapDispatchToProps = dispatch => ({
    toggleCartDisplay: () => dispatch(toggleCartDisplay()),
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

