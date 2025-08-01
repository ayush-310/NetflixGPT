import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector(store => store.gpt);

    if (!movieNames) {
        return null;
    }

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            {movieNames.map((movieName, index) => {
                return (
                    <MovieList
                        key={index}
                        title={movieName}
                        movies={movieResults[index]} // ✅ Pass full list
                    />
                );
            })}
        </div>
    );
};

export default GptMovieSuggestion;
