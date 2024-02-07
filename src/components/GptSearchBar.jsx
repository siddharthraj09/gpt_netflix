import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addSearchedMovies } from "../utils/redux/moviesSlice";
// import openai from "../utils/openai";
const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieApi = async (text) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`,
      api_options
    );
    const json = await data.json();
    return json.results;
  };
  useEffect(() => {
    handleGptSearchClick();
  }, []);

  const handleGptSearchClick = async () => {
    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: "Say this is a test" }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResult.choices);
    // console.log(searchText?.current?.value);
    const text = searchText.current.value
      ? encodeURIComponent(searchText.current.value)
      : "driver";
    const fData = await searchMovieApi(text);
    dispatch(addSearchedMovies(fData));
  };

  return (
    <div className="pt-[20%]">
      <form
        action=""
        className=" mx-6 min-w-24 sm:m-auto sm:w-1/2 bg-black bg-opacity-60 rounded-lg flex justify-between"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-2 py-1 my-4 mx-2 w-full  bg-slate-200  rounded-sm  "
          placeholder="Which movie would you like to watch? Search here"
        />
        <button
          className="px-2 py-1 my-4 mx-2  bg-red-700 m:w-2/6 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
