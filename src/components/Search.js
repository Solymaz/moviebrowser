import Hero from "./Hero";
import MovieCard from "./MovieCard";

function Search({ searchKeyword, searchResults, showError }) {
  const title = `You are searching for ${searchKeyword}`;

  const showResults = searchResults.map((result, i) => {
    return <MovieCard movie={result} key={i} />;
  });

  return (
    <>
      <Hero text={title} />
      {showResults && (
        <div className="container">
          <div className="row">{showResults}</div>
        </div>
      )}
      {showError && (
        <div className="m-5">Not found any movie 🙁 try again 🎬</div>
      )}
      <div className="container">
        <div className="row"></div>
      </div>
    </>
  );
}

export default Search;
