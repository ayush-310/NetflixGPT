import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const usePopularMovies = () => {
    // Fetch Data from TMDB API and update Redux store

    // Stored in Redux store to avoid unnecessary API calls
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        // Memoization to avoid unnecessary API calls
        !popularMovies && getPopularMovies();
    }, []);

}

export default usePopularMovies;