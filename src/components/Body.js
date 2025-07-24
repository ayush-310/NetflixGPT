import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName , photoURL} = user;
                dispatch(addUser({ uid, email, displayName , photoURL}));
            } else {
                dispatch(addUser());
            }
        });
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/browse" element={<Browse />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Body;
