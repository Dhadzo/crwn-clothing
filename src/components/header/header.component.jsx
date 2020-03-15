import React from 'react';
import { ReactComponent as Logo}  from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utilities';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.reselectors';
import { selectCurrentUser } from '../../redux/user/user.reselectors';
import { createStructuredSelector } from 'reselect';
import { OptionsContainer, HeadContainer, LogoContainer, OptionLink } from './header.styles';


const Header = ({currentUser, hidden}) => (
    <HeadContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
               Shop
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={() => auth.signOut()}>
                     SIGN OUT
                </OptionLink>
                : 
                <OptionLink to='/signin'>
                   SIGN IN    
                </OptionLink>
            }
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
})
 
export default connect(mapStateToProps)(Header);