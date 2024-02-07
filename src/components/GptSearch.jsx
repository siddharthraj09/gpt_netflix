import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10  w-screen">
        <img
          src="https://external-preview.redd.it/DwoikM0J9C8ZTV2RA5aZVLOd0yrJ49B1JqC03kXZpkI.jpg?auto=webp&s=61ec62412002cebc01c439a38400e743a9223d84"
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GptSearch;
