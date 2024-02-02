import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useEffect } from "react";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
