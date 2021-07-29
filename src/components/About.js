import { Link } from "react-router-dom";
import Hero from "./Hero";

function About() {
  return (
    <>
      <Hero text="About Sol Movie Browser 🍿" />
      <div className="container">
        <div className="my-5">
          You can find over 768 thousands of movies and TV shows 🤩
        </div>
        <Link to={"/search"} className="btn btn-primary">
          happy searching
        </Link>
      </div>
    </>
  );
}

export default About;
