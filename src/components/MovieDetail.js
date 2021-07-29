import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from "./Hero";

function MovieDetail() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=061b47a00d8118311aac347c3ce3e5bd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);
  return (
    <>
      <Hero text={!isLoading ? movieDetails.original_title : "... loading 🍿"} />
    </>
  );
}

export default MovieDetail;
