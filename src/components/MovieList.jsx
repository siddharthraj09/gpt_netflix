import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-4  ">
      <h1 className="text-2xl text-white  py-2">{title}</h1>
      <div
        className={`flex ${"overflow-x-auto scrollbar scrollbar-thumb-gray-800 scrollbar-track-black scrollbar-rounded-lg"}`}
      >
        <div
          className={`flex ${
            title === "Search Result" ? " flex-wrap justify-center" : ""
          }`}
        >
          {movies
            ?.filter((movie) => movie?.poster_path !== null)
            .map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
