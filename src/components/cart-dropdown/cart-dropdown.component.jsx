import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.reselectors';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartDisplay } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem  key={cartItem.id} item = {cartItem} />
                ))
                :
                <span className="empty-message">
                    Your cart is empty
                </span>
            }            
        </div>
        <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartDisplay())
              }
            }>
            Go to Check Out
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));