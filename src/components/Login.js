import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase'; // ✅ Ensure this is correctly configured
import Header from './Header';
import { checkValidation } from '../utils/validate'; // ✅ Ensure this function returns error string or null

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // true = Login, false = Sign Up
    const [error, setError] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current?.value || ''; // optional chaining in case name input is not shown during login

        const validationMessage = checkValidation(email, password);
        setError(validationMessage);

        if (validationMessage) return;

        if (isLogin) {
            // Login
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('User signed in:', user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Error during sign in:', errorCode, errorMessage);
                });

        } else {
            // sign up 
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('User signed up:', user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error('Error during sign up:', errorCode, errorMessage);
                });

        }
    };

    const toggleAuthMode = () => setIsLogin(!isLogin);

    return (
        <div>
            <Header />

            {/* Background Image */}
            <div className='absolute w-full h-full -z-10'>
                <img
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg'
                    alt='Background'
                    className='object-cover w-full h-full'
                />
            </div>

            {/* Auth Form */}
            <form
                onSubmit={handleSubmit}
                className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto left-0 right-0 bg-opacity-80 rounded-md'
            >
                <h1 className='font-bold text-3xl py-4 text-center'>
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </h1>

                {!isLogin && (
                    <input
                        ref={nameRef}
                        type='text'
                        placeholder='Full Name'
                        className='p-4 my-2 w-full bg-gray-800 rounded'
                    />
                )}

                <input
                    ref={emailRef}
                    type='email'
                    placeholder='Email Address'
                    className='p-4 my-2 w-full bg-gray-800 rounded'
                    autoComplete="email"
                />

                <input
                    ref={passwordRef}
                    type='password'
                    placeholder='Password'
                    className='p-4 my-2 w-full bg-gray-800 rounded'
                    autoComplete="current-password"
                />

                {error && <p className='text-red-600 text-sm pt-2'>{error}</p>}

                <button
                    type='submit'
                    className='p-4 my-6 bg-red-700 hover:bg-red-800 w-full rounded-lg font-semibold'
                >
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </button>

                <p className='text-center cursor-pointer hover:underline' onClick={toggleAuthMode}>
                    {isLogin ? 'New to Netflix? Sign Up now' : 'Already a user? Sign In'}
                </p>
            </form>
        </div>
    );
};

export default Login;
