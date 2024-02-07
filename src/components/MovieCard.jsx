import { imagePath } from "../utils/constants";
const MovieCard = ({ movie }) => {
  return (
    <div className="relative overflow-hidden">
      <div className=" w-48 my-4  pr-4 hover:scale-125 transition-all duration-500 cursor-pointer flex flex-col items-center">
        <img src={`${imagePath}${movie?.poster_path}`} alt="" />
        <h5 className="text-white">{movie?.original_title} </h5>
      </div>
    </div>
  );
};

export default MovieCard;
