import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import useHandleGptSearchClick from '../hooks/useHandleGptSearchClick';
import useSearchMovieTMDB from '../hooks/useSearchMovieTMDB';

const GptSearchBar = () => {

    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = useSearchMovieTMDB();
    const handleGptSearchClick = useHandleGptSearchClick(searchText, searchMovieTMDB);
    
    return (
        <div className='pt-[10%] flex justify-center'>
            <form
                className='w-1/2 bg-black grid grid-cols-12 '
                onSubmit={(e) => e.preventDefault()}>
                <input type="text"
                    ref={searchText}
                    className="p-4 m-4 col-span-9"
                    placeholder={lang[langKey]?.gptSearchPlaceholder}
                />
                <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg'
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey]?.search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar
