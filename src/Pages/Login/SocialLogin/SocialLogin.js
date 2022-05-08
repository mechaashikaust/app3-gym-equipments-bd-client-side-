import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;

    if(loading || loading1) {
        <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }

    

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {
                errorElement
            }
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={facebook} alt="" />
                    <span className='px-2'>Facebook</span>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src={github} alt="" />
                    <span className='px-2'>Github</span>
                </button>
            </div>

        </div>
    );
};
export default SocialLogin;