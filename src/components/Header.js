import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { signout } from '../utils/firebase';
// import { auth } from './../utils/firebase';

const Header = () => {
    const navigate = useNavigate();
    // const handleSignOut = () => {
    //     signout(auth)
    //         .then(() => {
    //             navigate('/');
    //         }).catch((error) => {
    //             navigate('/error');
    //         })
    // };
    return (
        <>
            <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
                <img
                    className='w-44'
                    src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="logo" />

                <div className='flex p-2'>
                    <img
                        className='w-12 h-12'
                        alt='usericon'
                        src="https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZumJ3wvSKM7od-r3UjhVF9j3yteWlQYA-51F3SNoI682llhul1Xf_CUkMnfP_17Md2lpOOhbwHeGufvo8kOTjptoS_bcwtniHKz.png?r=e6e&quot" alt="" />
                    <button
                        // onClick={handleSignOut}
                        className="font-bold text-white ">Signout</button>
                </div>

            </div>


        </>
    )
}

export default Header
