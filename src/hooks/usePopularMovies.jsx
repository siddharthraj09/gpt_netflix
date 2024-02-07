import { api_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/redux/moviesSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const nowPopularMovies = useSelector(
    (store) => store.movies?.nowPopularMovies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    !nowPopularMovies && getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      api_options
    );
    const json = await data.json();
    // console.log(data);
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
};
export default usePopularMovies;
