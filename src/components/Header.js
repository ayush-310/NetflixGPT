import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './../utils/firebase';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_AVATAR, NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            }).catch((error) => {
                navigate("/error");
                console.error("Sign out error:", error);
            })
    };



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        // Unsubscribe on component unmounts
        return () => unsubscribe();
    }, []);
    return (
        <>
            <div className="absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">                <img
                className='w-44'
                src={NETFLIX_LOGO}
                alt="logo" />

                {user && <div className='flex p-2'>
                    <img
                        className='w-12 h-12'
                        alt='user avatar'
                        src={user?.photoURL}
                    // src={USER_AVATAR}
                    />
                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white ">Signout</button>
                </div>}

            </div>


        </>
    )
}

export default Header
