import { api_options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/redux/moviesSlice";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const nowUpcomingMovies = useSelector(
    (store) => store.movies?.nowUpcomingMovies
  );
  const dispatch = useDispatch();
  useEffect(() => {
    !nowUpcomingMovies && getUpcomingMovies();
  }, []);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      api_options
    );
    const json = await data.json();
    // console.log(data);
    // console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
};
export default useUpcomingMovies;
