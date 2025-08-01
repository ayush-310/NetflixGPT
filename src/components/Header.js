import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { USER_AVATAR, NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector((store) => store.gpt.showGptSearch);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => navigate("/"))
            .catch((error) => {
                console.error("Sign out error:", error);
                navigate("/error");
            });
    };

    const handleGPTSearch = () => {
        dispatch(toggleGPTSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <header className="absolute w-full px-4 md:px-8 py-4  bg-gradient-to-b from-black z-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <img
                    className="w-32 md:w-44 mb-2 md:mb-0 pl-[2.2%]"
                    src={NETFLIX_LOGO}
                    alt="Netflix Logo"
                />

                {user && (
                    <div className="flex items-center gap-4">
                        {showGPTSearch && (
                            <select
                                onChange={handleLanguageChange}
                                className="bg-[#141414] text-white px-4 py-2 rounded-md border border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 hover:bg-[#1f1f1f] transition-all duration-200"
                            >
                                {SUPPORTED_LANGUAGES.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )}

                        <button
                            onClick={handleGPTSearch}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-900 transition-all duration-200"
                        >
                            {showGPTSearch ? "Homepage" : "GPT Search"}
                        </button>

                        <img
                            className="w-10 h-10 rounded-sm  object-cover"
                            src={user?.photoURL || USER_AVATAR}
                            alt="User Avatar"
                        />

                        <button
                            onClick={handleSignOut}
                            className="text-white font-semibold hover:underline transition-all duration-150"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
