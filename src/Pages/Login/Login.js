import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useToken from '../../Hooks/useToken'

const Login = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(user);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://mysterious-eyrie-16544.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter your Email Address')
        }
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    if (token) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    return (
        <div className='container w-75 p-5 mx-auto marginTop bg-secondary'>
            <h2 className='text-dark text-center fs-1 fw-bold mt-3 mb-4'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="dark fw-bold fs-4 w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {
                errorElement
            }
            <p>
                New to this warehouse?
                <Link to="/register" className="text-dark text-decoration-none" onClick={navigateRegister}>
                    Please Register
                </Link>
            </p>
            <p>
                Forget Password?
                <Link to="/login" className="text-dark text-decoration-none" onClick={resetPassword}>
                    Reset Password
                </Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;