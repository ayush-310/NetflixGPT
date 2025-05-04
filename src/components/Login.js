import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [signUp, SetSignUp] = useState(true);

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
            <form className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto left-0 right-0 bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4 '>{signUp ? "Login" : "Sign Up"}</h1>
                {!signUp && <input
                    type="text"
                    placeholder='Full Name'
                    className='p-4 my-2 w-full bg-gray-800 bg-opacity-80' />}
                <input
                    type="text"
                    placeholder='Email Address'
                    className='p-4 my-2 w-full bg-gray-800 bg-opacity-80' />
                <input
                    type="text"
                    placeholder='Password'
                    className='p-4 my-2 w-full bg-gray-800 bg-opacity-80' />

                <button className='p-4 my-4 bg-red-700 w-full'>{signUp ? "Login" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer text-center' onClick={toggleSignUpForm}> {signUp ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"} </p>
            </form>
        </div>
    )
}

export default Login
