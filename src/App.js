import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import MovieDetail from "./components/MovieDetail";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (searchKeyword) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=061b47a00d8118311aac347c3ce3e5bd&language=en-US&query=${searchKeyword}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.results);
          // show error if no result was found
          setShowError(data.results.length === 0);
        });
    }
  }, [searchKeyword]);

  return (
    <div>
      <Navbar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/search">
          <Search
            searchKeyword={searchKeyword}
            searchResults={searchResults}
            showError={showError}
          />
        </Route>
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
