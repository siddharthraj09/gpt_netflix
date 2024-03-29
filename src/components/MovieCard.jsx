import { imagePath } from "../utils/constants";
const MovieCard = ({ movie }) => {
  return (
    <div className="relative overflow-hidden">
      <div className=" w-48 my-4  px-4 hover:scale-125 transition-all duration-500 cursor-pointer flex flex-col items-center z-10">
        <img src={`${imagePath}${movie?.poster_path}`} alt="" />
        <h5 className="text-white">{movie?.title} </h5>
      </div>
    </div>
  );
};

export default MovieCard;
