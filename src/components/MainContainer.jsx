import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  // const numberOfMovies = movies.length;

  // const randomIndex = Math.floor(Math.random() * numberOfMovies);
  const mainMovie = movies[0];
  console.log(mainMovie);

  const { title, overview, id } = mainMovie;
  return (
    <div className="">
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
