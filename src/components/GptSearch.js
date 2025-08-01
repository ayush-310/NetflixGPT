import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className=" fixed -z-10">
                <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch
