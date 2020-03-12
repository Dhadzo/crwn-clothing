import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo}  from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utilities';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.reselectors';
import { selectCurrentUser } from '../../redux/user/user.reselectors';
import { createStructuredSelector } from 'reselect';


const Header = ({currentUser, hidden}) => (
   <div className="header">
     <Link to='/' className="logo-container">
        <Logo className='logo' />
     </Link>
     <div className="options">
         <Link to="/shop" className="option">
             Shop
         </Link>
         <Link to="/shop" className="option">
             Contact
         </Link>
         {
             currentUser ?
             <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
             : 
             <Link className="option" to="/signin">
               SIGN IN
             </Link>
         }
         <CartIcon /> 
     </div>
      {
          hidden ? null :
          <CartDropdown />
      }
   </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
 
export default connect(mapStateToProps)(Header);