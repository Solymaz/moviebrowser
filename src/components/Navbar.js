import { Link, useHistory } from "react-router-dom";

function Navbar({ searchKeyword, setSearchKeyword }) {
  const history = useHistory();

  //Go to the search page whenever the user searches for something
  const updateSearchKeywrord = (event) => {
    setSearchKeyword(event.target.value);
    if (event.target.value.length > 0) {
      history.push(`/search`);
    } else {
      history.push(`/`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Movie Browser
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control me-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchKeyword}
              onChange={updateSearchKeywrord}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
