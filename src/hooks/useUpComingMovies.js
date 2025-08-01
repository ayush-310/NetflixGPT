import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useUpcomingMovies = () => {
    // Fetch Data from TMDB API and update Redux store
    const dispatch = useDispatch();

    // Stored in Redux store to avoid unnecessary API calls
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        // Memoization to avoid unnecessary API calls
        !upcomingMovies && getUpcomingMovies();
    }, []);

}

export default useUpcomingMovies;