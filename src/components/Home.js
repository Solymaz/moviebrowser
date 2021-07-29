import { Link } from "react-router-dom";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Hero text="Welcome 🍿" />
      <div className="container">
        <div className="my-5 fs-3">
          Here you can find over 768 thousands of movies and TV shows 🤩
        </div>
        <Link to={"/search"} className="btn btn-primary fs-4">
          Happy searching
        </Link>
      </div>
    </>
  );
}

export default Home;
