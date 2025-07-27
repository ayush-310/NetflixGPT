import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const dispatch = useDispatch();

    // Fetch trailer or video URL from the main movie and updating store with trailer video
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter(video => video.type === "Trailer")
        // If no trailer is found, fallback to the first video
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();

    }, []);
}

export default useMovieTrailer;