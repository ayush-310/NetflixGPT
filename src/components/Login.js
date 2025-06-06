import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"

const Login = () => {

    const [signUp, SetSignUp] = useState(true);
    const [error, setError] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const ValidationButton = () => {
        // Validation of Form 

        const message = checkValidation(email.current?.value, password.current?.value, name.current?.value);
        // console.log(message);
        setError(message);

        if (message) return;

        if (!signUp) {
            // Sign Up Logic

            createUserWithEmailAndPassword(
                auth,
                email.current?.value,
                password.current?.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + " " + errorMessage);
                    // ..
                });


        } else {
            // Login Logic
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + " " + errorMessage);
                });

        }


    }

    const toggleSignUpForm = () => {
        SetSignUp(!signUp)
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
                    alt="bg-img" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto left-0 right-0 bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 '>{signUp ? "Login" : "Sign Up"}</h1>
                {!signUp && <input
                    ref={name}
                    type="text"
                    placeholder='Full Name'
                    className='p-4 my-2 w-full bg-gray-800 bg-opacity-80' />}
                <input
                    ref={email}
                    type="text"
                    placeholder='Email Address'
                    className='p-4 my-2 w-full bg-gray-800 bg-opacity-80' />
                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className='p-4 my-2 w-full bg-gray-800 bg-opacity-80' />
                <p className='text-red-600'>{error}</p>

                <button className='p-4 my-4 bg-red-700 w-full' onClick={ValidationButton}>{signUp ? "Login" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer text-center' onClick={toggleSignUpForm}> {signUp ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"} </p>
            </form>
        </div>
    )
}

export default Login
