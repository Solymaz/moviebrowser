import Hero from "./Hero";

function Search({ searchKeyword, searchResults, showError }) {
  const title = `You are searching for ${searchKeyword}`;

  const showResults = searchResults.map((result, i) => {
    return <div key={i}>{result.original_title}</div>;
  });
  return (
    <>
      <Hero text={title} />
      {showResults}
      {showError && <div>not found</div>}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">rara</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
