import React from 'react';
import SignUpForm from './SignUpForm';
import { CreateUser } from '../js/axios'
import '../scss/_signUpForm.scss'

const SignUpPage = () => (
    <SignUpForm className='signUpForm' onSubmit={UserData => CreateUser(UserData)} />
);


export default SignUpPage;
