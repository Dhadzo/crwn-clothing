import React from 'react';
import { ReactComponent as Logo}  from '../../assets/crown.svg'
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.reselectors';
import { selectCurrentUser } from '../../redux/user/user.reselectors';
import { createStructuredSelector } from 'reselect';
import { OptionsContainer, HeadContainer, LogoContainer, OptionLink } from './header.styles';
import {signOutStart} from '../../redux/user/user.action';


const Header = ({currentUser, hidden, signOutStart}) => (
    <HeadContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
               Shop
            </OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={signOutStart}  >
                     SIGN OUT
                </OptionLink>
              ) : ( 
                <OptionLink to='/signin'>
                   SIGN IN    
                </OptionLink>
              )}
            <CartIcon />
        </OptionsContainer>
             
        { 
            hidden ? null :
            <CartDropdown />
        }
    </HeadContainer>
     
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);