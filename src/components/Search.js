import Hero from "./Hero";

function Search({ searchKeyword, searchResults }) {
  const title = `You are searching for ${searchKeyword}`;
  return (
    <>
      <Hero text={title} />
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
