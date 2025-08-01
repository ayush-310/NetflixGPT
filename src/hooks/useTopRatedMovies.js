import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useTopRatedMovies = () => {
    // Fetch Data from TMDB API and update Redux store
    const dispatch = useDispatch();

    // Stored in Redux store to avoid unnecessary API calls
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        // Memoization to avoid unnecessary API calls
        !topRatedMovies && getTopRatedMovies();
    }, []);

}

export default useTopRatedMovies;