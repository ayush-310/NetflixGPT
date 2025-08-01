// hooks/useHandleGptSearchClick.js
import { useDispatch } from 'react-redux';
import genai from '../utils/geminiApi';
import { addGptMovieResult } from '../utils/gptSlice';

const useHandleGptSearchClick = (searchTextRef, searchMovieTMDB) => {
    const dispatch = useDispatch();

    const handleClick = async () => {
        const query = searchTextRef.current?.value?.trim();
        if (!query) return;

        console.log("Search Text:", query);

        const gptQuery = `Act as a movie recommendation system. Based on the user's input, suggest movies that match their preferences. The user will provide a search query, and you will return a list of recommended movies. ${query}. Only give me names of 5 movies, comma separated like the example: Brothers, Avengers, Cars3, F1, Barbie`;

        const gptResults = await genai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: gptQuery,
        });

        if (!gptResults) {
            console.error("No GPT results");
            return;
        }

        const gptMovies = gptResults.text.split(',').map((movie) => movie.trim());
        console.log("GPT Movies:", gptMovies);

        const movieDetailsPromises = gptMovies.map((movie) =>
            searchMovieTMDB(movie)
        );

        const TMDBresults = await Promise.all(movieDetailsPromises);
        console.log("TMDB Results:", TMDBresults);

        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: TMDBresults }));
    };

    return handleClick;
};

export default useHandleGptSearchClick;
