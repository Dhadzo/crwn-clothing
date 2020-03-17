import React from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {connect} from 'react-redux';
import { createUserAccountStart } from '../../redux/user/user.action';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {createUserAccountStart} = this.props;
        if(password != confirmPassword){
            alert('password dont match');
            return;
        }
        createUserAccountStart(email,password,displayName);
    };
    handleChange =  event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                      type="text"
                      name='displayName'
                      value={displayName}
                      onChange={this.handleChange}
                      label="Display Name"
                      required
                    />
                    <FormInput 
                      type="email"
                      name='email'
                      value={email}
                      onChange={this.handleChange}
                      required
                      label="Email"
                    />
                    <FormInput 
                      type="password"
                      name='password'
                      value={password}
                      onChange={this.handleChange}
                      label="Password"
                      required
                    />
                    <FormInput 
                      type="password"
                      name='confirmPassword'
                      value={confirmPassword}
                      onChange={this.handleChange}
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
}

const mapDispatchtoProps = dispatch => ({
    createUserAccountStart: (email,password, displayName) => dispatch(createUserAccountStart({email,password,displayName}))
})

export default connect(null, mapDispatchtoProps)(SignUp);