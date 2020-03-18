import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckOutPage from './pages/checkout/checkout.component';
import {selectCurrentUser} from './redux/user/user.reselectors';
import {checkUserSession} from './redux/user/user.action';

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckOutPage} />
        <Route exact  path='/signin' render = {() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );
}
  
const mapStateToProps =  createStructuredSelector({
   currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);