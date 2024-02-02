import { api_options } from "../utils/constants";
import { useEffect } from "react";

const VideoBackground = ({ movieId }) => {
  const getMovieBackground = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      api_options
    );
    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    console.log(trailer);
  };

  useEffect(() => {
    getMovieBackground();
  }, []);
  return <div>VideoBackground</div>;
};

export default VideoBackground;
