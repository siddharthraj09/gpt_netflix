import { api_options } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/redux/moviesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const getMovieBackground = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );
    const json = await data.json();
    const filterData = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieBackground();
  }, []);
};

export default useMovieTrailer;
