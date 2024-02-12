import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import Shimmer from "./shimmer";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return Object.keys(movies).length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-black w-full sm:py-12">
      <div className="  lg:-mt-52 relative pl-8 z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.nowPopularMovies} />
        <MovieList
          title={"Upcoming Movies"}
          movies={movies?.nowUpcomingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
