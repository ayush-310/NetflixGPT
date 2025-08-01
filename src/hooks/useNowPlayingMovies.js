import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = () => {
    // Fetch Data from TMDB API and update Redux store
    const dispatch = useDispatch();

    // Stored in Redux store to avoid unnecessary API calls
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getNowPlaying = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(() => {
        // Memoization to avoid unnecessary API calls
        !nowPlayingMovies && getNowPlaying();
    }, []);

}

export default useNowPlayingMovies;