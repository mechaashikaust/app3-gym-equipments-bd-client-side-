import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import useToken from '../../../Hooks/useToken';

const Register = () => {

    const [agree, setAgree] = useState(false);

    
 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [token] = useToken(user);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    if (token) {
        navigate('/home');
    }

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        // navigate('/home');
    }
<b></b>
    return (
        <div className='register-form container mt-5 w-75 p-5 mx-auto marginTop bg-secondary'>
            <h2 className='text-center mb-4'>Please Registration</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your name' />

                <input type="email" name='email' placeholder='Email address' required />

                <input type="password" name='password' placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-dark'}`} htmlFor="terms">Accept Terms and Condition</label>

                <input disabled={!agree} className='w-50 mx-auto btn btn-warning mt-2' type="submit" value="Register" />
            </form>
            <p> 
                Already Registered?
                <Link to="/login" className="text-dark text-decoration-none" onClick={navigateLogin}>
                    Please Login
                </Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;