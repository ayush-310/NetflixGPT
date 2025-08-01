// hooks/useSearchMovieTMDB.js
import { API_OPTIONS } from '../utils/constants';

const useSearchMovieTMDB = () => {
    const searchMovieTMDB = async (movie) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
                API_OPTIONS
            );
            const json = await response.json();
            return json.results;
        } catch (error) {
            console.error("TMDB Search Error:", error);
            return [];
        }
    };

    return searchMovieTMDB;
};

export default useSearchMovieTMDB;
