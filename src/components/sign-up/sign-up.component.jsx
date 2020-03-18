import React, {useState} from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {connect} from 'react-redux';
import { createUserAccountStart } from '../../redux/user/user.action';

const SignUp  = ({createUserAccountStart, })  =>  {

    const [userCredentials, setUserCredentials] = 
    useState({displayName: '',
            email: '',
            password: '',
            confirmPassword: ''});
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if(password != confirmPassword){
            alert('password dont match');
            return;
        }
        createUserAccountStart(email,password,displayName);
    };
    const handleChange =  event => {
        const {name, value} = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput 
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                    label="Email"
                />
                <FormInput 
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput 
                    type="password"
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">
                    SIGN UP
                </CustomButton>

            </form>
        </div>
    );
}

const mapDispatchtoProps = dispatch => ({
    createUserAccountStart: (email,password, displayName) => dispatch(createUserAccountStart({email,password,displayName}))
})

export default connect(null, mapDispatchtoProps)(SignUp);