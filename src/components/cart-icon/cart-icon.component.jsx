import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.reselectors';
import {toggleCartDisplay, toggleCartHide} from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDisplay, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartDisplay}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);
 
const mapDispatchToProps = dispatch => ({
    toggleCartDisplay: () => dispatch(toggleCartDisplay()),
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

