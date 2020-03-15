import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.reselectors';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartDisplay } from '../../redux/cart/cart.actions';
import { CartItemsContainer, EmptyMessageContainer, CartDropDownContainer } from './cart-dropdown.styles';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem  key={cartItem.id} item = {cartItem} />
                ))
                :
                <EmptyMessageContainer>
                    Your cart is empty
                </EmptyMessageContainer>
            }            
        </CartItemsContainer>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDisplay())
              }
            }>
            Go to Check Out
        </CustomButton>
    </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));