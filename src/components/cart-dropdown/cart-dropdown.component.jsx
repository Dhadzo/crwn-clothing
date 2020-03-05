import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item">
        </div>
        <CustomButton>Go to Check Out</CustomButton>
    </div>
);

export default CartDropdown;