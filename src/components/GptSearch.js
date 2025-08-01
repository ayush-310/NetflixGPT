import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Background Image */}
            <div className="fixed inset-0 -z-10">
                <img
                    className="h-full w-full object-cover"
                    src={BG_URL}
                    alt="Background"
                />
            </div>

            {/* GPT Search Input */}
            <GptSearchBar />

            {/* Movie Suggestions */}
            <GptMovieSuggestion />
        </div>
    );
};

export default GptSearch;
