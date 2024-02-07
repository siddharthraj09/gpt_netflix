import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const GptSuggestion = () => {
  const movies = useSelector((store) => store.movies?.nowSearchedMovies);
  // console.log(movies);
  return (
    <div className="bg-black w-screen  h-full ">
      <div className=" mx-6 mt-16 py-14 pl-8 ">
        <MovieList title={"Search Result"} movies={movies} />
      </div>
    </div>
  );
};

export default GptSuggestion;
