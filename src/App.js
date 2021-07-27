import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=061b47a00d8118311aac347c3ce3e5bd&language=en-US&query=${searchKeyword}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results));
  }, [searchKeyword]);

  return (
    <div>
      <Navbar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/search">
          <Search searchKeyword={searchKeyword} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
