import { api_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";
import { useSelector } from "react-redux";
const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      api_options
    );
    const json = await data.json();
    // console.log(data);
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
};
export default useNowPlayingMovies;
